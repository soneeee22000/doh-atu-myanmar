import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const partners = [
  { name: "Ville de Paris", key: "paris" },
  { name: "Ville de Lyon", key: "lyon" },
  { name: "Ville de Sceaux", key: "sceaux" },
  { name: "Info Birmanie", key: "info-birmanie" },
  { name: "Amnesty International", key: "amnesty" },
  { name: "ACAT France", key: "acat" },
  { name: "Institut du Pacifique", key: "pacifique" },
  { name: "Groupe URD", key: "urd" },
  { name: "Commission Transnationale EELV", key: "eelv" },
  { name: "Cité Scolaire Lakanal", key: "lakanal" },
] as const;

export function PartnersGrid() {
  const t = useTranslations("partners");

  return (
    <section className="bg-muted/50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.key} variant="scale" delay={index * 50}>
              <div className="flex h-24 items-center justify-center rounded-xl border border-border bg-card px-4 text-center text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground hover:shadow-sm">
                {partner.name}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
