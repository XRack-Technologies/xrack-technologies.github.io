import type { CollectionEntry } from "astro:content";
import { renderBilingual } from "./i18n";

export function absolutize(html: string, site: string): string {
  return html.replace(/(href|src)="\/(?!\/)/g, `$1="${site}`);
}

export function feedItems(posts: CollectionEntry<"blog">[], site: string) {
  return posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    categories: post.data.tags,
    link: `/blog/${post.id}/`,
    content: absolutize(renderBilingual(post.body ?? "").enHtml, site),
  }));
}
