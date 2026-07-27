import Image from "next/image";
import ritualImg from "../../../../public/alfa-aktiv/jutarnji-ritual-uz-alfa-aktiv.webp";
import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";
import CTAButton from "@/components/alfa-aktiv/ui/CTAButton";

/** Empatijska priča "Zamislite svoje jutro" — problem/prepoznavanje. */
export default function ProductIntro() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Zamislite svoje jutro"
        title="Budite se. Telefon još nije zazvonio. A već osećate onaj poznati umor."
        subtitle="Težinu. Maglu u glavi. Pomisao da će vam trebati još dve-tri kafe samo da „pregurate” dan."
      />

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-lg leading-relaxed text-ink/90">
            I tada uradite nešto drugačije. Otvorite malu bočicu. Popijete je u jednom
            gutljaju. Gotovo — za manje od deset sekundi.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li>Bez mešanja.</li>
            <li>Bez kapsula i tableta.</li>
            <li>Bez blendera.</li>
            <li>Bez komplikacija.</li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-ink/90">
            Samo mali svakodnevni ritual koji vašem organizmu donosi koncentrat aronije,
            crne ribizle, prirodnog meda i pažljivo odabranih mikronutrijenata.
          </p>
          <div className="mt-8">
            <CTAButton label="ŽELIM SVOJ ALFA AKTIV" size="md" />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <Image
              src={ritualImg}
              alt="Jutarnji ritual — bočica ALFA AKTIV pored šolje kafe"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
