import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Heart, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function EarthquakeImpact() {
  const t = useTranslations("earthquake");

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Accent border top */}
      <div className="absolute inset-x-0 top-0 h-px bg-accent/30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Story */}
          <ScrollReveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
                <Heart className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  {t("badge")}
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                {t("title")}
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {t("description")}
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t("response")}
              </p>

              <Link
                href="/support"
                className="group mt-8 inline-flex items-center gap-2 text-base font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
              >
                {t("cta")}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: Key figures */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-6">
              {(
                [
                  { value: "7.7", label: t("stat_magnitude") },
                  { value: "3,500+", label: t("stat_lives") },
                  { value: "17.2M", label: t("stat_affected") },
                  { value: "80%", label: t("stat_buildings") },
                ] as const
              ).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-accent sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
