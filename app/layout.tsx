import type { Metadata } from "next";
import { Fraunces, Syne, Outfit } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";

// Display / Hero headings — dramatic, optical-size variable font
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// UI / Labels / Nav — futuristic geometric
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body copy — clean, modern, premium
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sangrilla — A Culinary Legacy | Fine Dining",
  description:
    "Sangrilla is an ultra-luxury fine dining restaurant offering a cinematic tasting menu experience. Reserve your table for an evening of extraordinary flavour, artistry, and hospitality.",
  keywords: ["fine dining", "luxury restaurant", "tasting menu", "Michelin", "Sangrilla"],
  openGraph: {
    title: "Sangrilla — A Culinary Legacy",
    description: "Where every bite tells a story. Reserve your table at Sangrilla.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${syne.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink font-sans overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
