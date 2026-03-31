import { prisma } from "@/lib/prisma";
import {
  previewBlogs,
  previewMembers,
  previewNews,
  previewProject,
  previewPublications
} from "@/lib/mock-data";
import { parseMemberBio } from "@/lib/member-research-topic";
import { getRemoteCsvMembers, normalizeGoogleDriveImageUrl } from "@/lib/members-remote-csv";
import { getRemoteCsvNews } from "@/lib/news-remote-csv";
import { getRemoteCsvPublications } from "@/lib/publications-remote-csv";

type PublicationWithOptionalFeature = {
  id: string;
  feature?: number | string | null;
};

export type PublicMember = {
  id: string;
  name: string;
  role: string;
  email: string | null;
  websiteUrl: string | null;
  imageUrl: string | null;
  researchArea: string | null;
  comment: string | null;
  graduateYear: string | null;
};

export type PublicNews = {
  id: string;
  title: string;
  slug: string | null;
  summary: string;
  content: string;
  publishedAt: Date;
  type: string | null;
  highlight: string | null;
  imageUrl: string | null;
  externalUrl: string | null;
};

function isDesignPreviewEnabled() {
  return process.env.DESIGN_PREVIEW === "1" || process.env.DESIGN_PREVIEW === "true";
}

export async function getLatestNews(limit = 3) {
  const normalizedLimit = Math.max(0, limit);
  if (normalizedLimit === 0) {
    return [];
  }

  if (isDesignPreviewEnabled()) {
    return previewNews.slice(0, normalizedLimit).map(toPublicNewsFromDbRecord);
  }

  const remoteCsvNews = await getRemoteCsvNews().catch((error) => {
    console.error("Failed to load remote news spreadsheet.", error);
    return null;
  });

  if (remoteCsvNews) {
    return remoteCsvNews.slice(0, normalizedLimit).map((item) => ({
      id: item.id,
      title: item.title,
      slug: null,
      summary: summarizeNewsContent(item.content),
      content: item.content,
      publishedAt: item.publishedAt,
      type: item.type,
      highlight: item.highlight,
      imageUrl: item.imageUrl,
      externalUrl: item.externalUrl
    }));
  }

  const news = await prisma.news.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
    take: normalizedLimit
  });

  return news.map(toPublicNewsFromDbRecord);
}

export async function getNews() {
  if (isDesignPreviewEnabled()) {
    return previewNews.map(toPublicNewsFromDbRecord);
  }

  const remoteCsvNews = await getRemoteCsvNews().catch((error) => {
    console.error("Failed to load remote news spreadsheet.", error);
    return null;
  });

  if (remoteCsvNews) {
    return remoteCsvNews.map((item) => ({
      id: item.id,
      title: item.title,
      slug: null,
      summary: summarizeNewsContent(item.content),
      content: item.content,
      publishedAt: item.publishedAt,
      type: item.type,
      highlight: item.highlight,
      imageUrl: item.imageUrl,
      externalUrl: item.externalUrl
    }));
  }

  const news = await prisma.news.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" }
  });

  return news.map(toPublicNewsFromDbRecord);
}

export async function getFeaturedProject() {
  if (isDesignPreviewEnabled()) {
    return previewProject;
  }

  const featured = await prisma.project.findFirst({
    where: { isFeatured: true },
    orderBy: { updatedAt: "desc" }
  });

  if (featured) {
    return featured;
  }

  return prisma.project.findFirst({
    orderBy: { updatedAt: "desc" }
  });
}

export async function getMembers() {
  if (isDesignPreviewEnabled()) {
    return previewMembers.map<PublicMember>((member) => {
      const { bio, researchTopic } = parseMemberBio(member.bio);
      return {
        id: member.id,
        name: member.name,
        role: member.role,
        email: member.email,
        websiteUrl: member.websiteUrl,
        imageUrl: normalizeGoogleDriveImageUrl(member.imageUrl),
        researchArea: researchTopic || null,
        comment: bio || null,
        graduateYear: null
      };
    });
  }

  const remoteCsvMembers = await getRemoteCsvMembers().catch((error) => {
    console.error("Failed to load remote members spreadsheet.", error);
    return null;
  });

  if (remoteCsvMembers) {
    return remoteCsvMembers.map<PublicMember>((member) => ({
      id: member.id,
      name: member.name,
      role: member.role,
      email: member.email,
      websiteUrl: member.homepage,
      imageUrl: normalizeGoogleDriveImageUrl(member.imageUrl),
      researchArea: member.researchArea,
      comment: member.comment,
      graduateYear: member.graduateYear
    }));
  }

  const dbMembers = await prisma.member.findMany({
    where: { isActive: true },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }]
  });

  return dbMembers.map<PublicMember>((member) => {
    const { bio, researchTopic } = parseMemberBio(member.bio);
    return {
      id: member.id,
      name: member.name,
      role: member.role,
      email: member.email,
      websiteUrl: member.websiteUrl,
      imageUrl: normalizeGoogleDriveImageUrl(member.imageUrl),
      researchArea: researchTopic || null,
      comment: bio || null,
      graduateYear: null
    };
  });
}

export async function getPublications() {
  if (isDesignPreviewEnabled()) {
    return previewPublications;
  }

  const remoteCsvPublications = await getRemoteCsvPublications().catch((error) => {
    console.error("Failed to load remote publication CSV.", error);
    return null;
  });

  if (remoteCsvPublications) {
    return remoteCsvPublications;
  }

  return prisma.publication.findMany({
    orderBy: [{ year: "desc" }, { createdAt: "desc" }]
  });
}

function parseFeatureRank(value: PublicationWithOptionalFeature["feature"]): number | null {
  if (typeof value === "number" && Number.isSafeInteger(value) && value > 0) {
    return value;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!/^\d+$/.test(trimmed)) {
      return null;
    }

    const parsed = Number(trimmed);
    if (Number.isSafeInteger(parsed) && parsed > 0) {
      return parsed;
    }
  }

  return null;
}

export function getFeaturedPublications<T extends PublicationWithOptionalFeature>(publications: T[], limit = 3): T[] {
  if (limit <= 0 || publications.length === 0) {
    return [];
  }

  const ranked = publications
    .map((publication, index) => ({
      publication,
      index,
      rank: parseFeatureRank(publication.feature)
    }))
    .filter((entry) => entry.rank !== null)
    .sort((left, right) => {
      if (left.rank !== right.rank) {
        return (left.rank as number) - (right.rank as number);
      }
      return left.index - right.index;
    })
    .slice(0, limit)
    .map((entry) => entry.publication);

  if (ranked.length >= limit) {
    return ranked;
  }

  const selectedIds = new Set(ranked.map((publication) => publication.id));
  const fallback = publications.filter((publication) => !selectedIds.has(publication.id)).slice(0, limit - ranked.length);

  return [...ranked, ...fallback];
}

export async function getBlogs() {
  if (isDesignPreviewEnabled()) {
    return previewBlogs;
  }

  return prisma.blogPost.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" }
  });
}

export async function getBlogBySlug(slug: string) {
  if (isDesignPreviewEnabled()) {
    return previewBlogs.find((post) => post.slug === slug) ?? null;
  }

  return prisma.blogPost.findFirst({
    where: { slug, isPublished: true }
  });
}

function summarizeNewsContent(content: string, maxLength = 180): string {
  const compact = content.replace(/\s+/g, " ").trim();
  if (compact.length <= maxLength) {
    return compact;
  }

  return `${compact.slice(0, maxLength - 1)}…`;
}

function toPublicNewsFromDbRecord(item: (typeof previewNews)[number]): PublicNews {
  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    summary: item.summary,
    content: item.content,
    publishedAt: item.publishedAt,
    type: null,
    highlight: null,
    imageUrl: null,
    externalUrl: null
  };
}
