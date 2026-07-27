import CTAButton from "@/components/alfa-aktiv/ui/CTAButton";

/** Završni poziv na akciju pre footera. */
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-bordo-dark via-bordo to-berry px-5 py-20 text-center text-cream sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-honey/20 blur-3xl" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Ne menjajte ceo život. Promenite jednu svakodnevnu naviku.
        </h2>
        <p className="mt-4 text-lg text-cream/80">
          Najbolji trenutak za novu naviku je onaj kada donesete odluku. Počnite od jedne
          bočice.
        </p>
        <div className="mt-8">
          <CTAButton label="ŽELIM SVOJE PAKOVANJE ALFA AKTIV" />
        </div>
      </div>
    </section>
  );
}
