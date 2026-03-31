import Link from "next/link";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";

export default async function NotFound() {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return (
    <section className="section">
      <div className="container card">
        <h1>{messages.notFound.title}</h1>
        <p className="muted">{messages.notFound.description}</p>
        <Link href="/" className="inline-link">
          {messages.notFound.cta}
        </Link>
      </div>
    </section>
  );
}
