import "./globals.css";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Ethan Bossenbroek",
  description:
    "Software engineer building at Roadrunner. Guitar player, pedal hoarder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
