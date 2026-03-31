import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.research.title,
    description: messages.research.subtitle
  };
}

export default async function ResearchPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const research = messages.research;
  const toPoints = (text: string) =>
    text
      .split(/,|、/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

  return (
    <>
      <PageHero title={research.title} subtitle={research.subtitle} />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card">
            <h2>{research.vision.missionTitle}</h2>
            <p className="muted">{research.vision.missionStatement}</p>
            <h3>{research.vision.focusQuestionsTitle}</h3>
            <ul className="join-list">
              {research.vision.focusQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <img src="/assets/photos/research_snapshot.png" alt={research.vision.imageAlt} className="publication-teaser" />
            <p className="research-image-caption muted">{research.vision.imageCaption}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{research.themesTitle}</h2>
          <div className="grid grid-2">
            {research.themes.map((theme) => (
              <article key={theme.title} className="card research-theme-card">
                <div className="research-theme-media-placeholder" aria-hidden="true">
                  {theme.imageSrc ? (
                    <img
                      src={theme.imageSrc}
                      alt={theme.imageAlt ?? theme.title}
                      className={`research-theme-media-image ${theme.imagePosition === "left" ? "research-theme-media-image-left" : ""}`}
                    />
                  ) : (
                    research.themeLabels.imagePlaceholder
                  )}
                </div>
                <h3>{theme.title}</h3>
                <p className="muted">{theme.description}</p>
                <div className="research-theme-detail">
                  <h4>{research.themeLabels.whyItMatters}</h4>
                  <p className="muted">{theme.whyItMatters}</p>
                </div>
                <div className="research-theme-detail">
                  <h4>{research.themeLabels.methods}</h4>
                  <ul className="research-theme-points">
                    {toPoints(theme.methods).map((point) => (
                      <li key={`${theme.title}-method-${point}`} className="muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="research-theme-detail">
                  <h4>{research.themeLabels.outputs}</h4>
                  <ul className="research-theme-points">
                    {toPoints(theme.outputs).map((point) => (
                      <li key={`${theme.title}-output-${point}`} className="muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{research.projectsTitle}</h2>
          <div className="grid grid-2">
            {research.projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p className="muted">
                  <strong>{research.projectLabels.problem}:</strong> {project.problem}
                </p>
                <p className="muted">
                  <strong>{research.projectLabels.approach}:</strong> {project.approach}
                </p>
                <p className="muted">
                  <strong>{research.projectLabels.status}:</strong> {project.status}
                </p>
                <div className="research-link-row">
                  {project.paperUrl ? (
                    <a href={project.paperUrl} className="button button-secondary">
                      {research.projectLinks.paper}
                    </a>
                  ) : null}
                  {project.codeUrl ? (
                    <a href={project.codeUrl} className="button button-secondary">
                      {research.projectLinks.code}
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a href={project.demoUrl} className="button button-secondary">
                      {research.projectLinks.demo}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{research.outcomesTitle}</h2>
          <p className="muted">{research.outcomesSubtitle}</p>
          <div className="grid grid-3">
            {research.outcomes.map((outcome) => (
              <article key={outcome.title} className="card">
                <h3>{outcome.title}</h3>
                <p className="muted">{outcome.description}</p>
              </article>
            ))}
          </div>

          <h3>{research.byNumbersTitle}</h3>
          <div className="research-kpi-grid">
            {research.byNumbers.map((item) => (
              <article key={item.label} className="card research-kpi-card">
                <p className="research-kpi-value">{item.value}</p>
                <p className="muted">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{research.joinByTopicTitle}</h2>
          <div className="grid grid-2">
            {research.joinByTopic.map((item) => (
              <article key={item.theme} className="card">
                <h3>{item.theme}</h3>
                <p className="muted">
                  <strong>{item.skillsTitle}:</strong>
                </p>
                <ul className="research-chip-list" aria-label={item.skillsTitle}>
                  {item.skills.map((skill) => (
                    <li key={skill} className="research-chip">
                      {skill}
                    </li>
                  ))}
                </ul>
                <p className="muted">
                  <strong>{item.firstProjectTitle}:</strong> {item.firstProjectIdea}
                </p>
                <p className="muted">
                  <strong>{item.weeklyWorkflowTitle}:</strong>
                </p>
                <ul className="join-list">
                  {item.weeklyWorkflow.map((work) => (
                    <li key={work}>{work}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <article className="card">
            <h2>{research.processTitle}</h2>
            <div className="join-faq-list">
              {research.process.map((item) => (
                <article key={item.title} className="join-faq-item">
                  <h3>{item.title}</h3>
                  <p className="muted">{item.description}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="card">
            <h2>{research.faqTitle}</h2>
            <div className="join-faq-list">
              {research.faqs.map((faq) => (
                <details key={faq.question} className="join-faq-item">
                  <summary>{faq.question}</summary>
                  <p className="muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card">
            <h2>{research.ctaTitle}</h2>
            <div className="hero-actions">
              <Link href="/publications" className="button button-primary">
                {research.ctas.publications}
              </Link>
              <Link href="/join-us" className="button button-secondary">
                {research.ctas.joinUs}
              </Link>
              <Link href="/contact" className="button button-secondary">
                {research.ctas.contact}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
