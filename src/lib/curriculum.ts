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

export interface Reading {
  cite: string;
  url?: string; // canonical link (publisher DOI / arXiv / journal); omit if none
}

// Required readings per day. NOTE FOR REVIEW: links point to the paper matching
// each citation, but the citation list itself is carried from the program
// materials and needs a human accuracy/recency pass (see the review notice).
export const readings: Record<number, Reading[]> = {
  1: [
    { cite: 'Kleinberg, Ludwig, Mullainathan & Obermeyer (2015), Prediction Policy Problems.', url: 'https://www.aeaweb.org/articles?id=10.1257/aer.p20151023' },
    { cite: 'Passi & Barocas (2019), Problem Formulation and Fairness.', url: 'https://arxiv.org/abs/1901.02547' },
    { cite: 'Wang et al. (2023), Scientific discovery in the age of artificial intelligence.', url: 'https://www.nature.com/articles/s41586-023-06221-2' },
    { cite: 'Bastani, Bastani & Chung (2024), Optimizing Health Supply Chains in LMICs with Machine Learning.', url: 'https://link.springer.com/chapter/10.1007/978-3-031-60867-4_12' },
    { cite: 'Yala et al. (2021), Toward robust mammography-based models for breast cancer risk (Mirai).', url: 'https://www.science.org/doi/10.1126/scitranslmed.aba4373' },
  ],
  2: [
    { cite: 'Rajkomar et al. (2018), Scalable and accurate deep learning with electronic health records.', url: 'https://www.nature.com/articles/s41746-018-0029-1' },
    { cite: 'Yuan et al. (2021), Temporal bias in case-control design.', url: 'https://www.nature.com/articles/s41467-021-21390-2' },
    { cite: 'Einav et al. (2018), Predictive modeling of U.S. health care spending in late life.', url: 'https://www.science.org/doi/10.1126/science.aar5045' },
    { cite: 'Chandra, Cutler & Song (2011), Who ordered that? The economics of treatment choices in medical care.', url: 'https://www.sciencedirect.com/science/article/pii/B9780444535924000062' },
    { cite: 'Fleming et al. (2023), MedAlign: a clinician-generated dataset.', url: 'https://arxiv.org/abs/2308.14089' },
    { cite: 'The datasets list in the resources document.' },
  ],
  3: [
    { cite: 'Card et al. (2020), With Little Power Comes Great Responsibility.', url: 'https://aclanthology.org/2020.emnlp-main.745/' },
    { cite: 'Liu et al. (2022), The medical algorithmic audit.', url: 'https://doi.org/10.1016/S2589-7500(22)00003-6' },
    { cite: 'Plana et al. (2022), Randomized Clinical Trials of Machine Learning Interventions in Health Care.', url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2796833' },
    { cite: 'Yu et al. (2024), Heterogeneity and predictors of the effects of AI assistance on radiologists.', url: 'https://www.nature.com/articles/s41591-024-02850-w' },
    { cite: 'Chang et al. (2024), Red Teaming Large Language Models in Medicine.', url: 'https://www.medrxiv.org/content/10.1101/2024.04.05.24305411v1' },
  ],
  4: [
    { cite: 'Yang et al. (2022), A large language model for electronic health records (GatorTron).', url: 'https://www.nature.com/articles/s41746-022-00742-2' },
    { cite: 'Lehman et al. (2023), Do we still need clinical language models?', url: 'https://arxiv.org/abs/2302.08091' },
    { cite: 'Agrawal et al. (2022), Large Language Models are Few-Shot Clinical Information Extractors.', url: 'https://aclanthology.org/2022.emnlp-main.130/' },
    { cite: 'Jiménez-Sánchez et al. (2024), Copycats: the many lives of a public medical imaging dataset.', url: 'https://arxiv.org/abs/2402.06353' },
    { cite: 'One current foundation-model-for-health reading — instructor’s pick (announced before the camp).' },
  ],
  5: [
    { cite: 'Obermeyer et al. (2019), Dissecting racial bias in an algorithm used to manage the health of populations.', url: 'https://www.science.org/doi/10.1126/science.aax2342' },
    { cite: 'Collins et al. (2024), TRIPOD+AI statement.', url: 'https://doi.org/10.1136/bmj-2023-078378' },
    { cite: 'Boag et al. (2024), The algorithm journey map.', url: 'https://www.nature.com/articles/s41746-024-01061-4' },
    { cite: 'Lyons et al. (2023), Variability in the performance of a sepsis prediction model across 9 hospitals.', url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2803492' },
    { cite: 'Pfohl et al. (2024), A toolbox for surfacing health equity harms and biases in large language models.', url: 'https://www.nature.com/articles/s41591-024-03258-2' },
  ],
};

// AI-SUGGESTED additional readings — generated by an AI assistant as candidate
// improvements/additions, with verified canonical links. These are NOT yet
// vetted or assigned; the program committee should review them before use. They
// render on each day page in a clearly labeled, separate section.
export const suggestedReadings: Record<number, Reading[]> = {
  1: [
    { cite: 'Wiens et al. (2019), Do no harm: a roadmap for responsible machine learning for health care. Nature Medicine.', url: 'https://www.nature.com/articles/s41591-019-0548-6' },
    { cite: 'Rajpurkar, Chen, Banerjee & Topol (2022), AI in health and medicine. Nature Medicine.', url: 'https://www.nature.com/articles/s41591-021-01614-0' },
    { cite: 'Ghassemi, Oakden-Rayner & Beam (2021), The false hope of current approaches to explainable AI in health care. Lancet Digital Health.', url: 'https://www.thelancet.com/journals/landig/article/PIIS2589-7500(21)00208-9/fulltext' },
  ],
  2: [
    { cite: 'Gianfrancesco et al. (2018), Potential biases in machine learning algorithms using electronic health record data. JAMA Internal Medicine.', url: 'https://doi.org/10.1001/jamainternmed.2018.3763' },
    { cite: 'Sjoding et al. (2020), Racial bias in pulse oximetry measurement. NEJM.', url: 'https://www.nejm.org/doi/10.1056/NEJMc2029240' },
    { cite: 'Johnson et al. (2023), MIMIC-IV, a freely accessible electronic health record dataset. Scientific Data.', url: 'https://www.nature.com/articles/s41597-022-01899-x' },
  ],
  3: [
    { cite: 'Van Calster et al. (2019), Calibration: the Achilles heel of predictive analytics. BMC Medicine.', url: 'https://link.springer.com/article/10.1186/s12916-019-1466-7' },
    { cite: 'Oakden-Rayner et al. (2020), Hidden stratification causes clinically meaningful failures in machine learning for medical imaging. CHIL.', url: 'https://arxiv.org/abs/1909.12475' },
    { cite: 'DeGrave, Janizek & Lee (2021), AI for radiographic COVID-19 detection selects shortcuts over signal. Nature Machine Intelligence.', url: 'https://www.nature.com/articles/s42256-021-00338-7' },
  ],
  4: [
    { cite: 'Grinsztajn, Oyallon & Varoquaux (2022), Why do tree-based models still outperform deep learning on typical tabular data? NeurIPS.', url: 'https://arxiv.org/abs/2207.08815' },
    { cite: 'Wornow et al. (2023), The shaky foundations of large language models and foundation models for electronic health records. npj Digital Medicine.', url: 'https://www.nature.com/articles/s41746-023-00879-8' },
    { cite: 'Moor et al. (2023), Foundation models for generalist medical artificial intelligence. Nature.', url: 'https://www.nature.com/articles/s41586-023-05881-4' },
  ],
  5: [
    { cite: 'Finlayson et al. (2021), The clinician and dataset shift in artificial intelligence. NEJM.', url: 'https://www.nejm.org/doi/full/10.1056/NEJMc2104626' },
    { cite: 'Wong et al. (2021), External validation of a widely implemented proprietary sepsis prediction model in hospitalized patients. JAMA Internal Medicine.', url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307' },
    { cite: 'Beede et al. (2020), A human-centered evaluation of a deep learning system deployed in clinics for the detection of diabetic retinopathy. CHI.', url: 'https://dl.acm.org/doi/10.1145/3313831.3376718' },
  ],
};
