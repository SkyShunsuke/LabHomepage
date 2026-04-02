const REQUIRED_HEADERS = ["title", "problem", "approach", "status"] as const;
const CANONICAL_HEADERS = new Set([
  "title",
  "problem",
  "approach",
  "status",
  "paperLink",
  "codeLink",
  "demoLink",
  "projectLink"
]);

const DEFAULT_RESEARCH_PROJECTS_SPREADSHEET_URL =
  "https://docs.google.com/spreadsheets/d/1OsPXaah43MbpGufForXKMCYzMTJyzXVVxXh4JwAUxQo/edit?usp=sharing";

const HEADER_ALIASES: Record<string, string> = {
  title: "title",
  problem: "problem",
  approach: "approach",
  status: "status",
  stauts: "status",
  paperlink: "paperLink",
  paperurl: "paperLink",
  codelink: "codeLink",
  codeurl: "codeLink",
  demolink: "demoLink",
  demourl: "demoLink",
  projectlink: "projectLink",
  projecturl: "projectLink"
};

export type RemoteResearchProject = {
  id: string;
  title: string;
  problem: string;
  approach: string;
  status: string;
  paperLink: string | null;
  codeLink: string | null;
  demoLink: string | null;
  projectLink: string | null;
};

function asOptionalString(value: string | undefined): string | null {
  if (!value) {
    return null;
  }

  const normalized = value.trim();
  return normalized.length > 0 ? normalized : null;
}

function parseCsv(content: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < content.length; i += 1) {
    const char = content[i];
    const next = content[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ",") {
      row.push(field);
      field = "";
      continue;
    }

    if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    if (char === "\r") {
      continue;
    }

    field += char;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function normalizeGoogleCsvUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);

    if (url.hostname.includes("docs.google.com") && url.pathname.includes("/spreadsheets/d/")) {
      const pathMatch = url.pathname.match(/^\/spreadsheets\/d\/([^/]+)/);
      if (!pathMatch?.[1]) {
        return rawUrl;
      }

      const hashGidMatch = url.hash.match(/gid=(\d+)/);
      const gid = url.searchParams.get("gid") || hashGidMatch?.[1] || "0";
      const csvUrl = new URL(url.toString());
      csvUrl.pathname = `/spreadsheets/d/${pathMatch[1]}/export`;
      csvUrl.search = "";
      csvUrl.searchParams.set("format", "csv");
      csvUrl.searchParams.set("gid", gid);
      csvUrl.hash = "";
      return csvUrl.toString();
    }
  } catch {
    return rawUrl;
  }

  return rawUrl;
}

function parseRevalidateSeconds(raw: string | undefined): number {
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return 300;
  }

  return Math.floor(parsed);
}

function normalizeHeader(rawHeader: string): string {
  return rawHeader
    .replace(/^\uFEFF/, "")
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "")
    .toLowerCase();
}

function toCanonicalHeader(rawHeader: string): string | null {
  const normalized = normalizeHeader(rawHeader);
  const aliased = HEADER_ALIASES[normalized] ?? normalized;

  if (CANONICAL_HEADERS.has(aliased)) {
    return aliased;
  }

  return null;
}

export async function getRemoteResearchProjects(): Promise<RemoteResearchProject[] | null> {
  const csvUrl = process.env.RESEARCH_PROJECTS_SPREADSHEET_URL?.trim() || DEFAULT_RESEARCH_PROJECTS_SPREADSHEET_URL;

  if (!csvUrl) {
    return null;
  }

  const url = normalizeGoogleCsvUrl(csvUrl);
  const revalidateSeconds = parseRevalidateSeconds(process.env.RESEARCH_PROJECTS_SPREADSHEET_REVALIDATE_SECONDS);

  const response = await fetch(url, {
    next: { revalidate: revalidateSeconds }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch research projects CSV: ${response.status} ${response.statusText}`);
  }

  const csvText = await response.text();
  const records = parseCsv(csvText);

  if (records.length === 0) {
    return [];
  }

  const headers = records[0].map((value) => toCanonicalHeader(value));
  const availableHeaders = headers.filter((header): header is string => header !== null);
  for (const required of REQUIRED_HEADERS) {
    if (!availableHeaders.includes(required)) {
      throw new Error(`Missing required CSV header: ${required}`);
    }
  }

  const parsed: RemoteResearchProject[] = [];

  for (let i = 1; i < records.length; i += 1) {
    const values = new Map<string, string>();
    const row = records[i];

    for (let j = 0; j < headers.length; j += 1) {
      const header = headers[j];
      if (!header) {
        continue;
      }

      values.set(header, row[j] ?? "");
    }

    const title = asOptionalString(values.get("title"));
    const problem = asOptionalString(values.get("problem"));
    const approach = asOptionalString(values.get("approach"));
    const status = asOptionalString(values.get("status"));

    if (!title && !problem && !approach && !status) {
      continue;
    }

    if (!title || !problem || !approach || !status) {
      throw new Error(`CSV row ${i + 1} is invalid. title, problem, approach, and status are required.`);
    }

    parsed.push({
      id: `remote-research-project-${i}`,
      title,
      problem,
      approach,
      status,
      paperLink: asOptionalString(values.get("paperLink")),
      codeLink: asOptionalString(values.get("codeLink")),
      demoLink: asOptionalString(values.get("demoLink")),
      projectLink: asOptionalString(values.get("projectLink"))
    });
  }

  return parsed;
}
