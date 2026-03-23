import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Newspaper } from "lucide-react";

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });
  return { title: t("title") };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "news" });

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>

        <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-24 text-center">
          <div className="mb-6 inline-flex rounded-xl bg-muted p-4 text-muted-foreground">
            <Newspaper className="h-8 w-8" />
          </div>
          <p className="text-lg font-medium text-foreground">
            {t("coming_soon")}
          </p>
          <p className="mt-2 max-w-sm text-muted-foreground">
            {t("stay_tuned")}
          </p>
        </div>
      </div>
    </section>
  );
}
