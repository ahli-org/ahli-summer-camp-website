The Project Workbook is a **private thinking aid** for your own project. It is
**not turned in and not graded** — no one collects it. Its only job is to sharpen
how you think about your project; you fill it in for yourself, and you decide what
(if anything) to share.

It has **four short parts**, one for each of Days 1–4: problem, data, defining
success, and methods. **Day 5 has no workbook section** — it's a stress-test
(see below).

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
| 3 | Defining success |
| 4 | Methods & modeling |
| 5 | *Stress-test — no workbook section* |

---

## The template

*Keep your own copy — in a document, a notes app, wherever suits you. Jot the core
answer to each prompt in a line or two; delete what doesn't apply. Revisit earlier
parts as later days change your view.*

### Project title and one-line pitch
One sentence: what you are doing and for whom.

<div id="part-1"></div>

### Part 1 — Problem *(Day 1)*
Adapted from the [WIDOM](https://cs.stanford.edu/people/widom/paper-writing.html#intro)
framing. Resist committing to *your* method here — this part is about the problem.
(WIDOM's later questions, about your approach and the evidence for it, live in
Parts 3–4.)

- **What is the problem / question?**
- **Who are the stakeholders?** *(patients, clinicians, health systems, payers,
  regulators — who is affected, who decides)*
- **Why is it impactful?** *(the unmet health need and the cost of leaving it
  unsolved — occasionally the impact is in your solution rather than the problem)*
- **Why is it technically interesting?**
- **Why is it hard?**
  - *What are the naive approaches?*
  - *Why does each one fail?*
- **Why hasn't it been solved before?**
  - *Why now? What changed — technically, culturally, or in available resources —
    that makes a solution possible today?*
  - *What prior solutions exist, and what is wrong with them?*
- **Bottom line:** *one or two sentences — the problem, why it matters, why it is
  open.*

<div id="part-2"></div>

### Part 2 — Data *(Day 2)*
Data is **not** downstream of the problem — the two are inseparable. Stating the
problem already implies a *data scope*: the data realistically available at the
moment your solution has to act. (If the problem is to flag, at ED presentation,
who will deteriorate, then only data on hand at presentation is in scope — you
can't lean on an MRI that won't be taken.) Make that scope explicit, and treat
expanding it as a design choice with a cost.

- **What data is actually available** at the point your solution must operate?
  *(This scope is part of the problem, not a free choice.)*
- **The data-generating process.** *How is that data produced, and for what
  purpose — a byproduct of care, or designed for research?*
- **Provenance and what it hides.** *Who is missing or mismeasured; what does the
  data silently encode?*
- **Scope tension.** *Does the problem as stated implicitly need data that won't
  be there when you act? If so, re-scope the problem — or make collecting that
  data part of the solution, and name the cost.*
- **Bottom line:** *one or two sentences — the data in scope, where it comes from,
  and the main tension between the data and the problem.*

<div id="part-3"></div>

### Part 3 — Defining success *(Day 3)*
What would make this a success, in terms you could actually measure? Success is
often *implied by the problem* — the work is to make it explicit: which metrics
you truly care about, how you'd measure them for real, how you'd approximate them
in retrospective data, and how competing metrics trade off.

- **What does success mean here?** *Name the metrics you actually care about —
  which may be causal (who would benefit from an action), not just predictive
  accuracy.*
- **Measuring for real vs. retrospectively.** *How would you measure each metric
  in deployment? How would you approximate it in retrospective data — and what is
  lost in the approximation?*
- **Competing metrics.** *Where do the things you care about trade off against
  each other, and how would you navigate it? (e.g., waiting for more data raises
  accuracy but costs time.)*
- **Confounders that change the meaning of your evaluation.** *What subgroup or
  process structure could mislead you if ignored? (e.g., trauma arrivals by
  ambulance are triaged through a different process than walk-ins — don't conflate
  them.) This is about anticipating specific confounders, not checking off a
  "fairness plan."*
- **Bottom line:** *one or two sentences — what success means, and the metric
  trade-off or confounder you most have to respect.*

<div id="part-4"></div>

### Part 4 — Methods & modeling *(Day 4)*
Start not from a model menu but from **what about your data and problem actually
shapes the modeling** — the features, structure, timing, missingness, or
label quirks that meaningfully affect how you'd model. Then commit to an approach
and defend it against the simplest thing that could work.

- **What about your data/problem setup meaningfully affects modeling?** *Features,
  temporal structure, missingness, label noise, the data scope from Part 2,
  whether the question is causal or predictive — what genuinely constrains the
  method?*
- **Chosen approach** and why it fits the above and your Part 3 success criteria.
- **Baseline.** *The simplest approach that could work — and why it is (or isn't)
  enough.*
- **Main methodological risk**, and one credible alternative you considered.
- **Bottom line:** *one or two sentences — what about the data drives the method,
  and the main risk.*

<div id="part-5"></div>

### Day 5 — Stress-test *(no workbook section)*
Day 5 has no structured entry. Instead, your group **stress-tests each project**:
assume it has been built and deployed, brainstorm where and why it would fail in
the real world, and ask how those failure modes change your framing — sending you
back to revise Parts 1–4. Keep a running list of failure modes if it helps, but
the value is the discussion, not a written deliverable.
