The Project Workbook is a **private thinking aid** for your own project. It is
**not graded** — its only job is to sharpen how you think about your project, and
you fill it in for yourself.

It has **four short parts**, one for each of Days 1–4: problem, data, evaluation,
and methods. **Day 5 has no workbook section** — it's a stress-test (see below).

These parts are **not a clean pipeline.** The problem, the data that actually
exists, and what counts as success are deeply intertwined: pinning one down
reshapes the others. So treat the parts as **living** — when a later day changes
how you see an earlier one, go back and revise it.

**Keep it short.** The point is to find the *right concise statement* for each
prompt — a sentence or two — not to argue a half-formed one at length. Time spent
in discussion and thinking will move your project much further than time spent
polishing text. The prompts are a guide, not a form: if one doesn't fit your
project, adapt it or skip it.

You'll lean on this thinking for your Day 6 practice job talk and your Day 7
poster — but the workbook stays yours.

| Day | Part |
|---|---|
| 1 | Problem |
| 2 | Data |
| 3 | Evaluation |
| 4 | Methods & modeling |
| 5 | *Stress-test — no workbook section* |

---

## The template

*Keep your own copy — in a document, a notes app, wherever suits you. Jot the core
answer to each prompt in a line or two; delete what doesn't apply. Revisit earlier
parts as later days change your view.*

> **Running example (AI-generated).** A single project — early warning for ED
> *boarding* (when an admitted patient waits hours for an inpatient bed) — is
> threaded through the template, with an *italic example answer beneath each
> prompt* to show how it might be filled in. It is illustrative and **not
> vetted**; yours will differ. See the [worked examples](/project-workbook/example/)
> for this one in full, plus others on different kinds of projects.

### Project title and one-line pitch
One sentence: what you are doing and for whom.

*Example — "An early-warning flag for ED boarding: which just-admitted patients
will wait >12h for an inpatient bed, surfaced to bed management in time to act."*

<div id="part-1"></div>

### Part 1 — Problem *(Day 1)*
This part is about the problem, not your method — resist jumping to a solution
here.

- **What is the problem / question?**
  - *Example — admitted ED patients often wait hours for an inpatient bed
    ("boarding"); can we flag high-risk patients early enough to act?*
- **Who are the stakeholders?** *(patients, clinicians, health systems, payers,
  regulators — who is affected, who decides)*
  - *Example — boarding patients, ED and inpatient clinicians, bed management (who
    act on a warning), and the hospital (which pays).*
- **Why is it impactful?** *(the unmet health need and the cost of leaving it
  unsolved — occasionally the impact is in your solution rather than the problem)*
  - *Example — boarding worsens outcomes and crowds the ED; even hours of lead
    time let bed management intervene.*
- **Why is it technically interesting?**
  - *Example — the risk is a system outcome, depending on hospital congestion
    rather than the patient alone.*
- **Why is it hard?**
  - *Example — boarding is driven by hospital-wide congestion, not the individual
    patient, so a patient-only view misleads.*
- **Why hasn't it been solved before?**
  - *Why now? What changed — technically, culturally, or in available resources —
    that makes a solution possible today?*
  - *What prior solutions exist, and what is wrong with them?*
  - *Example — existing tools predict admission, not boarding, and ignore live
    census; real-time ADT/census feeds now make acting on a boarding flag
    possible.*
- **Bottom line:** *one or two sentences — the problem, why it matters, why it is
  open.*
  - *Example — a high-impact, system-driven delay that admission-focused tools
    miss; open because it needs both patient and live-census signal.*

<div id="part-2"></div>

### Part 2 — Data *(Day 2)*
Data is **not** downstream of the problem — the two are inseparable. Stating the
problem already implies a *data scope*: the data realistically available at the
moment your solution has to act. Make that scope explicit, and treat expanding it
as a design choice with a cost.

- **What data is actually available** at the point your solution must operate?
  *(This scope is part of the problem, not a free choice.)*
  - *Example — at the admission decision: ADT timestamps, vitals, labs, and orders
    so far, plus the current census.*
- **The data-generating process.** *How is that data produced, and for what
  purpose — a byproduct of care, or designed for research?*
  - *Example — all a byproduct of care and operations, recorded for billing and
    workflow, not research.*
- **Provenance and what it hides.** *Who is missing or mismeasured; what does the
  data silently encode?*
  - *Example — census counts staffed, not physical, beds; off-hours labs are
    sparser, so "missing" is itself informative.*
- **Scope tension.** *Does the problem as stated implicitly need data that won't
  be there when you act? If so, re-scope the problem — or make collecting that
  data part of the solution, and name the cost.*
  - *Example — boarding can't be separated from census; without a live census feed
    the data simply can't speak to it.*
- **Bottom line:** *one or two sentences — the data in scope, where it comes from,
  and the main tension between the data and the problem.*
  - *Example — in scope is on-hand clinical data plus live census; the core tension
    is that boarding is a system outcome on-hand patient data alone can't predict.*

<div id="part-3"></div>

### Part 3 — Evaluation *(Day 3)*
This part is about success: how you'd know you succeeded, how you'd know you
failed, the set of metrics that captures both, and how you'd actually measure
them.

- **How would you know you succeeded?** *If you solved the problem, how would the
  world be different?*
  - *The root metric — the big-picture outcome that would move (e.g., mortality,
    length of stay).*
  - *Corroborating metrics — if you succeeded for the reasons you expect, what
    else would change, and how would those metrics relate?*
  - *Example — fewer prolonged (>12h) boards and less ED crowding, because bed
    management acted on flags early enough to matter.*
- **How would you know you failed?** *How could the project fail even if some of
  those success metrics still moved? (e.g., it costs too much to run, clinicians
  don't use it, or it works only for one group of patients.)*
  - *Example — accurate flags but no slack to act on them, or staff ignore them,
    so boarding doesn't actually move.*
- **Your key metrics.** *Synthesize the above into the set of metrics that
  together characterize success and failure — the frontier your solution should
  push out. Too few and you ignore real-world constraints (and can't move the
  state of the art meaningfully); too many and you optimize a slice too narrow to
  matter.*
  - *How would you visualize them?*
  - *Example — net benefit at the threshold bed management would act on, plus the
    rate of >12h boards and an ED-crowding index.*
- **How would you measure them?** *For each metric: how would you measure it in a
  real deployment with no resource limits? How would you approximate it under
  realistic deployment constraints? How would you approximate it in a retrospective
  dataset — and what error does each approximation introduce?*
  - *How would you detect those errors in real data — tell when a metric is, and
    isn't, capturing what you actually care about?*
  - *Example — net benefit needs the counterfactual of acting early, which a
    retrospective dataset can't show; approximate with historical board times and
    flag the gap.*
- **Confounders that could invalidate your evaluation.** *What real-world
  confounders, specific to your problem and data, could change or break your
  evaluation — hidden stratifications, subgroups that behave differently? Flag
  these early, as part of your robustness plan. (This is in addition to, not a
  replacement for, the fairness checks every model should get.)*
  - *Example — ambulance/trauma arrivals are triaged differently from walk-ins,
    and night-shift census behaves unlike daytime.*
- **Bottom line:** *one or two sentences — your key success/failure metrics and
  the biggest threat to measuring them honestly.*
  - *Example — key metric is net benefit at an actionable threshold; the biggest
    threat is that retrospective data can't capture the benefit of acting early.*

<div id="part-4"></div>

### Part 4 — Methods & modeling *(Day 4)*
Build up from what already exists to the specific structure your method will
exploit — and the fastest experiment that would tell you whether it works.

- **Baselines and prior work.** *What naive solutions exist, and what have others
  tried? These are your baselines and comparisons.*
  - *Example — admission-prediction tools, a simple census threshold, and logistic
    regression on patient features.*
- **What structure do they leverage?** *For each, what structure of your data or
  problem (if any) does it exploit?*
  - *Example — each uses either physiology or system state, never both.*
- **What's still unsolved, and why?** *On your Day 3 metrics, where do existing
  methods fall short — citing evidence where you have it, or reasoning about why
  they'll fail on a given metric where you don't?*
  - *Example — none capture the acuity × congestion interaction, so they miss
    boarding that only happens when a sick patient meets a full hospital.*
- **What structure can you leverage?** *What structure — in your data, your
  problem, or the world — could you exploit to address what's left unsolved?*
  - *Example — the interaction between patient acuity and live hospital census.*
- **How would you use it, and why should it work?** *How do you bring that
  structure to bear, and what's the argument it should help? Map it across the
  modeling pipeline — data pre-processing, the model class / architecture, and the
  training objective / broader algorithm.*
  - *Example — feed both patient features and live census to a model with an
    explicit interaction term, since boarding is a joint function of the two.*
- **How can you fail fast?** *What's the simplest experiment — or the simplest
  tweak to real data — that would make your idea succeed or fail in a clearly
  interpretable way? (Often the cleanest version is a quick test on synthetic data
  you fully control.)*
  - *Example — on synthetic data, confirm a census-blind model must fail when the
    hospital is full while the acuity × census model holds up.*
- **Key experimental questions.** *For the project overall, what must you answer
  to demonstrate success — or a genuinely interesting failure?*
  - *Example — does adding live census beat the best patient-only baseline on net
    benefit, and is the gain concentrated when the hospital is congested?*
- **Bottom line:** *one or two sentences — the structure you're leveraging and the
  first experiment that would test it.*
  - *Example — leverage the acuity × census interaction; first test is a synthetic
    fail-fast showing census-blind models break at full capacity.*

<div id="part-5"></div>

### Day 5 — Stress-test *(no workbook section)*
Day 5 has no structured entry. Instead, your group **stress-tests each project**:
assume it has been built and deployed, brainstorm where and why it would fail in
the real world, and ask how those failure modes change your framing — sending you
back to revise Parts 1–4. Keep a running list of failure modes if it helps, but
the value is the discussion, not a written deliverable.

> *Running example — Failure modes: the flag only fires when the hospital is
> already full (no slack to act); it's gamed by admitting-service coding; it
> degrades when a new unit shifts census patterns. Upshot: the intervention, not
> just the model, is part of the project — rescope Part 1 toward "create
> actionable lead time."*
