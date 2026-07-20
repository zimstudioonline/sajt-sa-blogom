"use client";

import { otvoriPodesavanja } from "@/lib/consent";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

/**
 * Dugme koje ponovo otvara baner sa podešavanjima kolačića.
 *
 * Pristanak mora biti opoziv jednako lako kao što je dat, pa ovaj ulaz stoji i u
 * futeru (dostupan sa svake stranice) i u tekstu Cookie politike.
 */
export default function CookieSettingsLink({ children, className }: Props) {
  return (
    <button
      type="button"
      onClick={otvoriPodesavanja}
      className={
        className ?? "text-foreground underline underline-offset-4 hover:no-underline"
      }
    >
      {children ?? "izmenite podešavanja kolačića"}
    </button>
  );
}
