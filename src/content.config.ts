import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Per-day detailed outlines, authored in markdown (src/content/days/day-N.md).
// The day header (date, faculty, mode) comes from src/lib/curriculum.ts, matched
// on the `day` number; the markdown holds the detailed body.
const days = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/days' }),
  schema: z.object({
    day: z.number(),
  }),
});

export const collections = { days };
