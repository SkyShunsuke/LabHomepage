import Link from "next/link";
import type { Metadata } from "next";
import { getFeaturedProject, getFeaturedPublications, getLatestNews, getPublications } from "@/lib/data";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getLabContact } from "@/lib/lab-contact";
import { getNewsTypeVariant } from "@/lib/news-utils";
import { formatDate } from "@/lib/utils";

function formatAuthors(authors: string): string {
  return authors
    .split(";")
    .map((name) => name.trim())
    .filter((name) => name.length > 0)
    .join(", ");
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.metadata.siteTitle,
    description: messages.metadata.siteDescription
  };
}

export default async function HomePage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const [news, featuredProject, publications] = await Promise.all([
    getLatestNews(3, locale),
    getFeaturedProject(),
    getPublications()
  ]);
  const featuredPublications = getFeaturedPublications(publications, 3);
  const { email, address } = getLabContact();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <article className="hero-card">
            <span className="badge">{messages.home.badge}</span>
            <h1>{messages.home.title}</h1>
            <p>{messages.home.intro}</p>
            <div className="hero-actions">
              <Link href="/join-us" className="button button-primary">
                {messages.home.primaryCta}
              </Link>
              <Link href="/research" className="button button-secondary">
                {messages.home.secondaryCta}
              </Link>
            </div>
          </article>

          <aside className="hero-card hero-panel">
            <picture className="hero-teaser-media">
              <img src="/assets/photos/haselab_neon.jpg" alt="Hasegawa Laboratory" className="hero-teaser-image" />
            </picture>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card all-members-photo-card">
            <img
              src="/assets/photos/members2026.png"
              alt="All laboratory members"
              className="all-members-photo"
              loading="lazy"
            />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{messages.home.aboutTitle}</h2>
          <article className="card">
            <p>{messages.home.aboutBody}</p>
            <p>
              <Link href="/research" className="inline-link">
                {messages.home.aboutCta}
              </Link>
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{messages.home.featuredPublicationsTitle}</h2>
          <div className="grid grid-3">
            {featuredPublications.length === 0 ? (
              <article className="card">
                <h3>{messages.publications.noItemsTitle}</h3>
                <p className="muted">{messages.publications.noItemsBody}</p>
              </article>
            ) : (
              featuredPublications.map((publication) => (
                <article
                  key={publication.id}
                  className={`card publication-proof-card ${
                    (publication as { highlight?: string | null }).highlight ? "publication-highlighted" : ""
                  }`}
                >
                  {(publication as { highlight?: string | null }).highlight ? (
                    <p className="publication-highlight-label">
                      {(publication as { highlight?: string | null }).highlight}
                    </p>
                  ) : null}
                  <p className="publication-authors muted">{formatAuthors(publication.authors)}</p>
                  <h3>{publication.title}</h3>
                  <p className="publication-venue-line muted">
                    <em>{publication.venue}</em>, {publication.year}.
                  </p>
                  {publication.url ||
                  (publication as { projectUrl?: string | null }).projectUrl ||
                  (publication as { codeUrl?: string | null }).codeUrl ? (
                    <div className="publication-links">
                      {publication.url ? (
                        <a
                          href={publication.url}
                          target="_blank"
                          rel="noreferrer"
                          className="publication-link-icon"
                          aria-label="Paper"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M14 2v5h5M9 12h6M9 16h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </a>
                      ) : null}
                      {(publication as { projectUrl?: string | null }).projectUrl ? (
                        <a
                          href={(publication as { projectUrl?: string | null }).projectUrl || ""}
                          target="_blank"
                          rel="noreferrer"
                          className="publication-link-icon"
                          aria-label="Project page"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 4l7 4v8l-7 4-7-4V8z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M12 12l7-4M12 12L5 8M12 12v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </a>
                      ) : null}
                      {(publication as { codeUrl?: string | null }).codeUrl ? (
                        <a
                          href={(publication as { codeUrl?: string | null }).codeUrl || ""}
                          target="_blank"
                          rel="noreferrer"
                          className="publication-link-icon"
                          aria-label="Code"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9 8L4 12l5 4M15 8l5 4-5 4M14 5l-4 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              ))
            )}
          </div>
          <p>
            <Link href="/publications" className="inline-link">
              {messages.home.viewAllPublications}
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{messages.home.latestNewsTitle}</h2>
          <div className="timeline">
            {news.length === 0 ? (
              <article className="card timeline-item">
                <h3>{messages.home.noNewsTitle}</h3>
                <p className="muted">{messages.home.noNewsBody}</p>
              </article>
            ) : (
              news.map((item) => (
                <article key={item.id} className="card timeline-item home-news-item">
                  {item.type ? (
                    <span className={`badge news-type-badge news-type-${getNewsTypeVariant(item.type)} home-news-type`}>
                      {item.type}
                    </span>
                  ) : null}
                  <p className="badge">{formatDate(item.publishedAt, locale)}</p>
                  <h3 className="news-title">{item.title}</h3>
                  {item.highlight ? <p className="news-highlight">{item.highlight}</p> : null}
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={`${item.title} image`} className="news-image" loading="lazy" />
                  ) : null}
                  <details className="news-details">
                    <summary className="news-details-summary">{messages.news.moreDetails}</summary>
                    <p className="news-content">{item.content}</p>
                    {item.externalUrl ? (
                      <p className="news-external-wrap">
                        <a href={item.externalUrl} target="_blank" rel="noreferrer" className="news-external-button">
                          {messages.news.visitExternal}
                        </a>
                      </p>
                    ) : null}
                  </details>
                </article>
              ))
            )}
          </div>
          <p>
            <Link href="/news" className="inline-link">
              {messages.home.viewAllNews}
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{messages.home.latestProjectTitle}</h2>
          <article className="card">
            {featuredProject ? (
              <>
                <h3>{featuredProject.title}</h3>
                <p className="muted">{featuredProject.summary}</p>
                <p>{featuredProject.description}</p>
                {featuredProject.linkUrl ? (
                  <p>
                    <a href={featuredProject.linkUrl} target="_blank" rel="noreferrer" className="inline-link">
                      {messages.home.visitProject}
                    </a>
                  </p>
                ) : null}
              </>
            ) : (
              <p className="muted">{messages.home.noProject}</p>
            )}
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{messages.home.contactTitle}</h2>
          <article className="card">
            <h3>{messages.home.quickInquiryTitle}</h3>
            <p className="muted">{messages.home.quickInquiryBody}</p>
            <p className="muted">
              {messages.home.labels.email}: {email}
              <br />
              {messages.home.labels.address}: {address}
            </p>
            <div className="hero-actions">
              <a href={`mailto:${email}`} className="button button-primary">
                {messages.home.sendEmailCta}
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
