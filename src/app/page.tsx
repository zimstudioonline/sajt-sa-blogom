import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "./components/PostCard";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
            Prirodno zdravlje i zdrave navike
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Zdrav Ritual — vaš vodič ka zdravijem životu
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
            Proverene informacije, praktični saveti i inspirativni sadržaji koji vam
            mogu pomoći da unapredite kvalitet života na prirodan način.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Pročitaj blog
            </Link>
            <Link
              href="/teme"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Istraži teme
            </Link>
          </div>
        </div>
      </section>

      {/* Najnoviji postovi */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Najnoviji postovi
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Svi postovi →
          </Link>
        </div>

        {latestPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted">Uskoro stižu prvi postovi.</p>
        )}
      </section>
    </div>
  );
}
