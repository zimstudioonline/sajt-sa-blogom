import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import NaVrh from "./components/NaVrh";
import TagManager from "./components/TagManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zdrav Ritual — vaš vodič ka zdravijem životu",
    template: "%s — Zdrav Ritual",
  },
  description:
    "Proverene informacije, praktični saveti i inspirativni sadržaji o prirodnom zdravlju, ishrani, imunitetu i zdravim životnim navikama.",
  // Google Search Console — običan meta tag, ne postavlja kolačiće.
  verification: {
    google: "mUYs8jTSphuhg7Iir5xXSh_BOGNmzUwlFobQE1zuivc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <NaVrh />
        <CookieConsent />
        <TagManager />
      </body>
    </html>
  );
}
