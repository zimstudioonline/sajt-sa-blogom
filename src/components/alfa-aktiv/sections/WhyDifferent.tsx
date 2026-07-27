import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Otvorite",
    text: "Uzmete jednu malu bočicu od 20 ml. Bez merenja, bez pripreme.",
  },
  {
    n: "02",
    title: "Popijete",
    text: "U jednom gutljaju. Prijatan voćni ukus aronije, ribizle i meda.",
  },
  {
    n: "03",
    title: "Nastavite dan",
    text: "Gotovo za manje od deset sekundi. Rutina je završena.",
  },
];

/** "Zašto baš ALFA AKTIV" + Metoda 20 sekundi (3 koraka). */
export default function WhyDifferent() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Metoda 20 sekundi"
        title="Zašto baš ALFA AKTIV?"
        subtitle="Zato što nije napravljen da mesec dana skuplja prašinu na polici — nego da postane deo vaše svakodnevice. Baš kao pranje zuba. Baš kao jutarnja kafa."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border border-bordo/10 bg-cream p-7 shadow-sm"
          >
            <span className="font-display text-4xl font-semibold text-honey">
              {s.n}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-bordo">
              {s.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-ink/80">
        Što je neka navika jednostavnija, veća je verovatnoća da ćete je zaista zadržati.
        To traje manje vremena nego što vam treba da otključate telefon.
      </p>
    </Section>
  );
}
