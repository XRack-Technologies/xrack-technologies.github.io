// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://blog.xrack.io",
  base: "/",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
        weights: [400, 500, 600, 700],
        styles: ["normal"],
        // latin-ext covers Turkish glyphs (İ, ğ, ş, …) — the site is EN/TR.
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
        fallbacks: ["Newsreader", "Georgia", "serif"],
      },
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains",
        weights: [500, 600, 700],
        styles: ["normal"],
        fallbacks: ["SF Mono", "IBM Plex Mono", "ui-monospace", "Menlo", "monospace"],
      },
    ],
  },
});
