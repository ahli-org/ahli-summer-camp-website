---
day: 3
---

## About this day

Before you build anything, you need to know what would count as evidence that it
worked. The morning lecture covers study design and evaluation: estimands,
utility-aligned metrics versus metrics of convenience, statistical power,
fairness, and the threats to a study's validity. The afternoon lecture brings the
sharp empirical case that aggregate metrics routinely hide subgroup failures.
The mode is **critique** — you learn to take an evaluation apart before you
trust it.

## Schedule

| Time | Block |
|---|---|
| 9:00–9:15 | Morning handoff |
| 9:15–10:30 | AM lecture (Joshi) |
| 10:30–11:00 | Coffee |
| 11:00–12:30 | Small Group 1 |
| 12:30–1:30 | Lunch |
| 1:30–2:45 | PM lecture (Salaudeen) |
| 2:45–4:15 | Workshop — build your project's evaluation notebook |
| 4:15–5:45 | Small Group 2 (closing) |
| 5:45–6:00 | Daily wrap — recap & look ahead |
| 6:00 | Dinner |

## Morning lecture outline

**Evaluation & study design: how would you know if it worked?** A working
outline of the lecture's content.

- **The question of the day.** Evaluating whether an AI *system* (the model plus
  the ecosystem around it) works as intended — the validation and study-design
  choices, not post-deployment monitoring.
- **Precursors: threats to validity.** Assume construct validity and no leakage —
  then see why that's hard, with real leakage cases (antihypertensives
  "predicting" hypertension; antibiotics "predicting" sepsis).
- **Distribution shift.** Covariate (X) vs. concept (Y∣X) shift; "accuracy on the
  line" and when it holds; attributing a performance drop to a specific shift.
- **Case study — the Epic Sepsis Model.** A label-definition mismatch and feature
  leakage that broke external validity, worst in the sickest patients.
- **Shortcut learning.** Models that latch onto the scanner, not the pathology
  (COVID chest X-ray) — and why a same-distribution holdout hides it.
- **Anatomy of an estimand.** Population, data, outcome/label, timing/horizon,
  operating point, how the score is used, and the primary endpoint.
- **In-silico metrics.** Discrimination (AUROC/AUPRC under class imbalance),
  calibration (reliability, subgroup/multicalibration), and decision-curve
  analysis / net benefit — what each does and does not tell you.
- **Evaluation is causal.** Predictions made to drive decisions need
  p(y∣x, do(t)), not p(y∣x, t); identifiability, self-fulfilling prophecies, and
  why a *working* intervention can lower AUROC.
- **Subgroups & fairness.** Aggregate metrics hide subgroup failure; when — and
  whether — to be subgroup/race-aware.
- **Stages of evaluation.** In silico → silent → pilot → prospective trial:
  target vs. deployment population, the silent trial, and RCTs with AI as the
  intervention (cluster designs, contamination, DECIDE-AI / CONSORT-AI).
- **Deployed tools and generative systems.** Retrospective panel analyses; and
  evaluation without ground truth — selective prediction and the pitfalls of
  LLM-as-judge.

## What you'll be able to do

- Define an estimand and utility-aligned metrics for your project.
- Design a subgroup / fairness evaluation.
- Name the top threats to your study's internal validity.

## Small group & workshop

In **Small Group 1**, the group works through the Day 3 Workbook prompt — what
success and failure look like for each project, the metrics that capture both,
and how you'd measure them. See [how the small groups run](/small-groups/).

The **workshop** then has you build an evaluation notebook for your own
project — discrimination, calibration, clinical utility, subgroup
disaggregation, power, and leakage/shortcut probing. You start from a blank
notebook (no template); use an AI coding assistant to scaffold a synthetic
stand-in for your project if you like.

The closing small group ends with each person noting how their evaluation
thinking moved over the day.

## Project Workbook — Part 3: Evaluation

How you'd know you succeeded and how you'd know you failed; the set of metrics
that captures both (the frontier your solution should push); how you'd measure
them in deployment and approximate them retrospectively, and the errors that
introduces; and the problem-specific confounders that could invalidate your
evaluation.

## Additional resources

- Slide decks (PDF): [Morning — Joshi](/slides/day3-evaluation.pdf) · [Afternoon — Salaudeen](/slides/day3-salaudeen.pdf).
- [Project Workbook template](/project-workbook/#part-3) — Part 3.
- [scikit-learn](https://scikit-learn.org/), [fairlearn](https://fairlearn.org/), and scikit-survival, as implementation references.
- The [MIMIC-IV demo on PhysioNet](https://physionet.org/content/mimic-iv-demo/), for a real-data substrate.
