import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getRemoteArticleBookRecords } from "@/lib/articles-books-remote-csv";

const SECTION_TITLE_EN = "Articles/Books";
const SECTION_SUBTITLE_EN = "A list of articles and books from our lab.";
const SECTION_TITLE_JA = "記事・著書";
const SECTION_SUBTITLE_JA = "本研究室からの記事や著書一覧";

function getHeroCopy(locale: "en" | "ja" | "zh"): { title: string; subtitle: string } {
  if (locale === "ja") {
    return { title: SECTION_TITLE_JA, subtitle: SECTION_SUBTITLE_JA };
  }

  return { title: SECTION_TITLE_EN, subtitle: SECTION_SUBTITLE_EN };
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const heroCopy = getHeroCopy(locale);

  return {
    title: heroCopy.title,
    description: heroCopy.subtitle
  };
}

export default async function AchievementArticlesBooksPage() {
  const locale = await resolveRequestLocale();
  const heroCopy = getHeroCopy(locale);
  const records = await getRemoteArticleBookRecords(locale).catch((error) => {
    console.error("Failed to load article/book spreadsheet.", error);
    return [];
  });

  return (
    <>
      <PageHero title={heroCopy.title} subtitle={heroCopy.subtitle} />

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
