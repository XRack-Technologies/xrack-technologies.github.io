// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";
import { globSync } from "tinyglobby";

/** @type {Record<string, string>} */
const postDates = {};
for (const file of globSync("**/*.md", { cwd: "src/content/blog", absolute: true })) {
  const fm = readFileSync(file, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) continue;
  const field = (/** @type {string} */ key) => {
    const m = fm[1].match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
    return m ? m[1].trim().replace(/^["']|["']$/g, "") : null;
  };
  const date = field("updatedDate") ?? field("pubDate");
  if (!date) continue;
  const iso = new Date(date).toISOString();
  const slug = file.split("/src/content/blog/")[1].replace(/\.md$/, "");
  postDates[`/blog/${slug}/`] = iso;
  postDates[`/blog/${slug}/tr/`] = iso;
}

export default defineConfig({
  site: "https://blog.xrack.io",
  base: "/",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = postDates[new URL(item.url).pathname];
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
        weights: [400, 500, 600, 700],
        styles: ["normal"],
        subsets: ["latin", "latin-ext"],
        fallbacks: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      {
        provider: fontProviders.google(),
        name: "Bricolage Grotesque",
        cssVariable: "--font-bricolage",
        weights: ["500 700"],
        styles: ["normal"],
        subsets: ["latin", "latin-ext"],
        fallbacks: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      {
        provider: fontProviders.google(),
        name: "Instrument Serif",
        cssVariable: "--font-instrument",
        weights: [400],
        styles: ["normal", "italic"],
        subsets: ["latin", "latin-ext"],
        fallbacks: ["Newsreader", "Georgia", "serif"],
      },
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains",
        weights: [500, 600, 700],
        styles: ["normal"],
        subsets: ["latin", "latin-ext"],
        fallbacks: ["SF Mono", "IBM Plex Mono", "ui-monospace", "Menlo", "monospace"],
      },
    ],
  },
});
