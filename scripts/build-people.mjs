// Generates the committed people data the website renders from local working
// copies of the source folders (each is gitignored):
//
//   .student_source/<Name>/{links.json, bio.md, headshot.png}   → src/data/students.json
//   .instructor_source/<Name>/{links.json, bio.md, headshot.png} → src/data/instructors.json
//        headshots (both) → public/people/<slug>.jpg
//
// Run with:  npm run build:people   (or build:students / build:instructors)
//
// Source folders are NOT committed; re-run when the source changes.
// Requires ImageMagick `convert` on PATH for headshot resizing.

import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PHOTO_DIR = join(root, 'public', 'people');
mkdirSync(PHOTO_DIR, { recursive: true });

// Latin letters that don't decompose under NFKD but have obvious ASCII forms.
const LETTER_MAP = { ø: 'o', Ø: 'o', æ: 'ae', Æ: 'ae', œ: 'oe', Œ: 'oe', ł: 'l', Ł: 'l', đ: 'd', Đ: 'd', ð: 'd', Ð: 'd', þ: 'th', Þ: 'th', ß: 'ss', ı: 'i' };

// Deterministic pseudo-random sort key (FNV-1a hash of the slug). Gives a fixed,
// non-alphabetical order that is stable across regenerations — and a new person
// slots into the shuffle deterministically without reordering everyone else.
function orderKey(slug) {
  let h = 0x811c9dc5;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function slugify(name) {
  return name
    .replace(/[øØæÆœŒłŁđĐðÐþÞßı]/g, (c) => LETTER_MAP[c] ?? c)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Named social links → display label, in display order.
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

/** Prose paragraphs from bio.md: drop the heading + bold meta line, unwrap italics. */
function bioParagraphs(md) {
  return md
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)
    .filter((b) => !b.startsWith('#'))
    .filter((b) => !/^\*\*.*\*\*$/.test(b))
    .map((b) => b.replace(/\s*\n\s*/g, ' '))
    .map((b) => b.replace(/^\*([^*].*?)\*$/, '$1')); // unwrap *italic* line
}

// Fields copied through verbatim from links.json when present and non-null.
const PASSTHROUGH = ['position', 'email', 'role', 'day', 'assigned_block'];

function buildGroup(srcDirName, outName, label) {
  const SRC = join(root, srcDirName);
  if (!existsSync(SRC)) {
    console.warn(`(skip ${label}) source folder not found: ${srcDirName}`);
    return;
  }
  const dirs = readdirSync(SRC, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const people = [];
  for (const dir of dirs) {
    const folder = join(SRC, dir);
    const linksPath = join(folder, 'links.json');
    if (!existsSync(linksPath)) continue;

    const data = JSON.parse(readFileSync(linksPath, 'utf8'));
    const slug = slugify(data.name);

    const headshot = join(folder, 'headshot.png');
    let photo = null;
    if (existsSync(headshot)) {
      execFileSync('convert', [
        headshot, '-resize', '700x700>', '-background', 'white',
        '-flatten', '-quality', '85', join(PHOTO_DIR, `${slug}.jpg`),
      ]);
      photo = `people/${slug}.jpg`;
    }

    const links = [];
    for (const [key, lbl] of LINK_LABELS) {
      const href = data.links?.[key];
      if (href) links.push({ label: lbl, href });
    }

    const bioPath = join(folder, 'bio.md');
    const bio = existsSync(bioPath) ? bioParagraphs(readFileSync(bioPath, 'utf8')) : [];

    const person = {
      slug,
      name: data.name,
      affiliation: data.affiliation ?? '',
      photo,
      links,
      awards: Array.isArray(data.awards) ? data.awards : [],
      highlights: Array.isArray(data.highlights) ? data.highlights : [],
      bio,
    };
    for (const key of PASSTHROUGH) {
      if (data[key] != null && data[key] !== '') person[key] = data[key];
    }
    people.push(person);
  }

  people.sort((a, b) => orderKey(a.slug) - orderKey(b.slug));
  const out = join(root, 'src', 'data', outName);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, JSON.stringify(people, null, 2) + '\n');
  console.log(`Wrote ${people.length} ${label} → src/data/${outName} (${people.filter((p) => p.photo).length} headshots)`);
}

const which = process.argv[2] ?? 'all';
if (which === 'students' || which === 'all') buildGroup('.student_source', 'students.json', 'students');
if (which === 'instructors' || which === 'all') buildGroup('.instructor_source', 'instructors.json', 'instructors');
