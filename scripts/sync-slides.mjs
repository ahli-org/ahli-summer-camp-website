// Vendors the compiled Marp slide decks from the companion slides repo into
// public/slides/, so the site can serve and link them. The decks are authored
// and built in the separate `ahli-summer-camp-slides` repo and are actively
// revised — re-run this to refresh the snapshot here.
//
// Usage:
//   1. In the slides repo, build the decks:   npm run build   (HTML + PDF)
//   2. Here:                                  npm run sync:slides
//
// The slides repo is found via $AHLI_SLIDES_DIR, else a few sibling-path
// guesses. Copies dist/html/*.html and dist/pdf/*.pdf into public/slides/.
//
// Two important behaviors:
//   • NON-DESTRUCTIVE. It only overwrites the deck files it copies; it never
//     wipes public/slides/. Some decks (e.g. instructor/guest PDFs) are vendored
//     here by hand and do NOT exist in the slides repo build — those are
//     preserved. (Earlier this script wiped the directory and deleted them.)
//   • SELF-CONTAINED HTML. Marp leaves HTML <img src="assets/…"> as relative
//     references, which 404 when the page is served from /slides/. So for each
//     HTML deck we inline any remaining local asset images as base64 data URIs
//     (read from the slides repo's decks/assets/), producing a single portable
//     file. (Markdown-image and background assets are already inlined by Marp.)

import { existsSync, mkdirSync, readdirSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const DEST = join(root, 'public', 'slides');

const candidates = [
  process.env.AHLI_SLIDES_DIR,
  join(root, '..', 'AHLI Slides', 'ahli-summer-camp-slides'),
  join(root, '..', 'ahli-summer-camp-slides'),
].filter(Boolean);

const slidesRepo = candidates.find(
  (p) => existsSync(join(p, 'dist', 'html')) || existsSync(join(p, 'dist', 'pdf')),
);
if (!slidesRepo) {
  console.error('Could not find the slides repo with a built dist/ (html or pdf).');
  console.error('Build it there (npm run build) or set AHLI_SLIDES_DIR. Looked in:');
  candidates.forEach((p) => console.error('  ' + p));
  process.exit(1);
}

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};
const assetsDir = join(slidesRepo, 'decks', 'assets');

// Replace any remaining local `assets/<path>` image references with data URIs so
// the HTML is portable. Leaves already-inlined data: URIs and remote http(s)
// references untouched.
function inlineLocalAssets(html, deckName) {
  return html.replace(/src="(?:\.\/)?assets\/([^"]+)"/g, (m, rel) => {
    const file = join(assetsDir, rel);
    const mime = MIME[extname(rel).toLowerCase()];
    if (!mime || !existsSync(file)) {
      console.warn(`    [${deckName}] could not inline asset: ${rel}`);
      return m;
    }
    return `src="data:${mime};base64,${readFileSync(file).toString('base64')}"`;
  });
}

mkdirSync(DEST, { recursive: true });

let pdfs = 0;
const pdfDir = join(slidesRepo, 'dist', 'pdf');
if (existsSync(pdfDir)) {
  for (const f of readdirSync(pdfDir)) {
    if (f.endsWith('.pdf')) {
      copyFileSync(join(pdfDir, f), join(DEST, f));
      pdfs++;
    }
  }
}

let htmls = 0;
const htmlDir = join(slidesRepo, 'dist', 'html');
if (existsSync(htmlDir)) {
  for (const f of readdirSync(htmlDir)) {
    if (!f.endsWith('.html')) continue;
    writeFileSync(join(DEST, f), inlineLocalAssets(readFileSync(join(htmlDir, f), 'utf-8'), f));
    htmls++;
  }
}

console.log(
  `Synced ${pdfs} PDF + ${htmls} HTML deck(s) from ${slidesRepo} → ${DEST} ` +
    `(existing hand-vendored files left in place).`,
);
