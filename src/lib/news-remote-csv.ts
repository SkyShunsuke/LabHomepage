import { normalizeGoogleDriveImageUrl } from "@/lib/members-remote-csv";
import type { Locale } from "@/lib/i18n/types";

const DEFAULT_EN_NEWS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/13GxdLEPyiw41qYm6300btAh0TVc9OWDtK92I9Th1RJE/edit?usp=drive_link";
const DEFAULT_JA_NEWS_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/10hPAiYhWmGNWSQ14PHgzYczANeKcEaWZcfuwFgd9Bkc/edit?usp=drive_link";

const REQUIRED_HEADERS = ["date", "title", "content"] as const;
const CANONICAL_HEADERS = new Set(["date", "title", "content", "type", "highlight", "imageUrl", "externalUrl"]);

const HEADER_ALIASES: Record<string, string> = {
  date: "date",
  publishedat: "date",
  publisheddate: "date",
  datetime: "date",
  日付: "date",
  title: "title",
  タイトル: "title",
  content: "content",
  body: "content",
  本文: "content",
  内容: "content",
  type: "type",
  category: "type",
  種別: "type",
  区分: "type",
  highlight: "highlight",
  featured: "highlight",
  注目: "highlight",
  imageurl: "imageUrl",
  image: "imageUrl",
  photo: "imageUrl",
  画像: "imageUrl",
  画像url: "imageUrl",
  写真url: "imageUrl",
  externalurl: "externalUrl",
  link: "externalUrl",
  url: "externalUrl",
  参考url: "externalUrl",
  外部url: "externalUrl",
  外部リンク: "externalUrl"
};

export type RemoteSheetNews = {
  id: string;
  publishedAt: Date;
  title: string;
  content: string;
  type: string | null;
  highlight: string | null;
  imageUrl: string | null;
  externalUrl: string | null;
};

function resolveSheetUrl(locale: Locale): string | null {
  const fallback = process.env.NEWS_SPREADSHEET_URL?.trim() || null;
  if (locale === "ja") {
    return process.env.NEWS_JA_SPREADSHEET_URL?.trim() || fallback || DEFAULT_JA_NEWS_SHEET_URL;
  }

  return process.env.NEWS_EN_SPREADSHEET_URL?.trim() || fallback || DEFAULT_EN_NEWS_SHEET_URL;
}

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
  if (!url.hostname.includes("drive.google.com")) {
    return null;
  }

  const match = url.pathname.match(/\/file\/d\/([^/]+)/);
  if (match?.[1]) {
    return match[1];
  }

  const openId = url.searchParams.get("id");
  return openId || null;
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
      const gid = url.searchParams.get("gid") || hashGidMatch?.[1];
      const csvUrl = new URL(url.toString());
      csvUrl.pathname = `/spreadsheets/d/${pathMatch[1]}/export`;
      csvUrl.search = "";
      csvUrl.searchParams.set("format", "csv");
      if (gid) {
        csvUrl.searchParams.set("gid", gid);
      }
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
    .replace(/[^\p{L}\p{N}]+/gu, "")
    .toLowerCase();
}

function toCanonicalHeader(rawHeader: string): string | null {
  const normalized = normalizeHeader(rawHeader);
  const aliased = HEADER_ALIASES[normalized] ?? normalized;
  if (CANONICAL_HEADERS.has(aliased)) {
    return aliased;
  }

  if (normalized.includes("date")) {
    return "date";
  }

  if (normalized.includes("title")) {
    return "title";
  }

  if (normalized.includes("content") || normalized.includes("body")) {
    return "content";
  }

  if (normalized.includes("type") || normalized.includes("category")) {
    return "type";
  }

  if (normalized.includes("highlight") || normalized.includes("feature")) {
    return "highlight";
  }

  if (normalized.includes("image") || normalized.includes("photo")) {
    return "imageUrl";
  }

  if (normalized.includes("external") || normalized === "url" || normalized.includes("link")) {
    return "externalUrl";
  }

  return null;
}

function parseDateOrThrow(raw: string | null, rowNumber: number): Date {
  if (!raw) {
    throw new Error(`CSV row ${rowNumber} is invalid. date is required.`);
  }

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`CSV row ${rowNumber} has invalid date: ${raw}`);
  }

  return parsed;
}

export async function getRemoteCsvNews(locale: Locale): Promise<RemoteSheetNews[] | null> {
  const csvUrl = resolveSheetUrl(locale);
  if (!csvUrl) {
    return null;
  }

  const url = normalizeGoogleCsvUrl(csvUrl);
  const revalidateSeconds = parseRevalidateSeconds(process.env.NEWS_SPREADSHEET_REVALIDATE_SECONDS);

  const response = await fetch(url, {
    next: { revalidate: revalidateSeconds }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch news CSV: ${response.status} ${response.statusText}`);
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

  const parsed: RemoteSheetNews[] = [];

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
    const content = asOptionalString(values.get("content"));
    const dateValue = asOptionalString(values.get("date"));

    if (!title && !content && !dateValue) {
      continue;
    }

    if (!title || !content) {
      throw new Error(`CSV row ${i + 1} is invalid. title and content are required.`);
    }

    parsed.push({
      id: `remote-news-${i}`,
      publishedAt: parseDateOrThrow(dateValue, i + 1),
      title,
      content,
      type: asOptionalString(values.get("type")),
      highlight: asOptionalString(values.get("highlight")),
      imageUrl: normalizeGoogleDriveImageUrl(asOptionalString(values.get("imageUrl"))),
      externalUrl: asOptionalString(values.get("externalUrl"))
    });
  }

  parsed.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return parsed;
}
