import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";

const timeline = [
  {
    time: "07:00",
    text: "Budilnik zvoni. Umesto da razmišljate šta danas treba popiti — otvorite jednu bočicu. Dan počinje.",
  },
  {
    time: "08:30",
    text: "Na putu ste ka poslu. Ne nosite veliku kutiju. Rutina je već završena.",
  },
  {
    time: "12:30",
    text: "Pauza za ručak. Ne morate razmišljati da li ste jutros odvojili vreme za sebe. Jeste.",
  },
  {
    time: "18:00",
    text: "Posao je gotov. Znate da ste danas napravili jednu malu odluku koja se uklapa u vaš način života.",
  },
];

/** "Jedan dan sa ALFA AKTIV" — vremenska osa. */
export default function DayTimeline() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Jedan dan sa ALFA AKTIV"
        title="Kako izgleda kada mala navika postane deo dana"
      />

      <div className="mx-auto mt-12 max-w-2xl">
        <ol className="relative border-l-2 border-honey/40 pl-8">
          {timeline.map((t) => (
            <li key={t.time} className="mb-10 last:mb-0">
              <span className="absolute -left-[0.7rem] flex h-5 w-5 items-center justify-center rounded-full bg-honey ring-4 ring-cream" />
              <p className="font-display text-xl font-semibold text-bordo">{t.time}</p>
              <p className="mt-1 leading-relaxed text-muted">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
