import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { categories } from "@/lib/categories";
import { kalkulatori } from "@/lib/calculators";

// Statički export (GitHub Pages) — sitemap se generiše na build-u u fajl.
export const dynamic = "force-static";

const BASE_URL = "https://zdravritual.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticne = [
    "",
    "/blog",
    "/teme",
    "/kalkulatori",
    "/kontakt",
    "/politika-privatnosti",
    "/kolacici",
    "/disclaimer",
    "/affiliate-disclosure",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postovi = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  const teme = categories.map((c) => ({
    url: `${BASE_URL}/teme/${c.slug}`,
    lastModified: new Date(),
  }));

  const kalk = kalkulatori.map((k) => ({
    url: `${BASE_URL}/kalkulatori/${k.slug}`,
    lastModified: new Date(),
  }));

  return [...staticne, ...postovi, ...teme, ...kalk];
}
