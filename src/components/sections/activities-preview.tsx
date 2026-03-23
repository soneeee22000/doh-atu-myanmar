import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const recentEvents = [
  {
    titleKey: "asia_conference",
    titleFr: "Asie sous l'influence, Asie en résistance",
    titleEn: "Asia Under Influence, Asia in Resistance",
    date: "2024-11",
    location: "Mairie de Paris",
  },
  {
    titleKey: "culinary_conference",
    titleFr: "Le Monde culinaire birman",
    titleEn: "The Burmese Culinary World",
    date: "2024-10",
    location: "Les Cafés Géographiques, Paris",
  },
  {
    titleKey: "rohingya_roundtable",
    titleFr:
      "Rohingya refugee crisis: reflecting on hindered humanitarian access",
    titleEn:
      "Rohingya refugee crisis: reflecting on hindered humanitarian access",
    date: "2024-06",
    location: "Médecins du Monde, Paris",
  },
] as const;

export function ActivitiesPreview() {
  const t = useTranslations("activities");

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <Link
              href="/activities"
              className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary-dark sm:inline-flex"
            >
              {t("view_all")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-4 text-muted-foreground">
            {t("events_count", { count: 16 })}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {recentEvents.map((event, index) => (
            <ScrollReveal key={event.titleKey} delay={index * 100}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-foreground">
                  {event.titleFr}
                </h3>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <Link
            href="/activities"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary-dark sm:hidden"
          >
            {t("view_all")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
