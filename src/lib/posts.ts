// Server-only helperi za blog postove.
//
// Postovi su Markdown fajlovi u `content/posts/*.md` sa YAML frontmatter-om.
// Slug posta = ime fajla bez ekstenzije. Sve funkcije čitaju sa fajl-sistema, pa se
// smeju pozivati samo na serveru (Server Components / build vreme).

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { getCategoryByName, type Category } from "./categories";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO format, npr. "2026-07-10"
  category: string; // ime kategorije iz frontmatter-a
  categorySlug: string; // izvedeni slug (za /teme/[category])
  excerpt: string;
  author: string;
  cover?: string;
  draft: boolean;
};

export type Post = PostMeta & {
  content: string; // sirovo Markdown telo
};

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(POSTS_DIR, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const categoryName = String(data.category ?? "");
  const category: Category | undefined = getCategoryByName(categoryName);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    category: category?.name ?? categoryName,
    categorySlug: category?.slug ?? "",
    excerpt: String(data.excerpt ?? ""),
    author: String(data.author ?? "Redakcija Zdrav Ritual"),
    cover: data.cover ? String(data.cover) : undefined,
    draft: Boolean(data.draft ?? false),
    content,
  };
}

function listPostFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
}

// Svi objavljeni postovi (bez draft-ova), sortirani po datumu — najnoviji prvi.
export function getAllPosts(): Post[] {
  return listPostFiles()
    .map(readPostFile)
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  const fileName = `${slug}.md`;
  if (!fs.existsSync(path.join(POSTS_DIR, fileName))) return undefined;
  return readPostFile(fileName);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return getAllPosts().filter((post) => post.categorySlug === categorySlug);
}

// Mapa: slug kategorije -> broj objavljenih postova.
export function countPostsByCategory(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const post of getAllPosts()) {
    if (!post.categorySlug) continue;
    counts[post.categorySlug] = (counts[post.categorySlug] ?? 0) + 1;
  }
  return counts;
}
