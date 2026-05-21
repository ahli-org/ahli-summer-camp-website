// Typed access to the generated instructor data (src/data/instructors.json).
//
// That JSON is produced by `npm run build:instructors` from the local source
// folder — do not hand-edit it. See scripts/build-people.mjs.

import data from '../data/instructors.json';

export interface InstructorLink {
  label: string;
  href: string;
}

export interface InstructorHighlight {
  type?: string;
  title: string;
  url?: string;
  source?: string;
  date?: string;
}

export interface Instructor {
  slug: string;
  name: string;
  tagline?: string;
  role?: string;
  day?: string;
  assigned_block?: string;
  affiliation: string;
  photo: string | null;
  links: InstructorLink[];
  awards: string[];
  highlights: InstructorHighlight[];
  bio: string[];
}

export const instructors = data as Instructor[];

export function getInstructor(slug: string): Instructor | undefined {
  return instructors.find((i) => i.slug === slug);
}
