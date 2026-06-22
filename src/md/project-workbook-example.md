A fully worked Project Workbook for a **fictional** project, to show what a
strong, concise entry looks like for each part. Yours will differ — this is a
calibration aid, not a template to copy. See the blank
[Project Workbook template](/project-workbook/) to start your own.

> **Fictional project — for illustration only.** Numbers and claims below are
> invented to demonstrate the format.

## Project title and one-line pitch

**ED-Boarding Early Warning** — flag, at the moment of an ED admission decision,
which admitted patients are likely to *board* in the emergency department for
more than 12 hours, so bed-management can intervene early.

## Part 1 — Problem *(Day 1)*

- **Problem.** Admitted ED patients often wait hours for an inpatient bed
  (“boarding”), which worsens outcomes and crowds the ED. Could an early signal,
  available at the admission decision, help bed management act sooner?
- **Stakeholders.** Boarding patients (harmed by delay); ED and inpatient
  clinicians; bed-management/operations (decide); the hospital (pays).
- **Why impactful.** Boarding is linked to higher mortality and length of stay;
  even a few hours of lead time changes what operations can do.
- **Why technically interesting.** The label is operational, not physiological,
  and is shaped by hospital state (census, staffing) as much as by the patient.
- **Why hard.** Naïve “predict from patient features” ignores that boarding is
  driven by system congestion; a model that ignores census will look great in
  development and fail when the hospital is full.
- **Why not solved.** Existing tools predict admission, not boarding; the
  operational outcome and its system confounders are usually left out.
- **Bottom line:** *Boarding harms patients and is predictable too late.
  An admission-time signal could buy operations lead time. The hard part is that
  boarding is a system outcome, not just a patient one.*

## Part 2 — Data *(Day 2)*

- **Data in scope.** The problem acts *at the admission decision*, so only what's
  on hand by then is usable: ADT timestamps, vitals, labs, and orders to that
  point — plus the current census. (Full length-of-stay or a later MRI isn't
  available yet; out of scope.)
- **Data-generating process.** A byproduct of care and billing, not designed for
  this question; ADT events define the boarding outcome, and hourly
  census/occupancy is logged by bed management.
- **Provenance and what it hides.** Night/weekend and high-census admissions are
  systematically different; inter-facility transfers may be miscoded; who never
  gets an early decision is invisible.
- **Scope tension.** Boarding is a *system* outcome, so the problem implicitly
  needs live census — without it the data simply can't speak to the question.
  Census is in scope here (bed management logs it); if it weren't, you'd rescope
  the problem or make logging it part of the solution.
- **Bottom line:** *In scope: ADT + vitals + live census at the decision point.
  The problem can't be separated from having census — it's load-bearing, not an
  add-on.*

## Part 3 — Defining success *(Day 3)*

- **What success means.** Two things at once: net benefit of acting at the
  threshold operations would use (not raw AUROC), *and* lead time gained over
  current practice. There's a causal wrinkle — what matters is who would actually
  *benefit* from early bed-management action, not just who happens to board.
- **Measuring for real vs. retrospectively.** Net benefit and lead time are
  measurable prospectively. Retrospectively, boarding > 12h is recoverable from
  ADT timestamps — but the *benefit of acting early* is counterfactual (you never
  observe the averted boarding), so retrospective numbers over-state what the
  model alone can deliver.
- **Competing metrics.** Predicting earlier buys more lead time but sees less
  data, so accuracy drops; predicting later is accurate but useless. Navigating
  that timing/accuracy trade-off *is* the core of the evaluation.
- **Confounders that change the meaning.** Admissions arriving by ambulance in a
  trauma flow are triaged through a different process than walk-ins — lumping them
  together would make the model look good for the wrong reason. Treat that
  structure as first-order, not a box-ticking subgroup split.
- **Bottom line:** *Success = net benefit at the action threshold, early enough to
  act on. The hard part is the timing/accuracy trade-off and not conflating
  different arrival processes.*

## Part 4 — Methods & modeling *(Day 4)*

- **What about the data/problem shapes the method.** It's small, tabular, and
  operational; **live census is the load-bearing, time-varying feature** — and the
  biggest leakage risk, since it's easy to accidentally use *future* census. The
  question is also partly causal (benefit of acting), which a pure predictor won't
  capture on its own.
- **Chosen approach.** Gradient-boosted trees on tabular features incl. live
  census — fits the data and the calibration/net-benefit criteria from Part 3.
- **Baseline.** Penalized logistic regression on census + a few vitals; if GBT
  doesn't beat it on net benefit, prefer the simpler model.
- **Main risk + alternative.** Risk: census features leak the future, so validate
  on a strict temporal split. Alternative considered: a survival model for
  time-to-bed (richer, but harder to calibrate to the 12h decision).
- **Bottom line:** *GBT on tabular features incl. live census, against a logistic
  baseline; the modeling is dominated by getting census right without leakage.*

## Day 5 — Stress-test notes

No structured entry — the group imagined the model built and deployed, then
brainstormed how it fails:

- It only fires when the hospital is already full — exactly when there's no slack
  to act on the flag.
- Gamed by admitting-service coding once staff learn what triggers it.
- Degrades when a new unit opens and shifts census patterns.

*How it changes the framing.* The flag is useless without operational slack, so
the **intervention** — what bed management can actually do with the lead time —
has to be part of the project, not an afterthought. That sends Part 1 back for a
rescope: the problem isn't "predict boarding," it's "create actionable lead time."

---

*Pulling it together (the thinking behind a Day 6 job talk and Day 7 poster).*
ED boarding harms patients and is currently recognized too late. ED-Boarding
Early Warning predicts >12h boarding at the admission decision from EHR features
*and* live census — because boarding is a system outcome, census is the
load-bearing feature and the main source of bias and leakage. Success is net
benefit at the operations action threshold, calibrated across time-of-day; a
gradient-boosted model is validated temporally against a logistic baseline, and
it deploys as a flag on the bed-management dashboard. The week's discussions
reshaped it most at Day 2 (census must be a feature) and Day 5 (the flag is
useless without operational slack — so the intervention, not just the model, has
to be designed).
