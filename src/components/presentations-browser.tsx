"use client";

import { useEffect, useMemo, useState } from "react";

type PresentationGroup = "hasegawa" | "students";

export type PresentationItem = {
  id: string;
  presentationId: string | null;
  title: string;
  authors: string;
  venue: string;
  date: string;
  site: string | null;
  group: PresentationGroup;
  awardTitles?: string[];
};

type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

type PresentationsBrowserMessages = {
  searchLabel: string;
  searchPlaceholder: string;
  groupFilterLabel: string;
  allGroups: string;
  hasegawaLabel: string;
  studentsLabel: string;
  yearFilterLabel: string;
  allYears: string;
  sortLabel: string;
  sortNewest: string;
  sortOldest: string;
  sortTitleAsc: string;
  sortTitleDesc: string;
  pageLabel: string;
  previousPage: string;
  nextPage: string;
  pageSummary: string;
  clearFilters: string;
  noResultsTitle: string;
  noResultsBody: string;
};

type PresentationsBrowserProps = {
  items: PresentationItem[];
  messages: PresentationsBrowserMessages;
};

const PAGE_SIZE = 20;

function clampPage(current: number, totalPages: number): number {
  if (current < 1) {
    return 1;
  }
  if (current > totalPages) {
    return totalPages;
  }
  return current;
}

function buildPageTokens(totalPages: number, currentPage: number): Array<number | "ellipsis"> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set<number>([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);

  if (currentPage <= 3) {
    pages.add(2);
    pages.add(3);
    pages.add(4);
  }

  if (currentPage >= totalPages - 2) {
    pages.add(totalPages - 1);
    pages.add(totalPages - 2);
    pages.add(totalPages - 3);
  }

  const sorted = Array.from(pages)
    .filter((value) => value >= 1 && value <= totalPages)
    .sort((a, b) => a - b);

  const tokens: Array<number | "ellipsis"> = [];

  for (let i = 0; i < sorted.length; i += 1) {
    const current = sorted[i];
    const previous = sorted[i - 1];

    if (i > 0 && previous !== undefined && current - previous > 1) {
      tokens.push("ellipsis");
    }

    tokens.push(current);
  }

  return tokens;
}

function extractYear(dateValue: string): number | null {
  const match = dateValue.match(/\b(19|20)\d{2}\b/);
  if (!match) {
    return null;
  }

  const parsed = Number(match[0]);
  return Number.isFinite(parsed) ? parsed : null;
}

export function PresentationsBrowser({ items, messages }: PresentationsBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<"all" | PresentationGroup>("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const yearOptions = useMemo(() => {
    const years = items
      .map((item) => extractYear(item.date))
      .filter((year): year is number => year !== null);
    return Array.from(new Set(years)).sort((a, b) => b - a);
  }, [items]);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = items.filter((item) => {
      if (selectedGroup !== "all" && item.group !== selectedGroup) {
        return false;
      }

      if (selectedYear !== "all") {
        const year = extractYear(item.date);
        if (year === null || String(year) !== selectedYear) {
          return false;
        }
      }

      if (!query) {
        return true;
      }

      const target = [item.title, item.authors, item.venue, item.date].join(" ").toLowerCase();
      return target.includes(query);
    });

    return filtered.sort((left, right) => {
      const leftYear = extractYear(left.date) ?? 0;
      const rightYear = extractYear(right.date) ?? 0;

      if (sortBy === "newest") {
        return rightYear - leftYear || right.date.localeCompare(left.date) || left.title.localeCompare(right.title);
      }

      if (sortBy === "oldest") {
        return leftYear - rightYear || left.date.localeCompare(right.date) || left.title.localeCompare(right.title);
      }

      if (sortBy === "title-asc") {
        return left.title.localeCompare(right.title);
      }

      return right.title.localeCompare(left.title);
    });
  }, [items, searchQuery, selectedGroup, selectedYear, sortBy]);

  const hasActiveFilters =
    searchQuery.trim().length > 0 || selectedGroup !== "all" || selectedYear !== "all" || sortBy !== "newest";

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
  const safeCurrentPage = clampPage(currentPage, totalPages);

  useEffect(() => {
    if (safeCurrentPage !== currentPage) {
      setCurrentPage(safeCurrentPage);
    }
  }, [currentPage, safeCurrentPage]);

  const pageStart = (safeCurrentPage - 1) * PAGE_SIZE;
  const pageItems = filteredItems.slice(pageStart, pageStart + PAGE_SIZE);
  const firstItemNumber = filteredItems.length === 0 ? 0 : pageStart + 1;
  const lastItemNumber = filteredItems.length === 0 ? 0 : pageStart + pageItems.length;
  const pageTokens = buildPageTokens(totalPages, safeCurrentPage);

  return (
    <div className="list">
      <div className="presentation-view-switch" role="tablist" aria-label={messages.groupFilterLabel}>
        <button
          type="button"
          className={`presentation-view-button${selectedGroup === "all" ? " presentation-view-button-active" : ""}`}
          aria-pressed={selectedGroup === "all"}
          onClick={() => {
            setSelectedGroup("all");
            setCurrentPage(1);
          }}
        >
          {messages.allGroups}
        </button>
        <button
          type="button"
          className={`presentation-view-button${selectedGroup === "hasegawa" ? " presentation-view-button-active" : ""}`}
          aria-pressed={selectedGroup === "hasegawa"}
          onClick={() => {
            setSelectedGroup("hasegawa");
            setCurrentPage(1);
          }}
        >
          {messages.hasegawaLabel}
        </button>
        <button
          type="button"
          className={`presentation-view-button${selectedGroup === "students" ? " presentation-view-button-active" : ""}`}
          aria-pressed={selectedGroup === "students"}
          onClick={() => {
            setSelectedGroup("students");
            setCurrentPage(1);
          }}
        >
          {messages.studentsLabel}
        </button>
      </div>

      <article className="card publication-controls">
        <div className="publication-controls-grid">
          <label>
            {messages.searchLabel}
            <input
              type="search"
              value={searchQuery}
              placeholder={messages.searchPlaceholder}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setCurrentPage(1);
              }}
            />
          </label>

          <label>
            {messages.groupFilterLabel}
            <select
              value={selectedGroup}
              onChange={(event) => {
                setSelectedGroup(event.target.value as "all" | PresentationGroup);
                setCurrentPage(1);
              }}
            >
              <option value="all">{messages.allGroups}</option>
              <option value="hasegawa">{messages.hasegawaLabel}</option>
              <option value="students">{messages.studentsLabel}</option>
            </select>
          </label>

          <label>
            {messages.yearFilterLabel}
            <select
              value={selectedYear}
              onChange={(event) => {
                setSelectedYear(event.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">{messages.allYears}</option>
              {yearOptions.map((year) => (
                <option key={`presentation-year-${year}`} value={String(year)}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label>
            {messages.sortLabel}
            <select
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value as SortOption);
                setCurrentPage(1);
              }}
            >
              <option value="newest">{messages.sortNewest}</option>
              <option value="oldest">{messages.sortOldest}</option>
              <option value="title-asc">{messages.sortTitleAsc}</option>
              <option value="title-desc">{messages.sortTitleDesc}</option>
            </select>
          </label>
        </div>

        {hasActiveFilters ? (
          <div className="publication-controls-foot">
            <p className="muted">
              {messages.pageSummary
                .replace("{from}", String(firstItemNumber))
                .replace("{to}", String(lastItemNumber))
                .replace("{total}", String(filteredItems.length))}
            </p>
            <button
              type="button"
              className="button button-secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedGroup("all");
                setSelectedYear("all");
                setSortBy("newest");
                setCurrentPage(1);
              }}
            >
              {messages.clearFilters}
            </button>
          </div>
        ) : (
          <div className="publication-controls-foot">
            <p className="muted">
              {messages.pageSummary
                .replace("{from}", String(firstItemNumber))
                .replace("{to}", String(lastItemNumber))
                .replace("{total}", String(filteredItems.length))}
            </p>
          </div>
        )}
      </article>

      {pageItems.length === 0 ? (
        <article className="card">
          <h2>{messages.noResultsTitle}</h2>
          <p className="muted">{messages.noResultsBody}</p>
        </article>
      ) : (
        <article className="card achievement-placeholder-card">
          <ul className="achievement-record-list">
            {pageItems.map((item) => (
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
                {item.awardTitles && item.awardTitles.length > 0 ? (
                  <div className="achievement-record-tags">
                    {item.awardTitles.map((awardTitle) => (
                      <p key={`${item.id}-${awardTitle}`} className="achievement-record-tag achievement-record-tag-award">
                        {awardTitle}
                      </p>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </article>
      )}

      <div className="publication-pagination" aria-label={messages.pageLabel}>
        <button
          type="button"
          className="button button-secondary"
          disabled={safeCurrentPage <= 1}
          onClick={() => setCurrentPage((page) => clampPage(page - 1, totalPages))}
        >
          {messages.previousPage}
        </button>

        <div className="publication-page-buttons">
          {pageTokens.map((token, index) =>
            token === "ellipsis" ? (
              <span className="publication-page-ellipsis" key={`ellipsis-${index}`}>
                ...
              </span>
            ) : (
              <button
                type="button"
                key={`page-${token}`}
                className={`button ${token === safeCurrentPage ? "button-primary" : "button-secondary"}`}
                aria-current={token === safeCurrentPage ? "page" : undefined}
                onClick={() => setCurrentPage(token)}
              >
                {token}
              </button>
            )
          )}
        </div>

        <button
          type="button"
          className="button button-secondary"
          disabled={safeCurrentPage >= totalPages}
          onClick={() => setCurrentPage((page) => clampPage(page + 1, totalPages))}
        >
          {messages.nextPage}
        </button>
      </div>
    </div>
  );
}
