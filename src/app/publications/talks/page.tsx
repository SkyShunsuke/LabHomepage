import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getRemoteTalkRecords } from "@/lib/talks-remote-csv";

const SECTION_TITLE = "Talks";
const SECTION_DESCRIPTION = "Invited and seminar talk records.";
const SECTION_TITLE_JA = "講演";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = locale === "ja" ? SECTION_TITLE_JA : SECTION_TITLE;

  return {
    title: `${messages.publications.title} | ${sectionTitle}`,
    description: SECTION_DESCRIPTION
  };
}

export default async function AchievementTalksPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = locale === "ja" ? SECTION_TITLE_JA : SECTION_TITLE;
  const records = await getRemoteTalkRecords(locale).catch((error) => {
    console.error("Failed to load talks spreadsheet.", error);
    return [];
  });

  return (
    <>
      <PageHero title={messages.publications.title} subtitle={sectionTitle} />

      <section className="section achievement-section">
        <div className="container list">
          {records.length === 0 ? (
            <article className="card">
              <h2>{locale === "ja" ? "項目はまだありません" : "No items yet"}</h2>
              <p className="muted">
                {locale === "ja" ? "講演記録が見つかりませんでした。" : "No talk records found."}
              </p>
            </article>
          ) : (
            <article className="card achievement-placeholder-card">
              <ul className="achievement-record-list">
                {records.map((item) => (
                  <li key={item.id} className="achievement-record-item">
                    <p className="achievement-record-title">
                      {item.site ? (
                        <a href={item.site} target="_blank" rel="noreferrer">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </p>
                    <p className="muted achievement-record-meta">{item.authors}</p>
                    <p className="muted achievement-record-meta">
                      <em>{item.venue}</em> · {item.date}
                    </p>
                    {item.type ? <p className="achievement-record-tag">{item.type}</p> : null}
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
