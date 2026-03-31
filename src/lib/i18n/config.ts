import type { Locale } from "@/lib/i18n/types";

export const SUPPORTED_LOCALES: Locale[] = ["en", "ja", "zh"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE_NAME = "site_locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value != null && SUPPORTED_LOCALES.includes(value as Locale);
}

function mapLanguageTagToLocale(tag: string): Locale | null {
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

export function resolvePreferredLocale(acceptLanguageHeader: string | null): Locale {
  if (!acceptLanguageHeader) {
    return DEFAULT_LOCALE;
  }

  const tags = acceptLanguageHeader
    .split(",")
    .map((part) => part.split(";")[0]?.trim())
    .filter((part): part is string => Boolean(part));

  for (const tag of tags) {
    const mapped = mapLanguageTagToLocale(tag);
    if (mapped) {
      return mapped;
    }
  }

  return DEFAULT_LOCALE;
}
