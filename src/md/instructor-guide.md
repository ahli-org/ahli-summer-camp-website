## For lead lecturers and guest lecturers

Thank you for teaching at the AHLI Health AI Summer Camp. This guide explains
the program's design, what each teaching role is asked to do, and the per-day
briefs. The architecture below is shared context for everyone; the role sections
and your day's brief are the specifics.

## The week's architecture

The camp is one continuous arc, not seven topical workshops, and the teaching
design depends on every instructor understanding it.

**The spine.** The whole week closes one gap: the distance between *an idea a
researcher finds interesting* and *a system that actually helps patients*. Each
day closes one segment — problems → data → evaluation → methods → deployment →
resourcing → synthesis.

**The validity ladder.** Days 3–4 concern *internal* validity (is the evidence
credible, is the model sound on its own terms); Day 5 concerns *external and
deployment* validity. If your day touches "evaluation," be clear which rung
you're on.

**The deliverable spine — the Project Workbook.** Each day produces one short,
concrete section of a single cumulative document, the participant's
[Project Workbook](/project-workbook/). The seven sections become the Day 7
presentation. Sessions should drive toward that day's section.

**The five-block content day (Days 1–5).** Every content day runs the same arc:
a morning handoff → lead lecture → small group → guest lecture → workshop →
**closing small group**. The day ends with a small group in which participants
revise their thinking and complete that day's Workbook section — so the last
thing they do each day is improve their own project. Day 1 uses the same
structure, with an 8:30–9:15 opening block (check-in, welcome and orientation, a
brief icebreaker) in place of the handoff.

**Signature modes.** Each day has a distinctive mode — Day 1 *frame*, Day 2
*interrogate*, Day 3 *critique*, Day 4 *build*, Day 5 *stress-test*, Day 6
*resource*, Day 7 *synthesize*.

## If you are a lead lecturer

You own the conceptual frame for your day. Your lecture is the scaffold the small
groups and the guest lecture hang on.

- **Teach the frame, not your CV.** Your lecture's job is to give participants a
  framework they can apply to their own project that same day. Use your own work
  as illustration, not as the syllabus.
- **Drive toward the day's deliverable.** End your lecture by naming the Workbook
  section due that day and handing off to the activity.
- **Open with the handoff and the spine.** From Day 2 on, start by placing the
  week on the arc — what gap yesterday closed, what gap today closes.
- **Use the slide outlines as a scaffold.** Each day's
  [day page](/curriculum/) carries a slide-by-slide outline of your lecture;
  adapt, replace, and extend it freely, while keeping the structural beats
  (frame → core content → transition to the deliverable) and the navy/purple/teal
  visual theme.
- **Coordinate with your guest** so the two talks complement rather than overlap.

## If you are a guest lecturer

You bring the day's frame down to earth. You craft your own slides; we are not
prescribing your content.

- **Know your job for the day.** You are not giving a second lecture on the
  lead's theme — you either *instantiate* the frame in a concrete project or case
  or *productively complicate* it. Your day's brief states which.
- **Be concrete and candid.** Participants get abstraction from the lead. From
  you they want the lived texture of real work — the decision points, the dead
  ends, what you would do differently.
- **Aim for ~75 minutes** including discussion, unless your day's schedule says
  otherwise.

## The small-group model

The small groups are where the project develops. You should understand how they
run, even though you do not staff them.

- **Home groups** — roughly six groups of 8–9, stable all week, deliberately
  mixed across research areas and modalities.
- **Rotating peer session leads.** The participants are senior researchers; each
  session is run by a rotating peer "session lead" from within the group,
  following a one-page protocol. The role rotates daily.
- **Coaches are an optional layer.** If volunteers are recruited — postdocs,
  senior PhDs, or instructors with free blocks — they circulate as coaches across
  two or three groups, modeling good feedback and unsticking groups. The program
  runs identically with several coaches or none.
- **The day lead floats** among the groups during small-group blocks.

---

## Per-day briefs

### Day 1 — Problems in ML4H · Lead: Pete Szolovits · Guest: Emily Alsentzer

**Your role.** You set the intellectual frame for the entire week. Day 1 uses the
five-block template; its only difference is the start — an 8:30–9:15 opening
block (check-in, welcome and orientation, a brief icebreaker) in place of the
handoff. Your lecture runs the standard 9:15–10:30 AM slot.

**Your lecture.** What makes ML4H a distinct discipline; what is shared across
health problems regardless of domain (high stakes, distribution shift, label
noise, causal structure, regulation, a human in the loop); what AI cannot do; and
what in the current moment is genuinely new versus recycled. The deliverable is a
shared vocabulary the other six days lean on. Teach a field-level frame, not a
survey of your group's research — participants should leave able to ask of their
own project: *is this a real, well-posed problem?*

**Handoff.** Close by naming Workbook Part 1 (problem framing) and handing to
Alsentzer's project walkthrough, which makes the abstraction concrete before the
afternoon small group.

### Day 2 — Data · Lead: Tom Pollard · Guest: Luca Foschini

**Your lecture.** Health data as a first-class citizen: the data-generating
process; data collected as a byproduct of care versus designed for research;
de-identification and governance; and, concretely, access mechanics — PhysioNet
credentialing, data use agreements, what it actually takes to get MIMIC-style
data in hand. Frame the day as a two-sided contrast: your lecture covers
structured institutional data, Foschini's covers patient-generated and sensor
data — make the contrast explicit so the guest lecture lands as the other half
of one picture.

**Handoff.** Open with the handoff (Day 1 problem statements). Close by naming
Workbook Part 2 — the data specification — and its gap check: does the available
data actually support the Day 1 problem?

### Day 3 — Evaluation & Study Design · Lead: Shalmali Joshi · Guest: Olawale Salaudeen

**Your role.** Day lead. You give the full ~75-minute lead lecture (9:15 AM) and
anchor the afternoon build-your-own-notebook workshop (2:45–4:15 PM), which feeds
the closing small group.

**Your lecture.** Study design and evaluation as the foundation everything rests
on: the estimand; metrics that correlate with clinical utility versus metrics of
convenience; discrimination, calibration, and clinical utility; statistical power;
fairness and subgroup criteria; and the major threats to internal validity. Your
lecture sets up Salaudeen's empirical case that aggregate metrics hide subgroup
failures. In the afternoon you anchor the
[evaluation-lab notebook](/notebooks/evaluation-lab-template.ipynb).

**Handoff.** Open with the handoff (Day 2 data specs). Close by naming Workbook
Part 3 (the evaluation plan) and pointing to the afternoon notebook workshop.

### Day 4 — Methods & Modeling · Lead: Matthew McDermott · Guest: Walter Gerych

**Your role.** Day lead. Like Day 3, a full lead lecture (9:15 AM) and the
afternoon build-your-own-notebook workshop (2:45–4:15 PM).

**Your lecture.** Method selection as a reasoned choice: health-specific
inductive biases; task-specific versus foundation models; when to fine-tune,
prompt, or train from scratch; representation learning over EHR data; and why
method choice is entangled with data structure and standards. Cover foundation
models explicitly, framed as *"what method for what data and what target,"* not as
a model zoo. Coordinate with Gerych so the talks divide cleanly: you cover
*building*; he covers making the built model *trustworthy without breaking it*. In
the afternoon you anchor the
[methods-lab notebook](/notebooks/methods-lab-template.ipynb).

**Handoff.** Open with the handoff (Day 3 evaluation plans). The afternoon closing
small group is a structured peer review. Close by naming Workbook Part 4 — the
method rationale.

### Day 5 — Deployment · Lead: Muhammad Mamdani · Guest: Deb Raji · 2:45 PM fireside

**Your role.** Day lead; the 9:15 AM lead lecture. The day's fourth block is a
clinician/patient fireside chat (an organizer moderates; guest TBD), and the day
closes with a small group in which participants finish red-teaming and complete
their deployment plan.

**Your lecture.** Real-world deployment, told as war stories — workflow
integration, clinician adoption, the model that validated beautifully and failed
on the ward, monitoring and drift, and who you need on your side to deploy at all.
Push for specific deployment narratives, successes and failures, rather than
abstractions; that lived texture is the value. Your lecture sets up the red-team
small groups and Raji's accountability-focused guest lecture.

**Handoff.** Open with the handoff (Day 4 method rationales). Frame the small
groups as a red team — participants try to break their own projects — and name
Workbook Part 5, the deployment plan.

### Day 6 — Finance, Compute & Collaborators · Panel Chair: Jon Kolstad

**Your role.** You frame the funding landscape and chair the Finance panel; the
panel fills the lead-and-guest role across the 9:15 and 11:00 blocks.

**As chair.** Open by framing the funding landscape — the incentive structures
behind government, philanthropic, industry, and venture money, and how each
funder's incentives shape what research actually gets done — then chair the
four-panelist discussion. Brief each panelist to speak from one lens so the panel
is structured rather than four overlapping war-stories: (1) a federal/NIH voice;
(2) a philanthropic funder; (3) an industry or health-tech VC voice; (4) an
academic who has assembled a full ML4H project budget. A pre-circulated one-page
resource covers compute estimation and collaborator/IRB/PHI norms; brief the
panel to field "what does compute actually cost" and "what is a normal
expectation of a clinical collaborator." The 11:00 block also carries an optional
"Communicating & Pitching Your Work" mini-session.

**Handoff.** Open with the handoff (Day 5 deployment plans). The afternoon is free
by design — decompression and Day 7 prep. Name Workbook Part 6, the resource plan.

### Day 7 — Presentations & Networking · All instructors and organizers

**Organizers' role.** Run the final presentations and poster session, then
networking. Each presentation should explicitly walk the Project Workbook arc —
problem → data → evaluation → method → deployment → resourcing — which is what
makes the presentations comparable and the week legible. Give the invited audience
a light feedback rubric so participants leave with structured input. Close with a
short collective reflection that returns to the Day 1 spine. Lunch, networking
(1:30–3:00 PM), and a single adjournment at 3:00 PM.

---

## Logistics

The program committee handles rooms, AV, materials, and participant issues. For
anything about your session — timing, room, AV, materials — or to be connected
with your day's co-instructor, contact the program committee. Please send final
slide decks to the committee in advance so we can confirm AV compatibility and
load them centrally.
