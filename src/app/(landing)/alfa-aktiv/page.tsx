import type { Metadata } from "next";
import BrandBar from "@/components/alfa-aktiv/sections/BrandBar";
import Hero from "@/components/alfa-aktiv/sections/Hero";
import TrustBar from "@/components/alfa-aktiv/sections/TrustBar";
import FeaturedInfographic from "@/components/alfa-aktiv/sections/FeaturedInfographic";
import ProductIntro from "@/components/alfa-aktiv/sections/ProductIntro";
import WhyDifferent from "@/components/alfa-aktiv/sections/WhyDifferent";
import WhatsInside from "@/components/alfa-aktiv/sections/WhatsInside";
import IngredientsDetail from "@/components/alfa-aktiv/sections/IngredientsDetail";
import Recognition from "@/components/alfa-aktiv/sections/Recognition";
import DayTimeline from "@/components/alfa-aktiv/sections/DayTimeline";
import Comparison from "@/components/alfa-aktiv/sections/Comparison";
import Testimonials from "@/components/alfa-aktiv/sections/Testimonials";
import Bonuses from "@/components/alfa-aktiv/sections/Bonuses";
import Offer from "@/components/alfa-aktiv/sections/Offer";
import Guarantee from "@/components/alfa-aktiv/sections/Guarantee";
import FAQ from "@/components/alfa-aktiv/sections/FAQ";
import FinalCTA from "@/components/alfa-aktiv/sections/FinalCTA";
import Footer from "@/components/alfa-aktiv/sections/Footer";
import StickyCTA from "@/components/alfa-aktiv/sections/StickyCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://zdravritual.com"),
  title: "ALFA AKTIV — prirodni antioksidans u bočici",
  description:
    "Nauči kako da svakodnevnu brigu o sebi učiniš jednostavnom. ALFA AKTIV — koncentrat aronije, crne ribizle i prirodnog meda u praktičnoj bočici od 20 ml.",
  alternates: { canonical: "/alfa-aktiv/" },
  openGraph: {
    title: "ALFA AKTIV — prirodni antioksidans u bočici",
    description:
      "Jedna mala bočica. Jedna jednostavna navika. Popijete je za manje od 10 sekundi.",
    type: "website",
    url: "/alfa-aktiv/",
    images: ["/alfa-aktiv/alfa-aktiv-featured-image.webp"],
  },
};

export default function AlfaAktivLanding() {
  return (
    <main className="flex-1">
      <BrandBar />
      <Hero />
      <TrustBar />
      <FeaturedInfographic />
      <ProductIntro />
      <WhyDifferent />
      <WhatsInside />
      <IngredientsDetail />
      <Recognition />
      <DayTimeline />
      <Comparison />
      <Testimonials />
      <Bonuses />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
