import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";


const BASE_PATH = "./src/data/pages/index";
const INDEX_PATTERN = "index.{md,mdx}";

export const index = defineCollection({
  loader: glob({ pattern: INDEX_PATTERN, base: BASE_PATH }),
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