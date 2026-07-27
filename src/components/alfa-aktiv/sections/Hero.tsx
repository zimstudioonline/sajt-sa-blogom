import Image from "next/image";
import flasiceImg from "../../../../public/alfa-aktiv/alfa-aktiv-flasice.jpg";
import CTAButton from "@/components/alfa-aktiv/ui/CTAButton";

/** Above-the-fold hero: tamni bordo gradijent, naslov, podnaslov, CTA i foto proizvoda. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-bordo-dark via-bordo to-bordo-soft text-cream">
      {/* Suptilni dekorativni sjaj */}
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-honey/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-berry/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-honey-light">
            Prirodni antioksidans • 20 ml
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            ALFA AKTIV
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl">
            Nije još jedan dodatak ishrani. Ovo je vaš novi svakodnevni ritual za
            zaštitu organizma — u praktičnoj bočici koju popijete za{" "}
            <span className="font-semibold text-honey-light">manje od 10 sekundi</span>.
          </p>

          <p className="mt-3 max-w-xl text-base text-cream/70">
            16 litara pažljivo odabranog voća koncentrisano u samo jednoj bočici od
            20 ml. Sa prirodnim medom, aronijom, crnom ribizlom, vitaminom C, niacinom,
            selenom i jodom.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CTAButton label="IZGRADI SVOJU NAVIKU" />
            <span className="text-sm text-cream/60">
              Jedna mala bočica. Jedna jednostavna navika.
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-sm rounded-3xl bg-cream/5 p-4 ring-1 ring-cream/15 backdrop-blur-sm">
            <Image
              src={flasiceImg}
              alt="ALFA AKTIV bočice sa prirodnim antioksidansom"
              priority
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
