// Resource lists for the Resources page.
//
// Two audiences (students, instructors), each with a list of resources. Mark an
// item `gated: true` for material that should only be available to logged-in /
// authorized people — it renders with a lock and points at `gatedHref` (e.g. a
// members area, a private video host, or a shared drive) rather than a public
// link. Public items just use `href`.
//
// Until the gating mechanism is wired up (see README → "Gating private content"),
// gated items can point at a placeholder or an access-request mailto.

export interface Resource {
  title: string;
  description?: string;
  /** Public URL. Used when `gated` is false/undefined. */
  href?: string;
  /** Access-controlled URL. Used when `gated` is true. */
  gatedHref?: string;
  gated?: boolean;
}

export const studentResources: Resource[] = [
  {
    title: 'Pre-camp setup guide',
    description: 'Environment setup and accounts to create before day one.',
    href: '#',
  },
  {
    title: 'Lab notebooks',
    description: 'The daily Jupyter labs using synthetic clinical data.',
    gated: true,
    gatedHref: '#',
  },
  {
    title: 'Session recordings',
    description: 'Video recordings of each session, shared with the cohort.',
    gated: true,
    gatedHref: '#',
  },
];

export const instructorResources: Resource[] = [
  {
    title: 'Instructor handbook',
    description: 'Logistics, schedule, and expectations for the week.',
    gated: true,
    gatedHref: '#',
  },
  {
    title: 'Session templates',
    description: 'Slide and notebook templates for concept sessions and labs.',
    gated: true,
    gatedHref: '#',
  },
];
