import { useTranslations } from "next-intl";
import { Eye, Scale, Palette } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pillars = [
  { key: "awareness", icon: Eye, number: "01" },
  { key: "advocacy", icon: Scale, number: "02" },
  { key: "culture", icon: Palette, number: "03" },
] as const;

export function MissionPillars() {
  const t = useTranslations("mission");

  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              What we do
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.key} delay={index * 120}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                  {/* Large number watermark */}
                  <span className="absolute -right-2 -top-4 font-[family-name:var(--font-display)] text-[100px] font-bold leading-none text-foreground/[0.03] transition-colors duration-500 group-hover:text-primary/[0.08]">
                    {pillar.number}
                  </span>

                  <div className="relative">
                    {/* Icon with animated background */}
                    <div className="mb-8 inline-flex rounded-2xl bg-primary/10 p-4 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-foreground">
                      {t(`${pillar.key}.title`)}
                    </h3>

                    <p className="text-base leading-relaxed text-muted-foreground">
                      {t(`${pillar.key}.description`)}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-8 h-px w-12 bg-primary/20 transition-all duration-500 group-hover:w-full group-hover:bg-primary/40" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
