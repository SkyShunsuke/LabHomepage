import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getRemoteCollaborationRecords } from "@/lib/collaborations-remote-csv";

const SECTION_TITLE_EN = "Collaboration";
const SECTION_TITLE_JA = "共同研究";
const SECTION_DESCRIPTION = "Collaborative research projects.";

function getSectionTitle(locale: "en" | "ja" | "zh"): string {
  if (locale === "ja") {
    return SECTION_TITLE_JA;
  }
  return SECTION_TITLE_EN;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = getSectionTitle(locale);

  return {
    title: `${messages.publications.title} | ${sectionTitle}`,
    description: SECTION_DESCRIPTION
  };
}

export default async function AchievementCollaborationPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = getSectionTitle(locale);
  const records = await getRemoteCollaborationRecords(locale).catch((error) => {
    console.error("Failed to load collaboration spreadsheet.", error);
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
                {locale === "ja"
                  ? "共同研究の記録が見つかりませんでした。"
                  : "No collaboration records found."}
              </p>
            </article>
          ) : (
            <article className="card achievement-placeholder-card">
              <ul className="achievement-record-list">
                {records.map((item) => (
                  <li key={item.id} className="achievement-record-item">
                    <p className="achievement-record-title">{item.title}</p>
                    <p className="muted achievement-record-meta">{item.collaborator}</p>
                    <p className="muted achievement-record-meta">{item.duration}</p>
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
