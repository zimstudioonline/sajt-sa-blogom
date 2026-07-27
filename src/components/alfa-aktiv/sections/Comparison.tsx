import Section from "@/components/alfa-aktiv/ui/Section";
import SectionHeading from "@/components/alfa-aktiv/ui/SectionHeading";

const rows = [
  ["Više kapsula dnevno", "Jedna praktična bočica"],
  ["Potrebna priprema", "Spreman za upotrebu"],
  ["Lako se zaboravi", "Jednostavna rutina"],
  ["Često neprijatan ukus", "Voćni ukus sa medom"],
  ["Velika ambalaža", "Kompaktno pakovanje"],
  ["Više koraka", "Jedan korak"],
];

/** Tabela poređenja: klasični dodaci vs ALFA AKTIV. */
export default function Comparison() {
  return (
    <Section tone="deep">
      <SectionHeading
        eyebrow="Poređenje"
        title="ALFA AKTIV ili klasični dodaci ishrani?"
        subtitle="Poređenje se odnosi na format i praktičnost korišćenja, a ne na efikasnost proizvoda."
      />

      <div className="mx-auto mt-10 max-w-3xl overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse overflow-hidden rounded-2xl bg-white text-left shadow-sm">
          <thead>
            <tr className="bg-bordo text-cream">
              <th className="p-4 font-semibold">Klasični proizvodi</th>
              <th className="p-4 font-semibold">ALFA AKTIV</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([left, right], i) => (
              <tr key={left} className={i % 2 ? "bg-cream/60" : "bg-white"}>
                <td className="p-4 text-muted">
                  <span aria-hidden className="mr-2 text-bordo-soft">
                    ✕
                  </span>
                  {left}
                </td>
                <td className="p-4 font-medium text-ink">
                  <span aria-hidden className="mr-2 text-leaf">
                    ✓
                  </span>
                  {right}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
