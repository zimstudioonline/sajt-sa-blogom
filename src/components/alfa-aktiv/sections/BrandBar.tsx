import Link from "next/link";
import Logo from "@/components/Logo";

/**
 * Tanka brend traka iznad hero-a. Namerno BEZ navigacije — na prodajnoj stranici
 * svaki link iz menija je izlaz pre nego što posetilac stigne do #ponuda.
 * Ostaje samo logo, da se vidi čiji je sajt i da postoji put nazad.
 *
 * Pozadina je `bordo-dark` (isti ton kojim počinje hero gradijent), pa se traka
 * stapa sa hero-om umesto da ga preseca. Logo je crn tekst na providnoj podlozi,
 * pa ga `invert` pretvara u beli — bezuslovno, jer landing nema tamnu temu.
 */
export default function BrandBar() {
  return (
    <div className="bg-bordo-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href="/"
          className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
          aria-label="Zdrav Ritual — početna strana"
        >
          <Logo width={120} invertNaTamnoj={false} className="invert" />
        </Link>

        <p className="text-right text-[11px] leading-tight text-cream/50 sm:text-xs">
          Stranica proizvoda na portalu Zdrav Ritual
        </p>
      </div>
    </div>
  );
}
