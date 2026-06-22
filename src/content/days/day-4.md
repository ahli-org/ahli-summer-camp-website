---
day: 4
---

## About this day

With success defined on Day 3, today you design the model that reaches it. The
lead lecture treats method selection as a reasoned choice: health-specific
inductive biases, task-specific versus foundation models, when to fine-tune
versus prompt versus train from scratch, representation learning, and how data
structure constrains method. The guest lecture covers making a built model
trustworthy without breaking it. The mode is **build** — you commit to an
approach and defend it.

## Schedule

| Time | Block |
|---|---|
| 9:00–9:15 | Morning handoff |
| 9:15–10:30 | Lead lecture (McDermott) |
| 10:30–11:00 | Coffee |
| 11:00–12:30 | Small Group 1 |
| 12:30–1:30 | Lunch |
| 1:30–2:45 | Guest lecture (Gerych) |
| 2:45–4:15 | Workshop — build your project's methods notebook |
| 4:15–5:45 | Small Group 2 (closing) |
| 5:45–6:00 | Daily wrap — recap & look ahead |
| 6:00 | Dinner |

## Lead lecture outline

**Methods & modeling: building toward a defined target.** A working outline of
the lecture's content.

- **The day on the spine.** Today closes the gap from a definition of success to
  a model designed to reach it.
- **The central claim.** Method selection is a *choice*, downstream of the data
  and the target — not a default and not a fashion.
- **The method landscape.** Penalized linear models, gradient-boosted trees,
  deep networks, foundation models — a spectrum of capacity and assumptions, not
  a ranking.
- **Health-specific inductive biases.** Temporality, irregular sampling,
  structured missingness, and multimodality — what health data demands of a
  method.
- **Foundation models for health.** When a pretrained, general representation
  helps and when a focused task-specific model wins; what EHR foundation models,
  clinical language models, and multimodal models learn and what they don't.
- **Fine-tune, prompt, or train from scratch.** A decision framework built on
  data volume, label availability, distribution match, and cost.
- **Representation learning.** Why a good representation matters for health data,
  and how representation choices propagate into evaluation.
- **Building well.** Data structure (and standards like MEDS) constrains method;
  the baseline is the bar any complex method must clear; method, data, and metric
  are entangled choices — and building so that failures don't hide is the goal.

## What you'll be able to do

- Justify a method choice against your data and your Day 3 metrics.
- Reason about foundation versus task-specific models for your problem.
- Identify your main methodological risk and a credible alternative.

## Small group & workshop

In **Small Group 1**, the group works through the Day 4 Workbook prompt — the
method each project should use and why it fits that project's data and Day 3
metrics. See [how the small groups run](/small-groups/).

The **workshop** then has you build a methods notebook for your project — a
baseline, stronger models, a representation / foundation-model approach, and a
comparison harness that reuses your Day 3 evaluation moves. Start from the
[Methods Lab template notebook](/notebooks/methods-lab/); a prompt-a-thon is the
alternative track for LLM-centric projects. The notebook is a personal scratch
tool — nothing is turned in.

The closing small group ends with each person noting how their method thinking
moved over the day.

## Project Workbook — Part 4: Method & modeling

Your chosen approach justified against data and metrics; the
foundation-vs-task-specific and fine-tune/prompt/train-from-scratch decisions;
your baseline; an internal-validation plan; and your main risk with a credible
alternative.

## Additional resources

- Lecture slides (tentative draft): [view the deck](/slides/day4-methods.html) · [PDF](/slides/day4-methods.pdf).
- [Methods Lab notebook](/notebooks/methods-lab/) — the Day 4 workshop template.
- [Project Workbook template](/project-workbook/#part-4) — Part 4.
- The [MEDS ecosystem documentation](https://medical-event-data-standard.github.io/), as an implementation reference.
- Current EHR foundation models worth knowing for the foundation-vs-task-specific decision: ETHOS, CEHR-GPT, and COMET, plus the MEDS-DEV benchmark (names to look up — verify the latest before relying on them).
