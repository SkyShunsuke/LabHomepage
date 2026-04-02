import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PresentationsBrowser, type PresentationItem } from "@/components/presentations-browser";
import { getRemoteAwardsSections } from "@/lib/awards-remote-csv";
import { getMessages } from "@/lib/i18n/messages";
import { getRemotePresentationSections } from "@/lib/presentations-remote-csv";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";

const SECTION_TITLE = "Presentations";
const SECTION_DESCRIPTION = "Conference and workshop presentation records.";
const SECTION_TITLE_JA = "学会発表";

function normalizeRelationId(value: string | null | undefined): string | null {
  const normalized = value
    ?.normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");
  return normalized && normalized.length > 0 ? normalized : null;
}

function expandRelationIds(value: string | null | undefined): string[] {
  if (!value) {
    return [];
  }

  const normalized = value.normalize("NFKC");
  const chunks = normalized
    .split(/[,\n;/、，]+/g)
    .map((chunk) => normalizeRelationId(chunk))
    .filter((chunk): chunk is string => Boolean(chunk));

  return Array.from(new Set(chunks));
}

function getPresentationMessages(locale: "en" | "ja" | "zh") {
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
      pageLabel: "発表ページネーション",
      pageSummary: "{total} 件中 {from}-{to} 件を表示",
      clearFilters: "検索・フィルターをクリア",
      noResultsTitle: "該当する発表がありません",
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
      pageLabel: "发表分页",
      pageSummary: "显示第 {from}-{to} 条，共 {total} 条",
      clearFilters: "清除搜索和筛选",
      noResultsTitle: "没有匹配的发表记录",
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
    pageLabel: "Presentations pagination",
    pageSummary: "Showing {from}-{to} of {total} presentations",
    clearFilters: "Clear search and filters",
    noResultsTitle: "No matching presentations",
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

export default async function AchievementPresentationsPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const sectionTitle = locale === "ja" ? SECTION_TITLE_JA : SECTION_TITLE;
  const presentationMessages = getPresentationMessages(locale);
  const sections = await getRemotePresentationSections(locale).catch((error) => {
    console.error("Failed to load presentation spreadsheets.", error);
    return { hasegawa: [], students: [] };
  });
  const awardsSections = await getRemoteAwardsSections(locale).catch((error) => {
    console.error("Failed to load awards spreadsheets for presentations relation.", error);
    return { hasegawa: [], students: [] };
  });
  const awardTitlesByPresentationId = new Map<string, string[]>();
  for (const award of [...awardsSections.hasegawa, ...awardsSections.students]) {
    const relationIds = expandRelationIds(award.presentationId);
    if (relationIds.length === 0) {
      continue;
    }
    const title = award.title.trim();
    if (!title) {
      continue;
    }

    for (const relationId of relationIds) {
      const existing = awardTitlesByPresentationId.get(relationId) ?? [];
      if (!existing.includes(title)) {
        existing.push(title);
        awardTitlesByPresentationId.set(relationId, existing);
      }
    }
  }
  const items: PresentationItem[] = [
    ...sections.hasegawa.map((item) => ({
      ...item,
      group: "hasegawa" as const,
      awardTitles: (() => {
        const relationId = normalizeRelationId(item.presentationId);
        return relationId ? awardTitlesByPresentationId.get(relationId) ?? [] : [];
      })()
    })),
    ...sections.students.map((item) => ({
      ...item,
      group: "students" as const,
      awardTitles: (() => {
        const relationId = normalizeRelationId(item.presentationId);
        return relationId ? awardTitlesByPresentationId.get(relationId) ?? [] : [];
      })()
    }))
  ];

  return (
    <>
      <PageHero title={messages.publications.title} subtitle={sectionTitle} />

      <section className="section achievement-section">
        <div className="container list">
          <PresentationsBrowser
            items={items}
            messages={{
              searchLabel: presentationMessages.searchLabel,
              searchPlaceholder: presentationMessages.searchPlaceholder,
              groupFilterLabel: presentationMessages.groupFilterLabel,
              allGroups: presentationMessages.allGroups,
              hasegawaLabel: presentationMessages.hasegawa,
              studentsLabel: presentationMessages.students,
              yearFilterLabel: messages.publications.yearFilterLabel,
              allYears: messages.publications.allYears,
              sortLabel: presentationMessages.sortLabel,
              sortNewest: presentationMessages.sortNewest,
              sortOldest: presentationMessages.sortOldest,
              sortTitleAsc: presentationMessages.sortTitleAsc,
              sortTitleDesc: presentationMessages.sortTitleDesc,
              pageLabel: presentationMessages.pageLabel,
              previousPage: messages.publications.previousPage,
              nextPage: messages.publications.nextPage,
              pageSummary: presentationMessages.pageSummary,
              clearFilters: presentationMessages.clearFilters,
              noResultsTitle: presentationMessages.noResultsTitle,
              noResultsBody: presentationMessages.noResultsBody
            }}
          />
        </div>
      </section>
    </>
  );
}
