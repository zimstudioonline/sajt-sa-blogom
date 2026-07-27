/** Zvanična stranica proizvoda (checkout / porudžbina). */
export const PRODUCT_URL = "https://energijazazivot.com/p/alfa-aktiv/";

type CTAButtonProps = {
  /** Tekst dugmeta (first-person akcioni glagol iz copy-ja). */
  label?: string;
  href?: string;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  className?: string;
};

/**
 * Glavni poziv na akciju. Podrazumevano skroluje na sekciju ponude (#ponuda);
 * eksterni linkovi (http...) otvaraju stranicu proizvoda u novom tabu.
 * Tekstovi su naizmenični kroz stranicu da drže interesovanje.
 */
export default function CTAButton({
  label = "ŽELIM SVOJ ALFA AKTIV",
  href = "#ponuda",
  variant = "primary",
  size = "lg",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0";
  const sizeClass =
    size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm";
  const variantClass =
    variant === "primary"
      ? "bg-honey text-bordo-dark shadow-lg shadow-bordo/20 hover:bg-honey-light"
      : "border-2 border-cream/60 text-cream hover:bg-cream hover:text-bordo-dark";

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${sizeClass} ${variantClass} ${className}`}
    >
      <span aria-hidden>▶</span>
      {label}
    </a>
  );
}
