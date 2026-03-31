import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { prisma } from "@/lib/prisma";

type PublicationInput = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string | null;
  projectUrl: string | null;
  codeUrl: string | null;
  teaserImageUrl: string | null;
  abstract: string | null;
  highlight: string | null;
};

const REQUIRED_HEADERS = ["title", "authors", "venue", "year"] as const;
const OPTIONAL_HEADERS = ["url", "projectUrl", "codeUrl", "teaserImageUrl", "abstract", "highlight"] as const;

function resolveArg(name: string, defaultValue: string): string {
  const prefix = `--${name}=`;
  const fromFlag = process.argv.find((arg) => arg.startsWith(prefix));
  return fromFlag ? fromFlag.slice(prefix.length) : defaultValue;
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

function validateHeaders(headers: string[]) {
  for (const required of REQUIRED_HEADERS) {
    if (!headers.includes(required)) {
      throw new Error(`Missing required CSV header: ${required}`);
    }
  }

  for (const header of headers) {
    if (![...REQUIRED_HEADERS, ...OPTIONAL_HEADERS].includes(header as never)) {
      throw new Error(`Unknown CSV header: ${header}`);
    }
  }
}

function rowToPublication(row: string[], headers: string[], rowNumber: number): PublicationInput | null {
  const values = new Map<string, string>();

  for (let i = 0; i < headers.length; i += 1) {
    values.set(headers[i], row[i] ?? "");
  }

  const title = asOptionalString(values.get("title"));
  const authors = asOptionalString(values.get("authors"));
  const venue = asOptionalString(values.get("venue"));
  const yearValue = asOptionalString(values.get("year"));

  if (!title && !authors && !venue && !yearValue) {
    return null;
  }

  if (!title || !authors || !venue || !yearValue) {
    throw new Error(`Row ${rowNumber}: title, authors, venue, and year are required.`);
  }

  const year = Number(yearValue);
  if (!Number.isFinite(year) || !Number.isInteger(year)) {
    throw new Error(`Row ${rowNumber}: year must be an integer.`);
  }

  return {
    title,
    authors,
    venue,
    year,
    url: asOptionalString(values.get("url")),
    projectUrl: asOptionalString(values.get("projectUrl")),
    codeUrl: asOptionalString(values.get("codeUrl")),
    teaserImageUrl: asOptionalString(values.get("teaserImageUrl")),
    abstract: asOptionalString(values.get("abstract")),
    highlight: asOptionalString(values.get("highlight"))
  };
}

async function main() {
  const filePath = path.resolve(resolveArg("file", "data/publications.csv"));
  const mode = resolveArg("mode", "replace");

  if (mode !== "replace" && mode !== "append") {
    throw new Error("`--mode` must be `replace` or `append`.");
  }

  const raw = await readFile(filePath, "utf8");
  const records = parseCsv(raw);

  if (records.length === 0) {
    console.log("CSV file is empty. Nothing changed.");
    return;
  }

  const headers = records[0].map((value) => value.trim());
  validateHeaders(headers);

  const publications: PublicationInput[] = [];

  for (let i = 1; i < records.length; i += 1) {
    const parsed = rowToPublication(records[i], headers, i + 1);
    if (parsed) {
      publications.push(parsed);
    }
  }

  if (mode === "replace") {
    await prisma.publication.deleteMany({});
  }

  if (publications.length === 0) {
    console.log("No publication rows found. Nothing changed.");
    return;
  }

  await prisma.publication.createMany({ data: publications as never });
  console.log(`Imported ${publications.length} publications from ${filePath} (mode: ${mode}).`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
