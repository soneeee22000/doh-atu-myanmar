"use client";

import { useTranslations } from "next-intl";
import { useCounter } from "@/hooks/use-counter";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const stats = [
  { key: "arrested", value: 30000 },
  { key: "displaced", value: 3000000 },
  { key: "airstrikes", value: 2400 },
  { key: "resistance", value: 5 },
] as const;

function formatNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${Math.floor(value / 1000).toLocaleString()}K`;
  }
  return value.toString();
}

function StatItem({ value, label }: { value: number; label: string }) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
        {formatNumber(count)}+
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-background/70 sm:text-base">
        {label}
      </p>
    </div>
  );
}

export function ImpactStats() {
  const t = useTranslations("stats");

  return (
    <section className="bg-foreground py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-background sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.key} delay={index * 150}>
              <StatItem value={stat.value} label={t(stat.key)} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
