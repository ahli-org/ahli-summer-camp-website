// Resource lists for the Resources page.
//
// Two audiences (students, instructors), each with a list of public resources.
// Use `internal` for an on-site path (run through the url() helper by the page)
// or `href` for an external/absolute URL. Items without a live link yet use '#'
// and a description noting when they'll be posted.

export interface Resource {
  title: string;
  description?: string;
  /** External or absolute URL. */
  href?: string;
  /** On-site path (e.g. 'curriculum'); resolved with url() by the page. */
  internal?: string;
}

export const studentResources: Resource[] = [
  {
    title: 'Curriculum & daily schedule',
    description: 'The full seven-day program, with a detailed outline for each day.',
    internal: 'curriculum',
  },
  {
    title: 'Project Workbook template',
    description: 'The cumulative project document you complete one part per day. Posted before the camp.',
    href: '#',
  },
  {
    title: 'Required readings',
    description: 'Each content day’s required papers are listed on its day page; full PDFs/links posted before the camp.',
    internal: 'curriculum',
  },
  {
    title: 'Day 3 & 4 workshop notebooks',
    description: 'Worked example notebooks and a template for building your own evaluation and methods notebooks. Posted before the camp.',
    href: '#',
  },
  {
    title: 'Session recordings',
    description: 'Video recordings of the lectures, posted after the camp.',
    href: '#',
  },
];

export const instructorResources: Resource[] = [
  {
    title: 'Lecture slide outlines',
    description: 'Slide-by-slide outlines for each lead lecture — the basis for the day pages’ lecture outlines.',
    internal: 'curriculum',
  },
  {
    title: 'Program schedule',
    description: 'The finalized day-by-day schedule and the shared content-day template.',
    internal: 'curriculum',
  },
  {
    title: 'Specialty breakout & workshop guides',
    description: 'The six domain tracks and the build-your-own-notebook workshop design. Posted before the camp.',
    href: '#',
  },
];
