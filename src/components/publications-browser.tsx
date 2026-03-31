"use client";

import { useEffect, useMemo, useState } from "react";

type PublicationItem = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string | null;
  projectUrl: string | null;
  codeUrl: string | null;
  teaserImageUrl: string | null;
  abstract: string | null;
  highlight: string | null;
};

type PublicationsBrowserMessages = {
  searchLabel: string;
  searchPlaceholder: string;
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
  noResultsTitle: string;
  noResultsBody: string;
  clearFilters: string;
  teaserAltSuffix: string;
  paperAriaLabel: string;
  projectAriaLabel: string;
  codeAriaLabel: string;
};

type PublicationsBrowserProps = {
  items: PublicationItem[];
  messages: PublicationsBrowserMessages;
};

const PAGE_SIZE = 10;

type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

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

function normalize(text: string | null): string {
  return text?.trim().toLowerCase() ?? "";
}

function formatAuthors(authors: string): string {
  return authors
    .split(";")
    .map((name) => name.trim())
    .filter((name) => name.length > 0)
    .join(", ");
}

export function PublicationsBrowser({ items, messages }: PublicationsBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const yearOptions = useMemo(
    () => Array.from(new Set(items.map((item) => item.year))).sort((a, b) => b - a),
    [items]
  );

  const filteredAndSortedItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = items.filter((item) => {
      if (selectedYear !== "all" && String(item.year) !== selectedYear) {
        return false;
      }

      if (!query) {
        return true;
      }

      const target = [item.title, item.authors, item.venue, item.abstract ?? ""].join(" ").toLowerCase();
      return target.includes(query);
    });

    return filtered.sort((left, right) => {
      if (sortBy === "newest") {
        return right.year - left.year || left.title.localeCompare(right.title);
      }

      if (sortBy === "oldest") {
        return left.year - right.year || left.title.localeCompare(right.title);
      }

      if (sortBy === "title-asc") {
        return left.title.localeCompare(right.title);
      }

      return right.title.localeCompare(left.title);
    });
  }, [items, searchQuery, selectedYear, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedItems.length / PAGE_SIZE));
  const safeCurrentPage = clampPage(currentPage, totalPages);

  useEffect(() => {
    if (safeCurrentPage !== currentPage) {
      setCurrentPage(safeCurrentPage);
    }
  }, [currentPage, safeCurrentPage]);

  const pageStart = (safeCurrentPage - 1) * PAGE_SIZE;
  const pageItems = filteredAndSortedItems.slice(pageStart, pageStart + PAGE_SIZE);
  const firstItemNumber = filteredAndSortedItems.length === 0 ? 0 : pageStart + 1;
  const lastItemNumber = filteredAndSortedItems.length === 0 ? 0 : pageStart + pageItems.length;

  const pageTokens = buildPageTokens(totalPages, safeCurrentPage);

  const pagination = (
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
  );

  const hasActiveFilters =
    normalize(searchQuery).length > 0 || normalize(selectedYear) !== "all";

  return (
    <div className="list">
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
                <option key={`year-${year}`} value={String(year)}>
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

        <div className="publication-controls-foot">
          <p className="muted">
            {messages.pageSummary.replace("{from}", String(firstItemNumber)).replace("{to}", String(lastItemNumber)).replace("{total}", String(filteredAndSortedItems.length))}
          </p>
          {hasActiveFilters ? (
            <button
              type="button"
              className="button button-secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("all");
                setSortBy("newest");
                setCurrentPage(1);
              }}
            >
              {messages.clearFilters}
            </button>
          ) : null}
        </div>
      </article>

      {pageItems.length === 0 ? (
        <article className="card">
          <h2>{messages.noResultsTitle}</h2>
          <p className="muted">{messages.noResultsBody}</p>
        </article>
      ) : (
        pageItems.map((item) => (
          <article key={item.id} className={`card publication-card ${item.highlight ? "publication-highlighted" : ""}`}>
            {item.highlight ? <p className="publication-highlight-label">{item.highlight}</p> : null}
            {item.teaserImageUrl ? (
              <img
                src={item.teaserImageUrl}
                alt={`${item.title} ${messages.teaserAltSuffix}`}
                className="publication-teaser"
                loading="lazy"
              />
            ) : null}
            <p className="publication-authors muted">{formatAuthors(item.authors)}</p>
            <h2>{item.title}</h2>
            <p className="publication-venue-line muted">
              <em>{item.venue}</em>, {item.year}.
            </p>
            {item.abstract ? (
              <blockquote className="publication-citation">
                <p>{item.abstract}</p>
              </blockquote>
            ) : null}
            {item.url || item.projectUrl || item.codeUrl ? (
              <div className="publication-links">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="publication-link-icon" aria-label={messages.paperAriaLabel}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M14 2v5h5M9 12h6M9 16h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </a>
                ) : null}
                {item.projectUrl ? (
                  <a href={item.projectUrl} target="_blank" rel="noreferrer" className="publication-link-icon" aria-label={messages.projectAriaLabel}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 4l7 4v8l-7 4-7-4V8z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M12 12l7-4M12 12L5 8M12 12v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </a>
                ) : null}
                {item.codeUrl ? (
                  <a href={item.codeUrl} target="_blank" rel="noreferrer" className="publication-link-icon" aria-label={messages.codeAriaLabel}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 8L4 12l5 4M15 8l5 4-5 4M14 5l-4 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : null}
              </div>
            ) : null}
          </article>
        ))
      )}

      {pagination}
    </div>
  );
}
