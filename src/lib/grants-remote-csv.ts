import type { Locale } from "@/lib/i18n/types";

const CANONICAL_HEADERS = new Set(["researcher", "type", "title", "grantName", "amount", "duration"]);

const HEADER_ALIASES: Record<string, string> = {
  researcher: "researcher",
  name: "researcher",
  pi: "researcher",
  principalinvestigator: "researcher",
  研究者: "researcher",
  代表者: "researcher",
  type: "type",
  category: "type",
  kind: "type",
  granttype: "type",
  種別: "type",
  区分: "type",
  title: "title",
  projecttitle: "title",
  researchtitle: "title",
  theme: "title",
  テーマ: "title",
  課題名: "title",
  grantname: "grantName",
  grant: "grantName",
  granttitle: "grantName",
  grant_name: "grantName",
  助成名: "grantName",
  事業名: "grantName",
  名称: "grantName",
  amount: "amount",
  budget: "amount",
  金額: "amount",
  duration: "duration",
  period: "duration",
  期間: "duration"
};

const DEFAULT_EN_HASEGAWA_GRANTS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1hOCNVygd1odyQdh3SkmJuZlLgYpGlpjg6TLJTx1L-yc/edit?usp=sharing";
const DEFAULT_EN_STUDENTS_GRANTS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/15F8yJnNA-AGPt9GFnebyYNmTQo0XW5n6f5gYh9-JGd4/edit?usp=sharing";
const DEFAULT_JA_HASEGAWA_GRANTS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1uYNxzBOFPFiam0dxVZqmsDxGF22jSydLCWSudkJFQeU/edit?usp=sharing";
const DEFAULT_JA_STUDENTS_GRANTS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/17-uVBJxz-3tt_vOK3mJJO3tbNv1ineSaV3AMZptxOSs/edit?usp=sharing";

export type GrantRecord = {
  id: string;
  researcher: string | null;
  type: string | null;
  title: string;
  grantName: string | null;
  amount: string | null;
  duration: string | null;
};

export type GrantSections = {
  hasegawa: GrantRecord[];
  students: GrantRecord[];
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

function resolveSheetUrls(locale: Locale): { hasegawa: string; students: string } {
  if (locale === "ja") {
    return {
      hasegawa:
        process.env.GRANTS_JA_HASEGAWA_SPREADSHEET_URL?.trim() ||
        DEFAULT_JA_HASEGAWA_GRANTS_SHEET_URL,
      students:
        process.env.GRANTS_JA_STUDENTS_SPREADSHEET_URL?.trim() ||
        DEFAULT_JA_STUDENTS_GRANTS_SHEET_URL
    };
  }

  return {
    hasegawa:
      process.env.GRANTS_EN_HASEGAWA_SPREADSHEET_URL?.trim() ||
      DEFAULT_EN_HASEGAWA_GRANTS_SHEET_URL,
    students:
      process.env.GRANTS_EN_STUDENTS_SPREADSHEET_URL?.trim() ||
      DEFAULT_EN_STUDENTS_GRANTS_SHEET_URL
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
    // fallback below
  }

  const gvizUrl = normalizeGoogleGvizCsvUrl(sheetUrl);
  const gvizResponse = await fetch(gvizUrl, {
    next: { revalidate: revalidateSeconds }
  });
  if (!gvizResponse.ok) {
    throw new Error(`Failed to fetch grants CSV: ${gvizResponse.status} ${gvizResponse.statusText}`);
  }
  return gvizResponse.text();
}

function parseGrantsCsv(csvText: string, prefix: string): GrantRecord[] {
  const records = parseCsv(csvText);
  if (records.length === 0) {
    return [];
  }

  const headers = records[0].map((value) => toCanonicalHeader(value));
  const hasUsableHeaderRow =
    headers.filter((header): header is string => header !== null).length >= 2;
  const fallbackHeaders = ["researcher", "type", "title", "grantName", "amount", "duration"] as const;

  const parsed: GrantRecord[] = [];
  let skippedRows = 0;
  const rowStartIndex = hasUsableHeaderRow ? 1 : 0;

  const stripLeadingHeaderLabel = (raw: string, header: string): string => {
    const trimmed = raw.trim();
    if (trimmed.length === 0) {
      return "";
    }
    const pattern = new RegExp(`^${header}\\s*[:：-]?\\s*`, "i");
    return trimmed.replace(pattern, "").trim();
  };

  for (let i = rowStartIndex; i < records.length; i += 1) {
    const row = records[i];
    const values = new Map<string, string>();

    if (hasUsableHeaderRow) {
      for (let j = 0; j < headers.length; j += 1) {
        const header = headers[j];
        if (!header) {
          continue;
        }
        values.set(header, row[j] ?? "");
      }
    } else {
      for (let j = 0; j < fallbackHeaders.length; j += 1) {
        const header = fallbackHeaders[j];
        const rawValue = row[j] ?? "";
        values.set(header, stripLeadingHeaderLabel(rawValue, header));
      }
    }

    const researcher = asOptionalString(values.get("researcher"));
    const type = asOptionalString(values.get("type"));
    const title = asOptionalString(values.get("title"));
    const grantName = asOptionalString(values.get("grantName"));
    const amount = asOptionalString(values.get("amount"));
    const duration = asOptionalString(values.get("duration"));

    if (!researcher && !type && !title && !grantName && !amount && !duration) {
      continue;
    }
    const displayTitle = title ?? grantName;
    if (!displayTitle) {
      skippedRows += 1;
      continue;
    }

    parsed.push({
      id: `${prefix}-${i}`,
      researcher,
      type,
      title: displayTitle,
      grantName,
      amount,
      duration
    });
  }

  if (skippedRows > 0) {
    console.warn(`Skipped ${skippedRows} incomplete grant row(s) while parsing ${prefix}.`);
  }

  return parsed;
}

export async function getRemoteGrantsSections(locale: Locale): Promise<GrantSections> {
  const urls = resolveSheetUrls(locale);
  const revalidateSeconds = parseRevalidateSeconds(process.env.GRANTS_CSV_REVALIDATE_SECONDS);

  const [hasegawaCsv, studentsCsv] = await Promise.all([
    fetchSheetCsv(urls.hasegawa, revalidateSeconds),
    fetchSheetCsv(urls.students, revalidateSeconds)
  ]);

  return {
    hasegawa: parseGrantsCsv(hasegawaCsv, `hasegawa-grants-${locale}`),
    students: parseGrantsCsv(studentsCsv, `students-grants-${locale}`)
  };
}
