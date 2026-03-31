import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, isLocale, resolvePreferredLocale } from "@/lib/i18n/config";
import { isGitHubPagesBuild } from "@/lib/runtime-mode";
import type { Locale } from "@/lib/i18n/types";

export async function resolveRequestLocale(): Promise<Locale> {
  if (isGitHubPagesBuild()) {
    return DEFAULT_LOCALE;
  }

  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  return resolvePreferredLocale(headerStore.get("accept-language")) || DEFAULT_LOCALE;
}
