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

import { existsSync, mkdirSync, readdirSync, copyFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const DEST = join(root, 'public', 'slides');

const candidates = [
  process.env.AHLI_SLIDES_DIR,
  join(root, '..', 'AHLI Slides', 'ahli-summer-camp-slides'),
  join(root, '..', 'ahli-summer-camp-slides'),
].filter(Boolean);

const slidesRepo = candidates.find((p) => existsSync(join(p, 'dist', 'html')));
if (!slidesRepo) {
  console.error('Could not find the slides repo with a built dist/html.');
  console.error('Build it there (npm run build) or set AHLI_SLIDES_DIR. Looked in:');
  candidates.forEach((p) => console.error('  ' + p));
  process.exit(1);
}

rmSync(DEST, { recursive: true, force: true });
mkdirSync(DEST, { recursive: true });

let n = 0;
for (const sub of ['html', 'pdf']) {
  const srcDir = join(slidesRepo, 'dist', sub);
  if (!existsSync(srcDir)) continue;
  for (const f of readdirSync(srcDir)) {
    if (f.endsWith(`.${sub === 'html' ? 'html' : 'pdf'}`)) {
      copyFileSync(join(srcDir, f), join(DEST, f));
      n++;
    }
  }
}
console.log(`Synced ${n} deck files from ${slidesRepo} → ${DEST}`);
