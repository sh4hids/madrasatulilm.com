import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
    ...eslintPluginAstro.configs.recommended,
    ...tsParser.configs.recommended,
    {
        rules: {},
    },
];
