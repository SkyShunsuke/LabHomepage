import type { Locale } from "@/lib/i18n/types";

const REQUIRED_HEADERS = ["title", "authors", "venue", "date"] as const;
const CANONICAL_HEADERS = new Set(["title", "authors", "venue", "date", "site", "type"]);

const HEADER_ALIASES: Record<string, string> = {
  title: "title",
  authors: "authors",
  author: "authors",
  venue: "venue",
  date: "date",
  site: "site",
  url: "site",
  link: "site",
  type: "type",
  category: "type",
  kind: "type"
};

const DEFAULT_EN_TALKS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/108E5il6JK-0tRKUx1-lZGpcwr8OmR9A2asCbH6pPg0s/edit?usp=drive_link";
const DEFAULT_JA_TALKS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1XaUsj4IJkuBjMp4JVv4CLTUuDV3iykMLY7DleDdn6_U/edit?usp=drive_link";

export type TalkRecord = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  site: string | null;
  type: string | null;
};

function asOptionalString(value: string | undefined): string | null {
  if (!value) {
    return null;
  }
  const normalized = value.trim();
  return normalized.length > 0 ? normalized : null;
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
  return CANONICAL_HEADERS.has(aliased) ? aliased : null;
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

function normalizeGoogleGvizCsvUrl(rawUrl: string): string {
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

function resolveSheetUrl(locale: Locale): string {
  if (locale === "ja") {
    return process.env.TALKS_JA_SPREADSHEET_URL?.trim() || DEFAULT_JA_TALKS_SHEET_URL;
  }
  return process.env.TALKS_EN_SPREADSHEET_URL?.trim() || DEFAULT_EN_TALKS_SHEET_URL;
}

async function fetchSheetCsv(sheetUrl: string, revalidateSeconds: number): Promise<string> {
  const exportUrl = normalizeGoogleCsvUrl(sheetUrl);
  try {
    const exportResponse = await fetch(exportUrl, {
      next: { revalidate: revalidateSeconds }
    });
    if (exportResponse.ok) {
      const exportText = await exportResponse.text();
      if (!/^\s*<!doctype html/i.test(exportText)) {
        return exportText;
      }
    }
  } catch {
    // fallback below
  }

  const gvizUrl = normalizeGoogleGvizCsvUrl(sheetUrl);
  const gvizResponse = await fetch(gvizUrl, {
    next: { revalidate: revalidateSeconds }
  });
  if (!gvizResponse.ok) {
    throw new Error(`Failed to fetch talks CSV: ${gvizResponse.status} ${gvizResponse.statusText}`);
  }
  return gvizResponse.text();
}

function parseTalkCsv(csvText: string, prefix: string): TalkRecord[] {
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

  const parsed: TalkRecord[] = [];
  let skippedRows = 0;

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

    const title = asOptionalString(values.get("title"));
    const authors = asOptionalString(values.get("authors"));
    const venue = asOptionalString(values.get("venue"));
    const date = asOptionalString(values.get("date"));

    if (!title && !authors && !venue && !date) {
      continue;
    }
    if (!title || !authors || !venue || !date) {
      skippedRows += 1;
      continue;
    }

    parsed.push({
      id: `${prefix}-${i}`,
      title,
      authors,
      venue,
      date,
      site: asOptionalString(values.get("site")),
      type: asOptionalString(values.get("type"))
    });
  }

  if (skippedRows > 0) {
    console.warn(`Skipped ${skippedRows} incomplete talks row(s).`);
  }

  return parsed;
}

export async function getRemoteTalkRecords(locale: Locale): Promise<TalkRecord[]> {
  const sheetUrl = resolveSheetUrl(locale);
  const revalidateSeconds = parseRevalidateSeconds(process.env.TALKS_CSV_REVALIDATE_SECONDS);
  const csvText = await fetchSheetCsv(sheetUrl, revalidateSeconds);
  return parseTalkCsv(csvText, `talks-${locale}`);
}
