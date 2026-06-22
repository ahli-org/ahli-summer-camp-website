---
day: 1
---

## About this day

Day 1 sets the frame for the week. After a short opening block — welcome,
orientation to how the week works, and a brief icebreaker — the morning lecture
asks what makes machine learning for health a distinct discipline, what is
shared across all health problems regardless of domain, and what AI cannot do.
The afternoon lecture walks a real project from messy problem-formulation toward
clinical use. The work of the day is to stop thinking about your project as a
*method* and start thinking about it as a *problem*: an unmet need, with
stakeholders, and a reason it is still open.

## Schedule

| Time | Block |
|---|---|
| 8:30–9:15 | Opening day materials — check-in, welcome & orientation, brief icebreaker |
| 9:15–10:30 | AM lecture (Szolovits) |
| 10:30–11:00 | Coffee |
| 11:00–12:30 | Small Group 1 — problem framing |
| 12:30–1:30 | Lunch |
| 1:30–2:45 | PM lecture (Alsentzer) |
| 2:45–4:15 | Specialty Breakout #1 — problem clinic |
| 4:15–5:45 | Small Group 2 (closing) — refine your problem framing |
| 5:45–6:00 | Daily wrap — recap & look ahead |
| 6:00 | Dinner |

## Morning lecture outline

**Problems in ML4H: what we're actually trying to solve.** A working outline of
the lecture's content.

- **The week's spine.** Idea → problem → data → evaluation → method →
  deployment. Today closes the first gap: an interesting topic becomes a
  well-posed problem.
- **Clinical and population context.** What clinicians actually do (diagnose,
  prognose, treat, monitor) and what "health" even means — the WHO definition,
  why social well-being is so hard to measure, and a quick tour of
  population-health data.
- **The central claim.** ML4H is a *distinct field*, not "ML applied to health
  data": labels are endogenous to the care process and deployment is
  *performative* (it changes the data-generating process), breaking the i.i.d. and
  identifiability assumptions ML quietly relies on.
- **Fifty years of perspective.** From MYCIN/INTERNIST expert systems through
  statistical ML and deep learning to today's foundation models — every era
  promised autonomy and delivered, at best, decision support.
- **Six features shared across health problems.** High stakes; distribution
  shift; label noise; causal structure; regulation; a human in the loop.
- **Why health breaks generic ML.** IID is rarely true; the label is often a
  proxy; "performance" is not "benefit"; error costs are asymmetric and
  patient-specific.
- **Where AI is, and isn't, well-suited.** Strong at pattern recognition at
  scale, triage, and surfacing missed signal (e.g. mammography-based risk); poor
  where the problem is actually causal, where there is no credible label, or where
  the binding constraint is action, access, or trust.
- **Prediction, causation, decision.** Three different questions projects
  routinely conflate — even "pure prediction" needs a written estimand. (Day 3
  returns to this.)
- **Problem formulation is a choice.** A problem is not a method; the framing —
  target, population, label — bakes in fairness and harm before any model exists
  (the cost-versus-need example). Name who is affected, who decides, who pays, and
  separate what is genuinely new from recurring hype.

## What you'll be able to do

- Distinguish a research problem from a method.
- Identify the stakeholders and the unmet need behind your project.
- Locate your project in the ML4H landscape.

## Small groups & specialty breakout

Day 1's first small group opens with **introductions** — yourselves first, then
a short pitch of the project you came with. Keep the pitch brief: if your
groupmates don't quite get it from a quick description, that is useful signal
about how the problem is being communicated. The group then works through the
Day 1 Workbook prompt together, reframing each project as a *problem* — an unmet
need with stakeholders — rather than a method. See
[how the small groups run](/small-groups/).

The **specialty breakout** then runs as a problem clinic within your
data-modality track: what distinguishes a strong from a weak problem in your
domain, and the recurring ways problems in it are mis-posed.

The closing small group ends with each person taking a few minutes to say how
their problem framing shifted over the day.

## Project Workbook — Part 1: Problem

Using the [Project Workbook template](/project-workbook/#part-1):
your one-line pitch, what the problem is, who the stakeholders are, why it is
impactful, why it is technically interesting, why it is hard, and why it hasn't
been solved before. Resist naming a method — this part is about the problem.

## Additional resources

- Slide decks (PDF): [Welcome & orientation](/slides/opening-remarks.pdf) · [Morning lecture — Szolovits](/slides/day1-problems.pdf) · [Afternoon — Alsentzer](/slides/day1-alsentzer.pdf).
- [Project Workbook template](/project-workbook/#part-1) — copy it and complete Part 1.
- The CHIL and ML4H proceedings, for a sense of the field's scope.
- Your specialty-breakout track materials (posted before the camp).
