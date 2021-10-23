import { defineConfig } from 'vite';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import sveltePreprocess from 'svelte-preprocess';
import reactiveCSSPreprocess from 'svelte-reactive-css-preprocess';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: seqPreprocessor([
        sveltePreprocess({
          defaults: {
            style: 'postcss',
          },
          postcss: true,
        }),
        reactiveCSSPreprocess(),
      ]),
    }),
  ],
});
