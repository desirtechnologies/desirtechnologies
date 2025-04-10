import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";



export const home = defineCollection({
  loader: glob({ pattern: "index.{md,mdx}", base: "./src/data/pages/home" }),
  schema: ({ image }) =>
    z.object({
      image: image().optional(),
      imageAlt: z.string().default("image"),
      title: z.string(),
      content: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string().optional(),
        })
        .optional(),
    }),
});