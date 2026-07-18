import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statički export za GitHub Pages — Next.js generiše `out/` sa čistim HTML/CSS/JS.
  // Nema servera: newsletter logika je izmeštena u Cloudflare Worker (vidi `worker/`).
  output: "export",

  // GitHub Pages nema image-optimization server, pa `next/image` služi slike kakve jesu.
  images: { unoptimized: true },

  // Svaka ruta postaje `.../index.html` — pouzdanije za statički hosting i poddirektorijume.
  trailingSlash: true,
};

export default nextConfig;
