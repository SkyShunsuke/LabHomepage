"use client";

import { useEffect, useMemo, useState } from "react";
import { getNewsTypeVariant } from "@/lib/news-utils";
import { formatDate } from "@/lib/utils";

type NewsItem = {
  id: string;
  publishedAt: string;
  title: string;
  summary: string;
  content: string;
  type: string | null;
  highlight: string | null;
  imageUrl: string | null;
  externalUrl: string | null;
};

type NewsBrowserMessages = {
  visitExternal: string;
  moreDetails: string;
  searchLabel: string;
  searchPlaceholder: string;
  typeFilterLabel: string;
  allTypes: string;
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
};

type NewsBrowserProps = {
  items: NewsItem[];
  locale: string;
  messages: NewsBrowserMessages;
};

type SortOption = "newest" | "oldest" | "title-asc" | "title-desc";

const PAGE_SIZE = 10;

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

export function NewsBrowser({ items, locale, messages }: NewsBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const typeOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .map((item) => item.type?.trim())
            .filter((value): value is string => Boolean(value))
        )
      ).sort((a, b) => a.localeCompare(b)),
    [items]
  );

  const filteredAndSortedItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = items.filter((item) => {
      if (selectedType !== "all" && (item.type ?? "").trim() !== selectedType) {
        return false;
      }

      if (!query) {
        return true;
      }

      const target = [item.title, item.summary, item.content, item.type ?? "", item.highlight ?? ""]
        .join(" ")
        .toLowerCase();
      return target.includes(query);
    });

    return filtered.sort((left, right) => {
      if (sortBy === "newest") {
        return new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime();
      }

      if (sortBy === "oldest") {
        return new Date(left.publishedAt).getTime() - new Date(right.publishedAt).getTime();
      }

      if (sortBy === "title-asc") {
        return left.title.localeCompare(right.title);
      }

      return right.title.localeCompare(left.title);
    });
  }, [items, searchQuery, selectedType, sortBy]);

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
  const pageSummary = messages.pageSummary
    .replace("{from}", String(firstItemNumber))
    .replace("{to}", String(lastItemNumber))
    .replace("{total}", String(filteredAndSortedItems.length));
  const pageTokens = buildPageTokens(totalPages, safeCurrentPage);

  const hasActiveFilters = searchQuery.trim().length > 0 || selectedType !== "all" || sortBy !== "newest";

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
            {messages.typeFilterLabel}
            <select
              value={selectedType}
              onChange={(event) => {
                setSelectedType(event.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">{messages.allTypes}</option>
              {typeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
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
          <p className="muted">{pageSummary}</p>
          {hasActiveFilters ? (
            <button
              type="button"
              className="button button-secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedType("all");
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
          <article key={item.id} className="card home-news-item">
            {item.type ? (
              <span className={`badge news-type-badge news-type-${getNewsTypeVariant(item.type)} home-news-type`}>
                {item.type}
              </span>
            ) : null}
            <p className="badge">{formatDate(new Date(item.publishedAt), locale)}</p>
            <h2>{item.title}</h2>
            {item.highlight ? <p className="news-highlight">{item.highlight}</p> : null}
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={`${item.title} image`} className="news-image" loading="lazy" />
            ) : null}
            <p className="muted">{item.summary}</p>
            {item.content.trim() !== item.summary.trim() ? (
              <details className="news-details">
                <summary className="news-details-summary">{messages.moreDetails}</summary>
                <p className="news-content">{item.content}</p>
                {item.externalUrl ? (
                  <p className="news-external-wrap">
                    <a href={item.externalUrl} target="_blank" rel="noreferrer" className="news-external-button">
                      {messages.visitExternal}
                    </a>
                  </p>
                ) : null}
              </details>
            ) : item.externalUrl ? (
              <p className="news-external-wrap">
                <a href={item.externalUrl} target="_blank" rel="noreferrer" className="news-external-button">
                  {messages.visitExternal}
                </a>
              </p>
            ) : null}
          </article>
        ))
      )}

      {totalPages > 1 ? (
        <div className="news-pagination-wrap">
          <nav className="publication-pagination" aria-label={messages.pageLabel}>
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
          </nav>
        </div>
      ) : null}
    </div>
  );
}
