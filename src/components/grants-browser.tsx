"use client";

import { useMemo, useState } from "react";

type GrantGroup = "hasegawa" | "students";
type SortOption =
  | "title-asc"
  | "title-desc"
  | "grant-asc"
  | "grant-desc"
  | "amount-desc"
  | "amount-asc";

export type GrantItem = {
  id: string;
  researcher: string | null;
  type: string | null;
  title: string;
  grantName: string | null;
  amount: string | null;
  duration: string | null;
  group: GrantGroup;
};

type GrantsBrowserMessages = {
  searchLabel: string;
  searchPlaceholder: string;
  groupFilterLabel: string;
  allGroups: string;
  hasegawaLabel: string;
  studentsLabel: string;
  typeFilterLabel: string;
  allTypes: string;
  sortLabel: string;
  sortTitleAsc: string;
  sortTitleDesc: string;
  sortGrantAsc: string;
  sortGrantDesc: string;
  sortAmountDesc: string;
  sortAmountAsc: string;
  clearFilters: string;
  noResultsTitle: string;
  noResultsBody: string;
  typeLabel: string;
  grantNameLabel: string;
  amountLabel: string;
  durationLabel: string;
};

type GrantsBrowserProps = {
  items: GrantItem[];
  messages: GrantsBrowserMessages;
};

export function GrantsBrowser({ items, messages }: GrantsBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<"all" | GrantGroup>("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("title-asc");

  const parseAmount = (amount: string | null): number => {
    if (!amount) {
      return Number.NEGATIVE_INFINITY;
    }
    const normalized = amount.replace(/[^\d.]/g, "");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : Number.NEGATIVE_INFINITY;
  };

  const typeOptions = useMemo(() => {
    return Array.from(
      new Set(items.map((item) => item.type?.trim()).filter((value): value is string => Boolean(value)))
    ).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = items.filter((item) => {
      if (selectedGroup !== "all" && item.group !== selectedGroup) {
        return false;
      }
      if (selectedType !== "all" && (item.type?.trim() ?? "") !== selectedType) {
        return false;
      }
      if (!query) {
        return true;
      }

      const target = [
        item.title,
        item.researcher ?? "",
        item.type ?? "",
        item.grantName ?? "",
        item.amount ?? "",
        item.duration ?? ""
      ]
        .join(" ")
        .toLowerCase();
      return target.includes(query);
    });

    return filtered.sort((left, right) => {
      if (sortBy === "title-asc") {
        return left.title.localeCompare(right.title);
      }
      if (sortBy === "title-desc") {
        return right.title.localeCompare(left.title);
      }
      if (sortBy === "grant-asc") {
        return (left.grantName ?? "").localeCompare(right.grantName ?? "");
      }
      if (sortBy === "grant-desc") {
        return (right.grantName ?? "").localeCompare(left.grantName ?? "");
      }
      if (sortBy === "amount-desc") {
        return parseAmount(right.amount) - parseAmount(left.amount) || left.title.localeCompare(right.title);
      }
      return parseAmount(left.amount) - parseAmount(right.amount) || left.title.localeCompare(right.title);
    });
  }, [items, searchQuery, selectedGroup, selectedType, sortBy]);

  const hasActiveFilters =
    searchQuery.trim().length > 0 || selectedGroup !== "all" || selectedType !== "all" || sortBy !== "title-asc";

  return (
    <div className="list">
      <div className="presentation-view-switch" role="tablist" aria-label={messages.groupFilterLabel}>
        <button
          type="button"
          className={`presentation-view-button${selectedGroup === "all" ? " presentation-view-button-active" : ""}`}
          aria-pressed={selectedGroup === "all"}
          onClick={() => setSelectedGroup("all")}
        >
          {messages.allGroups}
        </button>
        <button
          type="button"
          className={`presentation-view-button${selectedGroup === "hasegawa" ? " presentation-view-button-active" : ""}`}
          aria-pressed={selectedGroup === "hasegawa"}
          onClick={() => setSelectedGroup("hasegawa")}
        >
          {messages.hasegawaLabel}
        </button>
        <button
          type="button"
          className={`presentation-view-button${selectedGroup === "students" ? " presentation-view-button-active" : ""}`}
          aria-pressed={selectedGroup === "students"}
          onClick={() => setSelectedGroup("students")}
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
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>

          <label>
            {messages.groupFilterLabel}
            <select value={selectedGroup} onChange={(event) => setSelectedGroup(event.target.value as "all" | GrantGroup)}>
              <option value="all">{messages.allGroups}</option>
              <option value="hasegawa">{messages.hasegawaLabel}</option>
              <option value="students">{messages.studentsLabel}</option>
            </select>
          </label>

          <label>
            {messages.typeFilterLabel}
            <select value={selectedType} onChange={(event) => setSelectedType(event.target.value)}>
              <option value="all">{messages.allTypes}</option>
              {typeOptions.map((type) => (
                <option key={`grant-type-${type}`} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            {messages.sortLabel}
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortOption)}>
              <option value="title-asc">{messages.sortTitleAsc}</option>
              <option value="title-desc">{messages.sortTitleDesc}</option>
              <option value="grant-asc">{messages.sortGrantAsc}</option>
              <option value="grant-desc">{messages.sortGrantDesc}</option>
              <option value="amount-desc">{messages.sortAmountDesc}</option>
              <option value="amount-asc">{messages.sortAmountAsc}</option>
            </select>
          </label>
        </div>

        {hasActiveFilters ? (
          <div className="publication-controls-foot">
            <button
              type="button"
              className="button button-secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedGroup("all");
                setSelectedType("all");
                setSortBy("title-asc");
              }}
            >
              {messages.clearFilters}
            </button>
          </div>
        ) : null}
      </article>

      {filteredItems.length === 0 ? (
        <article className="card">
          <h2>{messages.noResultsTitle}</h2>
          <p className="muted">{messages.noResultsBody}</p>
        </article>
      ) : (
        <article className="card achievement-placeholder-card">
          <ul className="achievement-record-list">
            {filteredItems.map((item) => (
              <li key={item.id} className="achievement-record-item grant-record-item">
                <div className="grant-record-head">
                  <p className="achievement-record-title">{item.title}</p>
                  {item.amount ? <p className="grant-amount-badge">{item.amount}</p> : null}
                </div>
                {item.researcher ? <p className="muted achievement-record-meta">{item.researcher}</p> : null}
                <div className="grant-record-chips">
                  {item.type ? (
                    <div className="grant-record-chip">
                      <span className="grant-record-chip-label">{messages.typeLabel}</span>
                      <span className="grant-record-chip-value">{item.type}</span>
                    </div>
                  ) : null}
                  {item.grantName ? (
                    <div className="grant-record-chip">
                      <span className="grant-record-chip-label">{messages.grantNameLabel}</span>
                      <span className="grant-record-chip-value">{item.grantName}</span>
                    </div>
                  ) : null}
                  {item.duration ? (
                    <div className="grant-record-chip">
                      <span className="grant-record-chip-label">{messages.durationLabel}</span>
                      <span className="grant-record-chip-value">{item.duration}</span>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
}
