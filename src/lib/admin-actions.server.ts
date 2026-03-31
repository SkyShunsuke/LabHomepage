"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { isAdminAuthenticated } from "@/lib/auth";
import { buildMemberBio } from "@/lib/member-research-topic";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

const MAX_IMAGE_UPLOAD_BYTES = 8 * 1024 * 1024;
const IMAGE_EXTENSIONS_BY_MIME: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/svg+xml": ".svg"
};

async function ensureAdmin() {
  if (!(await isAdminAuthenticated())) {
    throw new Error("Unauthorized");
  }
}

function revalidatePublicPath(suffix = "") {
  const normalizedSuffix = suffix && suffix !== "/" ? (suffix.startsWith("/") ? suffix : `/${suffix}`) : "/";
  revalidatePath(normalizedSuffix);
}

function asString(value: FormDataEntryValue | null): string {
  return String(value || "").trim();
}

function asNumber(value: FormDataEntryValue | null, defaultValue = 0): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : defaultValue;
}

function asBoolean(value: FormDataEntryValue | null): boolean {
  return value === "on";
}

function isMissingRecordError(error: unknown): boolean {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025";
}

function getImageExtension(file: File): string {
  const ext = path.extname(file.name || "").toLowerCase();
  if (/^\.[a-z0-9]+$/.test(ext)) {
    return ext;
  }

  return IMAGE_EXTENSIONS_BY_MIME[file.type] || ".png";
}

async function saveImageUpload(
  fileEntry: FormDataEntryValue | null,
  subDirectory: "members" | "publications",
  fallbackBaseName: string
): Promise<string | null> {
  if (!(fileEntry instanceof File) || fileEntry.size === 0) {
    return null;
  }

  if (!fileEntry.type.startsWith("image/")) {
    throw new Error("Uploaded file must be an image.");
  }

  if (fileEntry.size > MAX_IMAGE_UPLOAD_BYTES) {
    throw new Error("Uploaded image must be 8MB or smaller.");
  }

  const extension = getImageExtension(fileEntry);
  const originalBaseName = path.basename(fileEntry.name || "", path.extname(fileEntry.name || ""));
  const safeBaseName = slugify(originalBaseName) || slugify(fallbackBaseName) || subDirectory;
  const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const fileName = `${safeBaseName}-${unique}${extension}`;
  const relativeDir = path.posix.join("uploads", subDirectory);
  const absoluteDir = path.join(process.cwd(), "public", "uploads", subDirectory);
  const absoluteFilePath = path.join(absoluteDir, fileName);
  const relativeFilePath = `/${path.posix.join(relativeDir, fileName)}`;

  await mkdir(absoluteDir, { recursive: true });
  const bytes = await fileEntry.arrayBuffer();
  await writeFile(absoluteFilePath, Buffer.from(bytes));

  return relativeFilePath;
}

export async function saveNews(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  const title = asString(formData.get("title"));
  const slugInput = asString(formData.get("slug"));

  const payload = {
    title,
    slug: slugInput || slugify(title),
    summary: asString(formData.get("summary")),
    content: asString(formData.get("content")),
    isPublished: asBoolean(formData.get("isPublished"))
  };

  if (id) {
    await prisma.news.update({ where: { id }, data: payload });
  } else {
    await prisma.news.create({ data: payload });
  }

  revalidatePublicPath();
  revalidatePublicPath("/news");
  revalidatePath("/admin/news");
}

export async function deleteNews(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  await prisma.news.delete({ where: { id } });

  revalidatePublicPath();
  revalidatePublicPath("/news");
  revalidatePath("/admin/news");
}

export async function saveProject(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  const title = asString(formData.get("title"));
  const slugInput = asString(formData.get("slug"));

  const payload = {
    title,
    slug: slugInput || slugify(title),
    summary: asString(formData.get("summary")),
    description: asString(formData.get("description")),
    linkUrl: asString(formData.get("linkUrl")) || null,
    isFeatured: asBoolean(formData.get("isFeatured"))
  };

  if (payload.isFeatured) {
    await prisma.project.updateMany({
      where: { isFeatured: true },
      data: { isFeatured: false }
    });
  }

  if (id) {
    await prisma.project.update({ where: { id }, data: payload });
  } else {
    await prisma.project.create({ data: payload });
  }

  revalidatePublicPath();
  revalidatePath("/admin/projects");
}

export async function deleteProject(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  await prisma.project.delete({ where: { id } });

  revalidatePublicPath();
  revalidatePath("/admin/projects");
}

export async function saveMember(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  const uploadedImageUrl = await saveImageUpload(formData.get("imageFile"), "members", asString(formData.get("name")));
  const manualImageUrl = asString(formData.get("imageUrl")) || null;

  const payload = {
    name: asString(formData.get("name")),
    role: asString(formData.get("role")),
    bio: buildMemberBio(asString(formData.get("bio")), asString(formData.get("researchTopic"))),
    email: asString(formData.get("email")) || null,
    websiteUrl: asString(formData.get("websiteUrl")) || null,
    imageUrl: uploadedImageUrl || manualImageUrl,
    order: asNumber(formData.get("order")),
    isActive: asBoolean(formData.get("isActive"))
  };

  if (id) {
    await prisma.member.update({ where: { id }, data: payload });
  } else {
    await prisma.member.create({ data: payload });
  }

  revalidatePublicPath("/members");
  revalidatePath("/admin/members");
}

export async function deleteMember(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  if (!id) {
    return;
  }

  try {
    await prisma.member.delete({ where: { id } });
  } catch (error) {
    if (!isMissingRecordError(error)) {
      throw error;
    }
  }

  revalidatePublicPath("/members");
  revalidatePath("/admin/members");
}

export async function savePublication(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  const uploadedTeaserImageUrl = await saveImageUpload(
    formData.get("teaserImageFile"),
    "publications",
    asString(formData.get("title"))
  );
  const manualTeaserImageUrl = asString(formData.get("teaserImageUrl")) || null;

  const payload = {
    title: asString(formData.get("title")),
    authors: asString(formData.get("authors")),
    venue: asString(formData.get("venue")),
    year: asNumber(formData.get("year"), new Date().getFullYear()),
    url: asString(formData.get("url")) || null,
    projectUrl: asString(formData.get("projectUrl")) || null,
    codeUrl: asString(formData.get("codeUrl")) || null,
    teaserImageUrl: uploadedTeaserImageUrl || manualTeaserImageUrl,
    abstract: asString(formData.get("abstract")) || null,
    highlight: asString(formData.get("highlight")) || null
  };

  if (id) {
    await prisma.publication.update({ where: { id }, data: payload as never });
  } else {
    await prisma.publication.create({ data: payload as never });
  }

  revalidatePublicPath("/publications");
  revalidatePath("/admin/publications");
}

export async function deletePublication(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  await prisma.publication.delete({ where: { id } });

  revalidatePublicPath("/publications");
  revalidatePath("/admin/publications");
}

export async function saveBlogPost(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  const title = asString(formData.get("title"));
  const slugInput = asString(formData.get("slug"));

  let markdown = asString(formData.get("markdown"));
  const markdownFile = formData.get("markdownFile");

  if (markdownFile instanceof File && markdownFile.size > 0) {
    markdown = await markdownFile.text();
  }

  if (!markdown.trim()) {
    throw new Error("Markdown content is required.");
  }

  const payload = {
    title,
    slug: slugInput || slugify(title),
    excerpt: asString(formData.get("excerpt")),
    markdown,
    isPublished: asBoolean(formData.get("isPublished"))
  };

  if (id) {
    await prisma.blogPost.update({ where: { id }, data: payload });
  } else {
    await prisma.blogPost.create({ data: payload });
  }

  revalidatePublicPath("/blogs");
  revalidatePath("/admin/blogs");
}

export async function deleteBlogPost(formData: FormData) {
  await ensureAdmin();

  const id = asString(formData.get("id"));
  await prisma.blogPost.delete({ where: { id } });

  revalidatePublicPath("/blogs");
  revalidatePath("/admin/blogs");
}
