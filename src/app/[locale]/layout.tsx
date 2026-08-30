import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { I18nProvider } from "@/components/providers/I18nProvider";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "zh" | "en")) {
    notFound();
  }
  return (
    <I18nProvider locale={locale as "zh" | "en"}>
      {children}
    </I18nProvider>
  );
}
