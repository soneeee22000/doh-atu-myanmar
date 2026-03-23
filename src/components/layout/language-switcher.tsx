"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  my: "MY",
};

export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange(locale: Locale) {
    router.replace(pathname, { locale });
  }

  return (
    <nav aria-label="Language" className="flex items-center gap-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          aria-current={locale === currentLocale ? "true" : undefined}
          className={cn(
            "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors duration-200",
            locale === currentLocale
              ? "bg-primary text-background"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </nav>
  );
}
