import { Fraunces, Poppins } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import TagManager from "@/components/TagManager";
import "./alfa-aktiv-theme.css";

/*
  Drugi ROOT layout (uz `(sajt)/layout.tsx`). Landing stranice ne dele
  Header/Footer/cookie baner bloga i imaju sopstvenu temu i fontove.
  Napomena: navigacija između (sajt) i (landing) je pun page load, ne client-side.
*/

// Display font (topao serif) za naslove.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"], // latin-ext = srpski dijakritici (č ž š đ ć)
  display: "swap",
});

// Body font.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${fraunces.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
        {/* Pristanak je na nivou domena — isti izbor važi i na blogu i ovde. */}
        <CookieConsent />
        <TagManager />
      </body>
    </html>
  );
}
