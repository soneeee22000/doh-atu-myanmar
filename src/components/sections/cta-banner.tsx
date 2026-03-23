import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Heart, Users, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-foreground py-24 md:py-36">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-primary/10" />
      <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full border border-primary/10" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {t("trust_loi1901")}
          </p>

          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-background sm:text-4xl md:text-5xl lg:text-6xl">
            {t("title")}
          </h2>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/support"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-primary px-10 text-lg font-medium text-background transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95"
            >
              <Users className="h-5 w-5" />
              {t("join")}
            </Link>
            <Link
              href="/support"
              className="group inline-flex h-14 items-center gap-3 rounded-full border-2 border-background/30 px-10 text-lg font-medium text-background transition-all duration-300 hover:border-background hover:bg-background hover:text-foreground active:scale-95"
            >
              <Heart className="h-5 w-5" />
              {t("donate")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-10 text-sm text-background/40">
            {t("trust_secure")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
