import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { prisma } from "@/lib/prisma";

const HEADERS = [
  "title",
  "authors",
  "venue",
  "year",
  "url",
  "projectUrl",
  "codeUrl",
  "teaserImageUrl",
  "abstract",
  "highlight"
] as const;

function resolveArg(name: string, defaultValue: string): string {
  const prefix = `--${name}=`;
  const fromFlag = process.argv.find((arg) => arg.startsWith(prefix));
  return fromFlag ? fromFlag.slice(prefix.length) : defaultValue;
}

function escapeCsvField(value: string | number | null): string {
  const normalized = value == null ? "" : String(value);
  if (/[,"\n\r]/.test(normalized)) {
    return `"${normalized.replace(/"/g, '""')}"`;
  }
  return normalized;
}

async function main() {
  const outputPath = path.resolve(resolveArg("file", "data/publications.csv"));
  await mkdir(path.dirname(outputPath), { recursive: true });

  const publications = await prisma.publication.findMany({
    orderBy: [{ year: "desc" }, { createdAt: "desc" }]
  });

  const lines = [HEADERS.join(",")];

  for (const item of publications) {
    lines.push(
      [
        item.title,
        item.authors,
        item.venue,
        item.year,
        item.url,
        (item as { projectUrl?: string | null }).projectUrl ?? null,
        (item as { codeUrl?: string | null }).codeUrl ?? null,
        item.teaserImageUrl,
        item.abstract,
        (item as { highlight?: string | null }).highlight ?? null
      ]
        .map(escapeCsvField)
        .join(",")
    );
  }

  await writeFile(outputPath, `${lines.join("\n")}\n`, "utf8");
  console.log(`Exported ${publications.length} publications to ${outputPath}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
