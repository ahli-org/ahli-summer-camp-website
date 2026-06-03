// Home (small working) groups for the camp.
//
// Hand-maintained from the finalized working-groups roster
// (AHLI_2026_Working_Groups_FINAL.xlsx). The 45 accepted participants are split
// into 7 fixed home groups of 6–7. Groups are deliberately mixed across research
// areas, institutions, and geography — the through-line on each is a loose
// thematic hook, not a topic assignment. The point of a fixed group is for each
// member to follow their groupmates' projects across the week.
//
// `slug` links a member to their student profile (src/data/students.json). The
// per-day facilitator is assigned by a round-robin over the group's members (see
// facilitatorFor / facilitatorsForGroup below) — the source roster did not name
// facilitators, so the rotation is generated here and is the single source of
// truth for what the site displays.

export interface GroupMember {
  slug: string;       // student profile slug
  name: string;       // display name (matches the student profile)
  stage?: string;     // career stage, e.g. "PhD Y4", "Postdoc" (omit if N/A)
  focus: string;      // one-line prospective-project focus (approximate)
}

export interface Group {
  n: number;          // group number (1–7)
  name: string;       // constellation name
  throughline: string; // light thematic hook — NOT a required topic
  members: GroupMember[];
}

export const groups: Group[] = [
  {
    n: 1,
    name: 'Lyra',
    throughline: 'Reliability and equity across very different clinical data types.',
    members: [
      { slug: 'jiho-kim', name: 'Jiho Kim', stage: 'Postdoc', focus: 'LLM agents for error-free electronic health records' },
      { slug: 'somayyeh-mousavi', name: 'Somayyeh Mousavi', stage: 'PhD Y4', focus: 'Demographic-aware ECG models for cardiac risk' },
      { slug: 'helena-coggan', name: 'Helena Coggan', stage: 'Postdoc', focus: 'Real-time AI for emergency-department care quality' },
      { slug: 'grace-xiyu-ding', name: 'Grace (Xiyu) Ding', stage: 'PhD Y5', focus: 'Federated Bayesian models for health equity' },
      { slug: 'ferdaous-idlahcen', name: 'Ferdaous Idlahcen', stage: 'PhD Y4', focus: 'Computational pathology for gynecologic oncology' },
      { slug: 'tae-jones', name: 'Tae Jones', stage: 'PhD Y5', focus: 'Human-centered AI for health equity' },
    ],
  },
  {
    n: 2,
    name: 'Carina',
    throughline: 'Generative, imaging, causal, and sensing lenses on how a method reaches care.',
    members: [
      { slug: 'hyungjun-yoon', name: 'Hyungjun Yoon', stage: 'PhD Y6', focus: 'Personalized health LLMs on the edge' },
      { slug: 'chase-fensore', name: 'Chase Fensore', stage: 'PhD Y4', focus: 'Generative AI for personalized clinical care' },
      { slug: 'guilherme-imai-aldeia', name: 'Guilherme Imai Aldeia', stage: 'Postdoc', focus: 'Interpretable AI for brain-disorder diagnosis' },
      { slug: 'tiffany-hsieh', name: 'Tiffany Hsieh', stage: 'PhD Y3', focus: 'Causal ML for cancer treatment decisions' },
      { slug: 'dominik-becker', name: 'Dominik Becker', stage: 'PhD Y4', focus: 'Machine learning for 3D medical imaging' },
      { slug: 'antonio-mendoza', name: 'Antonio Mendoza', stage: 'PhD Y4', focus: 'Embedded multimodal ML for physiological signals' },
    ],
  },
  {
    n: 3,
    name: 'Orion',
    throughline: 'Perception, signals, and claims stress-tested against deployment.',
    members: [
      { slug: 'hangyul-yoon', name: 'Hangyul Yoon', stage: 'PhD Y5', focus: 'Medical vision-language AI' },
      { slug: 'zhongyu-li', name: 'Zhongyu Li', stage: 'PhD Y4', focus: 'Machine learning for hidden cancer risk in diabetes' },
      { slug: 'tanmoy-pias', name: 'Tanmoy Pias', stage: 'Postdoc', focus: 'Vision foundation models for cancer surgery' },
      { slug: 'sameer-neupane', name: 'Sameer Neupane', stage: 'Postdoc', focus: 'Multimodal AI for neurodevelopmental screening' },
      { slug: 'roben-delos-reyes', name: 'Roben Delos Reyes', stage: 'PhD Y4', focus: 'Agent-based evaluation of clinical prediction models' },
      { slug: 'uzma-pathan', name: 'Uzma Pathan', stage: 'PhD Y5', focus: 'Modeling treatment gaps in opioid use disorder' },
    ],
  },
  {
    n: 4,
    name: 'Cygnus',
    throughline: 'Trust, interpretability, and getting evaluation right.',
    members: [
      { slug: 'daeun-kyung', name: 'Daeun Kyung', stage: 'PhD Y5', focus: 'Reinforcement-trained doctor agents' },
      { slug: 'reyhaneh-hosseinpour', name: 'Reyhaneh Hosseinpour', stage: 'PhD Y4', focus: 'LLM virtual patients for clinical training' },
      { slug: 'anders-gjolbye', name: 'Anders Gjølbye', stage: 'PhD Y5', focus: 'Trustworthy EEG foundation models for neurodiagnostics' },
      { slug: 'alemu-sisay-nigru', name: 'Alemu Sisay Nigru', stage: 'PhD Y6', focus: 'AI clinical decision support for spine care' },
      { slug: 'haoran-zhang', name: 'Haoran Zhang', stage: 'PhD Y5', focus: 'Fairness and robustness in clinical machine learning' },
      { slug: 'kyungdo-kim', name: 'Kyungdo Kim', stage: 'PhD Y4', focus: 'Multimodal AI for personalized neurology care' },
    ],
  },
  {
    n: 5,
    name: 'Vela',
    throughline: 'Bold methodological bets alongside real-world clinical epidemiology.',
    members: [
      { slug: 'hiba-ahsan', name: 'Hiba Ahsan', stage: 'PhD Y5', focus: 'Trustworthy reasoning in clinical language models' },
      { slug: 'brighton-nuwagira', name: 'Brighton Nuwagira', stage: 'PhD Y5', focus: 'Topological deep learning for medical imaging' },
      { slug: 'ayush-noori', name: 'Ayush Noori', focus: 'Agentic AI for closed-loop clinical discovery' },
      { slug: 'louise-durand-janin', name: 'Louise Durand-Janin', stage: 'PhD Y3', focus: 'Generative AI to optimize patient care pathways' },
      { slug: 'alexander-schubert', name: 'Alexander Schubert', stage: 'PhD Y5', focus: 'Data science for precision cardiovascular health' },
      { slug: 'simon-lee', name: 'Simon Lee', stage: 'PhD Y4', focus: 'World models for health AI' },
      { slug: 'sylvie-dobrota-lai', name: 'Sylvie Dobrota Lai', stage: 'PhD Y4', focus: 'Passive sensing and ML for stroke recovery' },
    ],
  },
  {
    n: 6,
    name: 'Draco',
    throughline: 'Varied angles on trustworthy data foundations.',
    members: [
      { slug: 'sanjana-ramprasad', name: 'Sanjana Ramprasad', stage: 'PhD Y6', focus: 'Curbing hallucination in medical language models' },
      { slug: 'arvind-pillai', name: 'Arvind Pillai', stage: 'PhD Y5', focus: 'Wearable sensing and foundation models for mental health' },
      { slug: 'amin-adibi', name: 'Amin Adibi', stage: 'PhD Y4', focus: 'Untangling race and fairness in clinical algorithms' },
      { slug: 'dipendra-pant', name: 'Dipendra Pant', stage: 'PhD Y4', focus: 'Causal decision support for youth mental health' },
      { slug: 'umay-kulsoom', name: 'Umay Kulsoom', stage: 'PhD Y4', focus: 'Explainable, causal ML for epilepsy care' },
      { slug: 'divyam-madaan', name: 'Divyam Madaan', stage: 'PhD Y5', focus: 'Multimodal learning for smarter medical data collection' },
      { slug: 'milos-vukadinovic', name: 'Milos Vukadinovic', stage: 'PhD Y4', focus: 'Deep learning for echocardiography interpretation' },
    ],
  },
  {
    n: 7,
    name: 'Corvus',
    throughline: 'Health AI spanning the individual-to-population scale.',
    members: [
      { slug: 'ha-le', name: 'Ha Le', stage: 'PhD Y4', focus: 'Adaptive wearable AI for human activity recognition' },
      { slug: 'yvonne-wu', name: 'Yvonne Wu', stage: 'Postdoc', focus: 'Generative AI for student mental well-being' },
      { slug: 'yasmeena-akhter', name: 'Yasmeena Akhter', stage: 'PhD Y6', focus: 'Edge-AI cough screening for tuberculosis' },
      { slug: 'ben-fox', name: 'Ben Fox', stage: 'PhD Y4', focus: 'Foundation models for sleep and physiological signals' },
      { slug: 'tahmina-sultana-priya', name: 'Tahmina Sultana Priya', stage: 'PhD Y4', focus: 'Explainable patient subtyping for precision medicine' },
      { slug: 'amy-tai', name: 'Amy Tai', stage: 'PhD Y4', focus: 'Privacy-preserving AI for cancer diagnostics' },
      { slug: 'jiyoun-kim', name: 'Jiyoun Kim', stage: 'PhD Y4', focus: 'Multimodal EHR modeling and clinical AI evaluation' },
    ],
  },
];

// The five facilitated small-group days. Days 6–7 carry no home-group session
// (Day 6 is a funding panel + resource-planning working block, Day 7 is final
// presentations), so the rotation runs Days 1–5. Each content day has two
// home-group blocks — Small Group 1 (apply the day's frame) and Small Group 2
// (closing: revise and complete that day's Workbook section).
export interface GroupDay {
  n: number;       // day number
  topic: string;   // what the day's discussion refines
}

export const groupDays: GroupDay[] = [
  { n: 1, topic: 'Problem framing' },
  { n: 2, topic: 'Data' },
  { n: 3, topic: 'Evaluation & study design' },
  { n: 4, topic: 'Methods & modeling' },
  { n: 5, topic: 'Deployment' },
];

// Round-robin facilitator assignment. The week has two home-group blocks on each
// of the 5 content days = 10 lead slots, dealt out in roster order so that every
// member of a 6- or 7-person group facilitates at least once (and several get a
// second turn). Block index k (0-based) over the week maps to members[k % size];
// day d has blocks k = 2(d-1) and 2(d-1)+1.
export function facilitatorFor(group: Group, day: number, block: 1 | 2): GroupMember {
  const k = 2 * (day - 1) + (block - 1);
  return group.members[k % group.members.length];
}

// Per-day facilitator pair for a group, in day order — convenient for tables.
export function facilitatorsForGroup(
  group: Group
): { day: number; topic: string; sg1: GroupMember; sg2: GroupMember }[] {
  return groupDays.map((d) => ({
    day: d.n,
    topic: d.topic,
    sg1: facilitatorFor(group, d.n, 1),
    sg2: facilitatorFor(group, d.n, 2),
  }));
}
