---
day: 5
---

## About this day

A model that validates beautifully can still fail the moment it meets a real
clinical workflow. The lead lecture is deployment told as war stories — from
someone running dozens of AI models in live hospital use: workflow integration,
clinician adoption, monitoring, and drift. The guest lecture connects evaluation
rigor to deployment accountability — auditing, incident reporting, and the case
against benchmark-only evaluation. A fireside chat brings a practicing
clinician/patient voice on ML4H deployment. The mode is **stress-test** — today
you try to break your own project.

## Schedule

| Time | Block |
|---|---|
| 9:00–9:15 | Morning handoff |
| 9:15–10:30 | Lead lecture (Mamdani) |
| 10:30–11:00 | Coffee |
| 11:00–12:30 | Small Group 1 — red-team |
| 12:30–1:30 | Lunch |
| 1:30–2:45 | Guest lecture (Raji) |
| 2:45–4:15 | Fireside chat — clinician / patient voice |
| 4:15–5:45 | Small Group 2 (closing) — red-team & deployment plan |
| 5:45–6:00 | Daily wrap — submit Workbook Part 5 |
| 6:00 | Dinner |

## Lead lecture outline

**Deployment: when the model meets the clinic.** A working outline of the
lecture's content.

- **The day on the spine.** Today closes the gap from a model that works in a
  notebook to a system that survives a real clinic.
- **The central claim.** Validation is not deployment. A model that validates
  beautifully can fail the moment it meets a workflow.
- **What deployment actually looks like.** A war story of a model that validated
  and then failed on the ward; workflow integration — where the output lands,
  who sees it, what action it triggers; clinician adoption and trust as design
  problems, not afterthoughts.
- **Keeping a deployed model alive.** A deployed model decays — how you know and
  what you watch (monitoring and drift); auditing during deployment, incident
  reporting, and the difference between pre-deployment evaluation and live
  accountability.
- **The people and the system.** The clinical champions, IT, governance,
  regulatory, and operations people a real deployment requires — and
  red-teaming your own project to find the failure modes before a clinic does.

## What you'll be able to do

- Anticipate the failure modes of a deployed model.
- Design a monitoring and audit plan.
- Map the people and approvals a real deployment requires.

## Small group & fireside

In **Small Group 1**, the group runs as a red team: each participant presents
their project, and the rest adversarially identify failure modes — workflow
mismatch, subgroup harm, drift, gaming, missing collaborators. The presenter
records, and does not defend.

The **fireside chat** then grounds deployment in a practitioner's lived
experience.

The day closes with **Small Group 2**, where you finish red-teaming any
remaining projects and complete your deployment plan.

## Required readings

1. Obermeyer et al. (2019), *Dissecting racial bias in an algorithm used to manage population health.*
2. The *TRIPOD+AI statement* (2024).
3. Boag et al. (2024), *The algorithm journey map.*
4. Lyons et al. (2023), *Sepsis model variability across hospitals.*
5. Pfohl et al. (2024), *A toolbox for surfacing health equity harms and biases in large language models.*

*Recommended / reference:* Diao et al. (2024) on race adjustment; Bastani et al.
(2021) on RL for COVID border testing; Varoquaux & Cheplygina (2022) on imaging
methodological failures; Ganapathi et al. (2022), STANDING Together; Vidal et al.
(2023) on US AI regulation; Agarwal et al. (2023) on combining human and AI
expertise.

## Project Workbook — Part 5: Deployment

Where the model's output lands in the workflow; the failure modes surfaced by
the red team; your monitoring and drift plan; your audit plan; and the people
and approvals the deployment needs.
