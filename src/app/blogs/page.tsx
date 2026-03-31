import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { getBlogs } from "@/lib/data";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { formatDate } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.blogs.title,
    description: messages.blogs.subtitle
  };
}

export default async function BlogsPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const blogs = await getBlogs();

  return (
    <>
      <PageHero title={messages.blogs.title} subtitle={messages.blogs.subtitle} />

      <section className="section">
        <div className="container list">
          {blogs.length === 0 ? (
            <article className="card">
              <h2>{messages.blogs.noItemsTitle}</h2>
              <p className="muted">{messages.blogs.noItemsBody}</p>
            </article>
          ) : (
            blogs.map((post) => (
              <article key={post.id} className="card">
                <p className="badge">{formatDate(post.publishedAt, locale)}</p>
                <h2>{post.title}</h2>
                <p className="muted">{post.excerpt}</p>
                <Link href={`/blogs/${post.slug}`} className="inline-link">
                  {messages.blogs.readArticle}
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
}
