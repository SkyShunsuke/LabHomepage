import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getRemoteCollaborationRecords } from "@/lib/collaborations-remote-csv";

const SECTION_TITLE_EN = "Collaboration";
const SECTION_SUBTITLE_EN = "A list of collaborative research with external institutions and companies.";
const SECTION_TITLE_JA = "共同研究";
const SECTION_SUBTITLE_JA = "外部の研究機関や企業との共同研究一覧";

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

export default async function AchievementCollaborationPage() {
  const locale = await resolveRequestLocale();
  const heroCopy = getHeroCopy(locale);
  const records = await getRemoteCollaborationRecords(locale).catch((error) => {
    console.error("Failed to load collaboration spreadsheet.", error);
    return [];
  });

  return (
    <>
      <PageHero title={heroCopy.title} subtitle={heroCopy.subtitle} />

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
