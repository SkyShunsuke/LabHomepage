import type { Metadata } from "next";
import { NewsBrowser } from "@/components/news-browser";
import { PageHero } from "@/components/page-hero";
import { getNews } from "@/lib/data";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.news.title,
    description: messages.news.subtitle
  };
}

export default async function NewsPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const news = await getNews(locale);
  const newsItems = news.map((item) => ({
    id: item.id,
    publishedAt: item.publishedAt.toISOString(),
    title: item.title,
    summary: item.summary,
    content: item.content,
    type: item.type,
    highlight: item.highlight,
    imageUrl: item.imageUrl,
    externalUrl: item.externalUrl
  }));

  return (
    <>
      <PageHero title={messages.news.title} subtitle={messages.news.subtitle} />

      <section className="section">
        <div className="container list">
          {news.length === 0 ? (
            <article className="card">
              <h2>{messages.news.noItemsTitle}</h2>
              <p className="muted">{messages.news.noItemsBody}</p>
            </article>
          ) : (
            <NewsBrowser
              items={newsItems}
              locale={locale}
              messages={{
                visitExternal: messages.news.visitExternal,
                moreDetails: messages.news.moreDetails,
                searchLabel: messages.news.searchLabel,
                searchPlaceholder: messages.news.searchPlaceholder,
                typeFilterLabel: messages.news.typeFilterLabel,
                allTypes: messages.news.allTypes,
                sortLabel: messages.news.sortLabel,
                sortNewest: messages.news.sortNewest,
                sortOldest: messages.news.sortOldest,
                sortTitleAsc: messages.news.sortTitleAsc,
                sortTitleDesc: messages.news.sortTitleDesc,
                pageLabel: messages.news.pageLabel,
                previousPage: messages.news.previousPage,
                nextPage: messages.news.nextPage,
                pageSummary: messages.news.pageSummary,
                noResultsTitle: messages.news.noResultsTitle,
                noResultsBody: messages.news.noResultsBody,
                clearFilters: messages.news.clearFilters
              }}
            />
          )}
        </div>
      </section>
    </>
  );
}
