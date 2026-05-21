// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static site — produces plain HTML/CSS/JS that GitHub Pages serves as-is.
  output: 'static',

  // ── GitHub Pages configuration ─────────────────────────────────────────────
  // Update `site` to the URL your site will live at.
  //
  //  • Org/user page  → repo named `<org>.github.io`
  //      site: 'https://your-org.github.io'   base: '/'   (leave base out)
  //
  //  • Project page   → any other repo name, e.g. `ahli-summer-camp`
  //      site: 'https://your-org.github.io'
  //      base: '/ahli-summer-camp'
  //
  //  • Custom domain  → site: 'https://camp.ahli.org'   base: '/'
  //
  // All internal links use the url() helper in src/lib/site.ts, so they adapt
  // automatically once you set `base` correctly here.
  site: 'https://your-org.github.io',
  // base: '/ahli-summer-camp',
});
