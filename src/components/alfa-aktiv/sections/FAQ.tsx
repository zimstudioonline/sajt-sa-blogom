"use client";

import { useState } from "react";
import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";

const faqs = [
  {
    q: "Šta ako ovo nije za mene?",
    a: "ALFA AKTIV nije namenjen svima. Ako tražite proizvod koji obećava trenutne ili čudesne rezultate, ovo verovatno nije to. Namenjen je ljudima koji žele praktičan format i jednostavnu svakodnevnu rutinu.",
  },
  {
    q: "Nemam vremena.",
    a: "Upravo zato je razvijen ovakav format. Ne morate pripremati napitak, meriti dozu ni nositi veliku ambalažu. Jedna bočica, jedan gutljaj, nekoliko sekundi.",
  },
  {
    q: "Često zaboravim da koristim suplemente.",
    a: "Niste jedini. Zato uz paket dobijate i kalendar navika koji vam pomaže da pratite svoju rutinu. Jedan mali podsetnik dnevno pravi veliku razliku tokom meseca.",
  },
  {
    q: "Šta ako mi se ukus ne dopadne?",
    a: "Ukus je vrlo lična stvar. ALFA AKTIV ima karakterističan voćni ukus zahvaljujući kombinaciji aronije, crne ribizle i meda. Najbolji način da saznate da li vam odgovara jeste da ga probate.",
  },
  {
    q: "Koliko dugo traje jedno pakovanje?",
    a: "Jedno pakovanje sadrži 30 pojedinačnih bočica. Prema preporučenom načinu upotrebe, namenjeno je za približno 30 dana.",
  },
  {
    q: "Da li mogu da ga nosim na put?",
    a: "Da. Zbog kompaktnog pakovanja lako se može poneti u torbi, rancu ili koferu — praktičan izbor za posao, putovanja i svakodnevne obaveze.",
  },
];

/** FAQ akordeon — jedina interaktivna (client) sekcija. */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section tone="white" narrow>
      <SectionHeading eyebrow="Česta pitanja" title="Možda još imate nekoliko pitanja…" />

      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl border border-bordo/10 bg-cream"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg font-semibold text-bordo">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 text-2xl text-honey transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
