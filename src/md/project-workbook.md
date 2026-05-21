The Project Workbook is the spine of the week. It is a single cumulative document
about *your* project, with seven parts; you complete or revise **one part per
day** and submit it at the daily wrap. By Day 7 the completed Workbook *is* the
content of your final presentation — every part ends with a "slide-ready
summary," so building the deck is assembly, not new work.

Write in prose, not bullet points: reasoning on the page produces clearer
thinking than slide fragments. Keep answers concise — the parts are deliberately
short so the effort goes into thinking. Earlier parts are **living**: if Day 3
changes how you see the Day 1 problem, revise it.

| Day | Part | Mode |
|---|---|---|
| 1 | Problem framing | Frame |
| 2 | Data | Interrogate |
| 3 | Evaluation & study design | Critique |
| 4 | Method & modeling | Build |
| 5 | Deployment | Stress-test |
| 6 | Resourcing | Resource |
| 7 | Synthesis & slides | Synthesize |

---

## The template

*Copy everything below into your own document. Delete the prompt text as you fill
each section in. Revisit and revise earlier parts as later days change your view.*

### Project title and one-line pitch
One sentence: what you are doing and for whom.

### Part 1 — Problem framing *(Day 1)*
Adapted from the WIDOM framing structure. Resist naming a method here — this part
is about the problem.

- **What is the problem / question?**
- **Who are the stakeholders?** *(patients, clinicians, health systems, payers,
  regulators — who is affected, who decides)*
- **Why is it impactful?** *(the unmet health need; the consequence of leaving it
  unsolved)*
- **Why is it technically interesting?**
- **Why is it hard?** *(name the naive approaches, and why each fails)*
- **Why hasn't it been solved before?** *(why now — what changed; what prior
  solutions exist; what is wrong with them)*
- **Slide-ready summary:** *3 bullets — the problem, why it matters, why it is
  open.*

### Part 2 — Data *(Day 2)*
- **The data-generating process.** *How is your data produced? Care byproduct, or
  designed for research?*
- **What data already exists** independent of any AI system you would build?
- **Access plan.** *Credentialing, data use agreements, IRB — and a realistic
  timeline.*
- **Anticipated provenance-driven bias.** *Who is missing; what does the
  provenance silently encode?*
- **Gap check.** *Does the data that actually exists support the Part 1 problem?
  If not, re-scope the problem or change the data plan — and note that here.*
- **Slide-ready summary:** *3 bullets — the data source, the access path, the main
  bias.*

### Part 3 — Evaluation & study design *(Day 3)*
Informed by the evaluation notebook you build in the Day 3 workshop.

- **Estimand.** *What exactly are you trying to measure?*
- **Primary metric** and why it tracks the real clinical decision *(not a metric
  of convenience)*.
- **Secondary metrics.** *Calibration, decision-curve / net benefit, others as
  relevant.*
- **Subgroup / fairness evaluation plan.** *Which subgroups, and what gap would
  concern you.*
- **Sample size / power.** *How much test data do you need for a usable estimate?*
- **Top 3 threats to internal validity** and how you will guard against each
  *(leakage, shortcut learning, distribution shift, …)*.
- **Slide-ready summary:** *3 bullets — what success means, how you'll measure it,
  the biggest validity risk.*

### Part 4 — Method & modeling *(Day 4)*
Informed by the methods notebook you build in the Day 4 workshop.

- **Chosen approach** and why it fits your data (Part 2) and your metrics
  (Part 3).
- **Foundation vs. task-specific model** — your decision and your reasoning.
- **Fine-tune / prompt / train-from-scratch** — your decision and your reasoning.
- **Baseline.** *The simplest approach that could work — and why it is not enough.*
- **Internal-validation plan** during development.
- **Main methodological risk**, and one credible alternative you considered.
- **Slide-ready summary:** *3 bullets — the method, why it fits, the main risk.*

### Part 5 — Deployment *(Day 5)*
- **Where the output lands.** *Where in the clinical workflow does your model's
  output appear, and who acts on it?*
- **Failure modes** surfaced by your red-team small group.
- **Monitoring & drift plan.** *How will you know the model has decayed?*
- **Audit plan.** *How will the model be checked while it runs?*
- **People & approvals.** *The collaborators, roles, and sign-offs a real
  deployment needs.*
- **Slide-ready summary:** *3 bullets — where it deploys, the top failure mode,
  the monitoring plan.*

### Part 6 — Resourcing *(Day 6)*
- **Funding target** and its incentives. *Which funder, and what would they want
  from this work?*
- **Compute estimate.** *An honest estimate of what training and serving this
  would cost.*
- **Collaborator map.** *Clinical, technical, and institutional partners the
  project needs.*
- **Timeline.** *A realistic horizon for the next phase of work.*
- **Slide-ready summary:** *3 bullets — the funding path, the compute reality, the
  key collaborator.*

### Part 7 — Synthesis & slides *(Day 7)*
- **The integrated narrative.** *One paragraph walking the whole arc: problem →
  data → evaluation → method → deployment → resourcing.*
- **The deck.** *Assemble the seven slide-ready summaries into a presentation: one
  slide per part, plus a title and a closing "what I'll do next." The Workbook has
  already written your slides — Day 7 is assembly and rehearsal.*
