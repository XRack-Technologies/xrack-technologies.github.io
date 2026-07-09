import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../lib/site";
import { feedItems } from "../lib/feed";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
  const site = context.site?.href ?? "https://blog.xrack.io/";
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: feedItems(posts, site),
  });
}
