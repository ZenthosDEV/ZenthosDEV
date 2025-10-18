import type { Metadata } from "next";
import { Providers } from '../Providers';
import "../styles/index.css";

export const metadata: Metadata = {
  title: "DARKVALE | Zen Games",
  description: "DARKVALE ZenGames Official Website",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}
