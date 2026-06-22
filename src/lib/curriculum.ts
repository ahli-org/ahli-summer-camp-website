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
  leadLabel?: string; // defaults to "AM lecture"
  guest?: Person;
  guest2?: Person;    // optional second guest (Day 2 has two Sage Bionetworks guests)
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
    lead: { name: 'Peter Szolovits', affil: 'MIT', slug: 'peter-szolovits' },
    guest: { name: 'Emily Alsentzer', affil: 'Stanford', slug: 'emily-alsentzer' },
    morning:
      'An opening block — welcome, orientation to how the week works, and a brief icebreaker — then a field-level frame: what ML4H is, what is shared across health problems, and what AI can and cannot do. A first small group reframes your project as a problem, not a method.',
    afternoon:
      'An afternoon lecture walks a real project from messy problem-formulation toward clinical use, then a problem clinic within your data-modality track. The day closes with a small group where you refine your problem framing.',
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
    guest: { name: 'Solly Sieberts', affil: 'Sage Bionetworks', slug: 'solly-sieberts' },
    guest2: { name: 'Jineta Banerjee', affil: 'Sage Bionetworks', slug: 'jineta-banerjee' },
    morning:
      'Health data as a first-class citizen — the data-generating process, structured clinical data, de-identification, and access mechanics (PhysioNet, DUAs). Small groups map their own data-generating process and access plan.',
    afternoon:
      'Two afternoon lectures from Sage Bionetworks on the other half of the picture: research-cohort and genomics data (GWAS, multi-omics, longitudinal phenotyping), and the Synapse / data-fabric model for governed sharing across consortia and patient communities. Small groups refine the access plan and complete a data specification, followed by a data clinic within your modality track.',
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
      'An afternoon lecture on evaluation pitfalls and disaggregated metrics. Small groups define their evaluation plan, then a workshop to build an evaluation notebook for your own project, from a blank notebook.',
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
      'An afternoon lecture on trustworthy-by-construction methods, structured peer review of proposals, and a workshop to build a methods / modeling notebook for your own project (a prompt-a-thon alternative is offered for LLM-centric projects).',
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
    guest: { name: 'Inioluwa Deborah Raji', affil: 'UC Berkeley', slug: 'inioluwa-deborah-raji' },
    morning:
      'Real-world deployment war stories — workflow integration, clinician adoption, monitoring, and drift. Each group red-teams its members’ projects as a whole: imagine the project is built and deployed, then find where and why it would fail in the real world.',
    afternoon:
      'An afternoon lecture on bias, ethics, and accountability in deployment, continued red-teaming, and a fireside chat with a practicing clinician / patient voice on ML4H deployment.',
    questions:
      'How do you red-team a deployed model? What mistakes does it make, and how does it treat patient populations differently? How do you simulate deployment, deploy, and audit?',
  },
  {
    n: 6,
    date: 'Sat · Jun 27',
    title: 'Practice Job Talks',
    gap: 'A week of project work → the research story you can tell on the job market.',
    mode: 'Present',
    lead: { name: 'Camp faculty' },
    leadLabel: 'Moderated by',
    morning:
      'Concurrent practice job-talk sessions, run in parallel rooms with faculty moderators. Each presenter gives a short job-talk-style presentation of their research and fields questions, as they would on the academic or industry market; the rest of the room listens and gives feedback. The day is geared toward participants on or near the research job market, but everyone benefits from giving and hearing the talks.',
    afternoon:
      'Job talks continue in parallel blocks through the afternoon, so everyone presenting gets a full slot and live feedback from faculty and peers.',
    questions:
      'Can you tell the story of your research as a job talk — the problem, your approach, why it matters, and where it is going — and field hard questions about it?',
  },
  {
    n: 7,
    date: 'Sun · Jun 28',
    title: 'Poster Session & Networking',
    gap: 'A week of project thinking → a poster that tells the whole story.',
    mode: 'Synthesize',
    lead: { name: 'All instructors & organizers' },
    leadLabel: 'Led by',
    morning:
      'A cohort poster session, run in two rounds so everyone can both present their work and browse others’. Each poster walks the project arc — problem → data → evaluation → method → deployment — before an invited interdisciplinary audience.',
    afternoon:
      'Closing remarks and a reflection that returns to the Day 1 spine, then lunch and networking to close out the week.',
    questions:
      'Can you tell your project as a coherent end-to-end arc on a single poster, apply the week’s lessons to revise it, and situate the work in ML4H as a field?',
  },
];

// The shared rhythm of a content day (Days 1–5). Days 6–7 differ — see their cards.
export const dailyRhythm: { time: string; item: string }[] = [
  { time: '9:00', item: 'Morning handoff (Day 1: an 8:30 opening block — check-in, welcome & orientation, icebreaker)' },
  { time: '9:15', item: 'Morning lecture — frames the day' },
  { time: '10:30', item: 'Coffee break' },
  { time: '11:00', item: 'Small Group 1 — apply the frame to your project' },
  { time: '12:30', item: 'Lunch' },
  { time: '1:30', item: 'Afternoon lecture — a concrete case or counterpoint' },
  { time: '2:45', item: 'Workshop — a notebook (Days 3–4), specialty breakout (Days 1–2), or fireside (Day 5)' },
  { time: '4:15', item: 'Small Group 2 (closing) — talk through how your thinking moved today' },
  { time: '5:45', item: 'Daily wrap — quick recap and look ahead' },
  { time: '6:00', item: 'Dinner' },
];

export interface Reading {
  cite: string;
  url?: string; // canonical link (publisher DOI / arXiv / journal); omit if none
}

// Suggested readings per day — the papers cited in each lecture deck plus a few
// curated additions, all with verified links.
export const readings: Record<number, Reading[]> = {
  1: [
    { cite: 'Kleinberg, Ludwig, Mullainathan & Obermeyer (2015), Prediction Policy Problems. American Economic Review.', url: 'https://doi.org/10.1257/aer.p20151023' },
    { cite: 'Obermeyer et al. (2019), Dissecting racial bias in an algorithm used to manage the health of populations. Science.', url: 'https://www.science.org/doi/10.1126/science.aax2342' },
    { cite: 'Passi & Barocas (2019), Problem Formulation and Fairness. ACM FAT*.', url: 'https://doi.org/10.1145/3287560.3287567' },
    { cite: 'Yala et al. (2021), Toward robust mammography-based models for breast cancer risk (Mirai). Science Translational Medicine.', url: 'https://www.science.org/doi/10.1126/scitranslmed.aba4373' },
    { cite: 'Perdomo, Zrnic, Mendler-Dünner & Hardt (2020), Performative Prediction. ICML.', url: 'https://arxiv.org/abs/2002.06673' },
    { cite: 'Schölkopf et al. (2012), On Causal and Anticausal Learning. ICML.', url: 'https://arxiv.org/abs/1206.6471' },
    { cite: 'McDermott, Nestor & Szolovits (2023), Clinical Artificial Intelligence: Design Principles and Fallacies. Clinics in Laboratory Medicine.', url: 'https://doi.org/10.1016/j.cll.2022.09.004' },
    { cite: 'Mullainathan & Obermeyer (2017), Does Machine Learning Automate Moral Hazard and Error? American Economic Review P&P.', url: 'https://doi.org/10.1257/aer.p20171084' },
    { cite: 'Ghassemi, Oakden-Rayner & Beam (2021), The false hope of current approaches to explainable AI in health care. Lancet Digital Health.', url: 'https://www.thelancet.com/journals/landig/article/PIIS2589-7500(21)00208-9/fulltext' },
    { cite: 'Wiens et al. (2019), Do no harm: a roadmap for responsible machine learning for health care. Nature Medicine.', url: 'https://www.nature.com/articles/s41591-019-0548-6' },
    { cite: 'Kohane (2025), The Human Values Project. ML4H (PMLR).', url: 'https://proceedings.mlr.press/v259/kohane25a.html' },
  ],
  2: [
    { cite: 'Johnson et al. (2023), MIMIC-IV, a freely accessible electronic health record dataset. Scientific Data.', url: 'https://www.nature.com/articles/s41597-022-01899-x' },
    { cite: 'Roberts et al. (2021), Common pitfalls and recommendations for using machine learning to detect and prognosticate for COVID-19 using chest radiographs and CT scans. Nature Machine Intelligence.', url: 'https://www.nature.com/articles/s42256-021-00307-0' },
    { cite: 'Mehra et al. (2020, RETRACTED), Hydroxychloroquine or chloroquine for treatment of COVID-19: a multinational registry analysis (the Surgisphere scandal). The Lancet.', url: 'https://www.thelancet.com/article/S0140-6736(20)31180-6/fulltext' },
    { cite: 'Yuan et al. (2021), Temporal bias in case-control design: preventing reliable predictions of the future. Nature Communications.', url: 'https://www.nature.com/articles/s41467-021-21390-2' },
    { cite: 'Bareinboim & Pearl (2016), Causal inference and the data-fusion problem. PNAS.', url: 'https://www.pnas.org/doi/10.1073/pnas.1510507113' },
    { cite: 'Einav et al. (2018), Predictive modeling of U.S. health care spending in late life. Science.', url: 'https://www.science.org/doi/10.1126/science.aar5045' },
    { cite: 'Chandra, Cutler & Song (2011), Who Ordered That? The economics of treatment choices in medical care. Handbook of Health Economics.', url: 'https://www.sciencedirect.com/science/article/pii/B9780444535924000062' },
    { cite: 'Fleming et al. (2024), MedAlign: a clinician-generated dataset for instruction following with EHRs. AAAI.', url: 'https://arxiv.org/abs/2308.14089' },
    { cite: 'Gebru et al. (2021), Datasheets for Datasets. Communications of the ACM.', url: 'https://dl.acm.org/doi/10.1145/3458723' },
    { cite: 'Gianfrancesco et al. (2018), Potential biases in machine learning algorithms using electronic health record data. JAMA Internal Medicine.', url: 'https://doi.org/10.1001/jamainternmed.2018.3763' },
    { cite: 'Sjoding et al. (2020), Racial bias in pulse oximetry measurement. NEJM.', url: 'https://www.nejm.org/doi/10.1056/NEJMc2029240' },
    { cite: 'Gichoya et al. (2022), AI recognition of patient race in medical imaging: a modelling study. Lancet Digital Health.', url: 'https://doi.org/10.1016/S2589-7500(22)00063-2' },
    { cite: 'Johnson et al. (2018), A comparative analysis of sepsis identification methods in an electronic database (how the cohort definition changes the data). Critical Care Medicine.', url: 'https://doi.org/10.1097/CCM.0000000000002965' },
    { cite: 'Homer et al. (2008), Resolving individuals contributing trace amounts of DNA to highly complex mixtures (the genomic re-identification result behind controlled access). PLoS Genetics.', url: 'https://doi.org/10.1371/journal.pgen.1000167' },
    { cite: 'MEDS (2025), An emerging data standard and ecosystem for health-AI research. NEJM AI.', url: 'https://ai.nejm.org/doi/full/10.1056/AIra2501253' },
    { cite: 'Overhage et al. (2012), Validation of a common data model for active safety surveillance research (the OMOP CDM). JAMIA.', url: 'https://academic.oup.com/jamia/article/19/1/54/734166' },
    { cite: 'Agniel, Kohane & Weber (2018), Biases in EHR data due to processes within the healthcare system — when a lab is measured can be more informative than its value. BMJ.', url: 'https://doi.org/10.1136/bmj.k1479' },
  ],
  3: [
    { cite: 'Wong et al. (2021), External validation of a widely implemented proprietary sepsis prediction model. JAMA Internal Medicine.', url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307' },
    { cite: 'DeGrave, Janizek & Lee (2021), AI for radiographic COVID-19 detection selects shortcuts over signal. Nature Machine Intelligence.', url: 'https://www.nature.com/articles/s42256-021-00338-7' },
    { cite: 'McDermott et al. (2024), A Closer Look at AUROC and AUPRC under Class Imbalance. NeurIPS.', url: 'https://arxiv.org/abs/2401.06091' },
    { cite: 'Joshi et al. (2025), AI as an Intervention: improving clinical outcomes relies on a causal approach to AI development and validation. JAMIA.', url: 'https://doi.org/10.1093/jamia/ocae301' },
    { cite: 'van Amsterdam et al. (2025), When Accurate Prediction Models Yield Harmful Self-Fulfilling Prophecies. Patterns.', url: 'https://doi.org/10.1016/j.patter.2025.101229' },
    { cite: 'Miller et al. (2021), Accuracy on the Line: on the strong correlation between OOD and in-distribution generalization. ICML.', url: 'https://arxiv.org/abs/2107.04649' },
    { cite: 'Coots, Saghafian, Kent & Goel (2025), A Framework for Considering the Value of Race and Ethnicity in Estimating Disease Risk. Annals of Internal Medicine.', url: 'https://www.acpjournals.org/doi/10.7326/M23-3166' },
    { cite: 'Kwong et al. (2022), The Silent Trial — the bridge between bench-to-bedside clinical AI. Frontiers in Digital Health.', url: 'https://doi.org/10.3389/fdgth.2022.929508' },
    { cite: 'Salaudeen et al. (2025), Measurement to Meaning: a validity-centered framework for AI evaluation.', url: 'https://arxiv.org/abs/2505.10573' },
    { cite: 'Vickers & Elkin (2006), Decision Curve Analysis: a novel method for evaluating prediction models. Medical Decision Making.', url: 'https://doi.org/10.1177/0272989X06295361' },
    { cite: 'Verma et al. (2024), Clinical evaluation of a machine learning–based early warning system for patient deterioration (CHARTwatch). CMAJ.', url: 'https://doi.org/10.1503/cmaj.240132' },
  ],
  4: [
    { cite: 'Grinsztajn, Oyallon & Varoquaux (2022), Why do tree-based models still outperform deep learning on tabular data? NeurIPS.', url: 'https://arxiv.org/abs/2207.08815' },
    { cite: 'McDermott et al. (2024), Using machine learning to develop smart reflex testing protocols. JAMIA.', url: 'https://arxiv.org/abs/2302.00794' },
    { cite: 'Renc et al. (2024), Zero-shot health trajectory prediction using transformer (ETHOS). npj Digital Medicine.', url: 'https://www.nature.com/articles/s41746-024-01235-0' },
    { cite: 'Dey et al. (2025), Learning General-purpose Biomedical Volume Representations using Randomized Synthesis. ICLR.', url: 'https://arxiv.org/abs/2411.02372' },
    { cite: 'McDermott (2025), The (lack of?) Science of Machine Learning for Healthcare. ML4H (PMLR).', url: 'https://proceedings.mlr.press/v259/mcdermott25a.html' },
    { cite: 'Wornow et al. (2023), The shaky foundations of large language models and foundation models for electronic health records. npj Digital Medicine.', url: 'https://www.nature.com/articles/s41746-023-00879-8' },
    { cite: 'Steinberg et al. (2021), Language models are an effective representation learning technique for EHR data. Journal of Biomedical Informatics.', url: 'https://doi.org/10.1016/j.jbi.2020.103637' },
    { cite: 'McDermott, Yap, Szolovits & Zitnik (2023), Structure-inducing pre-training. Nature Machine Intelligence.', url: 'https://www.nature.com/articles/s42256-023-00647-z' },
    { cite: 'Assran et al. (2023), Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA, with LeCun). CVPR.', url: 'https://arxiv.org/abs/2301.08243' },
    { cite: 'Diamant et al. (2022), Patient Contrastive Learning: a performant, expressive, and practical approach to ECG modeling. PLOS Computational Biology.', url: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009862' },
    { cite: 'Ronneberger, Fischer & Brox (2015), U-Net: Convolutional Networks for Biomedical Image Segmentation. MICCAI.', url: 'https://arxiv.org/abs/1505.04597' },
  ],
  5: [
    { cite: 'Goh et al. (2024), Large Language Model Influence on Diagnostic Reasoning: a Randomized Clinical Trial. JAMA Network Open.', url: 'https://doi.org/10.1001/jamanetworkopen.2024.40969' },
    { cite: 'Chen et al. (2025), Patient perceptions of empathy in physician and AI chatbot responses to questions about cancer. npj Digital Medicine.', url: 'https://doi.org/10.1038/s41746-025-01671-6' },
    { cite: 'Verma et al. (2024), Clinical evaluation of a machine learning–based early warning system for patient deterioration (CHARTwatch). CMAJ.', url: 'https://doi.org/10.1503/cmaj.240132' },
    { cite: 'Lekadir et al. (2025), FUTURE-AI: international consensus guideline for trustworthy and deployable AI in healthcare. BMJ.', url: 'https://doi.org/10.1136/bmj-2024-081554' },
    { cite: 'Denecke et al. (2025), The Unexpected Harms of Artificial Intelligence in Healthcare: reflections on four real-world cases.', url: 'https://doi.org/10.3233/SHTI250219' },
    { cite: 'Sendak et al. (2020), A path for translation of machine learning products into healthcare delivery. EMJ Innovations.', url: 'https://doi.org/10.33590/emjinnov/19-00172' },
    { cite: 'Wong et al. (2021), External validation of a widely implemented proprietary sepsis prediction model (Epic Sepsis Model). JAMA Internal Medicine.', url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2781307' },
    { cite: 'Sculley et al. (2015), Hidden Technical Debt in Machine Learning Systems. NeurIPS.', url: 'https://papers.nips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html' },
  ],
};
