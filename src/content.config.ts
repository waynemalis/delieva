// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ base: './src/content/products', pattern: '**/*.md' }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    locale: z.string().default('es'),
    weight: z.record(z.string(), z.string()).optional(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { products };