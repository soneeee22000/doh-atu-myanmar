import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Heart, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal variant="scale">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/support"
              className="inline-flex h-13 items-center gap-2 rounded-lg bg-primary px-8 text-lg font-medium text-background transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95"
            >
              <Users className="h-5 w-5" />
              {t("join")}
            </Link>
            <Link
              href="/support"
              className="inline-flex h-13 items-center gap-2 rounded-lg border-2 border-accent px-8 text-lg font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-background active:scale-95"
            >
              <Heart className="h-5 w-5" />
              {t("donate")}
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6">
            <span>{t("trust_loi1901")}</span>
            <span className="hidden sm:inline">|</span>
            <span>{t("trust_secure")}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
