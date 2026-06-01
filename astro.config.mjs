// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static site — produces plain HTML/CSS/JS that GitHub Pages serves as-is.
  output: 'static',

  // Deployed at https://ahli-org.github.io/ahli-summer-camp-website/
  // All internal links go through url() in src/lib/site.ts, so they pick up
  // `base` automatically.
  site: 'https://ahli-org.github.io',
  base: '/ahli-summer-camp-website/',
});
