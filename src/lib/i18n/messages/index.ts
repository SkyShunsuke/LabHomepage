import { enMessages } from "@/lib/i18n/messages/en";
import { jaMessages } from "@/lib/i18n/messages/ja";
import type { Locale, Messages } from "@/lib/i18n/types";

const messagesByLocale: Record<Locale, Messages> = {
  en: enMessages,
  ja: jaMessages
};

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}
