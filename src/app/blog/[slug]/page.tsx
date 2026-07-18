import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { getCategoryBySlug } from "@/lib/categories";
import { formatDate } from "@/lib/format";
import ShareButtons from "../../components/ShareButtons";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.cover ? { images: [post.cover] } : undefined,
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);

  if (!post || post.draft) notFound();

  const kategorijaBoja = getCategoryBySlug(post.categorySlug)?.color ?? "#c2703d";

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3 text-sm text-muted">
          {post.categorySlug && (
            <Link
              href={`/teme/${post.categorySlug}`}
              className="rounded-full px-3 py-1 font-medium transition-opacity hover:opacity-80"
              style={{
                color: kategorijaBoja,
                backgroundColor: `${kategorijaBoja}1a`,
              }}
            >
              {post.category}
            </Link>
          )}
          {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
        </div>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-4 text-lg leading-8 text-muted">{post.excerpt}</p>
        )}
      </div>

      {post.cover && (
        <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-border">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-a:text-accent prose-headings:text-foreground prose-blockquote:border-accent prose-img:rounded-2xl">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ src, alt }) =>
              typeof src === "string" ? (
                // Slike iz Markdown-a — nepoznatih dimenzija, pa običan <img>.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={alt ?? ""} loading="lazy" className="w-full" />
              ) : null,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <div className="flex justify-center">
          <ShareButtons slug={post.slug} title={post.title} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            ← Nazad na blog
          </Link>
        </div>
      </div>
    </article>
  );
}
