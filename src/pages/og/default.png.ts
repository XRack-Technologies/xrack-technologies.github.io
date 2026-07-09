import type { APIRoute } from "astro";
import { renderOgPng } from "../../lib/og";
import { SITE } from "../../lib/site";

// Default 1200x630 share card for pages without their own image (home, about,
// tag pages), so nothing shares as the bare square logo (AUD-H5).
export const GET: APIRoute = async () => {
  const png = await renderOgPng({ title: SITE.tagline, tag: "blog" });
  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
