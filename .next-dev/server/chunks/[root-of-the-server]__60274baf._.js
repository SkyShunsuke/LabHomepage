module.exports = [
"[project]/.next-internal/server/app/locale/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/i18n/config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LOCALE",
    ()=>DEFAULT_LOCALE,
    "LOCALE_COOKIE_NAME",
    ()=>LOCALE_COOKIE_NAME,
    "SUPPORTED_LOCALES",
    ()=>SUPPORTED_LOCALES,
    "isLocale",
    ()=>isLocale,
    "resolvePreferredLocale",
    ()=>resolvePreferredLocale
]);
const SUPPORTED_LOCALES = [
    "en",
    "ja",
    "zh"
];
const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE_NAME = "site_locale";
function isLocale(value) {
    return value != null && SUPPORTED_LOCALES.includes(value);
}
function mapLanguageTagToLocale(tag) {
    const normalized = tag.toLowerCase();
    if (normalized.startsWith("ja")) {
        return "ja";
    }
    if (normalized.startsWith("zh")) {
        return "zh";
    }
    if (normalized.startsWith("en")) {
        return "en";
    }
    return null;
}
function resolvePreferredLocale(acceptLanguageHeader) {
    if (!acceptLanguageHeader) {
        return DEFAULT_LOCALE;
    }
    const tags = acceptLanguageHeader.split(",").map((part)=>part.split(";")[0]?.trim()).filter((part)=>Boolean(part));
    for (const tag of tags){
        const mapped = mapLanguageTagToLocale(tag);
        if (mapped) {
            return mapped;
        }
    }
    return DEFAULT_LOCALE;
}
}),
"[project]/src/app/locale/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/config.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    const url = new URL(request.url);
    const langParam = url.searchParams.get("lang");
    const redirectParam = url.searchParams.get("redirect") || `/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"]}`;
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLocale"])(langParam) ? langParam : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"];
    const safeRedirect = redirectParam.startsWith("/") ? redirectParam : `/${locale}`;
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(safeRedirect, request.url));
    response.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LOCALE_COOKIE_NAME"], locale, {
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365
    });
    return response;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__60274baf._.js.map