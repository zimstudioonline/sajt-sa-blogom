"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Zdrav Ritual — početna"
          className="text-foreground"
          onClick={() => setOpen(false)}
        >
          <Logo width={120} />
        </Link>

        {/* Desktop meni — centriran, sakriven na mobilnom */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
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

        {/* Hamburger — samo na mobilnom */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-border/50 md:hidden"
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobilni padajući meni */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-surface md:hidden"
        >
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-2 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
