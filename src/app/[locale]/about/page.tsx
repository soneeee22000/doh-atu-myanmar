import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Calendar, Users } from "lucide-react";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

function FoundingStory() {
  const t = useTranslations("about");

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Calendar className="h-4 w-4" />
                {t("founded")}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Users className="h-4 w-4" />
                {t("cofounders")}
              </span>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("myanmar_intro")}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-[family-name:var(--font-display)] text-xl font-bold text-primary">
                TTH
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Tin Tin Htar Myint
                </h3>
                <p className="text-sm text-primary">{t("president")}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Epidemiologist & Sociologist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MyanmarContext() {
  const t = useTranslations("about");

  const sections = [
    { titleKey: "coup_title", descKey: "coup_description" },
    { titleKey: "crisis_title", descKey: "crisis_description" },
    { titleKey: "resistance_title", descKey: "resistance_description" },
  ] as const;

  return (
    <section className="bg-foreground py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-background sm:text-4xl md:text-5xl">
          {t("myanmar_title")}
        </h2>

        <div className="relative mt-12 overflow-hidden rounded-xl">
          <Image
            src="/images/about/myanmar-solidarity.jpg"
            alt="Doh Atu solidarity rally in Paris — The Junta Falls, From Paris With Love"
            width={1200}
            height={500}
            className="h-64 w-full object-cover sm:h-80 md:h-96"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        </div>

        <div className="mt-16 space-y-12">
          {sections.map((section) => (
            <div key={section.titleKey} className="max-w-3xl">
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-primary sm:text-2xl">
                {t(section.titleKey)}
              </h3>
              <p className="text-lg leading-relaxed text-background/80">
                {t(section.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionExpanded() {
  const t = useTranslations("mission");

  const pillars = [
    { key: "awareness" },
    { key: "advocacy" },
    { key: "culture" },
  ] as const;

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.key}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
                {t(`${pillar.key}.title`)}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {t(`${pillar.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FoundingStory />
      <MyanmarContext />
      <MissionExpanded />
    </>
  );
}
