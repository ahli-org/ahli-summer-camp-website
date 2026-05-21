// Typed access to the generated cohort data (src/data/students.json).
//
// That JSON is produced by `npm run build:students` from the local source
// folder — do not hand-edit it. To change what appears, update the source data
// and re-run the generator. See scripts/build-students.mjs.

import data from '../data/students.json';

export interface StudentLink {
  label: string;
  href: string;
}

export interface StudentHighlight {
  type?: string;
  title: string;
  url?: string;
  source?: string;
  date?: string;
}

export interface Student {
  slug: string;
  name: string;
  tagline?: string;
  position: string;
  affiliation: string;
  email: string | null;
  photo: string | null;
  links: StudentLink[];
  awards: string[];
  highlights: StudentHighlight[];
  bio: string[];
}

export const students = data as Student[];

export function getStudent(slug: string): Student | undefined {
  return students.find((s) => s.slug === slug);
}
