import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    role: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    tools: z.array(z.string()),
    featured: z.boolean().default(false),
    nda: z.boolean().default(false),
    summary: z.string(),
    visual: z
      .enum(['dashboard', 'website', 'mobile', 'brand', 'landing', 'charts', 'system'])
      .default('dashboard'),
    sortOrder: z.number(),
  }),
});

export const collections = { cases };
