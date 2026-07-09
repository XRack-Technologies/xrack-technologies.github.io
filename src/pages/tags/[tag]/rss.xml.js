import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { NAV, SITE } from "../../../lib/site";
import { feedItems } from "../../../lib/feed";

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const tags = [...new Set([...NAV.map((n) => n.tag), ...posts.flatMap((p) => p.data.tags)])];
  return tags.map((tag) => ({ params: { tag } }));
}

export async function GET(context) {
  const tag = context.params.tag;
  const label = NAV.find((n) => n.tag === tag)?.label ?? tag;
  const posts = (await getCollection("blog", ({ data }) => !data.draft))
    .filter((p) => p.data.tags.includes(tag))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  const site = context.site?.href ?? "https://blog.xrack.io/";
  return rss({
    title: `${SITE.title} — ${label}`,
    description: `${label} — ${SITE.description}`,
    site: context.site,
    items: feedItems(posts, site),
  });
}
