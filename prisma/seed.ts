import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.news.createMany({
    data: [
      {
        title: "Lab homepage renewal started",
        slug: "homepage-renewal-started",
        summary: "We started redesigning our laboratory website with a modern stack.",
        content: "This project introduces a responsive UI, dark mode support, and admin-driven updates.",
        isPublished: true
      },
      {
        title: "Accepted paper at sample conference",
        slug: "accepted-paper-sample-conference",
        summary: "Our latest work has been accepted.",
        content: "Detailed information will be added after publication.",
        isPublished: true
      }
    ],
    skipDuplicates: true
  });

  await prisma.project.createMany({
    data: [
      {
        title: "Adaptive AI for Smart Cities",
        slug: "adaptive-ai-smart-cities",
        summary: "A flagship project on resilient urban intelligence.",
        description: "We are building data-driven optimization and planning methods for urban systems.",
        isFeatured: true,
        linkUrl: "https://example.edu/projects/adaptive-ai-smart-cities"
      }
    ],
    skipDuplicates: true
  });

  await prisma.member.createMany({
    data: [
      {
        name: "Prof. Taro Yamada",
        role: "Principal Investigator",
        bio: "Researcher in machine learning and systems science.",
        email: "pi@example.edu",
        order: 1,
        isActive: true
      },
      {
        name: "Hanako Suzuki",
        role: "PhD Student",
        bio: "Works on reinforcement learning for autonomous systems.",
        order: 2,
        isActive: true
      }
    ],
    skipDuplicates: true
  });

  await prisma.publication.createMany({
    data: [
      {
        title: "A Sample Publication Title",
        authors: "Yamada T., Suzuki H.",
        venue: "Journal of Example Research",
        year: 2025,
        url: "https://doi.org/10.0000/example"
      }
    ],
    skipDuplicates: true
  });

  await prisma.blogPost.createMany({
    data: [
      {
        title: "Welcome to Our New Lab Blog",
        slug: "welcome-new-lab-blog",
        excerpt: "How we share progress, tutorials, and behind-the-scenes updates.",
        markdown: "# Welcome\n\nThis blog is written in **Markdown** and rendered automatically.",
        isPublished: true
      }
    ],
    skipDuplicates: true
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
