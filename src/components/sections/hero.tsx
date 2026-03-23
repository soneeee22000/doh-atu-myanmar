import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-foreground/5" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          {t("tagline")}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="inline-flex h-13 items-center rounded-lg border-2 border-primary px-8 text-lg font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-background active:scale-95"
          >
            {t("cta_discover")}
          </Link>
          <Link
            href="/support"
            className="inline-flex h-13 items-center rounded-lg bg-primary px-8 text-lg font-medium text-background transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95"
          >
            {t("cta_support")}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-6 w-4 rounded-full border-2 border-muted-foreground/50">
          <div className="mx-auto mt-1 h-1.5 w-0.5 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
