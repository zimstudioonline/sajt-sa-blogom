import Image from "next/image";
import Section from "@/components/alfa-aktiv/ui/Section";
import featuredImg from "../../../../public/alfa-aktiv/alfa-aktiv-featured-image.webp";

/**
 * Featured (naslovna) infografika — vizuelni pregled proizvoda, sastojaka i
 * ključnih prednosti. Ista slika se koristi i kao OG slika za deljenje.
 */
export default function FeaturedInfographic() {
  return (
    <Section tone="white">
      <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-bordo/10">
        <Image
          src={featuredImg}
          alt="ALFA AKTIV — negativno jonizovan i aktivan antioksidans: aronija, crna ribizla, med, visoka ORAC vrednost i ključne prednosti"
          priority
          className="h-auto w-full"
        />
      </div>
    </Section>
  );
}
