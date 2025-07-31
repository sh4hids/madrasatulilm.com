import { z } from 'astro:content';

export const linkSchema = z.array(
    z.object({
        title: z.string(),
        link: z.string(),
    })
);
