---
day: 3
---

## About this day

Before you build anything, you need to know what would count as evidence that it
worked. The lead lecture covers study design and evaluation: estimands,
utility-aligned metrics versus metrics of convenience, statistical power,
fairness, and the threats to a study's validity. The guest lecture brings the
sharp empirical case that aggregate metrics routinely hide subgroup failures.
The mode is **critique** — you learn to take an evaluation apart before you
trust it.

## Schedule

| Time | Block |
|---|---|
| 9:00–9:15 | Morning handoff |
| 9:15–10:30 | Lead lecture (Joshi) |
| 10:30–11:00 | Coffee |
| 11:00–12:30 | Small Group 1 |
| 12:30–1:30 | Lunch |
| 1:30–2:45 | Guest lecture (Salaudeen) |
| 2:45–4:15 | Workshop — build your project's evaluation notebook |
| 4:15–5:45 | Small Group 2 (closing) |
| 5:45–6:00 | Daily wrap — recap & look ahead |
| 6:00 | Dinner |

## Lead lecture outline

**Evaluation & study design: how would you know if it worked?** A working
outline of the lecture's content.

- **The day on the spine, and the validity ladder.** Today closes the gap from
  data to a credible way to know whether a solution works. Days 3–4 concern
  *internal* validity; Day 5 concerns *external/deployment* validity. Today is
  study design.
- **Defining the target.** Estimands — what, precisely, are you trying to
  measure? — and the difference between the population you evaluate on and the
  population you deploy on.
- **Metrics: convenience versus utility.** The metric that is easy to compute is
  rarely the one that tracks the clinical decision. Choose the metric from the
  decision backward.
- **Discrimination and its failure modes.** AUROC and AUPRC, and why a strong
  AUROC can coexist with a useless model under realistic class imbalance.
- **Calibration.** A well-discriminating model can be badly miscalibrated;
  calibration is what matters the moment a prediction informs a decision.
- **Clinical utility.** Decision-curve analysis and net benefit; choosing an
  operating threshold from the actual decision, not the metric.
- **Subgroups, power, and validity threats.** Aggregate metrics hide subgroup
  failures, so disaggregated evaluation is not optional; underpowered
  evaluations are too noisy to act on; and leakage, shortcut learning, and
  development-to-deployment shift are the threats the medical algorithmic audit
  is built to find.

## What you'll be able to do

- Define an estimand and utility-aligned metrics for your project.
- Design a subgroup / fairness evaluation.
- Name the top threats to your study's internal validity.

## Small group & workshop

In **Small Group 1**, the group works through the Day 3 Workbook prompt — each
project's estimand, the metric that tracks its real decision, the subgroup plan,
and the biggest threats to validity. See [how the small groups run](/small-groups/).

The **workshop** then has you build an evaluation notebook for your own
project — discrimination, calibration, clinical utility, subgroup
disaggregation, power, and leakage/shortcut probing. Start from the
[Evaluation Lab template notebook](/notebooks/evaluation-lab/), and use an AI
coding assistant to scaffold a synthetic stand-in for your project if you like.
The notebook is a personal scratch tool — nothing is turned in.

The closing small group ends with each person noting how their evaluation
thinking moved over the day.

## Project Workbook — Part 3: Evaluation & study design

Estimand, primary and secondary metrics, subgroup / fairness plan, sample-size
reasoning, and the top three threats to validity.

## Additional resources

- Lecture slides (tentative draft): [view the deck](/slides/day3-evaluation.html) · [PDF](/slides/day3-evaluation.pdf).
- [Evaluation Lab notebook](/notebooks/evaluation-lab/) — the Day 3 workshop template.
- [Project Workbook template](/project-workbook/#part-3) — Part 3.
- [scikit-learn](https://scikit-learn.org/), [fairlearn](https://fairlearn.org/), and scikit-survival, as implementation references.
- The [MIMIC-IV demo on PhysioNet](https://physionet.org/content/mimic-iv-demo/), for a real-data substrate.
