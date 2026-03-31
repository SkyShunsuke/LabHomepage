import type { Publication } from "@prisma/client";

const REQUIRED_HEADERS = ["title", "authors", "venue", "year"] as const;
const CANONICAL_HEADERS = new Set([
  "title",
  "authors",
  "venue",
  "year",
  "url",
  "projectUrl",
  "codeUrl",
  "teaserImageUrl",
  "abstract",
  "highlight",
  "feature"
]);

const HEADER_ALIASES: Record<string, string> = {
  title: "title",
  authors: "authors",
  venue: "venue",
  year: "year",
  url: "url",
  projecturl: "projectUrl",
  codeurl: "codeUrl",
  teaserimageurl: "teaserImageUrl",
  abstract: "abstract",
  highlight: "highlight",
  feature: "feature",
  featured: "feature",
  features: "feature",
  featureorder: "feature",
  feature_rank: "feature",
  featureorderrank: "feature",
  feature_order: "feature"
};

type CsvPublication = Pick<
  Publication,
  "id" | "title" | "authors" | "venue" | "year" | "url" | "teaserImageUrl" | "abstract"
> & {
  projectUrl: string | null;
  codeUrl: string | null;
  highlight: string | null;
  feature: number | null;
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

function fileIdFromGoogleDriveUrl(url: URL): string | null {
  if (url.hostname.includes("drive.google.com")) {
    const match = url.pathname.match(/\/file\/d\/([^/]+)/);
    if (match?.[1]) {
      return match[1];
    }

    const openId = url.searchParams.get("id");
    if (openId) {
      return openId;
    }
  }

  return null;
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
      csvUrl.pathname = `/spreadsheets/d/${pathMatch[1]}/gviz/tq`;
      csvUrl.search = "";
      csvUrl.searchParams.set("tqx", "out:csv");
      csvUrl.searchParams.set("gid", gid);
      csvUrl.hash = "";
      return csvUrl.toString();
    }

    const fileId = fileIdFromGoogleDriveUrl(url);
    if (fileId) {
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
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
    .replace(/\s+/g, "")
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

function parseOptionalPositiveInteger(raw: string | undefined, fieldName: string, rowNumber: number): number | null {
  const value = asOptionalString(raw);
  if (!value) {
    return null;
  }

  const parsed = Number(value);
  const normalized = Math.trunc(parsed);
  const isIntegerLike = Number.isFinite(parsed) && Math.abs(parsed - normalized) < Number.EPSILON;

  if (!isIntegerLike || !Number.isSafeInteger(normalized) || normalized <= 0) {
    throw new Error(`CSV row ${rowNumber} has invalid ${fieldName}: ${value}`);
  }

  return normalized;
}

export async function getRemoteCsvPublications(): Promise<CsvPublication[] | null> {
  const csvUrl = process.env.PUBLICATIONS_CSV_URL?.trim();
  if (!csvUrl) {
    return null;
  }

  const url = normalizeGoogleCsvUrl(csvUrl);
  const revalidateSeconds = parseRevalidateSeconds(process.env.PUBLICATIONS_CSV_REVALIDATE_SECONDS);

  const response = await fetch(url, {
    next: { revalidate: revalidateSeconds }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch publication CSV: ${response.status} ${response.statusText}`);
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

  const parsed: CsvPublication[] = [];

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
    const authors = asOptionalString(values.get("authors"));
    const venue = asOptionalString(values.get("venue"));
    const yearRaw = asOptionalString(values.get("year"));

    if (!title && !authors && !venue && !yearRaw) {
      continue;
    }

    if (!title || !authors || !venue || !yearRaw) {
      throw new Error(`CSV row ${i + 1} is invalid. title, authors, venue, and year are required.`);
    }

    const year = Number(yearRaw);
    if (!Number.isFinite(year) || !Number.isInteger(year)) {
      throw new Error(`CSV row ${i + 1} has invalid year: ${yearRaw}`);
    }

    parsed.push({
      id: `remote-csv-${i}`,
      title,
      authors,
      venue,
      year,
      url: asOptionalString(values.get("url")),
      projectUrl: asOptionalString(values.get("projectUrl")),
      codeUrl: asOptionalString(values.get("codeUrl")),
      teaserImageUrl: asOptionalString(values.get("teaserImageUrl")),
      abstract: asOptionalString(values.get("abstract")),
      highlight: asOptionalString(values.get("highlight")),
      feature: parseOptionalPositiveInteger(values.get("feature"), "feature", i + 1)
    });
  }

  parsed.sort((a, b) => b.year - a.year);
  return parsed;
}
