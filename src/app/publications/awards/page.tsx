import type { Metadata } from "next";
import { AwardsBrowser, type AwardItem } from "@/components/awards-browser";
import { PageHero } from "@/components/page-hero";
import { getRemoteAwardsSections } from "@/lib/awards-remote-csv";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";

const SECTION_TITLE = "Awards";
const SECTION_DESCRIPTION = "Awards and recognitions received by lab members.";
const SECTION_TITLE_JA = "受賞";

function getAwardMessages(locale: "en" | "ja" | "zh") {
  if (locale === "ja") {
    return {
      hasegawa: "長谷川",
      students: "学生",
      searchLabel: "検索",
      searchPlaceholder: "タイトル、著者、掲載先、日付で検索",
      groupFilterLabel: "区分",
      allGroups: "すべて",
      sortLabel: "並び替え",
      sortNewest: "新しい順",
      sortOldest: "古い順",
      sortTitleAsc: "タイトル昇順",
      sortTitleDesc: "タイトル降順",
      pageLabel: "受賞ページネーション",
      pageSummary: "{total} 件中 {from}-{to} 件を表示",
      clearFilters: "検索・フィルターをクリア",
      noResultsTitle: "該当する受賞がありません",
      noResultsBody: "検索キーワードや条件を変更してください。"
    };
  }

  if (locale === "zh") {
    return {
      hasegawa: "Hasegawa",
      students: "Students",
      searchLabel: "搜索",
      searchPlaceholder: "按标题、作者、会议或日期搜索",
      groupFilterLabel: "类别",
      allGroups: "全部",
      sortLabel: "排序",
      sortNewest: "最新优先",
      sortOldest: "最早优先",
      sortTitleAsc: "标题 A-Z",
      sortTitleDesc: "标题 Z-A",
      pageLabel: "获奖分页",
      pageSummary: "显示第 {from}-{to} 条，共 {total} 条",
      clearFilters: "清除搜索和筛选",
      noResultsTitle: "没有匹配的获奖记录",
      noResultsBody: "请尝试调整搜索关键词或筛选条件。"
    };
  }

  return {
    hasegawa: "Hasegawa",
    students: "Students",
    searchLabel: "Search",
    searchPlaceholder: "Search by title, authors, venue, or date",
    groupFilterLabel: "Group",
    allGroups: "All groups",
    sortLabel: "Sort",
    sortNewest: "Newest first",
    sortOldest: "Oldest first",
    sortTitleAsc: "Title A-Z",
    sortTitleDesc: "Title Z-A",
    pageLabel: "Awards pagination",
    pageSummary: "Showing {from}-{to} of {total} awards",
    clearFilters: "Clear search and filters",
    noResultsTitle: "No matching awards",
    noResultsBody: "Try changing your search keyword or filters."
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

export default async function AchievementAwardsPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = locale === "ja" ? SECTION_TITLE_JA : SECTION_TITLE;
  const awardMessages = getAwardMessages(locale);
  const sections = await getRemoteAwardsSections(locale).catch((error) => {
    console.error("Failed to load awards spreadsheets.", error);
    return { hasegawa: [], students: [] };
  });
  const items: AwardItem[] = [
    ...sections.hasegawa.map((item) => ({ ...item, group: "hasegawa" as const })),
    ...sections.students.map((item) => ({ ...item, group: "students" as const }))
  ];

  return (
    <>
      <PageHero title={messages.publications.title} subtitle={sectionTitle} />

      <section className="section achievement-section">
        <div className="container list">
          <AwardsBrowser
            items={items}
            messages={{
              searchLabel: awardMessages.searchLabel,
              searchPlaceholder: awardMessages.searchPlaceholder,
              groupFilterLabel: awardMessages.groupFilterLabel,
              allGroups: awardMessages.allGroups,
              hasegawaLabel: awardMessages.hasegawa,
              studentsLabel: awardMessages.students,
              yearFilterLabel: messages.publications.yearFilterLabel,
              allYears: messages.publications.allYears,
              sortLabel: awardMessages.sortLabel,
              sortNewest: awardMessages.sortNewest,
              sortOldest: awardMessages.sortOldest,
              sortTitleAsc: awardMessages.sortTitleAsc,
              sortTitleDesc: awardMessages.sortTitleDesc,
              pageLabel: awardMessages.pageLabel,
              previousPage: messages.publications.previousPage,
              nextPage: messages.publications.nextPage,
              pageSummary: awardMessages.pageSummary,
              clearFilters: awardMessages.clearFilters,
              noResultsTitle: awardMessages.noResultsTitle,
              noResultsBody: awardMessages.noResultsBody
            }}
          />
        </div>
      </section>
    </>
  );
}
