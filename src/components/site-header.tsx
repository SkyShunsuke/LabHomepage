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
  const achievementLabels =
    locale === "ja"
      ? {
          publications: "学術論文",
          presentations: "学会発表",
          talks: "講演",
          awards: "受賞",
          articlesBooks: "記事・著書",
          grants: "研究費",
          collaboration: "共同研究"
        }
      : {
          publications: "Publications",
          presentations: "Presentations",
          talks: "Talks",
          awards: "Awards",
          articlesBooks: "Articles/Books",
          grants: "Grants",
          collaboration: "Collaboration"
        };
  const achievementSubItems = [
    { href: "/publications", label: achievementLabels.publications },
    { href: "/publications/presentations", label: achievementLabels.presentations },
    { href: "/publications/talks", label: achievementLabels.talks },
    { href: "/publications/awards", label: achievementLabels.awards },
    { href: "/publications/articles-books", label: achievementLabels.articlesBooks },
    { href: "/publications/grants", label: achievementLabels.grants },
    { href: "/publications/collaboration", label: achievementLabels.collaboration }
  ];
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

              if (item.href === "/publications") {
                return (
                  <div key={item.href} className="nav-dropdown">
                    <Link
                      href={item.href}
                      className={`nav-link${isActive ? " active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    <div className="nav-dropdown-menu" aria-label="Achievement sections">
                      {achievementSubItems.map((subItem) => {
                        const isSubItemActive =
                          pathname === subItem.href ||
                          (subItem.href !== "/publications" && pathname.startsWith(`${subItem.href}/`));

                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`nav-dropdown-item${isSubItemActive ? " nav-dropdown-item-active" : ""}`}
                            aria-current={isSubItemActive ? "page" : undefined}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

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
