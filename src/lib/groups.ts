// Home (small working) groups for the camp.
//
// The 40 accepted participants are split into 8 fixed home groups of 5. Groups
// are deliberately mixed across research areas, institutions, and geography —
// no two members share an institution, each group has a senior anchor, and the
// international cohort is spread across groups. The point of a fixed group is for
// each member to follow their groupmates' projects across the whole week.
//
// Facilitation: the week has five facilitated content days (Days 1–5) and each
// group has five members, so every member facilitates exactly one day — leading
// both that day's small-group blocks. The rotation runs in roster order: the
// first member listed facilitates Day 1, the second Day 2, and so on. See
// facilitatorFor / facilitatorsForGroup below; this file is the single source of
// truth for what the site displays.
//
// `slug` links a member to their student profile (src/data/students.json).

export interface GroupMember {
  slug: string;       // student profile slug
  name: string;       // display name (matches the student profile)
  stage?: string;     // career stage, e.g. "PhD Y4", "Postdoc" (omit if N/A)
  focus: string;      // one-line prospective-project focus (approximate)
}

export interface Group {
  n: number;          // group number (1–8)
  name: string;       // constellation name
  color: string;      // identity color (matches the physical name-tag sticker)
  ink: string;        // text/icon color that reads on `color`
  members: GroupMember[];
}

// Colors are matched to the sticker sheet, in row order from the top:
// 1 lime, 2 indigo, 3 purple, 4 magenta, 5 red, 6 orange, 7 yellow — and the
// bottom row's teal for group 8 (the sheet's coral row is skipped: too close to
// Perseus's red to tell apart on a name tag).

export const groups: Group[] = [
  {
    n: 1,
    name: 'Orion',
    color: '#8CC63E',
    ink: '#1f2a07',
    members: [
      { slug: 'jiho-kim', name: 'Jiho Kim', stage: 'Postdoc', focus: 'LLM agents for error-free electronic health records' },
      { slug: 'tae-jones', name: 'Tae Jones', stage: 'PhD Y5', focus: 'Human-centered AI for health equity' },
      { slug: 'divyam-madaan', name: 'Divyam Madaan', stage: 'PhD Y5', focus: 'Multimodal learning for smarter medical data collection' },
      { slug: 'reyhaneh-hosseinpour', name: 'Reyhaneh Hosseinpour', stage: 'PhD Y4', focus: 'LLM virtual patients for clinical training' },
      { slug: 'amy-tai', name: 'Amy Tai', stage: 'PhD Y4', focus: 'Privacy-preserving AI for cancer diagnostics' },
    ],
  },
  {
    n: 2,
    name: 'Lyra',
    color: '#4254A6',
    ink: '#ffffff',
    members: [
      { slug: 'helena-coggan', name: 'Helena Coggan', stage: 'Postdoc', focus: 'Real-time AI for emergency-department care quality' },
      { slug: 'hangyul-yoon', name: 'Hangyul Yoon', stage: 'PhD Y5', focus: 'Medical vision-language AI' },
      { slug: 'ayush-noori', name: 'Ayush Noori', focus: 'Agentic AI for closed-loop clinical discovery' },
      { slug: 'antonio-mendoza', name: 'Antonio Mendoza', stage: 'PhD Y4', focus: 'Embedded multimodal ML for physiological signals' },
      { slug: 'sylvie-dobrota-lai', name: 'Sylvie Dobrota Lai', stage: 'PhD Y4', focus: 'Passive sensing and ML for stroke recovery' },
    ],
  },
  {
    n: 3,
    name: 'Cygnus',
    color: '#9560A8',
    ink: '#ffffff',
    members: [
      { slug: 'guilherme-imai-aldeia', name: 'Guilherme Imai Aldeia', stage: 'Postdoc', focus: 'Interpretable AI for brain-disorder diagnosis' },
      { slug: 'daeun-kyung', name: 'Daeun Kyung', stage: 'PhD Y5', focus: 'Reinforcement-trained doctor agents' },
      { slug: 'ferdaous-idlahcen', name: 'Ferdaous Idlahcen', stage: 'PhD Y4', focus: 'Computational pathology for gynecologic oncology' },
      { slug: 'ben-fox', name: 'Ben Fox', stage: 'PhD Y4', focus: 'Foundation models for sleep and physiological signals' },
      { slug: 'ha-le', name: 'Ha Le', stage: 'PhD Y4', focus: 'Adaptive wearable AI for human activity recognition' },
    ],
  },
  {
    n: 4,
    name: 'Aquila',
    color: '#E84A8F',
    ink: '#ffffff',
    members: [
      { slug: 'sameer-neupane', name: 'Sameer Neupane', stage: 'Postdoc', focus: 'Multimodal AI for neurodevelopmental screening' },
      { slug: 'anders-gjolbye', name: 'Anders Gjølbye', stage: 'PhD Y5', focus: 'Trustworthy EEG foundation models for neurodiagnostics' },
      { slug: 'somayyeh-mousavi', name: 'Somayyeh Mousavi', stage: 'PhD Y4', focus: 'Demographic-aware ECG models for cardiac risk' },
      { slug: 'kyungdo-kim', name: 'Kyungdo Kim', stage: 'PhD Y4', focus: 'Multimodal AI for personalized neurology care' },
      { slug: 'tiffany-hsieh', name: 'Tiffany Hsieh', stage: 'PhD Y3', focus: 'Causal ML for cancer treatment decisions' },
    ],
  },
  {
    n: 5,
    name: 'Perseus',
    color: '#E5402B',
    ink: '#ffffff',
    members: [
      { slug: 'yvonne-wu', name: 'Yvonne Wu', stage: 'Postdoc', focus: 'Generative AI for student mental well-being' },
      { slug: 'haoran-zhang', name: 'Haoran Zhang', stage: 'PhD Y5', focus: 'Fairness and robustness in clinical machine learning' },
      { slug: 'dominik-becker', name: 'Dominik Becker', stage: 'PhD Y4', focus: 'Machine learning for 3D medical imaging' },
      { slug: 'simon-a-lee', name: 'Simon A. Lee', stage: 'PhD Y4', focus: 'World models for health AI' },
      { slug: 'jiyoun-kim', name: 'Jiyoun Kim', stage: 'PhD Y4', focus: 'Multimodal EHR modeling and clinical AI evaluation' },
    ],
  },
  {
    n: 6,
    name: 'Andromeda',
    color: '#F39A3C',
    ink: '#3a2406',
    members: [
      { slug: 'hyungjun-yoon', name: 'Hyungjun Yoon', stage: 'PhD Y6', focus: 'Personalized health LLMs on the edge' },
      { slug: 'uzma-pathan', name: 'Uzma Pathan', stage: 'PhD Y5', focus: 'Modeling treatment gaps in opioid use disorder' },
      { slug: 'chase-fensore', name: 'Chase Fensore', stage: 'PhD Y4', focus: 'Generative AI for personalized clinical care' },
      { slug: 'amin-adibi', name: 'Amin Adibi', stage: 'PhD Y4', focus: 'Untangling race and fairness in clinical algorithms' },
      { slug: 'tahmina-sultana-priya', name: 'Tahmina Sultana Priya', stage: 'PhD Y4', focus: 'Explainable patient subtyping for precision medicine' },
    ],
  },
  {
    n: 7,
    name: 'Cassiopeia',
    color: '#F6D21F',
    ink: '#3a3406',
    members: [
      { slug: 'sanjana-ramprasad', name: 'Sanjana Ramprasad', stage: 'PhD Y6', focus: 'Curbing hallucination in medical language models' },
      { slug: 'alexander-schubert', name: 'Alexander Schubert', stage: 'PhD Y5', focus: 'Data science for precision cardiovascular health' },
      { slug: 'zhongyu-li', name: 'Zhongyu Li', stage: 'PhD Y4', focus: 'Machine learning for hidden cancer risk in diabetes' },
      { slug: 'dipendra-pant', name: 'Dipendra Pant', stage: 'PhD Y4', focus: 'Causal decision support for youth mental health' },
      { slug: 'louise-durand-janin', name: 'Louise Durand-Janin', stage: 'PhD Y3', focus: 'Generative AI to optimize patient care pathways' },
    ],
  },
  {
    n: 8,
    name: 'Draco',
    color: '#2FA8B5',
    ink: '#ffffff',
    members: [
      { slug: 'grace-xiyu-ding', name: 'Grace (Xiyu) Ding', stage: 'PhD Y5', focus: 'Federated Bayesian models for health equity' },
      { slug: 'arvind-pillai', name: 'Arvind Pillai', stage: 'PhD Y5', focus: 'Wearable sensing and foundation models for mental health' },
      { slug: 'roben-delos-reyes', name: 'Roben Delos Reyes', stage: 'PhD Y4', focus: 'Agent-based evaluation of clinical prediction models' },
      { slug: 'umay-kulsoom', name: 'Umay Kulsoom', stage: 'PhD Y4', focus: 'Explainable, causal ML for epilepsy care' },
      { slug: 'milos-vukadinovic', name: 'Milos Vukadinovic', stage: 'PhD Y4', focus: 'Deep learning for echocardiography interpretation' },
    ],
  },
];

// The five facilitated small-group days. Days 6–7 carry no home-group session
// (Day 6 is a funding panel + resource-planning working block, Day 7 is final
// presentations), so the rotation runs Days 1–5. Each content day has two
// home-group blocks — Small Group 1 (apply the day's frame) and Small Group 2
// (closing: revise and complete that day's Workbook section) — and the same
// member facilitates both blocks on their day.
export interface GroupDay {
  n: number;       // day number
  topic: string;   // what the day's discussion refines
}

export const groupDays: GroupDay[] = [
  { n: 1, topic: 'Problem framing' },
  { n: 2, topic: 'Data' },
  { n: 3, topic: 'Evaluation' },
  { n: 4, topic: 'Methods & modeling' },
  { n: 5, topic: 'Stress-test' },
];

// Day d's facilitator is the d-th member in roster order. With 5 members and 5
// content days, every member facilitates exactly once (leading both of that
// day's small-group blocks).
export function facilitatorFor(group: Group, day: number): GroupMember {
  return group.members[day - 1];
}

// Per-day facilitator for a group, in day order — convenient for tables.
export function facilitatorsForGroup(
  group: Group
): { day: number; topic: string; facilitator: GroupMember }[] {
  return groupDays.map((d, i) => ({
    day: d.n,
    topic: d.topic,
    facilitator: group.members[i],
  }));
}
