import type { ReactNode } from "react";

type CheckItemProps = {
  children: ReactNode;
  invert?: boolean;
  /** Ikonica ispred stavke (podrazumevano kvačica). */
  icon?: ReactNode;
};

/** Stavka liste sa kvačicom — za benefite, sastojke i kvalifikacione liste. */
export default function CheckItem({ children, invert = false, icon }: CheckItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          invert ? "bg-honey text-bordo-dark" : "bg-leaf/15 text-leaf"
        }`}
      >
        {icon ?? "✓"}
      </span>
      <span className={`leading-relaxed ${invert ? "text-cream/90" : "text-ink/90"}`}>
        {children}
      </span>
    </li>
  );
}
