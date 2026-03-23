import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      {/* Background photo — Paris solidarity rally */}
      <Image
        src="/images/hero/rally-paris.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={75}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-foreground/65" />

      {/* Subtle warm gradient on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/40" />

      {/* Decorative side lines */}
      <div className="absolute left-8 top-1/4 h-32 w-px bg-background/10 md:left-16" />
      <div className="absolute right-8 top-1/3 h-24 w-px bg-background/10 md:right-16" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Small label */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-5 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm font-medium tracking-wide text-background/90">
            Doh Atu
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.05] tracking-tight text-background sm:text-7xl md:text-8xl lg:text-9xl">
          {t("tagline")}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-background/75 sm:text-xl md:text-2xl">
          {t("subtitle")}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="group inline-flex h-14 items-center gap-2 rounded-full border-2 border-background/30 px-8 text-base font-medium text-background transition-all duration-300 hover:border-background hover:bg-background hover:text-foreground sm:text-lg"
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
            className="inline-flex h-14 items-center rounded-full bg-primary px-10 text-base font-medium text-background transition-all duration-300 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 sm:text-lg"
          >
            {t("cta_support")}
          </Link>
        </div>

        <p className="mt-16 text-xs uppercase tracking-[0.2em] text-background/40">
          Paris, France &mdash; Since 2022
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-background/30">
            Scroll
          </span>
          <div className="h-12 w-px bg-background/20" />
        </div>
      </div>
    </section>
  );
}
