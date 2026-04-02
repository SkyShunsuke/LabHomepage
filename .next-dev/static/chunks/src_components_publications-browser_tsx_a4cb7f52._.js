(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/publications-browser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicationsBrowser",
    ()=>PublicationsBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const PAGE_SIZE = 10;
function clampPage(current, totalPages) {
    if (current < 1) {
        return 1;
    }
    if (current > totalPages) {
        return totalPages;
    }
    return current;
}
function buildPageTokens(totalPages, currentPage) {
    if (totalPages <= 7) {
        return Array.from({
            length: totalPages
        }, (_, index)=>index + 1);
    }
    const pages = new Set([
        1,
        totalPages,
        currentPage - 1,
        currentPage,
        currentPage + 1
    ]);
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
    const sorted = Array.from(pages).filter((value)=>value >= 1 && value <= totalPages).sort((a, b)=>a - b);
    const tokens = [];
    for(let i = 0; i < sorted.length; i += 1){
        const current = sorted[i];
        const previous = sorted[i - 1];
        if (i > 0 && previous !== undefined && current - previous > 1) {
            tokens.push("ellipsis");
        }
        tokens.push(current);
    }
    return tokens;
}
function normalize(text) {
    var _text_trim_toLowerCase;
    return (_text_trim_toLowerCase = text === null || text === void 0 ? void 0 : text.trim().toLowerCase()) !== null && _text_trim_toLowerCase !== void 0 ? _text_trim_toLowerCase : "";
}
function formatAuthors(authors) {
    return authors.split(";").map((name)=>name.trim()).filter((name)=>name.length > 0).join(", ");
}
function PublicationsBrowser(param) {
    let { items, messages } = param;
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("newest");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [expandedAbstractIds, setExpandedAbstractIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const yearOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PublicationsBrowser.useMemo[yearOptions]": ()=>Array.from(new Set(items.map({
                "PublicationsBrowser.useMemo[yearOptions]": (item)=>item.year
            }["PublicationsBrowser.useMemo[yearOptions]"]))).sort({
                "PublicationsBrowser.useMemo[yearOptions]": (a, b)=>b - a
            }["PublicationsBrowser.useMemo[yearOptions]"])
    }["PublicationsBrowser.useMemo[yearOptions]"], [
        items
    ]);
    const filteredAndSortedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PublicationsBrowser.useMemo[filteredAndSortedItems]": ()=>{
            const query = searchQuery.trim().toLowerCase();
            const filtered = items.filter({
                "PublicationsBrowser.useMemo[filteredAndSortedItems].filtered": (item)=>{
                    if (selectedYear !== "all" && String(item.year) !== selectedYear) {
                        return false;
                    }
                    if (!query) {
                        return true;
                    }
                    var _item_abstract;
                    const target = [
                        item.title,
                        item.authors,
                        item.venue,
                        (_item_abstract = item.abstract) !== null && _item_abstract !== void 0 ? _item_abstract : ""
                    ].join(" ").toLowerCase();
                    return target.includes(query);
                }
            }["PublicationsBrowser.useMemo[filteredAndSortedItems].filtered"]);
            return filtered.sort({
                "PublicationsBrowser.useMemo[filteredAndSortedItems]": (left, right)=>{
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
                }
            }["PublicationsBrowser.useMemo[filteredAndSortedItems]"]);
        }
    }["PublicationsBrowser.useMemo[filteredAndSortedItems]"], [
        items,
        searchQuery,
        selectedYear,
        sortBy
    ]);
    const totalPages = Math.max(1, Math.ceil(filteredAndSortedItems.length / PAGE_SIZE));
    const safeCurrentPage = clampPage(currentPage, totalPages);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PublicationsBrowser.useEffect": ()=>{
            if (safeCurrentPage !== currentPage) {
                setCurrentPage(safeCurrentPage);
            }
        }
    }["PublicationsBrowser.useEffect"], [
        currentPage,
        safeCurrentPage
    ]);
    const pageStart = (safeCurrentPage - 1) * PAGE_SIZE;
    const pageItems = filteredAndSortedItems.slice(pageStart, pageStart + PAGE_SIZE);
    const firstItemNumber = filteredAndSortedItems.length === 0 ? 0 : pageStart + 1;
    const lastItemNumber = filteredAndSortedItems.length === 0 ? 0 : pageStart + pageItems.length;
    const pageTokens = buildPageTokens(totalPages, safeCurrentPage);
    const pagination = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "publication-pagination",
        "aria-label": messages.pageLabel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "button button-secondary",
                disabled: safeCurrentPage <= 1,
                onClick: ()=>setCurrentPage((page)=>clampPage(page - 1, totalPages)),
                children: messages.previousPage
            }, void 0, false, {
                fileName: "[project]/src/components/publications-browser.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "publication-page-buttons",
                children: pageTokens.map((token, index)=>token === "ellipsis" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "publication-page-ellipsis",
                        children: "..."
                    }, "ellipsis-".concat(index), false, {
                        fileName: "[project]/src/components/publications-browser.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "button ".concat(token === safeCurrentPage ? "button-primary" : "button-secondary"),
                        "aria-current": token === safeCurrentPage ? "page" : undefined,
                        onClick: ()=>setCurrentPage(token),
                        children: token
                    }, "page-".concat(token), false, {
                        fileName: "[project]/src/components/publications-browser.tsx",
                        lineNumber: 195,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/publications-browser.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "button button-secondary",
                disabled: safeCurrentPage >= totalPages,
                onClick: ()=>setCurrentPage((page)=>clampPage(page + 1, totalPages)),
                children: messages.nextPage
            }, void 0, false, {
                fileName: "[project]/src/components/publications-browser.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/publications-browser.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
    const hasActiveFilters = normalize(searchQuery).length > 0 || normalize(selectedYear) !== "all";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "list",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "card publication-controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "publication-controls-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    messages.searchLabel,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        value: searchQuery,
                                        placeholder: messages.searchPlaceholder,
                                        onChange: (event)=>{
                                            setSearchQuery(event.target.value);
                                            setCurrentPage(1);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications-browser.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/publications-browser.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    messages.yearFilterLabel,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedYear,
                                        onChange: (event)=>{
                                            setSelectedYear(event.target.value);
                                            setCurrentPage(1);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: messages.allYears
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this),
                                            yearOptions.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: String(year),
                                                    children: year
                                                }, "year-".concat(year), false, {
                                                    fileName: "[project]/src/components/publications-browser.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/publications-browser.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/publications-browser.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    messages.sortLabel,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sortBy,
                                        onChange: (event)=>{
                                            setSortBy(event.target.value);
                                            setCurrentPage(1);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "newest",
                                                children: messages.sortNewest
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "oldest",
                                                children: messages.sortOldest
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "title-asc",
                                                children: messages.sortTitleAsc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "title-desc",
                                                children: messages.sortTitleDesc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/publications-browser.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/publications-browser.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/publications-browser.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "publication-controls-foot",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: messages.pageSummary.replace("{from}", String(firstItemNumber)).replace("{to}", String(lastItemNumber)).replace("{total}", String(filteredAndSortedItems.length))
                            }, void 0, false, {
                                fileName: "[project]/src/components/publications-browser.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            hasActiveFilters ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "button button-secondary",
                                onClick: ()=>{
                                    setSearchQuery("");
                                    setSelectedYear("all");
                                    setSortBy("newest");
                                    setCurrentPage(1);
                                },
                                children: messages.clearFilters
                            }, void 0, false, {
                                fileName: "[project]/src/components/publications-browser.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/publications-browser.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/publications-browser.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            pageItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: messages.noResultsTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/publications-browser.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: messages.noResultsBody
                    }, void 0, false, {
                        fileName: "[project]/src/components/publications-browser.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/publications-browser.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this) : pageItems.map((item)=>{
                const hasLinks = Boolean(item.url || item.projectUrl || item.codeUrl);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "card publication-card ".concat(item.highlight ? "publication-highlighted" : "", " ").concat(hasLinks ? "publication-card-with-links" : ""),
                    children: [
                        item.highlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "publication-highlight-label",
                            children: item.highlight
                        }, void 0, false, {
                            fileName: "[project]/src/components/publications-browser.tsx",
                            lineNumber: 309,
                            columnNumber: 33
                        }, this) : null,
                        item.teaserImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.teaserImageUrl,
                            alt: "".concat(item.title, " ").concat(messages.teaserAltSuffix),
                            className: "publication-teaser",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/publications-browser.tsx",
                            lineNumber: 311,
                            columnNumber: 17
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "publication-authors muted",
                            children: formatAuthors(item.authors)
                        }, void 0, false, {
                            fileName: "[project]/src/components/publications-browser.tsx",
                            lineNumber: 318,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/publications-browser.tsx",
                            lineNumber: 319,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "publication-venue-line muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: item.venue
                                }, void 0, false, {
                                    fileName: "[project]/src/components/publications-browser.tsx",
                                    lineNumber: 321,
                                    columnNumber: 17
                                }, this),
                                ", ",
                                item.year,
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/publications-browser.tsx",
                            lineNumber: 320,
                            columnNumber: 15
                        }, this),
                        item.abstract ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "publication-abstract",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "publication-abstract-toggle",
                                    "aria-expanded": expandedAbstractIds.has(item.id),
                                    onClick: ()=>{
                                        setExpandedAbstractIds((previous)=>{
                                            const next = new Set(previous);
                                            if (next.has(item.id)) {
                                                next.delete(item.id);
                                            } else {
                                                next.add(item.id);
                                            }
                                            return next;
                                        });
                                    },
                                    children: expandedAbstractIds.has(item.id) ? messages.hideAbstract : messages.showAbstract
                                }, void 0, false, {
                                    fileName: "[project]/src/components/publications-browser.tsx",
                                    lineNumber: 325,
                                    columnNumber: 19
                                }, this),
                                expandedAbstractIds.has(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "publication-citation",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: item.abstract
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications-browser.tsx",
                                        lineNumber: 345,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/publications-browser.tsx",
                                    lineNumber: 344,
                                    columnNumber: 21
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/publications-browser.tsx",
                            lineNumber: 324,
                            columnNumber: 17
                        }, this) : null,
                        item.url || item.projectUrl || item.codeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "publication-links",
                            children: [
                                item.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "publication-link-icon",
                                    "aria-label": messages.paperAriaLabel,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 355,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M14 2v5h5M9 12h6M9 16h6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.8",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 356,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/publications-browser.tsx",
                                        lineNumber: 354,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/publications-browser.tsx",
                                    lineNumber: 353,
                                    columnNumber: 21
                                }, this) : null,
                                item.projectUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.projectUrl,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "publication-link-icon",
                                    "aria-label": messages.projectAriaLabel,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 4l7 4v8l-7 4-7-4V8z",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 363,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 12l7-4M12 12L5 8M12 12v8",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.8",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/publications-browser.tsx",
                                                lineNumber: 364,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/publications-browser.tsx",
                                        lineNumber: 362,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/publications-browser.tsx",
                                    lineNumber: 361,
                                    columnNumber: 21
                                }, this) : null,
                                item.codeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.codeUrl,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "publication-link-icon",
                                    "aria-label": messages.codeAriaLabel,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9 8L4 12l5 4M15 8l5 4-5 4M14 5l-4 14",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.8",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/publications-browser.tsx",
                                            lineNumber: 371,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/publications-browser.tsx",
                                        lineNumber: 370,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/publications-browser.tsx",
                                    lineNumber: 369,
                                    columnNumber: 21
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/publications-browser.tsx",
                            lineNumber: 351,
                            columnNumber: 17
                        }, this) : null
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/components/publications-browser.tsx",
                    lineNumber: 305,
                    columnNumber: 13
                }, this);
            }),
            pagination
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/publications-browser.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s(PublicationsBrowser, "gms5Bx6DnqrTTd3GIZKaUwFPatA=");
_c = PublicationsBrowser;
var _c;
__turbopack_context__.k.register(_c, "PublicationsBrowser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_publications-browser_tsx_a4cb7f52._.js.map