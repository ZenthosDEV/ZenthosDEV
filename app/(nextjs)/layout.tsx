import type { Metadata } from "next";
import { Providers } from "../Providers";
import { BackgroundGrid } from '../components/BackgroundGrid';
import MouseMoveEffect from '../components/MouseMoveEffect';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/index.css";
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: "Zen Games",
  description: "Zenthos Official Website",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Fragment>
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <BackgroundGrid
          direction="diagonal"
          speed={0.15}
          squareSize={50}
          borderColor="#ffffff1a"
        />
      </div>
      <Providers>
        <MouseMoveEffect />
        <div className="z-10 min-h-screen">
          <NavBar className='my-8' />
          {children}
          <Footer />
        </div>
      </Providers>
    </Fragment>
  );
}
