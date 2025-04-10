import { z } from "astro:content";

const searchable = function() {
    return z.object({
        title: z.string(),
        description: z.string().optional(),
        autodescription: z.boolean().default(true),
        draft: z.boolean().default(false),
      });
}

const social = z.object({
  discord: z.string().optional(),
  email: z.string().optional(),
  facebook: z.string().optional(),
  github: z.string().optional(),
  instagram: z.string().optional(),
  linkedIn: z.string().optional(),
  pinterest: z.string().optional(),
  tiktok: z.string().optional(),
  website: z.string().optional(),
  youtube: z.string().optional(),
});


export { 
  searchable,
  social,
}