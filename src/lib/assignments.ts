// Per-student Day 6 (job talk) and Day 7 (poster) assignments, plus a derived
// small-group facilitation day, for the "week at a glance" box on each student
// page. Hand-maintained from the job-talk & poster assignment sheet.
//
// Facilitation day is derived from the home-group roster order in groups.ts (the
// d-th member facilitates Day d) — single source of truth, no duplication here.

import { groups, groupDays } from './groups';

const ROOMS: Record<'A' | 'B', string> = {
  A: 'Room A · Alder 107',
  B: 'Room B · Alder 103',
};

// Job talks — Saturday, Jun 27 (Day 6). Slotted presenters with start time and,
// where provided, the talk title (pulled from each presenter's submitted slides).
const JOB_TALKS: Record<string, { room: 'A' | 'B'; start: string; title?: string }> = {
  // Room A — Alder 107
  'simon-a-lee': { room: 'A', start: '9:15 AM', title: 'Toward a General Health Intelligence: Learning to Understand and Intervene in Human Health' },
  'kyungdo-kim': { room: 'A', start: '9:55 AM', title: 'From Physical Body to Digital Human: Quantitative Assessment of Human Movement for Neurological Disorders' },
  'divyam-madaan': { room: 'A', start: '10:35 AM', title: 'From Complete to Missing Modalities: A Framework for Multimodal Learning' },
  'helena-coggan': { room: 'A', start: '11:15 AM' },
  'tae-jones': { room: 'A', start: '1:00 PM' },
  'guilherme-imai-aldeia': { room: 'A', start: '1:40 PM' },
  'sameer-neupane': { room: 'A', start: '2:20 PM', title: 'From Wearable Physiological AI to Actionable Insights' },
  'dipendra-pant': { room: 'A', start: '3:00 PM', title: 'Data-driven Clinical Decision Support' },
  'grace-xiyu-ding': { room: 'A', start: '4:00 PM', title: 'High-dimensional Bayesian Transfer Learning in Federated Settings' },
  // Room B — Alder 103
  'hyungjun-yoon': { room: 'B', start: '9:15 AM', title: 'Elevating Large-Scale Pre-Trained Models into Foundation Models for Mobile Sensing' },
  'amin-adibi': { room: 'B', start: '9:55 AM' },
  'jiho-kim': { room: 'B', start: '10:35 AM', title: 'Trustworthy AI for High-Stakes Decisions' },
  'ha-le': { room: 'B', start: '11:15 AM', title: 'Towards Accurate Tracking and Annotation of Physical Activities In-the-Wild' },
  'hangyul-yoon': { room: 'B', start: '1:00 PM' },
  'chase-fensore': { room: 'B', start: '1:40 PM' },
  'uzma-pathan': { room: 'B', start: '2:20 PM' },
  'ayush-noori': { room: 'B', start: '3:00 PM' },
};

// Posters — Sunday, Jun 28 (Day 7).
const POSTER_TIMES: Record<'A' | 'B', string> = {
  A: '9:15–10:15 AM',
  B: '10:30–11:30 AM',
};
const POSTERS: Record<string, 'A' | 'B'> = {
  // Session A
  'helena-coggan': 'A', 'sameer-neupane': 'A', 'dominik-becker': 'A',
  'ferdaous-idlahcen': 'A', 'chase-fensore': 'A', 'yvonne-wu': 'A',
  'daeun-kyung': 'A', 'grace-xiyu-ding': 'A', 'jiho-kim': 'A',
  'sylvie-dobrota-lai': 'A', 'tahmina-sultana-priya': 'A', 'tiffany-hsieh': 'A',
  'kyungdo-kim': 'A', 'ben-fox': 'A', 'zhongyu-li': 'A', 'hangyul-yoon': 'A',
  'dipendra-pant': 'A', 'tae-jones': 'A', 'ha-le': 'A', 'louise-durand-janin': 'A',
  // Session B
  'alexander-schubert': 'B', 'reyhaneh-hosseinpour': 'B', 'guilherme-imai-aldeia': 'B',
  'milos-vukadinovic': 'B', 'ayush-noori': 'B', 'haoran-zhang': 'B',
  'roben-delos-reyes': 'B', 'simon-a-lee': 'B', 'antonio-mendoza': 'B',
  'amin-adibi': 'B', 'divyam-madaan': 'B', 'sanjana-ramprasad': 'B',
  'umay-kulsoom': 'B', 'hyungjun-yoon': 'B', 'arvind-pillai': 'B',
  'somayyeh-mousavi': 'B', 'anders-gjolbye': 'B', 'amy-tai': 'B',
  'uzma-pathan': 'B', 'jiyoun-kim': 'B',
};

export interface StudentSchedule {
  facilitate?: { groupN: number; groupName: string; day: number; topic: string };
  jobTalk?: { room: string; start?: string; title?: string };
  poster?: { session: 'A' | 'B'; time: string };
}

export function scheduleFor(slug: string): StudentSchedule {
  const out: StudentSchedule = {};

  for (const g of groups) {
    const idx = g.members.findIndex((m) => m.slug === slug);
    if (idx >= 0) {
      const d = groupDays[idx];
      if (d) out.facilitate = { groupN: g.n, groupName: g.name, day: d.n, topic: d.topic };
      break;
    }
  }

  if (JOB_TALKS[slug]) {
    out.jobTalk = { room: ROOMS[JOB_TALKS[slug].room], start: JOB_TALKS[slug].start, title: JOB_TALKS[slug].title };
  }

  if (POSTERS[slug]) {
    out.poster = { session: POSTERS[slug], time: POSTER_TIMES[POSTERS[slug]] };
  }

  return out;
}
