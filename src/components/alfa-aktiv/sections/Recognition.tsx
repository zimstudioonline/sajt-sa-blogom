import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";
import CheckItem from "@/components/alfa-aktiv/ui/CheckItem";
import CTAButton from "@/components/alfa-aktiv/ui/CTAButton";

const points = [
  "Često ste pod stresom.",
  "Trudite se da jedete zdravije.",
  "Nemate vremena za komplikovane rutine.",
  "Želite praktično rešenje.",
  "Cenite prirodne sastojke.",
  "Tražite proizvod koji lako ponesete na posao ili put.",
];

/** Kvalifikaciona sekcija "Možda se prepoznajete". */
export default function Recognition() {
  return (
    <Section tone="bordo" narrow>
      <SectionHeading
        invert
        eyebrow="Da li je ALFA AKTIV za vas?"
        title="Možda se prepoznajete…"
        subtitle="Ako ste makar jednom klimnuli glavom, velika je verovatnoća da će vam se koncept ALFA AKTIV dopasti."
      />

      <ul className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
        {points.map((p) => (
          <CheckItem key={p} invert>
            {p}
          </CheckItem>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <CTAButton label="TO SAM JA — HOĆU DA PROBAM" />
      </div>
    </Section>
  );
}
