A few worked Project Workbooks, to show what strong, concise entries look like.
These are **calibration aids, not templates to copy** — yours will differ. See the
blank [Project Workbook template](/project-workbook/) to start your own.

> ⚠️ **AI-generated and unvetted.** These examples were drafted by an AI assistant
> to illustrate the format. The projects are fictional and the numbers and claims
> are invented — treat them as illustrative only.

The first example, **ED-Boarding Early Warning**, is the running example from the
template, worked out in full. Two more (condensed) follow, on different kinds of
projects.

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
  baseline fails precisely when census is high — a quick synthetic test to run
  before investing in the full model.
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

---

## More examples (condensed)

The same framework on two other kinds of project, in brief.

### Example — Referable diabetic retinopathy in primary care
**Pitch.** Flag, from a single fundus photo taken at a primary-care diabetes
visit, which patients have referable retinopathy and should see ophthalmology.

- **Problem.** Most vision loss from diabetic retinopathy is preventable with
  timely referral, but many patients never get a dilated eye exam and primary care
  can't grade images on site. Stakeholders: patients, primary-care clinicians (who
  refer), ophthalmologists (capacity), payers.
- **Data.** In scope: the fundus image captured in clinic plus basic EHR (HbA1c,
  diabetes duration). Out of scope: OCT or specialist grading — unavailable in
  primary care. Provenance: camera model and image quality vary by site; labels
  carry grader disagreement.
- **Evaluation.** Success = more referable cases caught and actually referred,
  without flooding ophthalmology with false positives; the root metric is vision
  loss averted. Failure even if accurate: clinicians don't act, it works on one
  camera but not another, or it's worse on darker fundus pigmentation. Confounder:
  camera/site differences and ungradable images (a hidden stratification).
- **Methods.** Baselines: ophthalmologist grading (reference), image-quality +
  lesion heuristics, an off-the-shelf CNN. Structure to leverage: lesion locality
  and robustness to camera variation. Fail fast: recolor/degrade images to mimic a
  new camera and check whether performance holds.
- **Day 5 stress-test.** Fails silently on a new camera; ungradable images get
  dropped and inflate the metrics; referral capacity can't absorb the true
  positives.

### Example — Faithful overnight handoff summaries
**Pitch.** Draft a concise summary of an inpatient's overnight events for morning
handoff from the notes and orders, without asserting anything the record doesn't
support.

- **Problem.** Handoffs are error-prone and time-consuming, and missed or garbled
  events cause harm. Stakeholders: night and day clinicians, patients, the health
  system. It's hard because success hinges on faithfulness (no hallucination) and
  completeness — both hard to measure — and one confident wrong statement is
  costly.
- **Data.** In scope: the structured and free-text record for the stay up to the
  handoff moment. Provenance: notes are noisy, copy-forwarded, and uneven across
  services.
- **Evaluation.** Success = clinicians trust and use the draft, with fewer missed
  events and time saved, and no unsupported claims. Failure even if fluent: a
  single hallucination erodes trust, or clinicians rubber-stamp it. Measuring
  faithfulness is itself hard — proxy with claim-level support checks; gold
  summaries are scarce and subjective. Confounder: note style varies by service.
- **Methods.** Baselines: no summary (status quo), an extractive summary, a
  general LLM prompt. Structure to leverage: ground every sentence in source spans
  and constrain generation to the record. Fail fast: inject a known event into a
  synthetic note and check it surfaces; add nothing and check the model invents
  nothing.
- **Day 5 stress-test.** Hallucinations under distribution shift; automation bias
  (clinicians stop checking); silent omission of rare but critical events.
