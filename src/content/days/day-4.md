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
| 11:00–12:30 | Small Group 1 — draft method proposal |
| 12:30–1:30 | Lunch |
| 1:30–2:45 | Guest lecture (Gerych) |
| 2:45–4:15 | Workshop — build your project's methods notebook |
| 4:15–5:45 | Small Group 2 (closing) — method-proposal peer review |
| 5:45–6:00 | Daily wrap — submit Workbook Part 4 |
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

In **Small Group 1**, each participant drafts a one-slide method / model
proposal. The **workshop** then has you build a methods notebook for your
project — a baseline, stronger models, a representation / foundation-model
approach, and a comparison harness that reuses your Day 3 evaluation moves. A
prompt-a-thon is the alternative track for LLM-centric projects.

The day closes with **Small Group 2**: with the notebook's results in hand, each
proposal is reviewed by two assigned peers, and you revise your method rationale.

> **Peer-review rubric.** For each proposal, reviewers answer: (1) Is the method
> well-justified given the data and the Day 3 metrics? (1–5) (2) Does the
> presenter identify the main risk to their approach? (1–5) (3) Is a credible
> alternative discussed? (1–5) (4) One strength. (5) The single most valuable
> change.

## Required readings

1. Yang et al. (2022), *A large language model for electronic health records (GatorTron).*
2. Lehman et al. (2023), *Do we still need clinical language models?*
3. Agrawal et al. (2022), *Large Language Models are Few-Shot Clinical Information Extractors.*
4. Jimenez-Sanchez et al. (2024), *Copycats: the many lives of a public medical imaging dataset.*
5. One current foundation-model-for-health reading — instructor's pick (announced before the camp).

## Project Workbook — Part 4: Method & modeling

Your chosen approach justified against data and metrics; the
foundation-vs-task-specific and fine-tune/prompt/train-from-scratch decisions;
your baseline; an internal-validation plan; and your main risk with a credible
alternative.
