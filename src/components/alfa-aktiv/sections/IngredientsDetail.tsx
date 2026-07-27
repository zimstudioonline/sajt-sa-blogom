import type { ReactNode } from "react";
import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";
import BlackcurrantIcon from "@/components/alfa-aktiv/ui/icons/BlackcurrantIcon";
import AroniaIcon from "@/components/alfa-aktiv/ui/icons/AroniaIcon";

const ingredients: { emoji: ReactNode; name: string; text: string }[] = [
  {
    emoji: <AroniaIcon className="h-8 w-8" />,
    name: "Aronija",
    text: "Tamno bobičasto voće poznato po prirodnom sadržaju polifenola i antocijana.",
  },
  {
    emoji: <BlackcurrantIcon className="h-8 w-8" />,
    name: "Crna ribizla",
    text: "Prirodan izvor vitamina C i biljnih jedinjenja karakterističnih za bobičasto voće.",
  },
  {
    emoji: "🍯",
    name: "Prirodni med",
    text: "Doprinosi prijatnijem ukusu; sastojak koji se vekovima koristi u ishrani.",
  },
  {
    emoji: "💚",
    name: "Vitamin C",
    text: "Doprinosi normalnoj funkciji imunskog sistema i zaštiti ćelija od oksidativnog stresa.",
  },
  {
    emoji: "⚡",
    name: "Vitamin B3 (niacin)",
    text: "Doprinosi normalnom energetskom metabolizmu i smanjenju umora i iscrpljenosti.",
  },
  {
    emoji: "🛡",
    name: "Selen",
    text: "Doprinosi zaštiti ćelija od oksidativnog stresa i normalnoj funkciji štitne žlezde.",
  },
  {
    emoji: "🧠",
    name: "Jod",
    text: "Doprinosi normalnoj funkciji nervnog sistema i štitne žlezde.",
  },
];

/** Detaljne kartice po sastojku sa dozvoljenim (EFSA) tvrdnjama. */
export default function IngredientsDetail() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Zašto baš ovi sastojci"
        title="Svaki sastojak ima svoju ulogu"
        subtitle="Nismo želeli dugačku listu — već pažljivo odabranu kombinaciju namenjenu kao podrška raznovrsnoj i uravnoteženoj ishrani."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ingredients.map((ing) => (
          <div
            key={ing.name}
            className="rounded-2xl border border-bordo/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span aria-hidden className="text-3xl">
              {ing.emoji}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-bordo">
              {ing.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{ing.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
