// People directory — instructors and students.
//
// This is the single place to edit who appears on the Instructors and Students
// pages. Both pages render the same `Person` shape through the PersonCard
// component, so the two stay visually consistent.
//
// To add someone, copy a block in the relevant array and fill it in. Every
// field except `name` is optional — leave anything you don't have yet off and
// the card adapts (e.g. no photo → coloured initials avatar).

export interface Person {
  /** Full name, as it should appear on the card. Required. */
  name: string;
  /** Role or session, e.g. 'Evaluation & Study Design' or 'Lead Instructor'. */
  role?: string;
  /** Institution / company / lab. */
  affiliation?: string;
  /**
   * Photo path. Put the image file in `public/people/` and reference it WITHOUT
   * the leading "public", e.g. 'people/jane-doe.jpg'. PersonCard runs it through
   * the url() helper so it works under any base path. Omit for an initials avatar.
   */
  photo?: string;
  /** One short paragraph. Plain text. */
  bio?: string;
  /** External links shown as small pills, e.g. website, Google Scholar, GitHub. */
  links?: { label: string; href: string }[];
}

// ── Instructors ─────────────────────────────────────────────────────────────
// Replace these placeholders with confirmed faculty. The `role` field is a good
// place to note which day/topic they lead.
export const instructors: Person[] = [
  {
    name: 'Instructor to be announced',
    role: 'Foundations of ML for Health',
    affiliation: '',
    bio: 'Bio coming soon.',
    // photo: 'people/example.jpg',
    // links: [{ label: 'Website', href: 'https://example.edu' }],
  },
  {
    name: 'Instructor to be announced',
    role: 'Working with Clinical Data',
    bio: 'Bio coming soon.',
  },
  {
    name: 'Instructor to be announced',
    role: 'Evaluation & Study Design',
    bio: 'Bio coming soon.',
  },
  {
    name: 'Instructor to be announced',
    role: 'Methods & Modeling',
    bio: 'Bio coming soon.',
  },
  {
    name: 'Instructor to be announced',
    role: 'From Models to Practice',
    bio: 'Bio coming soon.',
  },
  {
    name: 'Instructor to be announced',
    role: 'Incentives, Economics & Systems',
    bio: 'Bio coming soon.',
  },
];

// ── Students ──────────────────────────────────────────────────────────────--
// The accepted cohort is NOT edited here. It is generated into
// src/data/students.json by `npm run build:students` and exposed, typed, via
// src/lib/students.ts. See scripts/build-students.mjs.
