import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

/**
 * Standardni blok naslova sekcije: mali "eyebrow" natpis, glavni naslov
 * (display font) i opcioni podnaslov.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass} ${align === "center" ? "" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
            invert ? "text-honey-light" : "text-bordo"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem] ${
          invert ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            invert ? "text-cream/80" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
