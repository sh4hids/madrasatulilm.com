import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';

import { bookSchema, linkSchema } from '@/schemas';

const links = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/data/links' }),
    schema: linkSchema,
});

const books = defineCollection({
    loader: file('./src/data/books.json'),
    schema: bookSchema,
});

export const collections = { links, books };
