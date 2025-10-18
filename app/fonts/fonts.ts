import { Noto_Serif, Rancho, Roboto, Roboto_Condensed } from "next/font/google";

export const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const roboto_condensed = Roboto_Condensed({
  variable: "--font-roboto",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const rancho = Rancho({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rancho",
})

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-serif",
})
