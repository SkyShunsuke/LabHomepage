module.exports = [
"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "error",
        "warn"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) {
    global.prisma = prisma;
}
}),
"[project]/src/lib/mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "previewBlogs",
    ()=>previewBlogs,
    "previewMembers",
    ()=>previewMembers,
    "previewNews",
    ()=>previewNews,
    "previewProject",
    ()=>previewProject,
    "previewPublications",
    ()=>previewPublications
]);
const now = new Date("2026-03-15T00:00:00.000Z");
const previewNews = [
    {
        id: "preview-news-1",
        title: "Best Paper Award at AI Systems 2026",
        slug: "best-paper-award-ai-systems-2026",
        summary: "Our work on robust mobile sensing won the best paper award.",
        content: "Our latest paper presents a lightweight architecture for robust sensing in dynamic environments.",
        isPublished: true,
        publishedAt: new Date("2026-03-10T00:00:00.000Z"),
        createdAt: now,
        updatedAt: now
    },
    {
        id: "preview-news-2",
        title: "Two New PhD Students Joined the Lab",
        slug: "new-phd-students-2026",
        summary: "We are excited to welcome two new doctoral students this spring.",
        content: "The new members will work on human-centered AI and optimization systems.",
        isPublished: true,
        publishedAt: new Date("2026-03-01T00:00:00.000Z"),
        createdAt: now,
        updatedAt: now
    },
    {
        id: "preview-news-3",
        title: "Open-Source Toolkit Released",
        slug: "open-source-toolkit-release",
        summary: "We released our in-house experiment tracking toolkit as open-source.",
        content: "The toolkit helps teams run repeatable experiments across edge devices.",
        isPublished: true,
        publishedAt: new Date("2026-02-20T00:00:00.000Z"),
        createdAt: now,
        updatedAt: now
    }
];
const previewProject = {
    id: "preview-project-1",
    title: "Adaptive Mobility Intelligence",
    slug: "adaptive-mobility-intelligence",
    summary: "Real-time prediction and planning from urban sensor streams.",
    description: "This project explores a foundation-model-assisted pipeline for traffic forecasting, demand estimation, and safe route optimization.",
    linkUrl: "https://example.com/projects/adaptive-mobility-intelligence",
    isFeatured: true,
    createdAt: now,
    updatedAt: now
};
const previewMembers = [
    {
        id: "preview-member-1",
        name: "Dr. Akira Hasegawa",
        role: "Principal Investigator",
        bio: "Works on trustworthy AI systems for real-world sensing and decision-making.\n[RESEARCH_TOPIC]Foundation-model-driven ubiquitous intelligence",
        email: "hasegawa@example.com",
        websiteUrl: "https://example.com/akira",
        imageUrl: "/assets/logos/logo_light.png",
        order: 1,
        isActive: true,
        createdAt: now,
        updatedAt: now
    },
    {
        id: "preview-member-2",
        name: "Mina Sato",
        role: "PhD Student",
        bio: "Researches neural optimization in uncertain, dynamic environments.\n[RESEARCH_TOPIC]Neural optimization for adaptive sensing",
        email: "mina.sato@example.com",
        websiteUrl: null,
        imageUrl: null,
        order: 2,
        isActive: true,
        createdAt: now,
        updatedAt: now
    },
    {
        id: "preview-member-3",
        name: "Koji Tanaka",
        role: "Research Engineer",
        bio: "Builds production pipelines for edge ML experiments and model evaluation.\n[RESEARCH_TOPIC]Edge AI systems and evaluation pipelines",
        email: null,
        websiteUrl: "https://example.com/koji",
        imageUrl: null,
        order: 3,
        isActive: true,
        createdAt: now,
        updatedAt: now
    }
];
const previewPublications = [
    {
        id: "preview-pub-1",
        title: "Robust On-Device Representation Learning for Urban Mobility",
        authors: "A. Hasegawa, M. Sato, K. Tanaka",
        venue: "NeurIPS",
        year: 2025,
        url: "https://example.com/papers/robust-on-device-representation-learning",
        teaserImageUrl: "/assets/banners/banner_light.png",
        abstract: "We propose an on-device representation learning approach that remains stable under distribution shift.",
        createdAt: now,
        updatedAt: now
    },
    {
        id: "preview-pub-2",
        title: "Human-Centered Explanations for Multimodal Sensing Models",
        authors: "M. Sato, A. Hasegawa",
        venue: "CHI",
        year: 2024,
        url: "https://example.com/papers/human-centered-explanations",
        teaserImageUrl: null,
        abstract: "This paper studies explanation interfaces that improve operator trust and decision speed.",
        createdAt: now,
        updatedAt: now
    }
];
const previewBlogs = [
    {
        id: "preview-blog-1",
        title: "Designing Reliable Mobile AI Pipelines",
        slug: "designing-reliable-mobile-ai-pipelines",
        excerpt: "A practical checklist for robust data collection and evaluation on mobile devices.",
        markdown: `# Designing Reliable Mobile AI Pipelines

In this article, we share a practical checklist for deploying machine learning on mobile systems.

## Key Principles

- Treat data drift as a first-class production concern.
- Keep model monitoring close to the user context.
- Design fallback behavior before model rollout.

These principles improve both robustness and maintainability.`,
        isPublished: true,
        publishedAt: new Date("2026-03-05T00:00:00.000Z"),
        createdAt: now,
        updatedAt: now
    },
    {
        id: "preview-blog-2",
        title: "How We Evaluate Human-Centered AI",
        slug: "how-we-evaluate-human-centered-ai",
        excerpt: "Our internal rubric for measuring utility, transparency, and trust.",
        markdown: `# How We Evaluate Human-Centered AI

Evaluation should include both model metrics and user outcomes.

## Our Rubric

1. Task success and speed.
2. Comprehension of model behavior.
3. Confidence under uncertainty.

Balanced evaluation helps us ship systems that people can rely on.`,
        isPublished: true,
        publishedAt: new Date("2026-02-26T00:00:00.000Z"),
        createdAt: now,
        updatedAt: now
    }
];
}),
"[project]/src/lib/member-research-topic.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMemberBio",
    ()=>buildMemberBio,
    "parseMemberBio",
    ()=>parseMemberBio
]);
const RESEARCH_TOPIC_MARKER = "[RESEARCH_TOPIC]";
function parseMemberBio(rawBio) {
    const normalizedBio = rawBio.trim();
    const markerMatch = normalizedBio.match(/(?:^|\n)\[RESEARCH_TOPIC\]([\s\S]*)$/);
    if (!markerMatch || typeof markerMatch.index !== "number") {
        return {
            bio: normalizedBio,
            researchTopic: ""
        };
    }
    const bio = normalizedBio.slice(0, markerMatch.index).trim();
    const researchTopic = markerMatch[1].trim();
    return {
        bio,
        researchTopic
    };
}
function buildMemberBio(bio, researchTopic) {
    const normalizedBio = bio.trim();
    const normalizedResearchTopic = researchTopic.trim();
    if (!normalizedResearchTopic) {
        return normalizedBio;
    }
    return `${normalizedBio}\n${RESEARCH_TOPIC_MARKER}${normalizedResearchTopic}`;
}
}),
"[project]/src/lib/members-remote-csv.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRemoteCsvMembers",
    ()=>getRemoteCsvMembers,
    "normalizeGoogleDriveImageUrl",
    ()=>normalizeGoogleDriveImageUrl
]);
const REQUIRED_HEADERS = [
    "name",
    "role"
];
const CANONICAL_HEADERS = new Set([
    "name",
    "role",
    "email",
    "homepage",
    "researchArea",
    "comment",
    "imageUrl",
    "graduateYear"
]);
const HEADER_ALIASES = {
    name: "name",
    名前: "name",
    氏名: "name",
    role: "role",
    position: "role",
    職位: "role",
    役職: "role",
    email: "email",
    mail: "email",
    メール: "email",
    メールアドレス: "email",
    homepage: "homepage",
    home: "homepage",
    website: "homepage",
    websiteurl: "homepage",
    personalpage: "homepage",
    ホームページ: "homepage",
    ウェブサイト: "homepage",
    researcharea: "researchArea",
    research: "researchArea",
    researchtopic: "researchArea",
    研究分野: "researchArea",
    研究領域: "researchArea",
    研究テーマ: "researchArea",
    comment: "comment",
    bio: "comment",
    備考: "comment",
    コメント: "comment",
    紹介: "comment",
    imageurl: "imageUrl",
    image: "imageUrl",
    photo: "imageUrl",
    photourl: "imageUrl",
    写真: "imageUrl",
    画像: "imageUrl",
    画像url: "imageUrl",
    写真url: "imageUrl",
    graduateyear: "graduateYear",
    graduationyear: "graduateYear",
    graduation: "graduateYear",
    gradyear: "graduateYear",
    卒業年: "graduateYear",
    修了年: "graduateYear"
};
function asOptionalString(value) {
    if (!value) {
        return null;
    }
    const normalized = value.trim();
    return normalized.length > 0 ? normalized : null;
}
function parseCsv(content) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;
    for(let i = 0; i < content.length; i += 1){
        const char = content[i];
        const next = content[i + 1];
        if (inQuotes) {
            if (char === '"' && next === '"') {
                field += '"';
                i += 1;
            } else if (char === '"') {
                inQuotes = false;
            } else {
                field += char;
            }
            continue;
        }
        if (char === '"') {
            inQuotes = true;
            continue;
        }
        if (char === ",") {
            row.push(field);
            field = "";
            continue;
        }
        if (char === "\n") {
            row.push(field);
            rows.push(row);
            row = [];
            field = "";
            continue;
        }
        if (char === "\r") {
            continue;
        }
        field += char;
    }
    if (field.length > 0 || row.length > 0) {
        row.push(field);
        rows.push(row);
    }
    return rows;
}
function fileIdFromGoogleDriveUrl(url) {
    if (!url.hostname.includes("drive.google.com")) {
        return null;
    }
    const match = url.pathname.match(/\/file\/d\/([^/]+)/);
    if (match?.[1]) {
        return match[1];
    }
    const openId = url.searchParams.get("id");
    return openId || null;
}
function normalizeGoogleDriveImageUrl(rawUrl) {
    if (!rawUrl) {
        return null;
    }
    const trimmed = rawUrl.trim();
    if (!trimmed) {
        return null;
    }
    // Treat common placeholder paths as "no image" to avoid noisy 404s like /default.png.
    if (/^(\/)?default\.png$/i.test(trimmed)) {
        return null;
    }
    try {
        const url = new URL(trimmed);
        const fileId = fileIdFromGoogleDriveUrl(url);
        if (!fileId) {
            return trimmed;
        }
        // Proxy via our app to avoid browser-side cross-origin and redirect-related image failures.
        return `/api/member-image?id=${encodeURIComponent(fileId)}`;
    } catch  {
        return trimmed;
    }
}
function normalizeGoogleCsvUrl(rawUrl) {
    try {
        const url = new URL(rawUrl);
        if (url.hostname.includes("docs.google.com") && url.pathname.includes("/spreadsheets/d/")) {
            const pathMatch = url.pathname.match(/^\/spreadsheets\/d\/([^/]+)/);
            if (!pathMatch?.[1]) {
                return rawUrl;
            }
            const hashGidMatch = url.hash.match(/gid=(\d+)/);
            const gid = url.searchParams.get("gid") || hashGidMatch?.[1] || "0";
            const csvUrl = new URL(url.toString());
            csvUrl.pathname = `/spreadsheets/d/${pathMatch[1]}/export`;
            csvUrl.search = "";
            csvUrl.searchParams.set("format", "csv");
            csvUrl.searchParams.set("gid", gid);
            csvUrl.hash = "";
            return csvUrl.toString();
        }
        const fileId = fileIdFromGoogleDriveUrl(url);
        if (fileId) {
            return `https://drive.google.com/uc?export=download&id=${fileId}`;
        }
    } catch  {
        return rawUrl;
    }
    return rawUrl;
}
function parseRevalidateSeconds(raw) {
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        return 300;
    }
    return Math.floor(parsed);
}
function normalizeHeader(rawHeader) {
    return rawHeader.replace(/^\uFEFF/, "").trim().replace(/[^\p{L}\p{N}]+/gu, "").toLowerCase();
}
function toCanonicalHeader(rawHeader) {
    const normalized = normalizeHeader(rawHeader);
    const aliased = HEADER_ALIASES[normalized] ?? normalized;
    if (CANONICAL_HEADERS.has(aliased)) {
        return aliased;
    }
    if (normalized.includes("name")) {
        return "name";
    }
    if (normalized.includes("role") || normalized.includes("position")) {
        return "role";
    }
    if (normalized.includes("mail")) {
        return "email";
    }
    if (normalized.includes("home") || normalized.includes("website")) {
        return "homepage";
    }
    if (normalized.includes("research")) {
        return "researchArea";
    }
    if (normalized.includes("comment") || normalized.includes("bio")) {
        return "comment";
    }
    if (normalized.includes("image") || normalized.includes("photo")) {
        return "imageUrl";
    }
    if (normalized.includes("graduate") || normalized.includes("graduation") || normalized.includes("gradyear")) {
        return "graduateYear";
    }
    return null;
}
async function getRemoteCsvMembers() {
    const csvUrl = process.env.MEMBERS_SPREADSHEET_URL?.trim();
    if (!csvUrl) {
        return null;
    }
    const url = normalizeGoogleCsvUrl(csvUrl);
    const revalidateSeconds = parseRevalidateSeconds(process.env.MEMBERS_SPREADSHEET_REVALIDATE_SECONDS);
    const response = await fetch(url, {
        next: {
            revalidate: revalidateSeconds
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch members spreadsheet: ${response.status} ${response.statusText}`);
    }
    const csvText = await response.text();
    const records = parseCsv(csvText);
    if (records.length === 0) {
        return [];
    }
    let headerRowIndex = -1;
    let headers = [];
    for(let i = 0; i < records.length; i += 1){
        const candidateHeaders = records[i].map((value)=>toCanonicalHeader(value));
        const availableHeaders = candidateHeaders.filter((header)=>header !== null);
        const hasAllRequired = REQUIRED_HEADERS.every((required)=>availableHeaders.includes(required));
        if (hasAllRequired) {
            headerRowIndex = i;
            headers = candidateHeaders;
            break;
        }
    }
    if (headerRowIndex < 0) {
        throw new Error("Missing required members headers: name and/or role");
    }
    const parsed = [];
    for(let i = headerRowIndex + 1; i < records.length; i += 1){
        const values = new Map();
        const row = records[i];
        for(let j = 0; j < headers.length; j += 1){
            const header = headers[j];
            if (!header) {
                continue;
            }
            values.set(header, row[j] ?? "");
        }
        const name = asOptionalString(values.get("name"));
        const role = asOptionalString(values.get("role"));
        const email = asOptionalString(values.get("email"));
        const homepage = asOptionalString(values.get("homepage"));
        const researchArea = asOptionalString(values.get("researchArea"));
        const comment = asOptionalString(values.get("comment"));
        const imageUrl = normalizeGoogleDriveImageUrl(asOptionalString(values.get("imageUrl")));
        const graduateYear = asOptionalString(values.get("graduateYear"));
        if (!name && !role && !email && !homepage && !researchArea && !comment && !imageUrl && !graduateYear) {
            continue;
        }
        if (!name || !role) {
            console.warn(`Skipping members row ${i + 1}: name and role are required.`, JSON.stringify({
                name: values.get("name") ?? "",
                role: values.get("role") ?? ""
            }));
            continue;
        }
        parsed.push({
            id: `remote-member-${i}`,
            name,
            role,
            email,
            homepage,
            researchArea,
            comment,
            imageUrl,
            graduateYear
        });
    }
    return parsed;
}
}),
"[project]/src/lib/news-remote-csv.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRemoteCsvNews",
    ()=>getRemoteCsvNews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$members$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/members-remote-csv.ts [app-rsc] (ecmascript)");
;
const REQUIRED_HEADERS = [
    "date",
    "title",
    "content"
];
const CANONICAL_HEADERS = new Set([
    "date",
    "title",
    "content",
    "type",
    "highlight",
    "imageUrl",
    "externalUrl"
]);
const HEADER_ALIASES = {
    date: "date",
    publishedat: "date",
    publisheddate: "date",
    datetime: "date",
    日付: "date",
    title: "title",
    タイトル: "title",
    content: "content",
    body: "content",
    本文: "content",
    内容: "content",
    type: "type",
    category: "type",
    種別: "type",
    区分: "type",
    highlight: "highlight",
    featured: "highlight",
    注目: "highlight",
    imageurl: "imageUrl",
    image: "imageUrl",
    photo: "imageUrl",
    画像: "imageUrl",
    画像url: "imageUrl",
    写真url: "imageUrl",
    externalurl: "externalUrl",
    link: "externalUrl",
    url: "externalUrl",
    参考url: "externalUrl",
    外部url: "externalUrl",
    外部リンク: "externalUrl"
};
function asOptionalString(value) {
    if (!value) {
        return null;
    }
    const normalized = value.trim();
    return normalized.length > 0 ? normalized : null;
}
function parseCsv(content) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;
    for(let i = 0; i < content.length; i += 1){
        const char = content[i];
        const next = content[i + 1];
        if (inQuotes) {
            if (char === '"' && next === '"') {
                field += '"';
                i += 1;
            } else if (char === '"') {
                inQuotes = false;
            } else {
                field += char;
            }
            continue;
        }
        if (char === '"') {
            inQuotes = true;
            continue;
        }
        if (char === ",") {
            row.push(field);
            field = "";
            continue;
        }
        if (char === "\n") {
            row.push(field);
            rows.push(row);
            row = [];
            field = "";
            continue;
        }
        if (char === "\r") {
            continue;
        }
        field += char;
    }
    if (field.length > 0 || row.length > 0) {
        row.push(field);
        rows.push(row);
    }
    return rows;
}
function fileIdFromGoogleDriveUrl(url) {
    if (!url.hostname.includes("drive.google.com")) {
        return null;
    }
    const match = url.pathname.match(/\/file\/d\/([^/]+)/);
    if (match?.[1]) {
        return match[1];
    }
    const openId = url.searchParams.get("id");
    return openId || null;
}
function normalizeGoogleCsvUrl(rawUrl) {
    try {
        const url = new URL(rawUrl);
        if (url.hostname.includes("docs.google.com") && url.pathname.includes("/spreadsheets/d/")) {
            const pathMatch = url.pathname.match(/^\/spreadsheets\/d\/([^/]+)/);
            if (!pathMatch?.[1]) {
                return rawUrl;
            }
            const hashGidMatch = url.hash.match(/gid=(\d+)/);
            const gid = url.searchParams.get("gid") || hashGidMatch?.[1] || "0";
            const csvUrl = new URL(url.toString());
            csvUrl.pathname = `/spreadsheets/d/${pathMatch[1]}/export`;
            csvUrl.search = "";
            csvUrl.searchParams.set("format", "csv");
            csvUrl.searchParams.set("gid", gid);
            csvUrl.hash = "";
            return csvUrl.toString();
        }
        const fileId = fileIdFromGoogleDriveUrl(url);
        if (fileId) {
            return `https://drive.google.com/uc?export=download&id=${fileId}`;
        }
    } catch  {
        return rawUrl;
    }
    return rawUrl;
}
function parseRevalidateSeconds(raw) {
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        return 300;
    }
    return Math.floor(parsed);
}
function normalizeHeader(rawHeader) {
    return rawHeader.replace(/^\uFEFF/, "").trim().replace(/[^\p{L}\p{N}]+/gu, "").toLowerCase();
}
function toCanonicalHeader(rawHeader) {
    const normalized = normalizeHeader(rawHeader);
    const aliased = HEADER_ALIASES[normalized] ?? normalized;
    if (CANONICAL_HEADERS.has(aliased)) {
        return aliased;
    }
    if (normalized.includes("date")) {
        return "date";
    }
    if (normalized.includes("title")) {
        return "title";
    }
    if (normalized.includes("content") || normalized.includes("body")) {
        return "content";
    }
    if (normalized.includes("type") || normalized.includes("category")) {
        return "type";
    }
    if (normalized.includes("highlight") || normalized.includes("feature")) {
        return "highlight";
    }
    if (normalized.includes("image") || normalized.includes("photo")) {
        return "imageUrl";
    }
    if (normalized.includes("external") || normalized === "url" || normalized.includes("link")) {
        return "externalUrl";
    }
    return null;
}
function parseDateOrThrow(raw, rowNumber) {
    if (!raw) {
        throw new Error(`CSV row ${rowNumber} is invalid. date is required.`);
    }
    const parsed = new Date(raw);
    if (Number.isNaN(parsed.getTime())) {
        throw new Error(`CSV row ${rowNumber} has invalid date: ${raw}`);
    }
    return parsed;
}
async function getRemoteCsvNews() {
    const csvUrl = process.env.NEWS_SPREADSHEET_URL?.trim();
    if (!csvUrl) {
        return null;
    }
    const url = normalizeGoogleCsvUrl(csvUrl);
    const revalidateSeconds = parseRevalidateSeconds(process.env.NEWS_SPREADSHEET_REVALIDATE_SECONDS);
    const response = await fetch(url, {
        next: {
            revalidate: revalidateSeconds
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch news CSV: ${response.status} ${response.statusText}`);
    }
    const csvText = await response.text();
    const records = parseCsv(csvText);
    if (records.length === 0) {
        return [];
    }
    const headers = records[0].map((value)=>toCanonicalHeader(value));
    const availableHeaders = headers.filter((header)=>header !== null);
    for (const required of REQUIRED_HEADERS){
        if (!availableHeaders.includes(required)) {
            throw new Error(`Missing required CSV header: ${required}`);
        }
    }
    const parsed = [];
    for(let i = 1; i < records.length; i += 1){
        const values = new Map();
        const row = records[i];
        for(let j = 0; j < headers.length; j += 1){
            const header = headers[j];
            if (!header) {
                continue;
            }
            values.set(header, row[j] ?? "");
        }
        const title = asOptionalString(values.get("title"));
        const content = asOptionalString(values.get("content"));
        const dateValue = asOptionalString(values.get("date"));
        if (!title && !content && !dateValue) {
            continue;
        }
        if (!title || !content) {
            throw new Error(`CSV row ${i + 1} is invalid. title and content are required.`);
        }
        parsed.push({
            id: `remote-news-${i}`,
            publishedAt: parseDateOrThrow(dateValue, i + 1),
            title,
            content,
            type: asOptionalString(values.get("type")),
            highlight: asOptionalString(values.get("highlight")),
            imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$members$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeGoogleDriveImageUrl"])(asOptionalString(values.get("imageUrl"))),
            externalUrl: asOptionalString(values.get("externalUrl"))
        });
    }
    parsed.sort((a, b)=>b.publishedAt.getTime() - a.publishedAt.getTime());
    return parsed;
}
}),
"[project]/src/lib/publications-remote-csv.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRemoteCsvPublications",
    ()=>getRemoteCsvPublications
]);
const REQUIRED_HEADERS = [
    "title",
    "authors",
    "venue",
    "year"
];
const CANONICAL_HEADERS = new Set([
    "title",
    "authors",
    "venue",
    "year",
    "url",
    "projectUrl",
    "codeUrl",
    "teaserImageUrl",
    "abstract",
    "highlight",
    "feature"
]);
const HEADER_ALIASES = {
    title: "title",
    authors: "authors",
    venue: "venue",
    year: "year",
    url: "url",
    projecturl: "projectUrl",
    codeurl: "codeUrl",
    teaserimageurl: "teaserImageUrl",
    abstract: "abstract",
    highlight: "highlight",
    feature: "feature",
    featured: "feature",
    features: "feature",
    featureorder: "feature",
    feature_rank: "feature",
    featureorderrank: "feature",
    feature_order: "feature"
};
function asOptionalString(value) {
    if (!value) {
        return null;
    }
    const normalized = value.trim();
    return normalized.length > 0 ? normalized : null;
}
function parseCsv(content) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;
    for(let i = 0; i < content.length; i += 1){
        const char = content[i];
        const next = content[i + 1];
        if (inQuotes) {
            if (char === '"' && next === '"') {
                field += '"';
                i += 1;
            } else if (char === '"') {
                inQuotes = false;
            } else {
                field += char;
            }
            continue;
        }
        if (char === '"') {
            inQuotes = true;
            continue;
        }
        if (char === ",") {
            row.push(field);
            field = "";
            continue;
        }
        if (char === "\n") {
            row.push(field);
            rows.push(row);
            row = [];
            field = "";
            continue;
        }
        if (char === "\r") {
            continue;
        }
        field += char;
    }
    if (field.length > 0 || row.length > 0) {
        row.push(field);
        rows.push(row);
    }
    return rows;
}
function fileIdFromGoogleDriveUrl(url) {
    if (url.hostname.includes("drive.google.com")) {
        const match = url.pathname.match(/\/file\/d\/([^/]+)/);
        if (match?.[1]) {
            return match[1];
        }
        const openId = url.searchParams.get("id");
        if (openId) {
            return openId;
        }
    }
    return null;
}
function normalizeGoogleCsvUrl(rawUrl) {
    try {
        const url = new URL(rawUrl);
        if (url.hostname.includes("docs.google.com") && url.pathname.includes("/spreadsheets/d/")) {
            const pathMatch = url.pathname.match(/^\/spreadsheets\/d\/([^/]+)/);
            if (!pathMatch?.[1]) {
                return rawUrl;
            }
            const hashGidMatch = url.hash.match(/gid=(\d+)/);
            const gid = url.searchParams.get("gid") || hashGidMatch?.[1] || "0";
            const csvUrl = new URL(url.toString());
            csvUrl.pathname = `/spreadsheets/d/${pathMatch[1]}/gviz/tq`;
            csvUrl.search = "";
            csvUrl.searchParams.set("tqx", "out:csv");
            csvUrl.searchParams.set("gid", gid);
            csvUrl.hash = "";
            return csvUrl.toString();
        }
        const fileId = fileIdFromGoogleDriveUrl(url);
        if (fileId) {
            return `https://drive.google.com/uc?export=download&id=${fileId}`;
        }
    } catch  {
        return rawUrl;
    }
    return rawUrl;
}
function parseRevalidateSeconds(raw) {
    const parsed = Number(raw);
    if (!Number.isFinite(parsed) || parsed <= 0) {
        return 300;
    }
    return Math.floor(parsed);
}
function normalizeHeader(rawHeader) {
    return rawHeader.replace(/^\uFEFF/, "").trim().replace(/\s+/g, "").toLowerCase();
}
function toCanonicalHeader(rawHeader) {
    const normalized = normalizeHeader(rawHeader);
    const aliased = HEADER_ALIASES[normalized] ?? normalized;
    if (CANONICAL_HEADERS.has(aliased)) {
        return aliased;
    }
    return null;
}
function parseOptionalPositiveInteger(raw, fieldName, rowNumber) {
    const value = asOptionalString(raw);
    if (!value) {
        return null;
    }
    const parsed = Number(value);
    const normalized = Math.trunc(parsed);
    const isIntegerLike = Number.isFinite(parsed) && Math.abs(parsed - normalized) < Number.EPSILON;
    if (!isIntegerLike || !Number.isSafeInteger(normalized) || normalized <= 0) {
        throw new Error(`CSV row ${rowNumber} has invalid ${fieldName}: ${value}`);
    }
    return normalized;
}
async function getRemoteCsvPublications() {
    const csvUrl = process.env.PUBLICATIONS_CSV_URL?.trim();
    if (!csvUrl) {
        return null;
    }
    const url = normalizeGoogleCsvUrl(csvUrl);
    const revalidateSeconds = parseRevalidateSeconds(process.env.PUBLICATIONS_CSV_REVALIDATE_SECONDS);
    const response = await fetch(url, {
        next: {
            revalidate: revalidateSeconds
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch publication CSV: ${response.status} ${response.statusText}`);
    }
    const csvText = await response.text();
    const records = parseCsv(csvText);
    if (records.length === 0) {
        return [];
    }
    const headers = records[0].map((value)=>toCanonicalHeader(value));
    const availableHeaders = headers.filter((header)=>header !== null);
    for (const required of REQUIRED_HEADERS){
        if (!availableHeaders.includes(required)) {
            throw new Error(`Missing required CSV header: ${required}`);
        }
    }
    const parsed = [];
    for(let i = 1; i < records.length; i += 1){
        const values = new Map();
        const row = records[i];
        for(let j = 0; j < headers.length; j += 1){
            const header = headers[j];
            if (!header) {
                continue;
            }
            values.set(header, row[j] ?? "");
        }
        const title = asOptionalString(values.get("title"));
        const authors = asOptionalString(values.get("authors"));
        const venue = asOptionalString(values.get("venue"));
        const yearRaw = asOptionalString(values.get("year"));
        if (!title && !authors && !venue && !yearRaw) {
            continue;
        }
        if (!title || !authors || !venue || !yearRaw) {
            throw new Error(`CSV row ${i + 1} is invalid. title, authors, venue, and year are required.`);
        }
        const year = Number(yearRaw);
        if (!Number.isFinite(year) || !Number.isInteger(year)) {
            throw new Error(`CSV row ${i + 1} has invalid year: ${yearRaw}`);
        }
        parsed.push({
            id: `remote-csv-${i}`,
            title,
            authors,
            venue,
            year,
            url: asOptionalString(values.get("url")),
            projectUrl: asOptionalString(values.get("projectUrl")),
            codeUrl: asOptionalString(values.get("codeUrl")),
            teaserImageUrl: asOptionalString(values.get("teaserImageUrl")),
            abstract: asOptionalString(values.get("abstract")),
            highlight: asOptionalString(values.get("highlight")),
            feature: parseOptionalPositiveInteger(values.get("feature"), "feature", i + 1)
        });
    }
    parsed.sort((a, b)=>b.year - a.year);
    return parsed;
}
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlogBySlug",
    ()=>getBlogBySlug,
    "getBlogs",
    ()=>getBlogs,
    "getFeaturedProject",
    ()=>getFeaturedProject,
    "getFeaturedPublications",
    ()=>getFeaturedPublications,
    "getLatestNews",
    ()=>getLatestNews,
    "getMembers",
    ()=>getMembers,
    "getNews",
    ()=>getNews,
    "getPublications",
    ()=>getPublications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2d$research$2d$topic$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/member-research-topic.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$members$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/members-remote-csv.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$news$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/news-remote-csv.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$publications$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/publications-remote-csv.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function isDesignPreviewEnabled() {
    return process.env.DESIGN_PREVIEW === "1" || process.env.DESIGN_PREVIEW === "true";
}
async function getLatestNews(limit = 3) {
    const normalizedLimit = Math.max(0, limit);
    if (normalizedLimit === 0) {
        return [];
    }
    if (isDesignPreviewEnabled()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["previewNews"].slice(0, normalizedLimit).map(toPublicNewsFromDbRecord);
    }
    const remoteCsvNews = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$news$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRemoteCsvNews"])().catch((error)=>{
        console.error("Failed to load remote news spreadsheet.", error);
        return null;
    });
    if (remoteCsvNews) {
        return remoteCsvNews.slice(0, normalizedLimit).map((item)=>({
                id: item.id,
                title: item.title,
                slug: null,
                summary: summarizeNewsContent(item.content),
                content: item.content,
                publishedAt: item.publishedAt,
                type: item.type,
                highlight: item.highlight,
                imageUrl: item.imageUrl,
                externalUrl: item.externalUrl
            }));
    }
    const news = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].news.findMany({
        where: {
            isPublished: true
        },
        orderBy: {
            publishedAt: "desc"
        },
        take: normalizedLimit
    });
    return news.map(toPublicNewsFromDbRecord);
}
async function getNews() {
    if (isDesignPreviewEnabled()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["previewNews"].map(toPublicNewsFromDbRecord);
    }
    const remoteCsvNews = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$news$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRemoteCsvNews"])().catch((error)=>{
        console.error("Failed to load remote news spreadsheet.", error);
        return null;
    });
    if (remoteCsvNews) {
        return remoteCsvNews.map((item)=>({
                id: item.id,
                title: item.title,
                slug: null,
                summary: summarizeNewsContent(item.content),
                content: item.content,
                publishedAt: item.publishedAt,
                type: item.type,
                highlight: item.highlight,
                imageUrl: item.imageUrl,
                externalUrl: item.externalUrl
            }));
    }
    const news = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].news.findMany({
        where: {
            isPublished: true
        },
        orderBy: {
            publishedAt: "desc"
        }
    });
    return news.map(toPublicNewsFromDbRecord);
}
async function getFeaturedProject() {
    if (isDesignPreviewEnabled()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["previewProject"];
    }
    const featured = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.findFirst({
        where: {
            isFeatured: true
        },
        orderBy: {
            updatedAt: "desc"
        }
    });
    if (featured) {
        return featured;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].project.findFirst({
        orderBy: {
            updatedAt: "desc"
        }
    });
}
async function getMembers() {
    if (isDesignPreviewEnabled()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["previewMembers"].map((member)=>{
            const { bio, researchTopic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2d$research$2d$topic$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMemberBio"])(member.bio);
            return {
                id: member.id,
                name: member.name,
                role: member.role,
                email: member.email,
                websiteUrl: member.websiteUrl,
                imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$members$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeGoogleDriveImageUrl"])(member.imageUrl),
                researchArea: researchTopic || null,
                comment: bio || null,
                graduateYear: null
            };
        });
    }
    const remoteCsvMembers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$members$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRemoteCsvMembers"])().catch((error)=>{
        console.error("Failed to load remote members spreadsheet.", error);
        return null;
    });
    if (remoteCsvMembers) {
        return remoteCsvMembers.map((member)=>({
                id: member.id,
                name: member.name,
                role: member.role,
                email: member.email,
                websiteUrl: member.homepage,
                imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$members$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeGoogleDriveImageUrl"])(member.imageUrl),
                researchArea: member.researchArea,
                comment: member.comment,
                graduateYear: member.graduateYear
            }));
    }
    const dbMembers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].member.findMany({
        where: {
            isActive: true
        },
        orderBy: [
            {
                order: "asc"
            },
            {
                createdAt: "asc"
            }
        ]
    });
    return dbMembers.map((member)=>{
        const { bio, researchTopic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$member$2d$research$2d$topic$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMemberBio"])(member.bio);
        return {
            id: member.id,
            name: member.name,
            role: member.role,
            email: member.email,
            websiteUrl: member.websiteUrl,
            imageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$members$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeGoogleDriveImageUrl"])(member.imageUrl),
            researchArea: researchTopic || null,
            comment: bio || null,
            graduateYear: null
        };
    });
}
async function getPublications() {
    if (isDesignPreviewEnabled()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["previewPublications"];
    }
    const remoteCsvPublications = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$publications$2d$remote$2d$csv$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRemoteCsvPublications"])().catch((error)=>{
        console.error("Failed to load remote publication CSV.", error);
        return null;
    });
    if (remoteCsvPublications) {
        return remoteCsvPublications;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].publication.findMany({
        orderBy: [
            {
                year: "desc"
            },
            {
                createdAt: "desc"
            }
        ]
    });
}
function parseFeatureRank(value) {
    if (typeof value === "number" && Number.isSafeInteger(value) && value > 0) {
        return value;
    }
    if (typeof value === "string") {
        const trimmed = value.trim();
        if (!/^\d+$/.test(trimmed)) {
            return null;
        }
        const parsed = Number(trimmed);
        if (Number.isSafeInteger(parsed) && parsed > 0) {
            return parsed;
        }
    }
    return null;
}
function getFeaturedPublications(publications, limit = 3) {
    if (limit <= 0 || publications.length === 0) {
        return [];
    }
    const ranked = publications.map((publication, index)=>({
            publication,
            index,
            rank: parseFeatureRank(publication.feature)
        })).filter((entry)=>entry.rank !== null).sort((left, right)=>{
        if (left.rank !== right.rank) {
            return left.rank - right.rank;
        }
        return left.index - right.index;
    }).slice(0, limit).map((entry)=>entry.publication);
    if (ranked.length >= limit) {
        return ranked;
    }
    const selectedIds = new Set(ranked.map((publication)=>publication.id));
    const fallback = publications.filter((publication)=>!selectedIds.has(publication.id)).slice(0, limit - ranked.length);
    return [
        ...ranked,
        ...fallback
    ];
}
async function getBlogs() {
    if (isDesignPreviewEnabled()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["previewBlogs"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].blogPost.findMany({
        where: {
            isPublished: true
        },
        orderBy: {
            publishedAt: "desc"
        }
    });
}
async function getBlogBySlug(slug) {
    if (isDesignPreviewEnabled()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["previewBlogs"].find((post)=>post.slug === slug) ?? null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].blogPost.findFirst({
        where: {
            slug,
            isPublished: true
        }
    });
}
function summarizeNewsContent(content, maxLength = 180) {
    const compact = content.replace(/\s+/g, " ").trim();
    if (compact.length <= maxLength) {
        return compact;
    }
    return `${compact.slice(0, maxLength - 1)}…`;
}
function toPublicNewsFromDbRecord(item) {
    return {
        id: item.id,
        title: item.title,
        slug: item.slug,
        summary: item.summary,
        content: item.content,
        publishedAt: item.publishedAt,
        type: null,
        highlight: null,
        imageUrl: null,
        externalUrl: null
    };
}
}),
"[project]/src/lib/lab-contact.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLabContact",
    ()=>getLabContact
]);
const DEFAULT_LAB_EMAIL = "t-hase@u-fukui.ac.jp";
const DEFAULT_LAB_ADDRESS = "3-9-1 Bunkyo, Fukui, 910-0017";
const PLACEHOLDER_EMAILS = new Set([
    "contact@example.edu"
]);
const PLACEHOLDER_ADDRESSES = new Set([
    "University campus address",
    "Your campus address"
]);
function resolveContactValue(raw, placeholders, fallback) {
    const value = raw?.trim();
    if (!value || placeholders.has(value)) {
        return fallback;
    }
    return value;
}
function getLabContact() {
    return {
        email: resolveContactValue(("TURBOPACK compile-time value", "t-hase@u-fukui.ac.jp"), PLACEHOLDER_EMAILS, DEFAULT_LAB_EMAIL),
        address: resolveContactValue(("TURBOPACK compile-time value", "3-9-1 Bunkyo, Fukui, 910-0017"), PLACEHOLDER_ADDRESSES, DEFAULT_LAB_ADDRESS)
    };
}
}),
"[project]/src/lib/news-utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNewsTypeVariant",
    ()=>getNewsTypeVariant
]);
function getNewsTypeVariant(type) {
    if (!type) {
        return "general";
    }
    const normalized = type.trim().toLowerCase();
    if (normalized.includes("award") || normalized.includes("achievement") || normalized.includes("paper") || normalized.includes("受賞")) {
        return "achievement";
    }
    if (normalized.includes("event") || normalized.includes("conference") || normalized.includes("workshop") || normalized.includes("seminar") || normalized.includes("イベント") || normalized.includes("学会")) {
        return "event";
    }
    if (normalized.includes("media") || normalized.includes("press") || normalized.includes("news") || normalized.includes("記事")) {
        return "media";
    }
    if (normalized.includes("recruit") || normalized.includes("hiring") || normalized.includes("join") || normalized.includes("募集")) {
        return "recruitment";
    }
    if (normalized.includes("release") || normalized.includes("update") || normalized.includes("announcement") || normalized.includes("公開") || normalized.includes("更新") || normalized.includes("お知らせ")) {
        return "announcement";
    }
    return "general";
}
}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "slugify",
    ()=>slugify
]);
function slugify(input) {
    return input.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
}
function toDateLocale(locale) {
    if (locale === "ja") {
        return "ja-JP";
    }
    if (locale === "zh") {
        return "zh-CN";
    }
    return "en-US";
}
function formatDate(date, locale = "en") {
    return new Intl.DateTimeFormat(toDateLocale(locale), {
        year: "numeric",
        month: "short",
        day: "numeric"
    }).format(date);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/messages/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$request$2d$locale$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/request-locale.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lab$2d$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/lab-contact.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$news$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/news-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function formatAuthors(authors) {
    return authors.split(";").map((name)=>name.trim()).filter((name)=>name.length > 0).join(", ");
}
async function generateMetadata() {
    const locale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$request$2d$locale$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveRequestLocale"])();
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessages"])(locale);
    return {
        title: messages.metadata.siteTitle,
        description: messages.metadata.siteDescription
    };
}
async function HomePage() {
    const locale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$request$2d$locale$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveRequestLocale"])();
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessages"])(locale);
    const [news, featuredProject, publications] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestNews"])(3),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedProject"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublications"])()
    ]);
    const featuredPublications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedPublications"])(publications, 3);
    const { email, address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lab$2d$contact$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLabContact"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container hero-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "hero-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge",
                                    children: messages.home.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: messages.home.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: messages.home.intro
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/join-us",
                                            className: "button button-primary",
                                            children: messages.home.primaryCta
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/research",
                                            className: "button button-secondary",
                                            children: messages.home.secondaryCta
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "hero-card hero-panel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                className: "hero-teaser-media",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/photos/haselab_neon.jpg",
                                    alt: "Hasegawa Laboratory",
                                    className: "hero-teaser-image"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "card all-members-photo-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/photos/members2026.png",
                            alt: "All laboratory members",
                            className: "all-members-photo",
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: messages.home.aboutTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: messages.home.aboutBody
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/research",
                                        className: "inline-link",
                                        children: messages.home.aboutCta
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: messages.home.featuredPublicationsTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-3",
                            children: featuredPublications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: messages.publications.noItemsTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "muted",
                                        children: messages.publications.noItemsBody
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this) : featuredPublications.map((publication)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: `card publication-proof-card ${publication.highlight ? "publication-highlighted" : ""}`,
                                    children: [
                                        publication.highlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "publication-highlight-label",
                                            children: publication.highlight
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "publication-authors muted",
                                            children: formatAuthors(publication.authors)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: publication.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "publication-venue-line muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: publication.venue
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this),
                                                ", ",
                                                publication.year,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, this),
                                        publication.url || publication.projectUrl || publication.codeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "publication-links",
                                            children: [
                                                publication.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: publication.url,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "publication-link-icon",
                                                    "aria-label": "Paper",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M14 2v5h5M9 12h6M9 16h6",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 25
                                                }, this) : null,
                                                publication.projectUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: publication.projectUrl || "",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "publication-link-icon",
                                                    "aria-label": "Project page",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 4l7 4v8l-7 4-7-4V8z",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 12l7-4M12 12L5 8M12 12v8",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 25
                                                }, this) : null,
                                                publication.codeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: publication.codeUrl || "",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "publication-link-icon",
                                                    "aria-label": "Code",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M9 8L4 12l5 4M15 8l5 4-5 4M14 5l-4 14",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.8",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 25
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, publication.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/publications",
                                className: "inline-link",
                                children: messages.home.viewAllPublications
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: messages.home.latestNewsTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "timeline",
                            children: news.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "card timeline-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: messages.home.noNewsTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "muted",
                                        children: messages.home.noNewsBody
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this) : news.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "card timeline-item home-news-item",
                                    children: [
                                        item.type ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `badge news-type-badge news-type-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$news$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsTypeVariant"])(item.type)} home-news-type`,
                                            children: item.type
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "badge",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])(item.publishedAt, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this),
                                        item.highlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "news-highlight",
                                            children: item.highlight
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 37
                                        }, this) : null,
                                        item.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.imageUrl,
                                            alt: `${item.title} image`,
                                            className: "news-image",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "news-content",
                                            children: item.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this),
                                        item.externalUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "news-external-wrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: item.externalUrl,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "news-external-button",
                                                children: messages.news.visitExternal
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/news",
                                className: "inline-link",
                                children: messages.home.viewAllNews
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: messages.home.latestProjectTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "card",
                            children: featuredProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: featuredProject.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "muted",
                                        children: featuredProject.summary
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: featuredProject.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    featuredProject.linkUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: featuredProject.linkUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "inline-link",
                                            children: messages.home.visitProject
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: messages.home.noProject
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: messages.home.contactTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: messages.home.quickInquiryTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: messages.home.quickInquiryBody
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "muted",
                                    children: [
                                        messages.home.labels.email,
                                        ": ",
                                        email,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        messages.home.labels.address,
                                        ": ",
                                        address
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-actions",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${email}`,
                                        className: "button button-primary",
                                        children: messages.home.sendEmailCta
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3d43705c._.js.map