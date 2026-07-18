import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
        {post.cover ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-border">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] w-full bg-gradient-to-br from-accent/20 to-border" />
        )}

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center gap-2 text-xs font-medium text-muted">
            {post.category && (
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-accent">
                {post.category}
              </span>
            )}
            {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
          </div>

          <h3 className="text-lg font-semibold leading-snug text-foreground">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="line-clamp-3 text-sm leading-6 text-muted">
              {post.excerpt}
            </p>
          )}

          <span className="mt-auto pt-1 text-sm font-medium text-accent">
            Pročitaj više →
          </span>
        </div>
      </Link>
    </article>
  );
}
