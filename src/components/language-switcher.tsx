"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE_NAME } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/types";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  languageNames: Record<Locale, string>;
};

const locales: Locale[] = ["en", "ja", "zh"];
const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "1";

export function LanguageSwitcher({ currentLocale, label, languageNames }: LanguageSwitcherProps) {
  if (isGitHubPages) {
    return null;
  }

  const pathname = usePathname() || `/${currentLocale}`;

  useEffect(() => {
    document.cookie = `${LOCALE_COOKIE_NAME}=${currentLocale}; path=/; max-age=31536000; samesite=lax`;
  }, [currentLocale]);

  return (
    <div className="language-switcher" aria-label={label} data-current-locale={currentLocale}>
      <span className="language-switcher-label">{label}</span>
      <div className="language-switcher-options">
        {locales.map((locale) => {
          const href = `/locale?lang=${locale}&redirect=${encodeURIComponent(pathname)}`;
          const isActive = locale === currentLocale;

          return (
            <a
              key={locale}
              href={href}
              className={`language-link language-link-${locale}${isActive ? " active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {languageNames[locale]}
            </a>
          );
        })}
      </div>
    </div>
  );
}
