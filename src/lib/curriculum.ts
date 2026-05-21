// Curriculum / schedule content for the camp.
//
// Hand-maintained from the finalized program schedule. The `lead`/`guest` slugs
// link to instructor profiles (src/data/instructors.json). Edit freely as the
// program evolves.

export interface Person {
  name: string;
  affil?: string;
  slug?: string; // instructor slug, for linking to their profile
}

export interface CurriculumDay {
  n: number;
  date: string;
  title: string;
  gap: string;        // "the gap it closes"
  mode: string;       // signature mode for the day
  lead?: Person;
  leadLabel?: string; // defaults to "Lead lecture"
  guest?: Person;
  panel?: boolean;
  morning: string;
  afternoon: string;
  questions: string;
}

export const days: CurriculumDay[] = [
  {
    n: 1,
    date: 'Mon · Jun 22',
    title: 'Problems in ML4H',
    gap: 'An interesting topic → a real, well-posed health problem with stakeholders.',
    mode: 'Frame',
    lead: { name: 'Pete Szolovits', affil: 'MIT', slug: 'peter-szolovits' },
    guest: { name: 'Emily Alsentzer', affil: 'Stanford', slug: 'emily-alsentzer' },
    morning:
      'An opening block — welcome, orientation to how the week works, and a brief icebreaker — then a field-level frame: what ML4H is, what is shared across health problems, and what AI can and cannot do. A first small group reframes your project as a problem, not a method.',
    afternoon:
      'A guest lecture walks a real project from messy problem-formulation toward clinical use, then a problem clinic within your data-modality track. The day closes with a small group where you refine your problem framing.',
    questions:
      'What is the unmet health need? Who are the stakeholders? What historical, societal, or scientific gaps challenge the problem — and how is a problem different from a method?',
  },
  {
    n: 2,
    date: 'Tue · Jun 23',
    title: 'Data',
    gap: 'A problem → the data that actually exists to attack it.',
    mode: 'Interrogate',
    lead: { name: 'Tom Pollard', affil: 'MIT', slug: 'tom-pollard' },
    guest: { name: 'Luca Foschini', affil: 'Sage Bionetworks', slug: 'luca-foschini' },
    morning:
      'Health data as a first-class citizen — the data-generating process, structured clinical data, de-identification, and access mechanics (PhysioNet, DUAs). Small groups map their own data-generating process and access plan.',
    afternoon:
      'A guest lecture on patient-generated, wearable, and sensor data and the commercial data ecosystem. Small groups refine the access plan and complete a data specification, followed by a data clinic within your modality track.',
    questions:
      'What is the data-generating process for your project? What data exists independent of your AI system, and what biases does its provenance create?',
  },
  {
    n: 3,
    date: 'Wed · Jun 24',
    title: 'Evaluation & Study Design',
    gap: 'Data → a credible way to know whether a solution works.',
    mode: 'Critique',
    lead: { name: 'Shalmali Joshi', affil: 'Columbia', slug: 'shalmali-joshi' },
    guest: { name: 'Olawale Salaudeen', affil: 'MIT', slug: 'olawale-salaudeen' },
    morning:
      'Study design and evaluation — estimands, utility-aligned metrics, statistical power, fairness, and threats to validity. Small groups dissect a provided evaluation case study.',
    afternoon:
      'A guest lecture on evaluation pitfalls and disaggregated metrics. Small groups define their evaluation plan, then a workshop to build an evaluation notebook for your own project (worked examples and a template provided).',
    questions:
      'What would count as success, and how would you measure it credibly? What is your estimand? Which metrics track clinical utility, and how will you evaluate across subgroups?',
  },
  {
    n: 4,
    date: 'Thu · Jun 25',
    title: 'Methods & Modeling',
    gap: 'A definition of success → a model designed to reach it.',
    mode: 'Build',
    lead: { name: 'Matthew McDermott', affil: 'Columbia', slug: 'matthew-mcdermott' },
    guest: { name: 'Walter Gerych', affil: 'WPI', slug: 'walter-gerych' },
    morning:
      'Method selection, health-specific inductive biases, and foundation versus task-specific models. Small groups draft a one-slide method / model proposal.',
    afternoon:
      'A guest lecture on trustworthy-by-construction methods, structured peer review of proposals, and a workshop to build a methods / modeling notebook for your own project (a prompt-a-thon alternative is offered for LLM-centric projects).',
    questions:
      'What method fits your data and your Day 3 metrics? Should you fine-tune, prompt, or train from scratch — and a foundation or task-specific model?',
  },
  {
    n: 5,
    date: 'Fri · Jun 26',
    title: 'Deployment',
    gap: 'A model that works in a notebook → a system that survives a real clinic.',
    mode: 'Stress-test',
    lead: { name: 'Muhammad Mamdani', affil: 'Unity Health / U Toronto', slug: 'muhammad-mamdani' },
    guest: { name: 'Deb Raji', affil: 'UC Berkeley', slug: 'inioluwa-deborah-raji' },
    morning:
      'Real-world deployment war stories — workflow integration, clinician adoption, monitoring, and drift. Small groups red-team the ethics, safety, and failure modes of their project.',
    afternoon:
      'A guest lecture on bias, ethics, and accountability in deployment, continued red-teaming, and a fireside chat with a practicing clinician / patient voice on ML4H deployment.',
    questions:
      'How do you red-team a deployed model? What mistakes does it make, and how does it treat patient populations differently? How do you simulate deployment, deploy, and audit?',
  },
  {
    n: 6,
    date: 'Sat · Jun 27',
    title: 'Finance, Compute & Collaborators',
    gap: 'A working prototype → a funded, staffed, sustained program.',
    mode: 'Resource',
    lead: { name: 'Jon Kolstad', affil: 'UC Berkeley', slug: 'jonathan-t-kolstad' },
    leadLabel: 'Panel chair',
    panel: true,
    morning:
      'A finance panel (chaired by Kolstad) on funding sources and the incentive structures of government, industry, and philanthropic funders, across four lenses: federal/NIH, philanthropy, industry/VC, and academic budget-holder. Followed by Q&A, an optional “Communicating & Pitching Your Work” mini-session, and a resource-plan working block.',
    afternoon:
      'Free — deliberate decompression and time to assemble the Day 7 presentation from the Project Workbook.',
    questions:
      'What funding path is realistic for your project, and what are its incentives? How do you estimate compute honestly? What collaborators and approvals does your project need?',
  },
  {
    n: 7,
    date: 'Sun · Jun 28',
    title: 'Presentations & Networking',
    gap: 'Seven separate deliverables → one coherent research vision.',
    mode: 'Synthesize',
    lead: { name: 'All instructors & organizers' },
    leadLabel: 'Led by',
    morning:
      'Final presentations / poster session before an invited interdisciplinary audience. Each presentation walks the Project Workbook arc: problem → data → evaluation → method → deployment → resourcing.',
    afternoon:
      'Lunch, then networking activities (1:30–3:00 PM), closing with a reflection that returns to the Day 1 spine.',
    questions:
      'Can you articulate your project as a coherent end-to-end arc, apply the week’s lessons to revise it, and situate the work in ML4H as a field?',
  },
];

// The shared rhythm of a content day (Days 1–5). Days 6–7 differ — see their cards.
export const dailyRhythm: { time: string; item: string }[] = [
  { time: '9:00', item: 'Morning handoff (Day 1: an 8:30 opening block — check-in, welcome & orientation, icebreaker)' },
  { time: '9:15', item: 'Lead lecture — frames the day' },
  { time: '10:30', item: 'Coffee break' },
  { time: '11:00', item: 'Small Group 1 — apply the frame to your project' },
  { time: '12:30', item: 'Lunch' },
  { time: '1:30', item: 'Guest lecture — a concrete case or counterpoint' },
  { time: '2:45', item: 'Workshop — a notebook (Days 3–4), specialty breakout (Days 1–2), or fireside (Day 5)' },
  { time: '4:15', item: 'Small Group 2 (closing) — revise your work and complete your Workbook section' },
  { time: '5:45', item: 'Daily wrap — submit your Workbook section' },
  { time: '6:00', item: 'Dinner' },
];
