import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";
import { getLabContact } from "@/lib/lab-contact";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return {
    title: messages.contact.title,
    description: messages.contact.subtitle
  };
}

export default async function ContactPage() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);
  const { email, address } = getLabContact();

  return (
    <>
      <PageHero title={messages.contact.title} subtitle={messages.contact.subtitle} />

      <section className="section">
        <div className="container grid grid-2">
          <article className="card">
            <h2>{messages.contact.generalInfoTitle}</h2>
            <p className="muted">
              {messages.contact.labels.email}: {email}
              <br />
              {messages.contact.labels.address}: {address}
            </p>
          </article>

          <article className="card">
            <h2>{messages.contact.inquiryGuideTitle}</h2>
            <p className="muted">{messages.contact.studentGuide}</p>
            <p className="muted">{messages.contact.businessGuide}</p>
          </article>
        </div>
      </section>
    </>
  );
}
