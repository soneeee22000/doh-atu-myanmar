import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Calendar, MapPin, Tag } from "lucide-react";
import {
  events,
  categoryLabels,
  type Event,
  type EventCategory,
} from "@/content/events";

type ActivitiesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ActivitiesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "activities" });
  return { title: t("title") };
}

function getEventTitle(event: Event, locale: string): string {
  switch (locale) {
    case "my":
      return event.titleMy;
    case "en":
      return event.titleEn;
    default:
      return event.titleFr;
  }
}

function getCategoryLabel(category: EventCategory, locale: string): string {
  const labels = categoryLabels[category];
  switch (locale) {
    case "my":
      return labels.my;
    case "en":
      return labels.en;
    default:
      return labels.fr;
  }
}

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(
    locale === "my" ? "my-MM" : locale === "fr" ? "fr-FR" : "en-US",
    { year: "numeric", month: "long" },
  );
}

const categoryColors: Record<EventCategory, string> = {
  conference: "bg-primary/10 text-primary",
  exhibition: "bg-accent/10 text-accent",
  film: "bg-purple-100 text-purple-700",
  intervention: "bg-green-100 text-green-700",
  rally: "bg-red-100 text-red-700",
  partnership: "bg-blue-100 text-blue-700",
  ceremony: "bg-amber-100 text-amber-700",
};

function EventCard({ event, locale }: { event: Event; locale: string }) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${categoryColors[event.category]}`}
        >
          <Tag className="h-3 w-3" />
          {getCategoryLabel(event.category, locale)}
        </span>
      </div>

      <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-foreground">
        {getEventTitle(event, locale)}
      </h3>

      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 shrink-0" />
          <span>{formatDate(event.date, locale)}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>{event.location}</span>
        </div>
      </div>

      {event.partners && event.partners.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {event.partners.map((partner) => (
            <span
              key={partner}
              className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {partner}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default async function ActivitiesPage({ params }: ActivitiesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "activities" });

  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          {t("events_count", { count: events.length })}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
