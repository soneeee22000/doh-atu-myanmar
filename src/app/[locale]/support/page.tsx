import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Heart, Users, HandHelping, ExternalLink, Shield } from "lucide-react";

type SupportPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: SupportPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support" });
  return { title: t("title") };
}

const HELLOASSO_MEMBERSHIP_URL =
  "https://www.helloasso.com/associations/doh-atu-ensemble-pour-le-myanmar/adhesions/cotisation-annuelle";

const HELLOASSO_EMBED_URL =
  "https://www.helloasso.com/associations/doh-atu-ensemble-pour-le-myanmar/adhesions/cotisation-annuelle/widget";

function WhySupport() {
  const t = useTranslations("support");

  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground sm:text-3xl">
        {t("why_title")}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {t("why_description")}
      </p>
    </div>
  );
}

function SupportOptions() {
  const t = useTranslations("support");

  const options = [
    {
      key: "membership",
      icon: Users,
    },
    {
      key: "donate",
      icon: Heart,
    },
    {
      key: "volunteer",
      icon: HandHelping,
    },
  ] as const;

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-3">
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <div
            key={option.key}
            className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
              {t(`${option.key}_title`)}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {t(`${option.key}_description`)}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function HelloAssoSection() {
  const t = useTranslations("support");

  return (
    <div className="mt-20">
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="border-b border-border bg-muted/50 px-6 py-4">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
            HelloAsso
          </h3>
        </div>

        <div className="p-6">
          <iframe
            src={HELLOASSO_EMBED_URL}
            className="h-[500px] w-full rounded-lg border-0"
            title="HelloAsso - Doh Atu"
            loading="lazy"
          />

          <div className="mt-6 text-center">
            <a
              href={HELLOASSO_MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
            >
              {t("helloasso_fallback")}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6">
        <span className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          {t.rich("trust_loi1901", {
            fallback: () => "Association loi 1901",
          }) || "Association loi 1901"}
        </span>
      </div>
    </div>
  );
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "support" });

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-[family-name:var(--font-display)] text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>

        <div className="mt-12">
          <WhySupport />
          <SupportOptions />
          <HelloAssoSection />
        </div>
      </div>
    </section>
  );
}
