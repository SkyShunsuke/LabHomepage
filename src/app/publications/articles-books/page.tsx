import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getRemoteArticleBookRecords } from "@/lib/articles-books-remote-csv";

const SECTION_TITLE = "Articles/Books";
const SECTION_DESCRIPTION = "Articles and books.";
const SECTION_TITLE_JA = "記事・著書";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = locale === "ja" ? SECTION_TITLE_JA : SECTION_TITLE;

  return {
    title: `${messages.publications.title} | ${sectionTitle}`,
    description: SECTION_DESCRIPTION
  };
}

export default async function AchievementArticlesBooksPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = locale === "ja" ? SECTION_TITLE_JA : SECTION_TITLE;
  const records = await getRemoteArticleBookRecords(locale).catch((error) => {
    console.error("Failed to load article/book spreadsheet.", error);
    return [];
  });

  return (
    <>
      <PageHero title={messages.publications.title} subtitle={sectionTitle} />

      <section className="section achievement-section">
        <div className="container list">
          {records.length === 0 ? (
            <article className="card">
              <h2>No items yet</h2>
              <p className="muted">No article/book records found.</p>
            </article>
          ) : (
            <article className="card achievement-placeholder-card">
              <ul className="achievement-record-list">
                {records.map((item) => (
                  <li key={item.id} className="achievement-record-item">
                    <p className="achievement-record-title">{item.title}</p>
                    <p className="muted achievement-record-meta">{item.authors}</p>
                    <p className="muted achievement-record-meta">
                      <em>{item.venue}</em> · {item.date}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
