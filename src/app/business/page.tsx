import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.business.title,
    description: messages.business.subtitle
  };
}

export default async function BusinessPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return (
    <>
      <PageHero title={messages.business.title} subtitle={messages.business.subtitle} />

      <section className="section">
        <div className="container grid grid-3">
          {messages.business.items.map((item) => (
            <article key={item.title} className="card">
              <h2>{item.title}</h2>
              <p className="muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
