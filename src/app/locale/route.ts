import { NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, isLocale } from "@/lib/i18n/config";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";

export const dynamic = "force-static";

export async function GET(request: Request) {
  if (isGitHubPagesBuild()) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const url = new URL(request.url);
  const langParam = url.searchParams.get("lang");
  const redirectParam = url.searchParams.get("redirect") || `/${DEFAULT_LOCALE}`;

  const locale = isLocale(langParam) ? langParam : DEFAULT_LOCALE;
  const safeRedirect = redirectParam.startsWith("/") ? redirectParam : `/${locale}`;

  const response = NextResponse.redirect(new URL(safeRedirect, request.url));
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365
  });

  return response;
}
