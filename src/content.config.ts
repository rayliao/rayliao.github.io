import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@config";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content/blog" }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      title: z.string(),
      postSlug: z.string().optional(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const articleSchema = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  cover: z.string().optional(),
  draft: z.boolean().optional(),
});

const yar = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content/yar" }),
  schema: articleSchema,
});

const hakka = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content/hakka" }),
  schema: articleSchema,
});

export const collections = { blog, yar, hakka };