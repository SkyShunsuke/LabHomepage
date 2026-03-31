import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { PageHero } from "@/components/page-hero";
import { getBlogBySlug, getBlogs } from "@/lib/data";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { formatDate } from "@/lib/utils";

type BlogDetailPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: messages.notFound.title
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts
    .filter((post) => Boolean(post.slug))
    .map((post) => ({
      slug: post.slug as string
    }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await Promise.resolve(params);
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const processed = await remark().use(html).process(post.markdown);
  const contentHtml = processed.toString();

  return (
    <>
      <PageHero title={post.title} subtitle={`${messages.blogs.publishedPrefix} ${formatDate(post.publishedAt, locale)}`} />
      <section className="section">
        <div className="container">
          <article className="card prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </section>
    </>
  );
}
