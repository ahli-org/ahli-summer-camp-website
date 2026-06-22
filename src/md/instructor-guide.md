## For morning lecturers and afternoon lecturers

Thank you for teaching at the AHLI Health AI Summer Camp. This guide explains
the program's design, what each teaching role is asked to do, and the per-day
briefs. The architecture below is shared context for everyone; the role sections
and your day's brief are the specifics.

## The week's architecture

The camp is one continuous arc, not seven topical workshops, and the teaching
design depends on every instructor understanding it.

**The spine.** The whole week closes one gap: the distance between *an idea a
researcher finds interesting* and *a system that actually helps patients*. Each
content day (1–5) closes one segment — problems → data → evaluation → methods →
deployment. Day 6 is practice job talks; Day 7 is a poster session.

**The validity ladder.** Days 3–4 concern *internal* validity (is the evidence
credible, is the model sound on its own terms); Day 5 concerns *external and
deployment* validity. If your day touches "evaluation," be clear which rung
you're on.

**The Project Workbook.** Across the five content days, each participant keeps a
short, **private** [Project Workbook](/project-workbook/) on their own project —
one part per day (problem, data, evaluation, methods, deployment). It is a
thinking aid, **not turned in and not graded**. Sessions should drive each
participant's thinking on that day's part, not toward a submission.

**The five-block content day (Days 1–5).** Every content day runs the same arc:
a morning handoff → morning lecture → small group → afternoon lecture → workshop →
**closing small group**. The day ends with a small group in which participants
step back and talk through how their thinking moved that day — so the last thing
they do each day is sharpen their own project. Day 1 uses the same structure,
with an 8:30–9:15 opening block (check-in, welcome and orientation, a brief
icebreaker) in place of the handoff.

**Signature modes.** Each day has a distinctive mode — Day 1 *frame*, Day 2
*interrogate*, Day 3 *critique*, Day 4 *build*, Day 5 *stress-test*, Day 6
*present*, Day 7 *synthesize*.

## If you give the morning lecture

You own the conceptual frame for your day. Your lecture is the scaffold the small
groups and the afternoon lecture hang on.

- **Teach the frame, not your CV.** Your lecture's job is to give participants a
  framework they can apply to their own project that same day. Use your own work
  as illustration, not as the syllabus.
- **Drive toward the day's question.** End your lecture by naming that day's
  Workbook prompt and handing off to the activity.
- **Open with the handoff and the spine.** From Day 2 on, start by placing the
  week on the arc — what gap yesterday closed, what gap today closes.
- **Use the slide outlines as a scaffold.** Each day's
  [day page](/curriculum/) carries a slide-by-slide outline of your lecture;
  adapt, replace, and extend it freely, while keeping the structural beats
  (frame → core content → transition to the deliverable) and the navy/purple/teal
  visual theme. The companion slide-deck repository’s `guides/uplevel-review.md`
  goes deeper on how to raise the ceiling for this audience — read it before
  building your deck.
- **Coordinate with the afternoon lecturer** so the two talks complement rather than overlap.

## If you give the afternoon lecture

You bring the day's frame down to earth. You craft your own slides; we are not
prescribing your content.

- **Know your job for the day.** You are not giving a second lecture on the
  morning lecture's theme — you either *instantiate* the frame in a concrete project or case
  or *productively complicate* it. Your day's brief states which.
- **Be concrete and candid.** Participants get abstraction from the morning lecture. From
  you they want the lived texture of real work — the decision points, the dead
  ends, what you would do differently.
- **Aim for ~75 minutes** including discussion, unless your day's schedule says
  otherwise.

## The small-group model

The small groups are where the project develops. You should understand how they
run, even though you do not staff them.

- **Home groups** — eight groups of five, stable all week, deliberately mixed
  across research areas, institutions, and geography.
- **Rotating peer facilitator.** The participants are senior researchers. Each
  group has five members and there are five content days, so a different member
  facilitates each day, leading both of that day's small-group blocks. There is
  no instructor in the room.
- **Coaches strengthen the groups — aim to staff them.** One floating day lead
  cannot meaningfully support eight simultaneous groups, and a first-time peer
  facilitator on a hard prompt with no coach is a predictable weak point —
  especially Day 3 (critique) and Day 5 (red-team), which are adversarial by
  design. Recruit coaches (postdocs, senior PhDs, or instructors with free
  blocks) to cover as many of the eight groups as you can, prioritizing Days 3
  and 5. The program can run without them, but not *identically* — so where
  coaches are thin, lean harder on the night-before briefing below.
- **Brief the next day's facilitators the evening before.** A five-minute
  walkthrough of the next day's prompt with each group's incoming facilitator
  removes most of the first-time-facilitator risk.
- **The day lead floats** among the groups during small-group blocks.

### Feedback without submissions

The Workbook is private and **not collected** — there is no daily submission to
grade. Feedback happens live: the closing small group each day includes a round
where members react to one another's thinking, so everyone gets peer input, and
the day lead and any coaches can surface a strong example, or a project heading
off the rails, at the next morning's handoff.

---

## Per-day briefs

### Day 1 — Problems in ML4H · AM: Peter Szolovits · PM: Emily Alsentzer

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

### Day 2 — Data · AM: Tom Pollard · PM: Solly Sieberts & Jineta Banerjee

**Your lecture.** Health data as a first-class citizen: the data-generating
process; data collected as a byproduct of care versus designed for research;
de-identification and governance; and, concretely, access mechanics — PhysioNet
credentialing, data use agreements, what it actually takes to get MIMIC-style
data in hand. Frame the day as a two-sided contrast: your lecture covers the
*byproduct-of-care* world — single-site institutional EHRs, MIMIC-style cohorts;
the Sage Bionetworks afternoon lectures cover the *designed-for-research* world —
Sieberts on statistical genetics and multi-omics with DREAM Challenges as a
benchmarking model, and Banerjee on rare-disease data fabric and Synapse-style
governed sharing across consortia and patient communities. Make the contrast
explicit so the afternoon lectures land as the other half of one picture.

**Handoff.** Open with the handoff (Day 1 problem statements). Close by naming
Workbook Part 2 — the data specification — and its gap check: does the available
data actually support the Day 1 problem?

### Day 3 — Evaluation & Study Design · AM: Shalmali Joshi · PM: Olawale Salaudeen

**Your role.** Day lead. You give the full ~75-minute morning lecture (9:15 AM) and
anchor the afternoon build-your-own-notebook workshop (2:45–4:15 PM), which feeds
the closing small group.

**Your lecture.** Study design and evaluation as the foundation everything rests
on: the estimand; metrics that correlate with clinical utility versus metrics of
convenience; discrimination, calibration, and clinical utility; statistical power;
fairness and subgroup criteria; and the major threats to internal validity. Your
lecture sets up Salaudeen's empirical case that aggregate metrics hide subgroup
failures. In the afternoon you anchor the
[evaluation-lab notebook](/notebooks/evaluation-lab/).

**Handoff.** Open with the handoff (Day 2 data specs). Close by naming Workbook
Part 3 (the evaluation plan) and pointing to the afternoon notebook workshop.

### Day 4 — Methods & Modeling · AM: Matthew McDermott · PM: Walter Gerych

**Your role.** Day lead. Like Day 3, a full morning lecture (9:15 AM) and the
afternoon build-your-own-notebook workshop (2:45–4:15 PM).

**Your lecture.** Method selection as a reasoned choice: health-specific
inductive biases; task-specific versus foundation models; when to fine-tune,
prompt, or train from scratch; representation learning over EHR data; and why
method choice is entangled with data structure and standards. Cover foundation
models explicitly, framed as *"what method for what data and what target,"* not as
a model zoo. Coordinate with Gerych so the talks divide cleanly: you cover
*building*; he covers making the built model *trustworthy without breaking it*. In
the afternoon you anchor the
[methods-lab notebook](/notebooks/methods-lab/).

**Handoff.** Open with the handoff (Day 3 evaluation plans). Close by naming
Workbook Part 4 — the method rationale.

### Day 5 — Deployment · AM: Muhammad Mamdani · PM: Inioluwa Deborah Raji · 2:45 PM fireside

**Your role.** Day lead; the 9:15 AM lecture. The day's fourth block is a
clinician fireside chat with Mjaye Mazwi (an organizer moderates), and the day
closes with a small group that continues red-teaming projects.

**Your lecture.** Real-world deployment, told as war stories — workflow
integration, clinician adoption, the model that validated beautifully and failed
on the ward, monitoring and drift, and who you need on your side to deploy at all.
Push for specific deployment narratives, successes and failures, rather than
abstractions; that lived texture is the value. Your lecture sets up the red-team
small groups and Raji's accountability-focused afternoon lecture.

**Handoff.** Open with the handoff (Day 4 method rationales). Frame the small
groups as a red team — the group tries to break each project as a whole — and
name Workbook Part 5, the deployment plan.

### Day 6 — Practice Job Talks · Camp faculty

**Format.** Day 6 is given over to **practice job talks**, run as concurrent
sessions in parallel rooms and moderated by camp faculty across three blocks
through the day. Each presenter gives a short job-talk-style presentation of
their research and fields questions, as they would on the academic or industry
market; the rest of the room listens and gives feedback. The day is geared toward
participants on or near the research job market; everyone else attends, asks
questions, and learns from the room.

**Moderating.** Keep talks to time, run a crisp Q&A, and make the feedback both
concrete and kind — model the kinds of questions a real search committee asks. No
assigned readings.

**Handoff.** Open with the handoff (Day 5 red-team takeaways).

### Day 7 — Poster Session & Networking · All instructors and organizers

**Organizers' role.** Run the poster session in two rounds so everyone can both
present their work and browse others', then closing remarks and networking. Each
poster walks the project arc — problem → data → evaluation → method →
deployment — which makes the work legible across the cohort. Give the invited
audience a light feedback rubric so participants leave with structured input.
Close with a short collective reflection that returns to the Day 1 spine, then
lunch and networking, adjourning in the early afternoon.

---

## Logistics

The program committee handles rooms, AV, materials, and participant issues. For
anything about your session — timing, room, AV, materials — or to be connected
with your day's co-instructor, contact the program committee. Please send final
slide decks to the committee in advance so we can confirm AV compatibility and
load them centrally.
