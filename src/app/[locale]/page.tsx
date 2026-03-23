import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { MissionPillars } from "@/components/sections/mission-pillars";
import { ImpactStats } from "@/components/sections/impact-stats";
import { EarthquakeImpact } from "@/components/sections/earthquake-impact";
import { ActivitiesPreview } from "@/components/sections/activities-preview";
import { PartnersGrid } from "@/components/sections/partners-grid";
import { CtaBanner } from "@/components/sections/cta-banner";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <MissionPillars />
      <ImpactStats />
      <EarthquakeImpact />
      <ActivitiesPreview />
      <PartnersGrid />
      <CtaBanner />
    </>
  );
}
