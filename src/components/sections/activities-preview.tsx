import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const recentEvents = [
  {
    titleKey: "asia_conference",
    titleFr: "Asie sous l'influence, Asie en résistance",
    titleEn: "Asia Under Influence, Asia in Resistance",
    date: "Novembre 2024",
    location: "Mairie de Paris",
    category: "Conference",
  },
  {
    titleKey: "culinary_conference",
    titleFr: "Le Monde culinaire birman",
    titleEn: "The Burmese Culinary World",
    date: "Octobre 2024",
    location: "Les Cafés Géographiques",
    category: "Conference",
  },
  {
    titleKey: "rohingya_roundtable",
    titleFr: "Rohingya refugee crisis",
    titleEn: "Rohingya refugee crisis",
    date: "Juin 2024",
    location: "Médecins du Monde",
    category: "Table ronde",
  },
] as const;

export function ActivitiesPreview() {
  const t = useTranslations("activities");

  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {t("events_count", { count: 19 })}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                {t("title")}
              </h2>
            </div>
            <Link
              href="/activities"
              className="group hidden items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background sm:inline-flex"
            >
              {t("view_all")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {recentEvents.map((event, index) => (
            <ScrollReveal key={event.titleKey} delay={index * 100}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-primary/20 transition-colors duration-500 group-hover:bg-primary" />

                <div className="p-8">
                  <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {event.category}
                  </span>

                  <h3 className="mb-6 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-foreground">
                    {event.titleFr}
                  </h3>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary/60" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary/60" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/activities"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              {t("view_all")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
