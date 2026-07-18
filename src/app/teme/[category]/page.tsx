import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "../../components/PostCard";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/teme/[category]">
): Promise<Metadata> {
  const { category: slug } = await props.params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage(props: PageProps<"/teme/[category]">) {
  const { category: slug } = await props.params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const posts = getPostsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-10">
        <Link
          href="/teme"
          className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          ← Sve teme
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {category.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">
          {category.description}
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted">
          U ovoj temi još nema objavljenih tekstova. Uskoro stižu novi sadržaji.
        </p>
      )}
    </div>
  );
}
