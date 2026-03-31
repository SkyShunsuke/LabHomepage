import type { BlogPost, Member, News, Project, Publication } from "@prisma/client";

const now = new Date("2026-03-15T00:00:00.000Z");

export const previewNews: News[] = [
  {
    id: "preview-news-1",
    title: "Best Paper Award at AI Systems 2026",
    slug: "best-paper-award-ai-systems-2026",
    summary: "Our work on robust mobile sensing won the best paper award.",
    content:
      "Our latest paper presents a lightweight architecture for robust sensing in dynamic environments.",
    isPublished: true,
    publishedAt: new Date("2026-03-10T00:00:00.000Z"),
    createdAt: now,
    updatedAt: now
  },
  {
    id: "preview-news-2",
    title: "Two New PhD Students Joined the Lab",
    slug: "new-phd-students-2026",
    summary: "We are excited to welcome two new doctoral students this spring.",
    content: "The new members will work on human-centered AI and optimization systems.",
    isPublished: true,
    publishedAt: new Date("2026-03-01T00:00:00.000Z"),
    createdAt: now,
    updatedAt: now
  },
  {
    id: "preview-news-3",
    title: "Open-Source Toolkit Released",
    slug: "open-source-toolkit-release",
    summary: "We released our in-house experiment tracking toolkit as open-source.",
    content: "The toolkit helps teams run repeatable experiments across edge devices.",
    isPublished: true,
    publishedAt: new Date("2026-02-20T00:00:00.000Z"),
    createdAt: now,
    updatedAt: now
  }
];

export const previewProject: Project = {
  id: "preview-project-1",
  title: "Adaptive Mobility Intelligence",
  slug: "adaptive-mobility-intelligence",
  summary: "Real-time prediction and planning from urban sensor streams.",
  description:
    "This project explores a foundation-model-assisted pipeline for traffic forecasting, demand estimation, and safe route optimization.",
  linkUrl: "https://example.com/projects/adaptive-mobility-intelligence",
  isFeatured: true,
  createdAt: now,
  updatedAt: now
};

export const previewMembers: Member[] = [
  {
    id: "preview-member-1",
    name: "Dr. Akira Hasegawa",
    role: "Principal Investigator",
    bio:
      "Works on trustworthy AI systems for real-world sensing and decision-making.\n[RESEARCH_TOPIC]Foundation-model-driven ubiquitous intelligence",
    email: "hasegawa@example.com",
    websiteUrl: "https://example.com/akira",
    imageUrl: "/assets/logos/logo_light.png",
    order: 1,
    isActive: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "preview-member-2",
    name: "Mina Sato",
    role: "PhD Student",
    bio:
      "Researches neural optimization in uncertain, dynamic environments.\n[RESEARCH_TOPIC]Neural optimization for adaptive sensing",
    email: "mina.sato@example.com",
    websiteUrl: null,
    imageUrl: null,
    order: 2,
    isActive: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "preview-member-3",
    name: "Koji Tanaka",
    role: "Research Engineer",
    bio:
      "Builds production pipelines for edge ML experiments and model evaluation.\n[RESEARCH_TOPIC]Edge AI systems and evaluation pipelines",
    email: null,
    websiteUrl: "https://example.com/koji",
    imageUrl: null,
    order: 3,
    isActive: true,
    createdAt: now,
    updatedAt: now
  }
];

export const previewPublications: Publication[] = [
  {
    id: "preview-pub-1",
    title: "Robust On-Device Representation Learning for Urban Mobility",
    authors: "A. Hasegawa, M. Sato, K. Tanaka",
    venue: "NeurIPS",
    year: 2025,
    url: "https://example.com/papers/robust-on-device-representation-learning",
    teaserImageUrl: "/assets/banners/banner_light.png",
    abstract:
      "We propose an on-device representation learning approach that remains stable under distribution shift.",
    createdAt: now,
    updatedAt: now
  },
  {
    id: "preview-pub-2",
    title: "Human-Centered Explanations for Multimodal Sensing Models",
    authors: "M. Sato, A. Hasegawa",
    venue: "CHI",
    year: 2024,
    url: "https://example.com/papers/human-centered-explanations",
    teaserImageUrl: null,
    abstract:
      "This paper studies explanation interfaces that improve operator trust and decision speed.",
    createdAt: now,
    updatedAt: now
  }
];

export const previewBlogs: BlogPost[] = [
  {
    id: "preview-blog-1",
    title: "Designing Reliable Mobile AI Pipelines",
    slug: "designing-reliable-mobile-ai-pipelines",
    excerpt: "A practical checklist for robust data collection and evaluation on mobile devices.",
    markdown: `# Designing Reliable Mobile AI Pipelines

In this article, we share a practical checklist for deploying machine learning on mobile systems.

## Key Principles

- Treat data drift as a first-class production concern.
- Keep model monitoring close to the user context.
- Design fallback behavior before model rollout.

These principles improve both robustness and maintainability.`,
    isPublished: true,
    publishedAt: new Date("2026-03-05T00:00:00.000Z"),
    createdAt: now,
    updatedAt: now
  },
  {
    id: "preview-blog-2",
    title: "How We Evaluate Human-Centered AI",
    slug: "how-we-evaluate-human-centered-ai",
    excerpt: "Our internal rubric for measuring utility, transparency, and trust.",
    markdown: `# How We Evaluate Human-Centered AI

Evaluation should include both model metrics and user outcomes.

## Our Rubric

1. Task success and speed.
2. Comprehension of model behavior.
3. Confidence under uncertainty.

Balanced evaluation helps us ship systems that people can rely on.`,
    isPublished: true,
    publishedAt: new Date("2026-02-26T00:00:00.000Z"),
    createdAt: now,
    updatedAt: now
  }
];
