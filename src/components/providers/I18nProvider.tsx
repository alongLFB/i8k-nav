"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import zhMessages from "../../../messages/zh.json";
import enMessages from "../../../messages/en.json";

const messagesMap = {
  zh: zhMessages,
  en: enMessages,
};

export function I18nProvider({ children, locale }: { children: ReactNode; locale: string }) {
  const messages = messagesMap[locale as "zh" | "en"] || zhMessages;
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
