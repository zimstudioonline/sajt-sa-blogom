import { SITE_URL } from "@/lib/site";

// Dugmad za deljenje posta na društvenim mrežama.
// Običan link koji otvara zvanični "share" dijalog svake mreže u novom tabu.
export default function ShareButtons({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  const url = `${SITE_URL}/blog/${slug}`;
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const mreze = [
    {
      naziv: "Podeli na Facebook-u",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      boja: "#1877f2",
      ikona: (
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      ),
    },
    {
      naziv: "Podeli na X-u (Twitter)",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      boja: "#000000",
      ikona: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
    },
    {
      naziv: "Podeli na LinkedIn-u",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      boja: "#0a66c2",
      ikona: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      ),
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted">Podeli:</span>
      {mreze.map((m) => (
        <a
          key={m.naziv}
          href={m.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={m.naziv}
          title={m.naziv}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-transparent hover:bg-[var(--boja)] hover:text-white"
          style={{ ["--boja" as string]: m.boja }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current transition-colors group-hover:fill-white"
            aria-hidden="true"
          >
            {m.ikona}
          </svg>
        </a>
      ))}
    </div>
  );
}
