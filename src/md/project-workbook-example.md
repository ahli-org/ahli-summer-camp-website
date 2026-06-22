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

## Part 3 — Evaluation *(Day 3)*

- **Knowing you succeeded.** Boarding-driven harm falls.
  - *Root metric:* in-hospital mortality and length of stay for admitted ED
    patients.
  - *Corroborating metrics:* high-acuity patients reach the ICU faster, fewer
    patients board > 12h, and ED crowding eases — these should move together if
    the early flag is genuinely creating actionable lead time.
- **Knowing you failed.** The flag is accurate but nothing changes: bed management
  has no slack to act on it, or clinicians ignore the dashboard, or it works for
  medical admissions but not surgical. Each is failure even if AUROC looks great.
- **Key metrics.** Net benefit at the action threshold, lead time gained, and an
  actually-acted-on rate. They trade off (predict earlier → less data → lower
  accuracy; predict later → no lead time), and that frontier is the target.
  - *Visualize:* a decision-curve / net-benefit plot vs. threshold, plus a
    lead-time distribution.
- **Measuring them.** Ideally, prospective net benefit against real outcomes;
  realistically, a shadow-mode deployment. Retrospectively, boarding > 12h is
  recoverable from ADT timestamps — but the *benefit of acting early* is
  counterfactual and can't be read off historical data, so retrospective numbers
  over-state what the model alone delivers.
  - *Detecting the error:* compare flagged-but-not-boarded against missed cases,
    and check whether net-benefit gains actually coincide with operational action.
- **Confounders.** Ambulance/trauma arrivals are triaged through a different
  process than walk-ins — a hidden stratification that would flatter a model that
  merely learns "arrived critically ill." Shifting census regimes are another.
- **Bottom line:** *Success = net benefit early enough to act on, holding across
  arrival types; the biggest measurement threat is the counterfactual gap in
  retrospective data.*

## Part 4 — Methods & modeling *(Day 4)*

- **Baselines and prior work.** Existing tools predict *admission*, not boarding;
  a simple census threshold; logistic regression on patient features alone.
- **What structure they leverage.** Patient-feature models use physiology but
  ignore system congestion; census thresholds use system state but ignore which
  patients will actually board.
- **What's still unsolved, and why.** On net benefit and lead time, patient-only
  models fail exactly when the hospital is full (they can't see congestion), and
  census-only rules can't say *who* will board — so neither moves the frontier.
- **Structure to leverage.** Boarding is jointly driven by patient acuity *and*
  live system congestion, and census has exploitable temporal structure — the
  interaction is what single-factor baselines miss.
- **How, and why it should work.** Combine acuity and live census so the model can
  represent that interaction. Across the pipeline: *pre-processing* — engineer
  live-census + acuity features; *model class* — gradient-boosted trees on tabular
  data; *objective* — calibrated probabilities for the net-benefit decision.
- **Failing fast.** On synthetic data where boarding is a known function of
  (acuity, census), check that the model recovers it — and that a census-blind
  baseline fails precisely when census is high. That's the synthetic notebook.
- **Key experimental questions.** Does adding live census beat patient-only and
  census-only baselines on net benefit? Does the gain hold across arrival types?
  Does usable lead time survive?
- **Bottom line:** *Leverage the acuity × census interaction; first test it on
  synthetic data where a census-blind baseline must fail when the hospital is full.*

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
