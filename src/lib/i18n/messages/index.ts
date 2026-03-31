import { enMessages } from "@/lib/i18n/messages/en";
import { jaMessages } from "@/lib/i18n/messages/ja";
import { zhMessages } from "@/lib/i18n/messages/zh";
import type { Locale, Messages } from "@/lib/i18n/types";

const messagesByLocale: Record<Locale, Messages> = {
  en: enMessages,
  ja: jaMessages,
  zh: zhMessages
};

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}
