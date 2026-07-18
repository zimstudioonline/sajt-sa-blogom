import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold text-foreground">Zdrav Ritual</span> —
          vaš vodič ka zdravijem životu.
        </p>
        <nav className="flex gap-6">
          <Link href="/blog" className="transition-colors hover:text-accent">
            Blog
          </Link>
          <Link href="/teme" className="transition-colors hover:text-accent">
            Teme
          </Link>
          <Link href="/kontakt" className="transition-colors hover:text-accent">
            Kontakt
          </Link>
        </nav>
        <p>© {year} Zdrav Ritual</p>
      </div>
    </footer>
  );
}
