import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-primary/10 p-3 text-primary">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Email</h3>
          <a
            href="mailto:contact@doh-atu-myanmar.com"
            className="text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            contact@doh-atu-myanmar.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-primary/10 p-3 text-primary">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Paris, France</h3>
          <p className="text-muted-foreground">Association loi 1901</p>
        </div>
      </div>
    </div>
  );
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
          {t("title")}
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
