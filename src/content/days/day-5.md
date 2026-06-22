---
day: 5
---

## About this day

A model that validates beautifully can still fail the moment it meets a real
clinical workflow. The morning lecture is deployment told as war stories — from
someone running dozens of AI models in live hospital use: workflow integration,
clinician adoption, monitoring, and drift. The afternoon lecture connects evaluation
rigor to deployment accountability — auditing, incident reporting, and the case
against benchmark-only evaluation. A fireside chat brings a practicing
clinician/patient voice on ML4H deployment. The mode is **stress-test** — today
you try to break your own project.

## Schedule

| Time | Block |
|---|---|
| 9:00–9:15 | Morning handoff |
| 9:15–10:30 | AM lecture (Mamdani) |
| 10:30–11:00 | Coffee |
| 11:00–12:30 | Small Group 1 — red-team |
| 12:30–1:30 | Lunch |
| 1:30–2:45 | PM lecture (Raji) |
| 2:45–4:15 | Fireside chat — clinician / patient voice |
| 4:15–5:45 | Small Group 2 (closing) — red-team (cont.) |
| 5:45–6:00 | Daily wrap — recap & look ahead |
| 6:00 | Dinner |

## Morning lecture outline

**AI in health: real-world deployments and challenges.** A working outline of
the lecture's content.

- **The two hardest things for AI in medicine.** Cognitive reasoning and empathy
  — and where today's systems actually stand on each.
- **The cognitive-load problem.** Complex decisions involve hundreds of
  parameters but humans hold ~7±2; ~1 in 4 hospitalized patients are harmed,
  much of it preventable.
- **How AI compares — reasoning and empathy.** An RCT where an LLM out-scored
  physicians on diagnostic reasoning (Goh et al.); patient surveys and a study
  rating AI chatbot answers as more empathetic than physicians' (Chen et al.).
- **Where we are now.** Rapidly rising FDA authorizations and market growth;
  climbing physician adoption (AMA surveys), still mostly administrative use.
- **Cautionary cases.** Real-world harms — transcription hallucinations, biased
  allocation algorithms, chatbot failures — as a reason for governance.
- **A model for adopting AI in a health system.** Unity Health's experience
  (50+ deployed solutions): skilled people + process (governance, value-based
  intake, monitoring) + infrastructure, over a diffusion-of-innovation curve.
- **Defining and operationalizing value.** Outcomes per dollar (Porter); value
  framed across personal, technical, allocative, and societal dimensions;
  priority-setting and "AI success begins at intake."
- **Deployment case studies — the winners.** AI nurse-staffing and ED assignment
  optimization, AI scribes that cut documentation burden, and CHARTwatch (~26%
  fewer unexpected deaths) — what made them work.
- **Responsible, staged implementation.** FUTURE-AI principles (fairness,
  universality, traceability, usability, robustness, explainability) and a staged
  rollout: pre-implementation validation/bias/ethics → silent soft launch →
  implementation with monitoring and maintenance.
- **The frontier and the literacy gap.** An AI-enabled care loop ahead — and the
  societal and AI-literacy challenges that gate it.

## What you'll be able to do

- Anticipate the failure modes of a deployed model.
- Design a monitoring and audit plan.
- Map the people and approvals a real deployment requires.

## Small group & fireside

Day 5 works differently. In **Small Group 1**, each person presents their
updated project in brief, constrained form (around 12 minutes) — problem, data,
evaluation (what success means), and method — and then the group **red-teams it
as a whole**: assume it has been built and deployed, and work out where and why
it would fail in the real world. Use what surfaces to scope risks or revise your
framing. See [how the small groups run](/small-groups/).

The **fireside chat** then grounds deployment in a practitioner's lived
experience, with Muhammad Mamdani and clinician Mjaye Mazwi.

The closing small group continues red-teaming any projects the group has not yet
reached.

## Recommended / reference reading

Beyond the suggested readings (listed below): Diao et al. (2024) on race
adjustment; Bastani et al. (2021) on RL for COVID border testing; Varoquaux &
Cheplygina (2022) on imaging methodological failures; Ganapathi et al. (2022),
STANDING Together; Vidal et al. (2023) on US AI regulation; Agarwal et al. (2023)
on combining human and AI expertise.

## Project Workbook — Day 5: Stress-test (no workbook section)

Day 5 has no structured Workbook part. The group stress-tests each project:
assume it's built and deployed, brainstorm where and why it would fail in the
real world, and use those failure modes to revise your Day 1–4 framing. Keep a
running list of failure modes if it helps — but the discussion is the point.

## Additional resources

- Slide decks (PDF): [Morning lecture — Mamdani](/slides/day5-deployment.pdf).
- [Project Workbook](/project-workbook/#part-5) — the Day 5 stress-test (and revisit Parts 1–4).
- The [TRIPOD+AI reporting checklist](https://doi.org/10.1136/bmj-2023-078378).
- Institutional model-monitoring and audit frameworks referenced in the readings.
