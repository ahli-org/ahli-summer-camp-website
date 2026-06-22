The Project Workbook is a **private thinking aid** for your own project. It is
**not turned in and not graded** — no one collects it. Its only job is to sharpen
how you think about your project across the five content days; you fill it in for
yourself, and you decide what (if anything) to share.

It has five parts — one per content day: problem framing, data, evaluation,
methods, and deployment. The parts are **living**: when a later day changes how
you see an earlier one, go back and revise it.

**Keep it short.** The point is to find the *right concise statement* for each
prompt — a sentence or two — not to argue a half-formed one at length. A good
entry is a few clear lines. Time spent in discussion and thinking will move your
project much further than time spent polishing text, so use the prompts to get to
the heart of each question, talk it through with your group, and refine the
workbook afterward if you want to. The prompts are a guide, not a form: if one
doesn't fit your project, adapt it or skip it.

You'll lean on this thinking for your Day 6 practice job talk and your Day 7
poster — but the workbook stays yours.

| Day | Part | Mode |
|---|---|---|
| 1 | Problem framing | Frame |
| 2 | Data | Interrogate |
| 3 | Evaluation & study design | Critique |
| 4 | Method & modeling | Build |
| 5 | Deployment | Stress-test |

---

## The template

*Keep your own copy — in a document, a notes app, wherever suits you. Jot the core
answer to each prompt in a line or two; delete what doesn't apply. Revisit earlier
parts as later days change your view.*

### Project title and one-line pitch
One sentence: what you are doing and for whom.

<div id="part-1"></div>

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
- **Bottom line:** *one or two sentences — the problem, why it matters, why it is
  open.*

<div id="part-2"></div>

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
- **Bottom line:** *one or two sentences — the data source, the access path, the
  main bias.*

<div id="part-3"></div>

### Part 3 — Evaluation & study design *(Day 3)*
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
- **Bottom line:** *one or two sentences — what success means, how you'll measure
  it, the biggest validity risk.*

<div id="part-4"></div>

### Part 4 — Method & modeling *(Day 4)*
- **Chosen approach** and why it fits your data (Part 2) and your metrics
  (Part 3).
- **Foundation vs. task-specific model** — your decision and your reasoning.
- **Fine-tune / prompt / train-from-scratch** — your decision and your reasoning.
- **Baseline.** *The simplest approach that could work — and why it is not enough.*
- **Internal-validation plan** during development.
- **Main methodological risk**, and one credible alternative you considered.
- **Bottom line:** *one or two sentences — the method, why it fits, the main risk.*

<div id="part-5"></div>

### Part 5 — Deployment *(Day 5)*
On Day 5 your group red-teams each project as a whole — imagine it is built and
deployed, and it fails in the real world: where, and why? Use what surfaces to
scope risks and, if needed, revise your framing.

- **Where the output lands.** *Where in the clinical workflow does your model's
  output appear, and who acts on it?*
- **Failure modes** surfaced when the group red-teamed your project.
- **Monitoring & drift plan.** *How will you know the model has decayed?*
- **Audit plan.** *How will the model be checked while it runs?*
- **People & approvals.** *The collaborators, roles, and sign-offs a real
  deployment needs.*
- **Bottom line:** *one or two sentences — where it deploys, the top failure mode,
  the monitoring plan.*
