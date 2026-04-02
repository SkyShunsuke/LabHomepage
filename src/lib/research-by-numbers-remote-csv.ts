const REQUIRED_HEADERS = ["lastyearPapers", "activeProjects", "opensourceRepos", "supervisedStudents"] as const;
const CANONICAL_HEADERS = new Set(REQUIRED_HEADERS);

const DEFAULT_RESEARCH_BY_NUMBERS_SPREADSHEET_URL =
  "https://docs.google.com/spreadsheets/d/1cqwt6MFx5CU2T0DJIh8col772ZsNrx3W8SWal59vKRw/edit?usp=sharing";

const HEADER_ALIASES: Record<string, string> = {
  lastyearpapers: "lastyearPapers",
  lastyearpaper: "lastyearPapers",
  paperslastyear: "lastyearPapers",
  activeprojects: "activeProjects",
  opensourcerepos: "opensourceRepos",
  opensourcerepositories: "opensourceRepos",
  supervisedstudents: "supervisedStudents",
  studentssupervised: "supervisedStudents"
};

export type ResearchByNumbersMetrics = {
  lastyearPapers: string;
  activeProjects: string;
  opensourceRepos: string;
  supervisedStudents: string;
};

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

  if (CANONICAL_HEADERS.has(aliased as (typeof REQUIRED_HEADERS)[number])) {
    return aliased;
  }

  return null;
}

function asRequiredTrimmedString(value: string | undefined, field: (typeof REQUIRED_HEADERS)[number]): string {
  const normalized = (value ?? "").trim();
  if (!normalized) {
    throw new Error(`Research by numbers CSV has an empty value for ${field}.`);
  }
  return normalized;
}

export async function getRemoteResearchByNumbers(): Promise<ResearchByNumbersMetrics | null> {
  const csvUrl =
    process.env.RESEARCH_BY_NUMBERS_SPREADSHEET_URL?.trim() || DEFAULT_RESEARCH_BY_NUMBERS_SPREADSHEET_URL;

  if (!csvUrl) {
    return null;
  }

  const url = normalizeGoogleCsvUrl(csvUrl);
  const revalidateSeconds = parseRevalidateSeconds(process.env.RESEARCH_BY_NUMBERS_REVALIDATE_SECONDS);

  const response = await fetch(url, {
    next: { revalidate: revalidateSeconds }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch research by numbers CSV: ${response.status} ${response.statusText}`);
  }

  const csvText = await response.text();
  const records = parseCsv(csvText);
  if (records.length === 0) {
    return null;
  }

  const headers = records[0].map((value) => toCanonicalHeader(value));
  const availableHeaders = headers.filter((header): header is string => header !== null);
  for (const required of REQUIRED_HEADERS) {
    if (!availableHeaders.includes(required)) {
      throw new Error(`Missing required CSV header: ${required}`);
    }
  }

  for (let i = 1; i < records.length; i += 1) {
    const row = records[i];
    const values = new Map<string, string>();
    for (let j = 0; j < headers.length; j += 1) {
      const header = headers[j];
      if (!header) {
        continue;
      }
      values.set(header, row[j] ?? "");
    }

    const hasAnyValue = REQUIRED_HEADERS.some((header) => (values.get(header) ?? "").trim().length > 0);
    if (!hasAnyValue) {
      continue;
    }

    return {
      lastyearPapers: asRequiredTrimmedString(values.get("lastyearPapers"), "lastyearPapers"),
      activeProjects: asRequiredTrimmedString(values.get("activeProjects"), "activeProjects"),
      opensourceRepos: asRequiredTrimmedString(values.get("opensourceRepos"), "opensourceRepos"),
      supervisedStudents: asRequiredTrimmedString(values.get("supervisedStudents"), "supervisedStudents")
    };
  }

  return null;
}
