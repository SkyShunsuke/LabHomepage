import type { Locale } from "@/lib/i18n/types";

const REQUIRED_HEADERS = ["title", "venue", "date"] as const;
const CANONICAL_HEADERS = new Set(["title", "authors", "venue", "date", "site", "id"]);

const HEADER_ALIASES: Record<string, string> = {
  title: "title",
  authors: "authors",
  author: "authors",
  authorname: "authors",
  awardee: "authors",
  recipient: "authors",
  recipients: "authors",
  受賞者: "authors",
  氏名: "authors",
  名前: "authors",
  venue: "venue",
  event: "venue",
  conference: "venue",
  掲載先: "venue",
  学会: "venue",
  date: "date",
  year: "date",
  日付: "date",
  年月日: "date",
  site: "site",
  url: "site",
  link: "site",
  id: "id",
  presentationid: "id",
  presentation_id: "id"
};

const DEFAULT_EN_HASEGAWA_AWARDS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1ZfJnYgT-_zmjXQf5HctvVN7ouQmXMTIMQUyr3ERaAxM/edit?usp=drive_link";
const DEFAULT_EN_STUDENTS_AWARDS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1SzkBkWryoPJscKhXo9TR6N4quKyI0FMVBzXhZsDuI3c/edit?usp=drive_link";
const DEFAULT_JA_HASEGAWA_AWARDS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1QjCWTheHAyrQQUAetGxC1TtRX38IuCwQfcjpziuxukQ/edit?usp=drive_link";
const DEFAULT_JA_STUDENTS_AWARDS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1aMKZoxBpLi4B-0-oFms50s-vGIwOvpps_G9WRp_gE7o/edit?usp=drive_link";

export type AwardRecord = {
  id: string;
  presentationId: string | null;
  title: string;
  authors: string;
  venue: string;
  date: string;
  site: string | null;
};

export type AwardSections = {
  hasegawa: AwardRecord[];
  students: AwardRecord[];
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

  if (CANONICAL_HEADERS.has(aliased)) {
    return aliased;
  }

  return null;
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

function parseAwardsCsv(csvText: string, prefix: string): AwardRecord[] {
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

  const parsed: AwardRecord[] = [];
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
    const authors = asOptionalString(values.get("authors")) ?? "";
    const venue = asOptionalString(values.get("venue"));
    const date = asOptionalString(values.get("date"));

    if (!title && !authors && !venue && !date) {
      continue;
    }

    if (!title || !venue || !date) {
      skippedRows += 1;
      continue;
    }

    parsed.push({
      id: `${prefix}-${i}`,
      presentationId: asOptionalString(values.get("id")),
      title,
      authors,
      venue,
      date,
      site: asOptionalString(values.get("site"))
    });
  }

  if (skippedRows > 0) {
    console.warn(
      `Skipped ${skippedRows} incomplete award row(s) while parsing ${prefix}.`
    );
  }

  return parsed;
}

function resolveSheetUrls(locale: Locale): { hasegawa: string; students: string } {
  if (locale === "ja") {
    return {
      hasegawa:
        process.env.AWARDS_JA_HASEGAWA_SPREADSHEET_URL?.trim() ||
        DEFAULT_JA_HASEGAWA_AWARDS_SHEET_URL,
      students:
        process.env.AWARDS_JA_STUDENTS_SPREADSHEET_URL?.trim() ||
        DEFAULT_JA_STUDENTS_AWARDS_SHEET_URL
    };
  }

  return {
    hasegawa:
      process.env.AWARDS_EN_HASEGAWA_SPREADSHEET_URL?.trim() ||
      DEFAULT_EN_HASEGAWA_AWARDS_SHEET_URL,
    students:
      process.env.AWARDS_EN_STUDENTS_SPREADSHEET_URL?.trim() ||
      DEFAULT_EN_STUDENTS_AWARDS_SHEET_URL
  };
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
    // Try gviz CSV fallback below.
  }

  const gvizUrl = normalizeGoogleGvizCsvUrl(sheetUrl);
  let gvizResponse: Response;
  try {
    gvizResponse = await fetch(gvizUrl, {
      next: { revalidate: revalidateSeconds }
    });
  } catch (error) {
    throw new Error(
      `Failed to fetch spreadsheet CSV from both export and gviz endpoints. Original error: ${
        error instanceof Error ? error.message : "unknown fetch error"
      }`
    );
  }

  if (!gvizResponse.ok) {
    throw new Error(`Failed to fetch spreadsheet CSV: ${gvizResponse.status} ${gvizResponse.statusText}`);
  }

  return gvizResponse.text();
}

export async function getRemoteAwardsSections(locale: Locale): Promise<AwardSections> {
  const urls = resolveSheetUrls(locale);
  const revalidateSeconds = parseRevalidateSeconds(process.env.AWARDS_CSV_REVALIDATE_SECONDS);

  const [hasegawaCsv, studentsCsv] = await Promise.all([
    fetchSheetCsv(urls.hasegawa, revalidateSeconds),
    fetchSheetCsv(urls.students, revalidateSeconds)
  ]);

  return {
    hasegawa: parseAwardsCsv(hasegawaCsv, `hasegawa-award-${locale}`),
    students: parseAwardsCsv(studentsCsv, `students-award-${locale}`)
  };
}
