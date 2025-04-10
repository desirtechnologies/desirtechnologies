// Main Content Collections Configuration
import { defineCollection, z } from 'astro:content';

// Define shared schemas
const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  image: z.string().optional(),
  publishDate: z.date().optional(),
  updatedDate: z.date().optional(),
  draft: z.boolean().optional().default(false),
  featured: z.boolean().optional().default(false),
  tags: z.array(z.string()).optional(),
  author: z.string().optional(),
  layout: z.string().optional(),
  component: z.string().optional(),
});

// Define typed collections
export const collections = {
  'pages': defineCollection({
    schema: pageSchema,
    // Type is string | undefined so that dynamic collection entries can be added
    type: 'content',
  }),
  'tech': defineCollection({
    schema: pageSchema.extend({
      technologies: z.array(z.string()).optional(),
      complexity: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
      codeLanguage: z.string().optional(),
    }),
    type: 'content',
  }),
  'blog': defineCollection({
    schema: pageSchema.extend({
      excerpt: z.string().optional(),
      minutesRead: z.number().optional(),
    }),
    type: 'content',
  }),
  'docs': defineCollection({
    schema: pageSchema.extend({
      section: z.string().optional(),
      order: z.number().optional(),
      prerequisites: z.array(z.string()).optional(),
    }),
  }),
  'tutorials': defineCollection({
    schema: pageSchema.extend({
      duration: z.string().optional(),
      steps: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })).optional(),
    }),
  }),
};
