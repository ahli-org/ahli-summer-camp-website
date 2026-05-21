// Generates the committed student data the website renders from the local
// working copy of the accepted-student source folder.
//
//   .student_source/<Name>/{links.json, bio.md, headshot.png}   (gitignored)
//        │
//        ├─ resizes headshot  → public/people/<slug>.jpg
//        └─ writes profile    → src/data/students.json
//
// Run with:  npm run build:students
//
// The source folder is NOT committed; re-run this only when the source changes.
// Requires ImageMagick `convert` on PATH for headshot resizing.

import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, '.student_source');
const PHOTO_DIR = join(root, 'public', 'people');
const OUT = join(root, 'src', 'data', 'students.json');

if (!existsSync(SRC)) {
  console.error(`Source folder not found: ${SRC}\nCopy the accepted-students folder there first.`);
  process.exit(1);
}
mkdirSync(PHOTO_DIR, { recursive: true });
mkdirSync(dirname(OUT), { recursive: true });

// Latin letters that don't decompose under NFKD but have obvious ASCII forms.
const LETTER_MAP = { ø: 'o', Ø: 'o', æ: 'ae', Æ: 'ae', œ: 'oe', Œ: 'oe', ł: 'l', Ł: 'l', đ: 'd', Đ: 'd', ð: 'd', Ð: 'd', þ: 'th', Þ: 'th', ß: 'ss', ı: 'i' };

/** kebab-case slug, diacritics and special letters reduced to ASCII. */
function slugify(name) {
  return name
    .replace(/[øØæÆœŒłŁđĐðÐþÞßı]/g, (c) => LETTER_MAP[c] ?? c)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Named social links → display label, in the order we want them shown.
const LINK_LABELS = [
  ['personal_website', 'Website'],
  ['google_scholar', 'Google Scholar'],
  ['github', 'GitHub'],
  ['linkedin', 'LinkedIn'],
  ['twitter', 'Twitter/X'],
  ['bluesky', 'Bluesky'],
  ['orcid', 'ORCID'],
  ['namedrop', 'NameDrop'],
];

/** Pull the prose paragraphs out of bio.md (drop the heading + bold meta line). */
function bioParagraphs(md) {
  return md
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)
    .filter((b) => !b.startsWith('#'))
    .filter((b) => !/^\*\*.*\*\*$/.test(b))
    .map((b) => b.replace(/\s*\n\s*/g, ' '));
}

const dirs = readdirSync(SRC, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const students = [];
for (const dir of dirs) {
  const folder = join(SRC, dir);
  const linksPath = join(folder, 'links.json');
  if (!existsSync(linksPath)) continue;

  const data = JSON.parse(readFileSync(linksPath, 'utf8'));
  const slug = slugify(data.name);

  // Resize headshot → public/people/<slug>.jpg (fit within 700px, flatten to white).
  const headshot = join(folder, 'headshot.png');
  let photo = null;
  if (existsSync(headshot)) {
    const dest = join(PHOTO_DIR, `${slug}.jpg`);
    execFileSync('convert', [
      headshot, '-resize', '700x700>', '-background', 'white',
      '-flatten', '-quality', '85', dest,
    ]);
    photo = `people/${slug}.jpg`;
  }

  const links = [];
  for (const [key, label] of LINK_LABELS) {
    const href = data.links?.[key];
    if (href) links.push({ label, href });
  }

  const bioPath = join(folder, 'bio.md');
  const paragraphs = existsSync(bioPath) ? bioParagraphs(readFileSync(bioPath, 'utf8')) : [];

  students.push({
    slug,
    name: data.name,
    position: data.position ?? '',
    affiliation: data.affiliation ?? '',
    email: data.email ?? null,
    photo,
    links,
    awards: Array.isArray(data.awards) ? data.awards : [],
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    bio: paragraphs,
  });
}

students.sort((a, b) => a.name.localeCompare(b.name));
writeFileSync(OUT, JSON.stringify(students, null, 2) + '\n');
console.log(`Wrote ${students.length} students → ${OUT}`);
console.log(`Resized ${students.filter((s) => s.photo).length} headshots → ${PHOTO_DIR}`);
