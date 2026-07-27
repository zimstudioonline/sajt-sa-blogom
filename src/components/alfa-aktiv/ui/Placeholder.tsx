type PlaceholderProps = {
  /** Opis šta slika treba da prikaže na ovom mestu. */
  label: string;
  /** CSS aspect-ratio, npr. "4/3", "1/1", "16/9". */
  aspect?: string;
  className?: string;
  rounded?: boolean;
};

/**
 * Vizuelni placeholder za slike koje još nisu dodate (autor, lifestyle
 * scene, avatari, galerija kupaca, foto deklaracije). Jasno označava
 * šta ide na to mesto kako bi se kasnije lako zamenilo pravom fotografijom.
 */
export default function Placeholder({
  label,
  aspect = "4/3",
  className = "",
  rounded = true,
}: PlaceholderProps) {
  return (
    <div
      style={{ aspectRatio: aspect }}
      className={`flex w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-bordo/25 bg-cream-deep/60 p-4 text-center ${
        rounded ? "rounded-2xl" : ""
      } ${className}`}
    >
      <span aria-hidden className="text-2xl opacity-50">
        🖼️
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </span>
    </div>
  );
}
