// Resource lists for the Resources page.
//
// Two audiences (students, instructors), each with public resources. A resource
// links via exactly one of:
//   internal — an on-site path (e.g. 'curriculum'), resolved with url()
//   file     — a file in public/ (e.g. 'notebooks/x.ipynb'), served at base + file
//   href     — an external/absolute URL
// A resource with none of these is rendered as "not yet available" (no link),
// for material that won't exist until later (e.g. recordings).

export interface Resource {
  title: string;
  description?: string;
  internal?: string;
  file?: string;
  href?: string;
}

export const studentResources: Resource[] = [
  {
    title: 'Curriculum & daily schedule',
    description: 'The full seven-day program, with a detailed outline for each day.',
    internal: 'curriculum',
  },
  {
    title: 'Project Workbook template',
    description: 'Your private four-part thinking aid (Days 1–4) — copy it and fill it in for yourself.',
    internal: 'project-workbook',
  },
  {
    title: 'Suggested readings',
    description: 'Every content day’s suggested papers, with links — collected on the curriculum page and on each day’s page.',
    internal: 'curriculum#suggested-readings',
  },
  {
    title: 'Session recordings',
    description: 'Video recordings of the lectures — posted after the camp.',
  },
];

// Lecture slide decks (Marp), built in the companion slides repo and synced via
// `npm run sync:slides`. Tentative drafts — actively revised.
export const slideResources: Resource[] = [
  { title: 'Day 1 — Welcome & orientation (Naumann)', file: 'slides/opening-remarks.pdf' },
  { title: 'Day 1 — Problems in ML4H (Szolovits)', file: 'slides/day1-problems.pdf' },
  { title: 'Day 1 — Project walkthrough (Alsentzer)', file: 'slides/day1-alsentzer.pdf' },
  { title: 'Day 2 — Genomics & data sharing (Sieberts & Banerjee)', file: 'slides/day2-sieberts-banerjee.pdf' },
  { title: 'Day 3 — Evaluation & Study Design (Joshi)', file: 'slides/day3-evaluation.pdf' },
  { title: 'Day 3 — Evaluation pitfalls (Salaudeen)', file: 'slides/day3-salaudeen.pdf' },
  { title: 'Day 4 — Methods & Modeling (McDermott)', file: 'slides/day4-methods.pdf' },
  { title: 'Day 4 — Trustworthy-by-construction methods (Gerych)', file: 'slides/day4-gerych.pdf' },
  { title: 'Day 5 — Deployment (Mamdani)', file: 'slides/day5-deployment.pdf' },
];

export const instructorResources: Resource[] = [
  {
    title: 'Instructor & lecturer guide',
    description: 'Program design, teaching roles, and a brief for every day.',
    internal: 'instructor-guide',
  },
  {
    title: 'Curriculum, schedule & lecture outlines',
    description: 'The day-by-day program; each day page carries a slide-by-slide outline of its morning lecture.',
    internal: 'curriculum',
  },
  {
    title: 'Project Workbook template',
    description: 'The private four-part thinking aid (Days 1–4) participants keep for their own projects.',
    internal: 'project-workbook',
  },
];
