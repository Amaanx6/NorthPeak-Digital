import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northpeak.digital"),
  title: "NorthPeak Digital — Web, Design & Cloud Engineering",
  description:
    "NorthPeak Digital builds and scales web products, design systems, and cloud infrastructure for growing SaaS teams.",
  openGraph: {
    title: "NorthPeak Digital — Web, Design & Cloud Engineering",
    description:
      "NorthPeak Digital builds and scales web products, design systems, and cloud infrastructure for growing SaaS teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="bg-paper font-body text-ink antialiased">{children}</body>
    </html>
  );
}
