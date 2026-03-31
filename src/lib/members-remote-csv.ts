const REQUIRED_HEADERS = ["name", "role"] as const;
const CANONICAL_HEADERS = new Set([
  "name",
  "role",
  "email",
  "homepage",
  "researchArea",
  "comment",
  "imageUrl",
  "graduateYear"
]);

const HEADER_ALIASES: Record<string, string> = {
  name: "name",
  名前: "name",
  氏名: "name",
  role: "role",
  position: "role",
  職位: "role",
  役職: "role",
  email: "email",
  mail: "email",
  メール: "email",
  メールアドレス: "email",
  homepage: "homepage",
  home: "homepage",
  website: "homepage",
  websiteurl: "homepage",
  personalpage: "homepage",
  ホームページ: "homepage",
  ウェブサイト: "homepage",
  researcharea: "researchArea",
  research: "researchArea",
  researchtopic: "researchArea",
  研究分野: "researchArea",
  研究領域: "researchArea",
  研究テーマ: "researchArea",
  comment: "comment",
  bio: "comment",
  備考: "comment",
  コメント: "comment",
  紹介: "comment",
  imageurl: "imageUrl",
  image: "imageUrl",
  photo: "imageUrl",
  photourl: "imageUrl",
  写真: "imageUrl",
  画像: "imageUrl",
  画像url: "imageUrl",
  写真url: "imageUrl",
  graduateyear: "graduateYear",
  graduationyear: "graduateYear",
  graduation: "graduateYear",
  gradyear: "graduateYear",
  卒業年: "graduateYear",
  修了年: "graduateYear"
};

export type RemoteSheetMember = {
  id: string;
  name: string;
  role: string;
  email: string | null;
  homepage: string | null;
  researchArea: string | null;
  comment: string | null;
  imageUrl: string | null;
  graduateYear: string | null;
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

export function normalizeGoogleDriveImageUrl(rawUrl: string | null): string | null {
  if (!rawUrl) {
    return null;
  }

  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return null;
  }

  // Treat common placeholder paths as "no image" to avoid noisy 404s like /default.png.
  if (/^(\/)?default\.png$/i.test(trimmed)) {
    return null;
  }

  try {
    const url = new URL(trimmed);
    const fileId = fileIdFromGoogleDriveUrl(url);

    if (!fileId) {
      return trimmed;
    }

    // Proxy via our app to avoid browser-side cross-origin and redirect-related image failures.
    return `/api/member-image?id=${encodeURIComponent(fileId)}`;
  } catch {
    return trimmed;
  }
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

  if (normalized.includes("name")) {
    return "name";
  }

  if (normalized.includes("role") || normalized.includes("position")) {
    return "role";
  }

  if (normalized.includes("mail")) {
    return "email";
  }

  if (normalized.includes("home") || normalized.includes("website")) {
    return "homepage";
  }

  if (normalized.includes("research")) {
    return "researchArea";
  }

  if (normalized.includes("comment") || normalized.includes("bio")) {
    return "comment";
  }

  if (normalized.includes("image") || normalized.includes("photo")) {
    return "imageUrl";
  }

  if (normalized.includes("graduate") || normalized.includes("graduation") || normalized.includes("gradyear")) {
    return "graduateYear";
  }

  return null;
}

export async function getRemoteCsvMembers(): Promise<RemoteSheetMember[] | null> {
  const csvUrl = process.env.MEMBERS_SPREADSHEET_URL?.trim();
  if (!csvUrl) {
    return null;
  }

  const url = normalizeGoogleCsvUrl(csvUrl);
  const revalidateSeconds = parseRevalidateSeconds(process.env.MEMBERS_SPREADSHEET_REVALIDATE_SECONDS);

  const response = await fetch(url, {
    next: { revalidate: revalidateSeconds }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch members spreadsheet: ${response.status} ${response.statusText}`);
  }

  const csvText = await response.text();
  const records = parseCsv(csvText);

  if (records.length === 0) {
    return [];
  }

  let headerRowIndex = -1;
  let headers: Array<string | null> = [];

  for (let i = 0; i < records.length; i += 1) {
    const candidateHeaders = records[i].map((value) => toCanonicalHeader(value));
    const availableHeaders = candidateHeaders.filter((header): header is string => header !== null);
    const hasAllRequired = REQUIRED_HEADERS.every((required) => availableHeaders.includes(required));

    if (hasAllRequired) {
      headerRowIndex = i;
      headers = candidateHeaders;
      break;
    }
  }

  if (headerRowIndex < 0) {
    throw new Error("Missing required members headers: name and/or role");
  }

  const parsed: RemoteSheetMember[] = [];

  for (let i = headerRowIndex + 1; i < records.length; i += 1) {
    const values = new Map<string, string>();
    const row = records[i];

    for (let j = 0; j < headers.length; j += 1) {
      const header = headers[j];
      if (!header) {
        continue;
      }

      values.set(header, row[j] ?? "");
    }

    const name = asOptionalString(values.get("name"));
    const role = asOptionalString(values.get("role"));
    const email = asOptionalString(values.get("email"));
    const homepage = asOptionalString(values.get("homepage"));
    const researchArea = asOptionalString(values.get("researchArea"));
    const comment = asOptionalString(values.get("comment"));
    const imageUrl = normalizeGoogleDriveImageUrl(asOptionalString(values.get("imageUrl")));
    const graduateYear = asOptionalString(values.get("graduateYear"));

    if (!name && !role && !email && !homepage && !researchArea && !comment && !imageUrl && !graduateYear) {
      continue;
    }

    if (!name || !role) {
      console.warn(
        `Skipping members row ${i + 1}: name and role are required.`,
        JSON.stringify({
          name: values.get("name") ?? "",
          role: values.get("role") ?? ""
        })
      );
      continue;
    }

    parsed.push({
      id: `remote-member-${i}`,
      name,
      role,
      email,
      homepage,
      researchArea,
      comment,
      imageUrl,
      graduateYear
    });
  }

  return parsed;
}
