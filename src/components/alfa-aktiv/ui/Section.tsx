import type { ReactNode } from "react";

type Tone = "cream" | "white" | "deep" | "bordo";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream text-ink",
  white: "bg-white text-ink",
  deep: "bg-cream-deep text-ink",
  bordo: "bg-bordo-dark text-cream",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  className?: string;
  /** Uža unutrašnja širina za tekstualne sekcije. */
  narrow?: boolean;
  children: ReactNode;
};

/**
 * Wrapper za sve sekcije stranice — ujednačen vertikalni razmak,
 * maksimalna širina i naizmenična pozadina (prop `tone`).
 */
export default function Section({
  id,
  tone = "cream",
  className = "",
  narrow = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`${toneClasses[tone]} px-5 py-16 sm:py-20 md:py-24`}>
      <div
        className={`mx-auto w-full ${narrow ? "max-w-3xl" : "max-w-6xl"} ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
