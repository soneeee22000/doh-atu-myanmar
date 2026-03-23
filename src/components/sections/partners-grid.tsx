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
    <section className="border-y border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              They trust us
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.key} variant="scale" delay={index * 40}>
              <span className="block whitespace-nowrap text-lg font-medium text-muted-foreground/60 transition-colors duration-300 hover:text-foreground">
                {partner.name}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
