import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/blog", label: "Blog" },
  { href: "/teme", label: "Teme" },
  { href: "/kalkulatori", label: "Kalkulatori" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-start px-6">
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/"
          aria-label="Zdrav Ritual — početna"
          className="text-foreground"
        >
          <Logo width={120} />
        </Link>
      </div>
    </header>
  );
}
