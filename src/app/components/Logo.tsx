import Image from "next/image";

// Logo "ZDRAVRITUAL.COM" (public/logo.png — crn tekst, providna pozadina).
// `dark:invert` na tamnoj temi pretvara crn tekst u beli.
// Originalni odnos stranica je 835 x 77.

const RATIO = 77 / 835;

export default function Logo({
  width = 110,
  className,
}: {
  width?: number;
  className?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt="ZDRAVRITUAL.COM"
      width={width}
      height={Math.round(width * RATIO)}
      priority
      className={`dark:invert ${className ?? ""}`}
    />
  );
}
