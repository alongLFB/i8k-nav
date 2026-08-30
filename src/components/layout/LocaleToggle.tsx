"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { useTransition } from "react";

export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "zh" ? "en" : "zh";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="p-2 rounded-md hover:bg-orange-50 dark:hover:bg-orange-950/30 text-orange-600 dark:text-orange-500 transition-colors"
      aria-label="Toggle language"
    >
      {locale === "zh" ? "EN" : "中"}
    </button>
  );
}
