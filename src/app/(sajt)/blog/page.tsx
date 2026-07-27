import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import PostCard from "../components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Svi tekstovi sa portala Zdrav Ritual — o zdravlju, ishrani i zdravim navikama.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Svi tekstovi na jednom mestu — pretražite po temama ili prelistajte najnovije.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted">Uskoro stižu prvi postovi.</p>
      )}
    </div>
  );
}
