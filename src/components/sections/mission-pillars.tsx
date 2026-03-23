import { useTranslations } from "next-intl";
import { Eye, Scale, Palette } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pillars = [
  { key: "awareness", icon: Eye },
  { key: "advocacy", icon: Scale },
  { key: "culture", icon: Palette },
] as const;

export function MissionPillars() {
  const t = useTranslations("mission");

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.key} delay={index * 100}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
                    {t(`${pillar.key}.title`)}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {t(`${pillar.key}.description`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
