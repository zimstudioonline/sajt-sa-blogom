import Image from "next/image";
import pakovanjeImg from "../../../../public/alfa-aktiv/alfa-aktiv-pakovanje.jpg";
import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";
import CheckItem from "@/components/alfa-aktiv/ui/CheckItem";
import CTAButton, { PRODUCT_URL } from "@/components/alfa-aktiv/ui/CTAButton";
import Disclosure from "@/components/alfa-aktiv/ui/Disclosure";

const included = [
  "30 pojedinačnih bočica od 20 ml (ukupno 600 ml)",
  "Praktično pakovanje za mesec dana korišćenja",
  "Jasno uputstvo i deklaracija sa sastavom",
  "Svih 5 bonusa (vodiči, e-book, kalendar navika, podrška)",
];

const valueStack = [
  ["ALFA AKTIV (30 × 20 ml)", "17.550 din"],
  ["Vodič „21 dan”", "1.290 din"],
  ["Antioksidansi e-book", "990 din"],
  ["Kalendar navika", "690 din"],
  ["Vodič za deklaracije", "890 din"],
  ["Prioritetna podrška", "500 din"],
];

/** Sekcija ponude (#ponuda): value stack + pakovanje + cena + CTA. */
export default function Offer() {
  return (
    <Section id="ponuda" tone="deep">
      <SectionHeading
        eyebrow="Započnite danas"
        title="Sada pogledajte šta tačno dobijate"
        subtitle="Ne kupujete samo kutiju — dobijate kompletan sistem za jednu jednostavnu svakodnevnu naviku."
      />

      <Disclosure />

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
        {/* Šta dobijate */}
        <div className="rounded-3xl border border-bordo/10 bg-white p-8 shadow-sm">
          <div className="mb-6 overflow-hidden rounded-2xl">
            <Image
              src={pakovanjeImg}
              alt="ALFA AKTIV pakovanje — 30 bočica"
              className="h-auto w-full object-cover"
            />
          </div>
          <h3 className="font-display text-xl font-semibold text-bordo">U paketu:</h3>
          <ul className="mt-4 space-y-3">
            {included.map((it) => (
              <CheckItem key={it}>{it}</CheckItem>
            ))}
          </ul>
        </div>

        {/* Cena */}
        <div className="rounded-3xl bg-gradient-to-b from-bordo to-bordo-dark p-8 text-cream shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-honey-light">
            Ukupna vrednost paketa
          </p>

          <ul className="mt-4 divide-y divide-cream/15">
            {valueStack.map(([label, val]) => (
              <li key={label} className="flex justify-between py-2 text-sm">
                <span className="text-cream/80">{label}</span>
                <span className="text-cream/60 line-through">{val}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-cream/20 pt-4">
            <span className="text-cream/80">Vrednost preko</span>
            <span className="font-display text-xl font-semibold text-cream/70 line-through">
              21.900 din
            </span>
          </div>

          <div className="mt-6 rounded-2xl bg-cream/10 p-6 text-center ring-1 ring-honey/40">
            <p className="text-sm uppercase tracking-wider text-honey-light">
              Danas plaćate samo
            </p>
            <p className="mt-1 font-display text-5xl font-semibold text-honey-light">
              17.550 <span className="text-2xl">РСД</span>
            </p>
            <p className="mt-2 text-sm text-cream/70">
              Za mesec dana korišćenja + svi bonusi.
            </p>
          </div>

          <div className="mt-6 text-center">
            <CTAButton
              label="DA, ŽELIM SVOJ ALFA AKTIV"
              href={PRODUCT_URL}
              className="w-full"
            />
            <p className="mt-3 text-xs text-cream/60">
              Isporuka širom regiona • Plaćanje pouzećem
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
