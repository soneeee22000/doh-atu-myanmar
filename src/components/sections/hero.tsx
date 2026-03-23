import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background" />

      {/* Decorative geometric accents — Myanmar-inspired */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary/20" />
      <div className="absolute right-0 top-0 h-full w-1 bg-primary/20" />
      <div className="absolute left-8 top-1/4 h-32 w-px bg-primary/15 md:left-16" />
      <div className="absolute right-8 top-1/3 h-24 w-px bg-primary/15 md:right-16" />
      <div className="absolute left-8 top-1/4 h-px w-8 bg-primary/15 md:left-16" />
      <div className="absolute right-8 top-1/3 h-px w-8 bg-primary/15 md:right-16" />

      {/* Decorative circles */}
      <div className="absolute -left-32 top-1/2 h-64 w-64 rounded-full border border-primary/5" />
      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-primary/5" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Small label above headline */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm font-medium tracking-wide text-primary">
            Doh Atu
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          {t("tagline")}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
          {t("subtitle")}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="group inline-flex h-14 items-center gap-2 rounded-full border-2 border-foreground/20 px-8 text-base font-medium text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background sm:text-lg"
          >
            {t("cta_discover")}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/support"
            className="inline-flex h-14 items-center rounded-full bg-primary px-10 text-base font-medium text-background transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-95 sm:text-lg"
          >
            {t("cta_support")}
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-16 text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
          Paris, France &mdash; Since 2022
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40">
            Scroll
          </span>
          <div className="h-12 w-px bg-muted-foreground/20" />
        </div>
      </div>
    </section>
  );
}
