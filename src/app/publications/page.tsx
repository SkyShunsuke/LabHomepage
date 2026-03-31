import type { Metadata } from "next";
import { PublicationsBrowser } from "@/components/publications-browser";
import { PageHero } from "@/components/page-hero";
import { getPublications } from "@/lib/data";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.publications.title,
    description: messages.publications.subtitle
  };
}

export default async function PublicationsPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const publications = await getPublications();
  const publicationItems = publications.map((item) => ({
    id: item.id,
    title: item.title,
    authors: item.authors,
    venue: item.venue,
    year: item.year,
    url: item.url ?? null,
    projectUrl: (item as { projectUrl?: string | null }).projectUrl ?? null,
    codeUrl: (item as { codeUrl?: string | null }).codeUrl ?? null,
    teaserImageUrl: item.teaserImageUrl ?? null,
    abstract: item.abstract ?? null,
    highlight: (item as { highlight?: string | null }).highlight ?? null
  }));

  return (
    <>
      <PageHero title={messages.publications.title} subtitle={messages.publications.subtitle} />

      <section className="section">
        <div className="container list">
          {publications.length === 0 ? (
            <article className="card">
              <h2>{messages.publications.noItemsTitle}</h2>
              <p className="muted">{messages.publications.noItemsBody}</p>
            </article>
          ) : (
            <PublicationsBrowser
              items={publicationItems}
              messages={{
                searchLabel: messages.publications.searchLabel,
                searchPlaceholder: messages.publications.searchPlaceholder,
                yearFilterLabel: messages.publications.yearFilterLabel,
                allYears: messages.publications.allYears,
                sortLabel: messages.publications.sortLabel,
                sortNewest: messages.publications.sortNewest,
                sortOldest: messages.publications.sortOldest,
                sortTitleAsc: messages.publications.sortTitleAsc,
                sortTitleDesc: messages.publications.sortTitleDesc,
                pageLabel: messages.publications.pageLabel,
                previousPage: messages.publications.previousPage,
                nextPage: messages.publications.nextPage,
                pageSummary: messages.publications.pageSummary,
                noResultsTitle: messages.publications.noResultsTitle,
                noResultsBody: messages.publications.noResultsBody,
                clearFilters: messages.publications.clearFilters,
                teaserAltSuffix: messages.publications.teaserAltSuffix,
                paperAriaLabel: messages.publications.paperAriaLabel,
                projectAriaLabel: messages.publications.projectAriaLabel,
                codeAriaLabel: messages.publications.codeAriaLabel
              }}
            />
          )}
        </div>
      </section>
    </>
  );
}
