import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Heart } from "lucide-react";

const navItems = [
  { key: "about", href: "/about" },
  { key: "activities", href: "/activities" },
  { key: "news", href: "/news" },
  { key: "support", href: "/support" },
  { key: "contact", href: "/contact" },
] as const;

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo/doh-atu-logo.png"
                alt="Doh Atu"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                Doh Atu
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          <nav className="space-y-3" aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t("nav.support")}
            </h3>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Heart className="h-4 w-4" />
              {t("cta.donate")}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {t("footer.copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}
