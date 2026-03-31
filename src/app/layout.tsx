import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { resolveRequestLocale } from "@/lib/i18n/request-locale";

const defaultMessages = getMessages(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: {
    default: defaultMessages.metadata.siteTitle,
    template: `%s | ${defaultMessages.metadata.siteTitle}`
  },
  description: defaultMessages.metadata.siteDescription,
  icons: {
    icon: "/assets/logos/favicon.ico"
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await resolveRequestLocale();
  const messages = getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <div className="bg-orb bg-orb-1" aria-hidden="true" />
        <div className="bg-orb bg-orb-2" aria-hidden="true" />
        <SiteHeader locale={locale} messages={messages.header} />
        <main>{children}</main>
        <SiteFooter messages={messages.footer} />
      </body>
    </html>
  );
}
