import { z } from 'astro:content';

export const bookSchema = z.object({
    name: z.string(),
    slug: z.string(),
    image: z.string(),
    description: z.string(),
    prices: z.object({
        hardCover: z.string().optional(),
        paperback: z.string().optional(),
    }),
});
