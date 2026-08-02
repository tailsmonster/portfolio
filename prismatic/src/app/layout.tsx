import type { Metadata } from "next";
import { Geist_Mono, Inter, Modak } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/ui/components/Navbar";
import Providers from "@/ui/components/ThemeProvider";
import { site } from "@/data/site";
import "../css/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const iosevka = localFont({
  variable: "--font-iosevka",
  src: [
    {
      path: "../fonts/iosevka-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/iosevka-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/iosevka-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const modak = Modak({
  variable: "--font-modak-src",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nico Aroca — Software Engineer",
    template: "%s — Nico Aroca",
  },
  description:
    "Software Engineer in New York City. Portfolio, archive, and dispatch.",
  openGraph: {
    title: "Nico Aroca — Software Engineer",
    description:
      "Software Engineer in New York City. Portfolio, archive, and dispatch.",
    url: site.url,
    siteName: "Nico Aroca",
    images: ["/social/embed.webp"],
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
      suppressHydrationWarning
      className={`${inter.variable} ${iosevka.variable} ${modak.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
