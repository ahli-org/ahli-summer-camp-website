// Central place for site-wide data. Edit values here and they update everywhere.

// Astro injects BASE_URL from `base` in astro.config.mjs. It always ends in "/".
const BASE: string = import.meta.env.BASE_URL;

/**
 * Build an internal link that respects the configured `base` path.
 * Pass a clean path with no leading/trailing slashes, e.g. url('curriculum').
 *   base '/'                 -> url('about') === '/about/'
 *   base '/ahli-summer-camp' -> url('about') === '/ahli-summer-camp/about/'
 */
export function url(path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE}${clean}/` : BASE;
}

/** Normalise the current pathname to a bare key ('' for home, 'about', ...). */
export function currentKey(pathname: string): string {
  return pathname.replace(BASE, '').replace(/^\/+|\/+$/g, '');
}

// Review mode: shows a prominent internal review banner (see ReviewNotice.astro)
// flagging content that needs human verification. SET TO false BEFORE DEPLOY.
export const REVIEW_MODE = false;

export const SITE = {
  name: 'AHLI Health AI Summer Camp',
  shortName: 'AHLI Summer Camp',
  year: '2026',
  tagline: 'A week-long intensive in machine learning for health.',
  dates: 'June 22–28, 2026',
  email: 'summercamp@ahli.cc',
  funder: 'Gordon and Betty Moore Foundation',
  colocatedWith: 'the Conference on Health, Inference, and Learning (CHIL)',
};

export const NAV: { label: string; path: string }[] = [
  { label: 'Home', path: '' },
  { label: 'About', path: 'about' },
  { label: 'Curriculum', path: 'curriculum' },
  { label: 'Small groups', path: 'small-groups' },
  { label: 'Instructors', path: 'instructors' },
  { label: 'Students', path: 'students' },
  { label: 'Before you arrive', path: 'before-you-arrive' },
  { label: 'Resources', path: 'resources' },
  { label: 'Sponsors', path: 'sponsors' },
  { label: 'FAQ', path: 'faq' },
];
