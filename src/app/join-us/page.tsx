import type { Metadata } from "next";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getLabContact } from "@/lib/lab-contact";
import { JoinApplicationGateway } from "@/components/join-application-gateway";
import { InternalStudentGuideButton } from "@/components/internal-student-guide-button";
import { JoinFaqList } from "@/components/join-faq-list";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.joinUs.title,
    description: messages.joinUs.subtitle
  };
}

export default async function JoinUsPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const { email } = getLabContact();

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <article className="hero-card">
            <span className="badge">{messages.joinUs.title}</span>
            <h1>{messages.joinUs.hero.headline}</h1>
            <p>{messages.joinUs.hero.pitch}</p>
            <div className="hero-actions">
              <JoinApplicationGateway startLabel={messages.joinUs.hero.primaryCta} />
              <a href={`mailto:${email}`} className="button button-secondary">
                {messages.joinUs.hero.secondaryCta}
              </a>
            </div>
          </article>
          <aside className="card">
            <h2>{messages.joinUs.subtitle}</h2>
            <ul className="join-list">
              {messages.joinUs.hero.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{messages.joinUs.openPositionsTitle}</h2>
          <div className="grid grid-3">
            {messages.joinUs.openPositions.map((position) => (
              <article key={position.role} className="card">
                <h3>{position.role}</h3>
                <p className="muted">{position.requirementLabel}</p>
                <ul className="join-list">
                  {position.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{messages.joinUs.whatWeLookForTitle}</h2>
          <div className="grid grid-3">
            {messages.joinUs.whatWeLookFor.map((item) => (
              <article key={item.category} className="card">
                <h3>{item.category}</h3>
                <ul className="join-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
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
            <h2>{messages.joinUs.howToApplyTitle}</h2>
            <ol className="join-steps">
              {messages.joinUs.applySteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <JoinApplicationGateway startLabel={messages.joinUs.contactCta} />
            <p className="muted">
              ※ Internal students will take a different procedure to join our laboratory. Please see this guide.
            </p>
            <InternalStudentGuideButton />
          </article>

          <article className="card">
            <h2>{messages.joinUs.faqTitle}</h2>
            <JoinFaqList faqs={messages.joinUs.faqs} initialVisibleCount={5} />
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{messages.joinUs.testimonialsTitle}</h2>
          <div className="grid grid-3">
            {messages.joinUs.testimonials.map((testimonial) => (
              <article key={`${testimonial.name}-${testimonial.background}`} className="card">
                <blockquote className="join-testimonial-quote">{testimonial.quote}</blockquote>
                <p className="join-testimonial-meta">
                  <strong>{testimonial.name}</strong>
                  <br />
                  <span className="muted">{testimonial.background}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
