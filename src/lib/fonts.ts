import {
  Playfair_Display,
  Noto_Sans,
  Noto_Serif_Myanmar,
} from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const notoSerifMyanmar = Noto_Serif_Myanmar({
  variable: "--font-myanmar",
  display: "swap",
  weight: ["400", "500", "600"],
  preload: false,
});
