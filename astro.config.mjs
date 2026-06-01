// @ts-check
import { defineConfig } from 'astro/config';

const BASE = '/ahli-summer-camp-website/';

/**
 * Remark plugin: rewrite root-relative markdown URLs (e.g. `/project-workbook/`)
 * to include the site's `base` (`/ahli-summer-camp-website/project-workbook/`).
 *
 * Astro's url() helper handles this in .astro templates, but raw markdown
 * links in src/content and src/md don't go through url(), so without this
 * plugin every `](/foo)` becomes a broken link on GitHub Pages.
 */
function remarkBaseUrl() {
  const prefix = BASE === '/' ? '' : BASE.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    const visit = (node) => {
      if (
        (node.type === 'link' || node.type === 'image' || node.type === 'definition') &&
        typeof node.url === 'string'
      ) {
        const u = node.url;
        // Rewrite only root-relative URLs (start with single `/`), and don't
        // double-prefix if base is already present.
        if (u.startsWith('/') && !u.startsWith('//') && !u.startsWith(prefix + '/')) {
          node.url = prefix + u;
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  // Static site — produces plain HTML/CSS/JS that GitHub Pages serves as-is.
  output: 'static',

  // Deployed at https://ahli-org.github.io/ahli-summer-camp-website/
  // All internal links in .astro files go through url() in src/lib/site.ts;
  // root-relative links inside markdown content are rewritten by the remark
  // plugin above so they also pick up `base`.
  site: 'https://ahli-org.github.io',
  base: BASE,

  markdown: {
    remarkPlugins: [remarkBaseUrl],
  },
});
