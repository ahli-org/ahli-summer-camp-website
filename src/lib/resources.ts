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
    description: 'The cumulative project document you complete one part per day — copy it and fill it in.',
    internal: 'project-workbook',
  },
  {
    title: 'Required readings',
    description: 'Each content day’s required papers are listed on its day page.',
    internal: 'curriculum',
  },
  {
    title: 'Evaluation Lab notebook (Day 3)',
    description: 'A template notebook for building your project’s evaluation — discrimination, calibration, utility, subgroups, power, and shortcut probing.',
    file: 'notebooks/evaluation-lab-template.ipynb',
  },
  {
    title: 'Methods Lab notebook (Day 4)',
    description: 'A template notebook for building and comparing methods for your project, reusing your Day 3 evaluation moves.',
    file: 'notebooks/methods-lab-template.ipynb',
  },
  {
    title: 'Session recordings',
    description: 'Video recordings of the lectures — posted after the camp.',
  },
];

export const instructorResources: Resource[] = [
  {
    title: 'Instructor & guest lecturer guide',
    description: 'Program design, teaching roles, and a brief for every day.',
    internal: 'instructor-guide',
  },
  {
    title: 'Curriculum, schedule & lecture outlines',
    description: 'The day-by-day program; each day page carries a slide-by-slide outline of its lead lecture.',
    internal: 'curriculum',
  },
  {
    title: 'Project Workbook template',
    description: 'The seven-part deliverable participants complete across the week.',
    internal: 'project-workbook',
  },
];
