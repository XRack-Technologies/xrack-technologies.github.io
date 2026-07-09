import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { renderOgPng } from "../../lib/og";
import { renderBilingual } from "../../lib/i18n";

export async function getStaticPaths() {
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && !data.cover,
  );
  const paths = [];
  for (const post of posts) {
    const tag = post.data.tags[0] ?? "XRack";
    paths.push({ params: { slug: post.id }, props: { title: post.data.title, tag } });
    const { bilingual } = renderBilingual(post.body ?? "");
    const hasTr = bilingual || !!post.data.title_tr || !!post.data.description_tr;
    if (hasTr) {
      paths.push({
        params: { slug: `${post.id}/tr` },
        props: { title: post.data.title_tr ?? post.data.title, tag },
      });
    }
  }
  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgPng({
    title: props.title as string,
    tag: props.tag as string,
  });
  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
