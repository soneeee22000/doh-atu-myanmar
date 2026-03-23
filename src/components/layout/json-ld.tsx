type OrganizationJsonLdProps = {
  locale: string;
};

export function OrganizationJsonLd({ locale }: OrganizationJsonLdProps) {
  const name =
    locale === "en"
      ? "Doh Atu – Together for Myanmar"
      : locale === "my"
        ? "ဒို့အတူ – မြန်မာနိုင်ငံအတွက် အတူတကွ"
        : "Doh Atu – Ensemble pour le Myanmar";

  const description =
    locale === "en"
      ? "Association promoting peace, human rights, and democracy in Myanmar through culture, art, literature, and craftsmanship."
      : locale === "my"
        ? "ယဉ်ကျေးမှု၊ အနုပညာ၊ စာပေနှင့် လက်မှုပညာများမှတဆင့် မြန်မာနိုင်ငံတွင် ငြိမ်းချမ်းရေး၊ လူ့အခွင့်အရေးနှင့် ဒီမိုကရေစီကို မြှင့်တင်ခြင်း"
        : "Association pour la promotion de la paix, des droits humains et de la démocratie au Myanmar.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name,
    description,
    url: "https://doh-atu-myanmar.com",
    foundingDate: "2022-04-01",
    founder: {
      "@type": "Person",
      name: "Tin Tin Htar Myint",
      jobTitle: locale === "fr" ? "Présidente" : "President",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "Country",
      name: "Myanmar",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
