import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";
import { playfairDisplay, notoSans, notoSerifMyanmar } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { OrganizationJsonLd } from "@/components/layout/json-ld";
import "../globals.css";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    metadataBase: new URL("https://doh-atu-myanmar.com"),
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "my" ? "my_MM" : "en_US",
      siteName: t("title"),
    },
    alternates: {
      canonical: `https://doh-atu-myanmar.com/${locale}`,
      languages: {
        fr: "https://doh-atu-myanmar.com/fr",
        en: "https://doh-atu-myanmar.com/en",
        my: "https://doh-atu-myanmar.com/my",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={cn(
        playfairDisplay.variable,
        notoSans.variable,
        notoSerifMyanmar.variable,
        "h-full antialiased",
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd locale={locale} />
        <NextIntlClientProvider>
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
