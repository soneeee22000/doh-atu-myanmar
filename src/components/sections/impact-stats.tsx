"use client";

import { useTranslations } from "next-intl";
import { useCounter } from "@/hooks/use-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { key: "arrested", value: 30000, display: "30K" },
  { key: "displaced", value: 3000000, display: "3M" },
  { key: "airstrikes", value: 2400, display: "2.4K" },
  { key: "resistance", value: 5, display: "5" },
] as const;

function formatNumber(value: number, target: number): string {
  if (target >= 1000000) {
    const m = value / 1000000;
    return m < 0.1 ? "0" : `${m.toFixed(1)}M`;
  }
  if (target >= 1000) {
    const k = value / 1000;
    return k < 0.1 ? "0" : `${k.toFixed(1)}K`;
  }
  return value.toString();
}

function StatItem({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) {
  const { count, ref } = useCounter(value, 2500);

  return (
    <div ref={ref} className="relative text-center">
      {/* Large decorative number behind */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <span className="font-[family-name:var(--font-display)] text-[120px] font-bold sm:text-[160px]">
          {index + 1}
        </span>
      </div>

      <div className="relative">
        <p className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary sm:text-6xl md:text-7xl">
          {formatNumber(count, value)}
          <span className="text-primary/60">+</span>
        </p>
        <div className="mx-auto mt-3 h-px w-8 bg-primary/30" />
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-background/60 sm:text-base">
          {label}
        </p>
      </div>
    </div>
  );
}

export function ImpactStats() {
  const t = useTranslations("stats");

  return (
    <section className="relative overflow-hidden bg-foreground py-24 md:py-36">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-primary/80">
            Since February 1, 2021
          </p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-display)] text-3xl font-bold text-background sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.key} delay={index * 150}>
              <StatItem value={stat.value} label={t(stat.key)} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
