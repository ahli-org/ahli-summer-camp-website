---
day: 4
---

## About this day

With success defined on Day 3, today you design the model that reaches it. The
morning lecture treats method selection as a reasoned choice: health-specific
inductive biases, task-specific versus foundation models, when to fine-tune
versus prompt versus train from scratch, representation learning, and how data
structure constrains method. The afternoon lecture covers making a built model
trustworthy without breaking it. The mode is **build** — you commit to an
approach and defend it.

## Schedule

| Time | Block |
|---|---|
| 9:00–9:15 | Morning handoff |
| 9:15–10:30 | AM lecture (McDermott) |
| 10:30–11:00 | Coffee |
| 11:00–12:30 | Small Group 1 |
| 12:30–1:30 | Lunch |
| 1:30–2:45 | PM lecture (Gerych) |
| 2:45–4:15 | Workshop — build your project's methods notebook |
| 4:15–5:45 | Small Group 2 (closing) |
| 5:45–6:00 | Daily wrap — recap & look ahead |
| 6:00 | Dinner |

## Morning lecture outline

**Methods & modeling: every choice for a reason.** A working outline of the
lecture's content.

- **The thesis.** Each modeling choice should be dictated by an expected property
  of your problem and data — and the methodological work is to justify, test, and
  *show* those choices. "I want to use a transformer" is not a reason.
- **What the data actually is.** A patient is a longitudinal stream of
  timestamped, typed events (MEDS-like) — a flat feature table is already a lossy
  modeling choice.
- **Model vs. algorithm.** The loss and optimizer live in training; the model is
  only what `predict` runs — and whatever `predict` needs (a k-NN's training set,
  a graph's neighborhood) has to ship inside it.
- **Three coupled choices.** Data representation, model class, and the
  loss/objective — none independent; each constrains the others.
- **Representation.** A good representation exposes the signal (spectrograms for
  ECG/EEG; eGFR over raw creatinine). Pitfall: mean-imputing a missing lab throws
  away informative missingness.
- **The label is a choice too.** Predicting "needs a ferritin test" fails because
  the label only exists where a clinician already suspected it — selection bias /
  MNAR.
- **Model class.** Match the inductive bias: gradient-boosted trees still beat
  deep nets on tabular clinical data; CNNs win on images. Don't pick by fashion.
- **Loss / objective.** Encode the invariance you actually believe (shape-not-
  appearance for imaging; a pre-training graph for relational data) — a
  fashionable objective with no matching property just ties plain ERM.
- **Epistemic humility.** For most EHR tasks we can't yet say which choices
  matter — "it depends," and we can't say on what. That gap is the opportunity.
- **Foundation models for health.** MIMIC wasn't out of data, just out of ideas;
  event-stream foundation models (ETHOS, CoMET) scale like LLMs.
- **Think stupider, then test.** Shrink the problem, synthesize data with and
  without the property, break the model on purpose — controlled experiments you
  can re-run on every change. (This feeds the afternoon synthetic-experiment
  notebook.)

## What you'll be able to do

- Justify a method choice against your data and your Day 3 metrics.
- Reason about foundation versus task-specific models for your problem.
- Identify your main methodological risk and a credible alternative.

## Small group & workshop

In **Small Group 1**, the group works through the Day 4 Workbook prompt — from
each project's baselines to the structure it can exploit, and the fastest
experiment to test it. See [how the small groups run](/small-groups/).

The **workshop** then has you build a methods notebook for your project — a
baseline, stronger models, a representation / foundation-model approach, and a
comparison harness that reuses your Day 3 evaluation moves. You start from a
blank notebook (no template); a prompt-a-thon is the alternative track for
LLM-centric projects.

The closing small group ends with each person noting how their method thinking
moved over the day.

## Project Workbook — Part 4: Methods & modeling

The naive and existing methods that form your baselines and the structure they
leverage; where they still fall short on your Day 3 metrics; the structure of your
data or problem you can exploit instead and why it should work (across
pre-processing, model class, and training objective); the fastest experiment that
would show your idea working or failing; and the key experimental questions for
the project.

## Additional resources

- Slide decks (PDF): [Morning — McDermott](/slides/day4-methods.pdf) · [Afternoon — Gerych](/slides/day4-gerych.pdf).
- [Project Workbook template](/project-workbook/#part-4) — Part 4.
- The [MEDS ecosystem documentation](https://medical-event-data-standard.github.io/), as an implementation reference.
- Current EHR foundation models worth knowing for the foundation-vs-task-specific decision: ETHOS, CEHR-GPT, and COMET, plus the MEDS-DEV benchmark (names to look up — verify the latest before relying on them).
