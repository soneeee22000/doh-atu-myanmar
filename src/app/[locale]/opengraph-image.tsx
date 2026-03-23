import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Doh Atu – Ensemble pour le Myanmar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const titles: Record<string, { title: string; subtitle: string }> = {
  fr: {
    title: "Doh Atu",
    subtitle: "Ensemble pour le Myanmar",
  },
  en: {
    title: "Doh Atu",
    subtitle: "Together for Myanmar",
  },
  my: {
    title: "ဒို့အတူ",
    subtitle: "မြန်မာနိုင်ငံအတွက် အတူတကွ",
  },
};

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = titles[locale] || titles.fr;

  return new ImageResponse(
    <div
      style={{
        background: "#FAF7F2",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontSize: "96px",
            fontWeight: 700,
            color: "#2C2416",
            letterSpacing: "-2px",
          }}
        >
          {content.title}
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 400,
            color: "#B8860B",
          }}
        >
          {content.subtitle}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          gap: "8px",
          fontSize: "18px",
          color: "#6b5e4f",
        }}
      >
        <span>doh-atu-myanmar.com</span>
      </div>
    </div>,
    { ...size },
  );
}
