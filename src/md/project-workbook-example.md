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

## Part 1 — Problem framing *(Day 1)*

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
- **Slide-ready summary:** *Boarding harms patients and is predictable too late.
  An admission-time signal could buy operations lead time. The hard part is that
  boarding is a system outcome, not just a patient one.*

## Part 2 — Data *(Day 2)*

- **Data-generating process.** EHR admission/transfer (ADT) timestamps + vitals,
  labs, and orders — a byproduct of care and billing, not designed for this
  question.
- **What exists independent of the model.** ADT events define boarding time;
  hourly census/occupancy is logged by bed management.
- **Access plan.** IRB for a retrospective extract; data-use agreement with the
  health system; ~18 months of ADT + census. Realistic timeline: 6–10 weeks.
- **Anticipated bias.** Boarding depends on time-of-day and census; night/weekend
  admissions and high-census periods are systematically different. Patients
  transferred between facilities may be miscoded.
- **Gap check.** Does the data support Part 1? Yes — *if* hourly census is
  included as a feature. Without it, the project should be re-scoped.
- **Slide-ready summary:** *ADT + vitals + hourly census, retrospective, IRB +
  DUA. Main bias: census/time-of-day confounding — so census must be a feature.*

## Part 3 — Evaluation & study design *(Day 3)*

- **Estimand.** P(board > 12h | features available at the admission decision),
  for admitted adult ED patients.
- **Primary metric.** Net benefit at the threshold operations would actually act
  on (decision-curve analysis), not AUROC — the decision is “flag for early
  bed-management review.”
- **Secondary metrics.** Calibration (reliability curve), AUPRC (boarding is
  ~20% prevalent), and lead time gained vs. current practice.
- **Subgroup plan.** By time-of-day, weekend/weekday, and admitting service;
  concern threshold: >5-point calibration gap for night admissions.
- **Power.** ~3,000 test admissions gives a usable CI on net benefit at the
  operating threshold (bootstrap).
- **Top 3 validity threats.** (1) Census leakage — using *future* census;
  (2) shortcut on admitting-service codes; (3) development→deployment shift as
  hospital capacity changes.
- **Slide-ready summary:** *Success = net benefit at the action threshold, well
  calibrated across time-of-day. Biggest risk: leaking future census.*

## Part 4 — Method & modeling *(Day 4)*

- **Chosen approach.** Gradient-boosted trees on tabular features (vitals, labs,
  admitting service, time features, current census). Fits the tabular data and
  the calibration/net-benefit metrics from Part 3.
- **Foundation vs. task-specific.** Task-specific — there is no representational
  advantage from a foundation model for this small, structured, operational task.
- **Fine-tune / prompt / scratch.** Train from scratch; data volume is ample and
  the features are hand-specified.
- **Baseline.** Penalized logistic regression on census + a few vitals; if GBT
  doesn’t beat it on net benefit, prefer the simpler model.
- **Internal validation.** Temporal split (train on earlier months, test on
  later) to surface capacity shift; nested CV for hyperparameters.
- **Main risk + alternative.** Risk: census feature engineering leaks the future;
  alternative considered: a survival model for time-to-bed (richer but harder to
  calibrate to the 12h decision).
- **Slide-ready summary:** *GBT on tabular features incl. live census; logistic
  baseline; temporal validation. Main risk: census leakage.*

## Part 5 — Deployment *(Day 5)*

- **Where the output lands.** A flag on the bed-management dashboard at the
  admission-decision event — not in the clinician’s chart, to avoid alert fatigue.
- **Failure modes (red-team).** Acts only when the hospital is already full (no
  slack to act on the flag); gamed by admitting-service coding; degrades when a
  new unit opens and changes census patterns.
- **Monitoring & drift.** Track calibration and net benefit monthly; alarm on
  census-distribution shift.
- **Audit.** Quarterly subgroup audit by time-of-day and service; incident log
  for flagged-but-not-boarded and missed cases.
- **People & approvals.** Bed-management lead (champion), ED operations, IT/EHR
  integration, clinical governance sign-off, and an operations analyst to own
  monitoring.
- **Slide-ready summary:** *Flag on the ops dashboard at admission. Top failure:
  no slack when census is high. Monitor calibration + census shift monthly.*

## Part 6 — Resourcing *(Day 6)*

- **Funding target.** Hospital operations/quality-improvement budget — they own
  the boarding metric and benefit directly; incentive is throughput, not novelty.
- **Compute.** Trivial — a tabular model retrained weekly on a single CPU node;
  serving is a scheduled batch at admission events. No GPU.
- **Collaborators.** Bed management, ED operations, EHR/IT, a clinical sponsor,
  and biostatistics for the evaluation.
- **Timeline.** 3 months to a validated prototype on retrospective data; 6 months
  to a silent (shadow-mode) deployment before any operational use.
- **Slide-ready summary:** *Funded by operations/QI; compute is negligible; key
  collaborator is bed management; ~6 months to shadow mode.*

## Part 7 — Synthesis *(Day 7)*

**Integrated narrative.** ED boarding harms patients and is currently recognized
too late. ED-Boarding Early Warning predicts >12h boarding at the admission
decision from EHR features *and* live census — because boarding is a system
outcome, census is the load-bearing feature and the main source of bias and
leakage. Success is defined as net benefit at the operations action threshold,
calibrated across time-of-day; a gradient-boosted model is validated temporally
against a logistic baseline. It deploys as a flag on the bed-management
dashboard, monitored monthly for calibration and census shift, funded by
operations, and reaches shadow-mode in about six months. The week’s lessons
reshaped it most at Day 2 (census must be a feature) and Day 5 (the flag is
useless without operational slack — so the intervention, not just the model,
has to be designed).
