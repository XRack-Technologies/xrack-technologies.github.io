import type { APIRoute } from "astro";
import { renderOgPng } from "../../lib/og";
import { SITE } from "../../lib/site";

export const GET: APIRoute = async () => {
  const png = await renderOgPng({ title: SITE.tagline, tag: "blog" });
  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
