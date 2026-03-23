export type EventCategory =
  | "conference"
  | "exhibition"
  | "film"
  | "intervention"
  | "rally"
  | "partnership"
  | "ceremony";

export type Event = {
  id: string;
  titleFr: string;
  titleEn: string;
  titleMy: string;
  date: string;
  location: string;
  category: EventCategory;
  partners?: string[];
  image?: string;
};

export const events: Event[] = [
  {
    id: "amnesty-manifester",
    titleFr:
      'Participation au débat "Droit de manifester, Focus sur la Birmanie"',
    titleEn: 'Panel discussion "Right to Protest, Focus on Myanmar"',
    titleMy:
      '"ဆန္ဒပြပိုင်ခွင့်၊ မြန်မာနိုင်ငံအပေါ် အာရုံစိုက်ခြင်း" ဆွေးနွေးပွဲ',
    date: "2022-11-03",
    location: "Amnesty International, Paris",
    category: "conference",
    partners: ["Amnesty International"],
  },
  {
    id: "amnesty-musele",
    titleFr: 'Participation au débat "Peuple birman, Peuple muselé"',
    titleEn: 'Panel discussion "Burmese People, Silenced People"',
    titleMy: '"မြန်မာပြည်သူများ၊ အသံပိတ်ခံရသူများ" ဆွေးနွေးပွဲ',
    date: "2022-11-14",
    location: "Amnesty International, Paris",
    category: "conference",
    partners: ["Amnesty International"],
  },
  {
    id: "eu-nug",
    titleFr:
      'Lettre à l\'EU: "NUG au sommet EU-ASEAN", conférence au Parlement Européen',
    titleEn:
      'Letter to EU: "NUG at EU-ASEAN Summit", European Parliament conference',
    titleMy: "ဥရောပသမဂ္ဂသို့ စာပေးပို့ခြင်း၊ ဥရောပပါလီမန်တွင် ညီလာခံ",
    date: "2022-12-01",
    location: "European Parliament, Brussels",
    category: "conference",
    partners: ["European Parliament"],
  },
  {
    id: "pacifique-webinaire",
    titleFr: "Webinaire à l'Institut Pacifique",
    titleEn: "Webinar at Institut Pacifique",
    titleMy: "Institut Pacifique တွင် ဝဘ်ဆီမီနာ",
    date: "2022-12-06",
    location: "Institut du Pacifique, Paris",
    category: "conference",
    partners: ["Institut du Pacifique"],
  },
  {
    id: "cine-tout-ira-bien",
    titleFr: 'Ciné-débat "Tout ira bien"',
    titleEn: 'Film screening & debate "Everything Will Be Fine"',
    titleMy: '"အရာအားလုံး အဆင်ပြေလိမ့်မယ်" ရုပ်ရှင်ပြပွဲနှင့် ဆွေးနွေးပွဲ',
    date: "2022-12-07",
    location: "Paris",
    category: "film",
  },
  {
    id: "college-voltaire",
    titleFr: "Intervention au collège Voltaire",
    titleEn: "Presentation at Collège Voltaire",
    titleMy: "Collège Voltaire တွင် တင်ပြခြင်း",
    date: "2023-01-18",
    location: "Collège Voltaire, Paris",
    category: "intervention",
  },
  {
    id: "mairie-paris-2ans",
    titleFr: "2 ans de coup d'État, conférence à la Mairie de Paris",
    titleEn: "2 Years Since the Coup, conference at Paris City Hall",
    titleMy: "အာဏာသိမ်း ၂ နှစ်ပြည့်၊ ပါရီမြို့တော်ခန်းမတွင် ညီလာခံ",
    date: "2023-02-01",
    location: "Mairie de Paris",
    category: "conference",
    partners: ["Ville de Paris"],
  },
  {
    id: "expo-mairie-14",
    titleFr:
      'Exposition photo "Printemps birman, la jeunesse en résistance" à la Mairie du 14ème',
    titleEn:
      'Photo exhibition "Burmese Spring, Youth in Resistance" at 14th arrondissement City Hall',
    titleMy: '၁၄ ရပ်ကွက်မြို့တော်ခန်းမတွင် "မြန်မာနွေဦး" ဓာတ်ပုံပြပွဲ',
    date: "2023-02-01",
    location: "Mairie du 14ème, Paris",
    category: "exhibition",
    partners: ["Ville de Paris"],
  },
  {
    id: "cinema-notre-tour",
    titleFr: 'Cinéma "Notre tour", Cinéma MK2-Bercy',
    titleEn: 'Film screening "Our Turn", MK2-Bercy Cinema',
    titleMy: 'MK2-Bercy ရုပ်ရှင်ရုံတွင် "ကျွန်ုပ်တို့အလှည့်" ရုပ်ရှင်ပြပွဲ',
    date: "2023-05-01",
    location: "MK2 Bercy, Paris",
    category: "film",
  },
  {
    id: "mur-paix-sceaux",
    titleFr: "Mur de paix et de démocratie pour la Birmanie à Sceaux",
    titleEn: "Wall of Peace and Democracy for Myanmar in Sceaux",
    titleMy: "Sceaux တွင် မြန်မာနိုင်ငံအတွက် ငြိမ်းချမ်းရေးနံရံ",
    date: "2023-05-01",
    location: "Sceaux",
    category: "partnership",
    partners: ["Ville de Sceaux"],
  },
  {
    id: "expo-choisy-13",
    titleFr:
      'Exposition photo "Printemps birman" au parc de Choisy, Paris 13ème',
    titleEn:
      '"Burmese Spring" photo exhibition at Parc de Choisy, 13th arrondissement',
    titleMy: 'ပါရီ ၁၃ ရပ်ကွက် Choisy ပန်းခြံတွင် "မြန်မာနွေဦး" ဓာတ်ပုံပြပွဲ',
    date: "2023-05-01",
    location: "Parc de Choisy, Paris 13ème",
    category: "exhibition",
    partners: ["Ville de Paris"],
  },
  {
    id: "urd-diasporas",
    titleFr: "Rôle des diasporas : le cas du Myanmar, Groupe URD",
    titleEn: "Role of Diasporas: The Myanmar Case, Groupe URD",
    titleMy: "ဒီယာစပိုရာ၏ အခန်းကဏ္ဍ: မြန်မာနိုင်ငံ",
    date: "2023-06-01",
    location: "Groupe URD, Paris",
    category: "conference",
    partners: ["Groupe URD"],
  },
  {
    id: "humanitaire-mouvement",
    titleFr: "Impasse humanitaire et rôle des diasporas : le cas du Myanmar",
    titleEn: "Humanitarian Deadlock and Role of Diasporas: The Myanmar Case",
    titleMy: "လူသားချင်းစာနာထောက်ထားရေး မဖြစ်နိုင်ခြင်းနှင့် ဒီယာစပိုရာ",
    date: "2023-10-01",
    location: "Humanitaire en mouvement",
    category: "conference",
  },
  {
    id: "rassemblement-chatelet",
    titleFr: "3 ans de coup d'État, rassemblement à Châtelet, Paris",
    titleEn: "3 Years Since the Coup, rally at Châtelet, Paris",
    titleMy: "အာဏာသိမ်း ၃ နှစ်ပြည့်၊ Châtelet တွင် စုရုံးခြင်း",
    date: "2024-02-01",
    location: "Châtelet, Paris",
    category: "rally",
  },
  {
    id: "acat-beaune",
    titleFr: "Birmanie : Les droits humains, ACAT Beaune",
    titleEn: "Myanmar: Human Rights, ACAT Beaune",
    titleMy: "မြန်မာနိုင်ငံ: လူ့အခွင့်အရေး၊ ACAT Beaune",
    date: "2024-03-01",
    location: "ACAT, Beaune",
    category: "conference",
    partners: ["ACAT France"],
  },
  {
    id: "ceremonie-gordes",
    titleFr: "Cérémonie à l'honneur de Phyu Phyu Kyaw Thein, Mairie de Gordes",
    titleEn: "Ceremony in honor of Phyu Phyu Kyaw Thein, Gordes City Hall",
    titleMy: "Phyu Phyu Kyaw Thein ဂုဏ်ပြုပွဲ၊ Gordes မြို့တော်ခန်းမ",
    date: "2024-05-01",
    location: "Mairie de Gordes",
    category: "ceremony",
  },
  {
    id: "rohingya-mdm",
    titleFr:
      'Table ronde "Rohingya refugee crisis: reflecting on hindered humanitarian access"',
    titleEn:
      'Roundtable "Rohingya refugee crisis: reflecting on hindered humanitarian access"',
    titleMy: "ရိုဟင်ဂျာ ဒုက္ခသည် အကျပ်အတည်း စားပွဲဝိုင်းဆွေးနွေးပွဲ",
    date: "2024-06-01",
    location: "Médecins du Monde, Paris",
    category: "conference",
    partners: ["Médecins du Monde"],
  },
  {
    id: "cafes-geo-culinaire",
    titleFr: 'Dîner-conférence "Le Monde culinaire birman"',
    titleEn: 'Dinner-conference "The Burmese Culinary World"',
    titleMy: '"မြန်မာ့အစားအစာ ကမ္ဘာ" ညစာစားပွဲ-ညီလာခံ',
    date: "2024-10-01",
    location: "Les Cafés Géographiques, Paris",
    category: "conference",
  },
  {
    id: "asie-resistance",
    titleFr:
      "Conférence : Asie sous l'influence, Asie en résistance, soirée musicale",
    titleEn:
      "Conference: Asia Under Influence, Asia in Resistance, musical evening",
    titleMy: "ညီလာခံ: သြဇာခံအာရှ၊ တော်လှန်ရေးအာရှ၊ ဂီတညနေခင်း",
    date: "2024-11-01",
    location: "Mairie de Paris",
    category: "conference",
    partners: ["Ville de Paris"],
  },
];

export const categoryLabels: Record<
  EventCategory,
  { fr: string; en: string; my: string }
> = {
  conference: {
    fr: "Conférence",
    en: "Conference",
    my: "ညီလာခံ",
  },
  exhibition: {
    fr: "Exposition",
    en: "Exhibition",
    my: "ပြပွဲ",
  },
  film: {
    fr: "Projection",
    en: "Film Screening",
    my: "ရုပ်ရှင်ပြပွဲ",
  },
  intervention: {
    fr: "Intervention scolaire",
    en: "School Intervention",
    my: "ကျောင်းတွင် တင်ပြခြင်း",
  },
  rally: {
    fr: "Rassemblement",
    en: "Rally",
    my: "စုရုံးခြင်း",
  },
  partnership: {
    fr: "Partenariat",
    en: "Partnership",
    my: "မိတ်ဖက်",
  },
  ceremony: {
    fr: "Cérémonie",
    en: "Ceremony",
    my: "အခမ်းအနား",
  },
};
