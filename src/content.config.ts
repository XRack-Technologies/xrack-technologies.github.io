import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    title_tr: z.string().optional(),
    description: z.string(),
    description_tr: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(), // e.g. "/covers/my-post.jpg" (in public/) or a full URL
    tags: z.array(z.string()).default([]),
    keywords: z.array(z.string()).optional(), // SEO keywords; falls back to tags if omitted
    author: z.string().default("Vincent E. Dogan Dursun - CEO & Co-Founder"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
