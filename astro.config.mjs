// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Served at the custom domain root (blog.xrack.io). If you ever move off the
// custom domain, set `site`/`base` to match the GitHub Pages URL.
export default defineConfig({
  site: "https://blog.xrack.io",
  base: "/",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
