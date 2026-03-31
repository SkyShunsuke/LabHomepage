"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale, Messages } from "@/lib/i18n/types";

type SiteHeaderProps = {
  locale: Locale;
  messages: Messages["header"];
};

function isActivePath(targetHref: string, pathname: string): boolean {
  if (targetHref === "/") {
    return pathname === "/";
  }

  return pathname === targetHref || pathname.startsWith(`${targetHref}/`);
}

export function SiteHeader({ locale, messages }: SiteHeaderProps) {
  const pathname = usePathname() || "/";
  const navItems = [
    { href: "/", label: messages.nav.home },
    { href: "/research", label: messages.nav.research },
    { href: "/news", label: messages.nav.news },
    { href: "/blogs", label: messages.nav.blogs },
    { href: "/publications", label: messages.nav.publications },
    { href: "/members", label: messages.nav.members },
    { href: "/join-us", label: messages.nav.joinUs },
    { href: "/business", label: messages.nav.business },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <picture className="brand-mark">
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="/assets/logos/favicon.ico"
            />
            <img
              src="/assets/logos/favicon.ico"
              alt=""
              className="brand-logo"
            />
          </picture>
          <span>
            <strong>{messages.brandTitle}</strong>
            <small>{messages.brandSubtitle}</small>
          </span>
        </Link>

        <div className="header-right">
          <LanguageSwitcher
            currentLocale={locale}
            label={messages.languageLabel}
            languageNames={messages.languages}
          />
          <nav aria-label={messages.mainNavAria} className="main-nav">
            {navItems.map((item) => {
              const isActive = isActivePath(item.href, pathname);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${isActive ? " active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
