import type { Metadata } from "next";
import { GrantsBrowser, type GrantItem } from "@/components/grants-browser";
import { PageHero } from "@/components/page-hero";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getRemoteGrantsSections } from "@/lib/grants-remote-csv";

const SECTION_TITLE = "Grants";
const SECTION_DESCRIPTION = "Research grant projects and funding information.";
const SECTION_TITLE_JA = "研究費";

function normalizeAmountForEnglish(amount: string | null): string | null {
  if (!amount) {
    return amount;
  }

  return amount
    .replace(/¥/g, "JPY ")
    .replace(/円/g, " JPY")
    .replace(/yen/gi, "JPY")
    .replace(/\s+/g, " ")
    .trim();
}

function getGrantSectionLabels(locale: "en" | "ja" | "zh") {
  if (locale === "ja") {
    return {
      hasegawa: "長谷川",
      students: "学生",
      empty: "データが見つかりませんでした。",
      searchLabel: "検索",
      searchPlaceholder: "研究者、題目、助成名、金額、期間で検索",
      groupFilterLabel: "区分",
      allGroups: "すべて",
      typeFilterLabel: "種別フィルター",
      allTypes: "すべての種別",
      sortLabel: "並び替え",
      sortTitleAsc: "題目昇順",
      sortTitleDesc: "題目降順",
      sortGrantAsc: "助成名昇順",
      sortGrantDesc: "助成名降順",
      sortAmountDesc: "金額の高い順",
      sortAmountAsc: "金額の低い順",
      clearFilters: "検索・フィルターをクリア",
      noResultsTitle: "該当する助成がありません",
      noResultsBody: "検索キーワードや条件を変更してください。",
      type: "種別",
      grantName: "助成名",
      amount: "金額",
      duration: "期間"
    };
  }

  if (locale === "zh") {
    return {
      hasegawa: "Hasegawa",
      students: "Students",
      empty: "No grant records found.",
      searchLabel: "Search",
      searchPlaceholder: "Search by researcher, title, grant, amount, or duration",
      groupFilterLabel: "Group",
      allGroups: "All groups",
      typeFilterLabel: "Type",
      allTypes: "All types",
      sortLabel: "Sort",
      sortTitleAsc: "Title A-Z",
      sortTitleDesc: "Title Z-A",
      sortGrantAsc: "Grant A-Z",
      sortGrantDesc: "Grant Z-A",
      sortAmountDesc: "Amount high to low",
      sortAmountAsc: "Amount low to high",
      clearFilters: "Clear search and filters",
      noResultsTitle: "No matching grants",
      noResultsBody: "Try changing your search keyword or filters.",
      type: "Type",
      grantName: "Grant",
      amount: "Amount",
      duration: "Duration"
    };
  }

  return {
    hasegawa: "Hasegawa",
    students: "Students",
    empty: "No grant records found.",
    searchLabel: "Search",
    searchPlaceholder: "Search by researcher, title, grant, amount, or duration",
    groupFilterLabel: "Group",
    allGroups: "All groups",
    typeFilterLabel: "Type",
    allTypes: "All types",
    sortLabel: "Sort",
    sortTitleAsc: "Title A-Z",
    sortTitleDesc: "Title Z-A",
    sortGrantAsc: "Grant A-Z",
    sortGrantDesc: "Grant Z-A",
    sortAmountDesc: "Amount high to low",
    sortAmountAsc: "Amount low to high",
    clearFilters: "Clear search and filters",
    noResultsTitle: "No matching grants",
    noResultsBody: "Try changing your search keyword or filters.",
    type: "Type",
    grantName: "Grant",
    amount: "Amount",
    duration: "Duration"
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = locale === "ja" ? SECTION_TITLE_JA : SECTION_TITLE;

  return {
    title: `${messages.publications.title} | ${sectionTitle}`,
    description: SECTION_DESCRIPTION
  };
}

export default async function AchievementGrantsPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = locale === "ja" ? SECTION_TITLE_JA : SECTION_TITLE;
  const labels = getGrantSectionLabels(locale);
  const sections = await getRemoteGrantsSections(locale).catch((error) => {
    console.error("Failed to load grants spreadsheets.", error);
    return { hasegawa: [], students: [] };
  });
  const items: GrantItem[] = [
    ...sections.hasegawa.map((item) => ({
      ...item,
      amount: locale === "en" ? normalizeAmountForEnglish(item.amount) : item.amount,
      group: "hasegawa" as const
    })),
    ...sections.students.map((item) => ({
      ...item,
      amount: locale === "en" ? normalizeAmountForEnglish(item.amount) : item.amount,
      group: "students" as const
    }))
  ];

  return (
    <>
      <PageHero title={messages.publications.title} subtitle={sectionTitle} />

      <section className="section achievement-section">
        <div className="container list">
          <GrantsBrowser
            items={items}
            messages={{
              searchLabel: labels.searchLabel,
              searchPlaceholder: labels.searchPlaceholder,
              groupFilterLabel: labels.groupFilterLabel,
              allGroups: labels.allGroups,
              hasegawaLabel: labels.hasegawa,
              studentsLabel: labels.students,
              typeFilterLabel: labels.typeFilterLabel,
              allTypes: labels.allTypes,
              sortLabel: labels.sortLabel,
              sortTitleAsc: labels.sortTitleAsc,
              sortTitleDesc: labels.sortTitleDesc,
              sortGrantAsc: labels.sortGrantAsc,
              sortGrantDesc: labels.sortGrantDesc,
              sortAmountDesc: labels.sortAmountDesc,
              sortAmountAsc: labels.sortAmountAsc,
              clearFilters: labels.clearFilters,
              noResultsTitle: labels.noResultsTitle,
              noResultsBody: labels.noResultsBody,
              typeLabel: labels.type,
              grantNameLabel: labels.grantName,
              amountLabel: labels.amount,
              durationLabel: labels.duration
            }}
          />
        </div>
      </section>
    </>
  );
}
