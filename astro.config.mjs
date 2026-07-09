// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://blog.xrack.io",
  base: "/",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
