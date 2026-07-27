import Image from "next/image";
import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";
import milanImg from "../../../../public/alfa-aktiv/testimonijal-milan-ilic-kragujevac.webp";
import marijaImg from "../../../../public/alfa-aktiv/testimonijal-marija-jovanovic-beograd.webp";
import jelenaImg from "../../../../public/alfa-aktiv/testimonijal-jelena-nikolic-nis.webp";
import draganImg from "../../../../public/alfa-aktiv/testimonijal-dragan-petrovic-novi-sad.webp";
import kancelarijaImg from "../../../../public/alfa-aktiv/moderna-kancelarija-i-promotivni-proizvodi.webp";
import torbaImg from "../../../../public/alfa-aktiv/sportskih-dodataka-u-teretani.png";
import dorucakImg from "../../../../public/alfa-aktiv/zdrav-dorucak-alfa-aktiv.jpeg";
import automobilImg from "../../../../public/alfa-aktiv/moderna-unutrasnjost-automobila.webp";

// Fotografije su gotove testimonial kartice (ime, grad, zvezdice i izjava su
// već deo slike). Alt tekst nosi ime + izjavu radi pristupačnosti i SEO-a.
const reviews = [
  {
    src: milanImg,
    alt: "Milan Ilić, Kragujevac (★★★★★): Alfa Aktiv mi je povećao energiju i izdržljivost. Osećam se bolje, fokusiranije i spreman za sve izazove.",
  },
  {
    src: marijaImg,
    alt: "Marija Jovanović, Beograd (★★★★★): Alfa Aktiv mi je dao više energije i smanjio umor. Odličan proizvod, koristim ga svakodnevno!",
  },
  {
    src: jelenaImg,
    alt: "Jelena Nikolić, Niš (★★★★★): Alfa Aktiv mi je postao deo moje svakodnevne rutine. Imam više energije, bolje spavam i osećam se vitalnije.",
  },
  {
    src: draganImg,
    alt: "Dragan Petrović, Novi Sad (★★★★★): Alfa Aktiv mi je pomogao da imam više snage i bolje se osećam svaki dan. Preporučujem svima!",
  },
];

const gallery = [
  { src: kancelarijaImg, alt: "ALFA AKTIV na kancelarijskom stolu" },
  { src: torbaImg, alt: "ALFA AKTIV u sportskoj torbi" },
  { src: dorucakImg, alt: "ALFA AKTIV pored zdravog doručka" },
  { src: automobilImg, alt: "ALFA AKTIV u automobilu" },
];

/** Testimonijali (fotografije korisnika) + galerija stvarnih situacija. */
export default function Testimonials() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Iskustva korisnika"
        title="Šta kažu ljudi koji su ALFA AKTIV uvrstili u rutinu"
        subtitle="Iskustva stvarnih korisnika često vrede više od bilo koje reklame."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {reviews.map((r) => (
          <figure
            key={r.alt}
            className="overflow-hidden rounded-2xl border border-bordo/10 bg-white shadow-sm"
          >
            <Image
              src={r.src}
              alt={r.alt}
              className="h-auto w-full object-cover"
            />
          </figure>
        ))}
      </div>

      <div className="mt-14">
        <p className="mb-5 text-center text-sm font-semibold uppercase tracking-wider text-muted">
          Galerija — proizvod u stvarnim situacijama
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {gallery.map((g) => (
            <div
              key={g.alt}
              className="aspect-square overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
