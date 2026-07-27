import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";

const bonuses = [
  {
    tag: "BONUS #1",
    title: "Digitalni vodič „21 dan do navike koja traje”",
    text: "Kako da za 21 dan novu naviku pretvorite u nešto što radite automatski.",
    value: "1.290 din",
  },
  {
    tag: "BONUS #2",
    title: "Mini e-book: Hrana bogata prirodnim antioksidansima",
    text: "Pregled namirnica: bobičasto voće, povrće, začini, napici i ideje za obroke.",
    value: "990 din",
  },
  {
    tag: "BONUS #3",
    title: "Kalendar navika (30 dana)",
    text: "Profesionalno dizajniran kalendar za praćenje napretka — jedna kvačica dnevno.",
    value: "690 din",
  },
  {
    tag: "BONUS #4",
    title: "Vodič za čitanje deklaracija",
    text: "Naučite kako da pročitate sastav i razlikujete marketing od činjenica.",
    value: "890 din",
  },
  {
    tag: "BONUS #5",
    title: "Prioritetna korisnička podrška",
    text: "Pristup timu za sva pitanja o upotrebi, čuvanju, porudžbini i isporuci.",
    value: "500 din",
  },
];

/** Bonus stack — 5 bonusa uz proizvod. */
export default function Bonuses() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Uz svaki paket"
        title="Ne kupujete samo bočicu — dobijate ceo sistem"
        subtitle="Pored proizvoda dobijate i alate koji vam pomažu da ostanete dosledni."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-4">
        {bonuses.map((b) => (
          <div
            key={b.tag}
            className="flex flex-col gap-3 rounded-2xl border border-bordo/10 bg-cream p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="rounded-full bg-bordo px-3 py-1 text-xs font-bold uppercase tracking-wide text-cream">
                {b.tag}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{b.text}</p>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <span className="block text-xs uppercase tracking-wide text-muted">
                Vrednost
              </span>
              <span className="font-display text-lg font-semibold text-honey">
                {b.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
