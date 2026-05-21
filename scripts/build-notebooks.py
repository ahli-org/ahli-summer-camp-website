"""Generate the Day 3 (evaluation) and Day 4 (methods) workshop notebooks.

These are *template/skeleton* notebooks: a section structure with prompts and
starter code that each participant adapts to their own project. They include a
small synthetic-data generator (you control the ground truth, so you can show a
metric reporting the wrong thing) — swap in a public or real dataset if that
fits your project better.

Run:  uv run --with nbformat python scripts/build-notebooks.py
Output: public/notebooks/{evaluation,methods}-lab-template.ipynb
"""

from pathlib import Path
import nbformat as nbf
from nbformat.v4 import new_notebook, new_markdown_cell, new_code_cell

OUT = Path(__file__).resolve().parent.parent / "public" / "notebooks"
OUT.mkdir(parents=True, exist_ok=True)

# GitHub path used for the "Open in Colab" badge (also recognised by GitHub's
# notebook renderer). Keep in sync with src/lib/notebooks.ts.
COLAB_REPO = "ahli-org/ahli-summer-camp-website/blob/main/public/notebooks"

def colab_badge(filename):
    url = f"https://colab.research.google.com/github/{COLAB_REPO}/{filename}"
    return f"[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)]({url})"

# Shared starter: a synthetic-data generator with the knobs the workshop spec calls for.
SYNTH = '''\
import numpy as np
import pandas as pd

def make_synthetic(
    n=4000,
    prevalence=0.15,        # event rate of the positive class
    signal=1.2,             # strength of the genuine signal
    subgroup_gap=0.6,       # how much weaker the signal is in subgroup B
    shortcut_strength=2.0,  # a feature spuriously predictive in TRAIN only
    label_noise=0.05,       # fraction of labels flipped (uniform)
    shift=True,             # apply a train -> test distribution shift
    seed=0,
):
    """A binary-outcome stand-in with two subgroups, a planted shortcut, label
    noise, and an optional train->test shift. You control the ground truth, so
    you can demonstrate a metric reporting the wrong thing. Adapt the outcome
    type (multiclass / time-to-event / regression) to match YOUR project."""
    rng = np.random.default_rng(seed)
    subgroup = rng.integers(0, 2, n)                       # 0 = A, 1 = B
    x1 = rng.normal(0, 1, n)
    x2 = rng.normal(0, 1, n)
    # Genuine signal, weaker in subgroup B (a true performance gap):
    strength = signal * np.where(subgroup == 1, 1 - subgroup_gap, 1.0)
    logit = strength * x1 + 0.5 * x2 + np.log(prevalence / (1 - prevalence))
    p = 1 / (1 + np.exp(-logit))
    y = rng.binomial(1, p)
    # Label noise:
    flip = rng.random(n) < label_noise
    y = np.where(flip, 1 - y, y)
    # A shortcut: a feature correlated with y in TRAIN, broken at test time.
    split = rng.random(n) < 0.7
    shortcut = np.where(split, shortcut_strength * (y - 0.5), 0) + rng.normal(0, 1, n)
    df = pd.DataFrame({"x1": x1, "x2": x2, "shortcut": shortcut,
                       "subgroup": subgroup, "y": y, "is_train": split})
    train, test = df[df.is_train].copy(), df[~df.is_train].copy()
    if shift:  # shift the test distribution so a fragile model degrades
        test["x1"] = test["x1"] + 0.8
    return train.drop(columns="is_train"), test.drop(columns="is_train")

train_df, test_df = make_synthetic()
FEATURES = ["x1", "x2", "shortcut"]
X_train, y_train = train_df[FEATURES], train_df["y"]
X_test,  y_test  = test_df[FEATURES],  test_df["y"]
print(train_df.shape, test_df.shape, "event rate:", round(y_train.mean(), 3))
'''

# Alternative substrate for projects whose outcome is time-to-event (survival),
# the most common non-binary case in the cohort. Pairs with scikit-survival.
SYNTH_SURVIVAL = '''\
# --- Alternative substrate: time-to-event (survival) ---
# If your project is survival / time-to-event rather than binary classification,
# build on this instead of the generator above (pip install scikit-survival).
import numpy as np, pandas as pd

def make_synthetic_survival(n=4000, subgroup_gap=0.5, censor_rate=0.3, seed=0):
    """Right-censored survival data with a covariate-driven hazard and a
    subgroup with weaker signal — adapt the hazard to your project."""
    rng = np.random.default_rng(seed)
    subgroup = rng.integers(0, 2, n)
    x1 = rng.normal(0, 1, n)
    x2 = rng.normal(0, 1, n)
    risk = 0.8 * x1 + 0.4 * x2 + 0.5 * subgroup * (1 - subgroup_gap)
    event_time = rng.exponential(1 / np.clip(np.exp(risk - 1.0), 1e-3, None))
    censor_time = rng.exponential(scale=event_time.mean() / max(censor_rate, 1e-3), size=n)
    observed = np.minimum(event_time, censor_time)
    event = event_time <= censor_time
    return pd.DataFrame({"x1": x1, "x2": x2, "subgroup": subgroup,
                         "time": observed, "event": event})

surv_df = make_synthetic_survival()
print(surv_df.shape, "event rate:", round(surv_df.event.mean(), 3))
# scikit-survival models take a structured array: Surv.from_arrays(event, time).
# Evaluate with the concordance index and time-dependent AUC instead of AUROC.
'''

INTRO_NOTE = '''\
> **How to use this notebook.** It is a *template*, not a finished analysis. Work
> through the sections on **your own project**: state your project in Section 0,
> build a data substrate (the synthetic generator below, or a public/real
> dataset), and adapt each move to your outcome type and decision. The
> intellectual work is *deciding what to build and how to interpret it* — use an
> AI coding assistant freely to scaffold the synthetic stand-in. Section 7
> converts your findings into your Project Workbook section.
'''


def md(text):
    return new_markdown_cell(text)


def code(text):
    return new_code_cell(text)


def build_eval():
    nb = new_notebook()
    nb.cells = [
        md("# Evaluation Lab — build your project's evaluation notebook\n\n"
           "**AHLI Health AI Summer Camp 2026 · Day 3 workshop**\n\n"
           + colab_badge("evaluation-lab-template.ipynb") + "\n\n" + INTRO_NOTE),
        md("## Section 0 — Project setup\n\n"
           "*State your project in one or two sentences: the prediction/decision, "
           "the population, and the decision your model informs. Then build a data "
           "substrate. The synthetic generator below gives you ground-truth control; "
           "swap in the MIMIC-IV demo or your own dataset if that fits better.*"),
        code(SYNTH),
        md("*Survival / time-to-event project? Use the alternative substrate "
           "below instead, and evaluate with concordance and time-dependent AUC "
           "rather than AUROC. (Imaging, text, or genomics: treat your encoder's "
           "output as the feature matrix and reuse the binary substrate.)*"),
        code(SYNTH_SURVIVAL),
        md("## Section 1 — Discrimination\n\n"
           "ROC/AUROC and precision–recall/AUPRC. Under realistic class imbalance, "
           "a strong AUROC can coexist with a model that is useless at the operating "
           "point. **Which of these tracks your decision?**"),
        code('from sklearn.linear_model import LogisticRegression\n'
             'from sklearn.metrics import roc_auc_score, average_precision_score\n\n'
             'clf = LogisticRegression(max_iter=1000).fit(X_train, y_train)\n'
             'p_test = clf.predict_proba(X_test)[:, 1]\n'
             'print("AUROC:", round(roc_auc_score(y_test, p_test), 3))\n'
             'print("AUPRC:", round(average_precision_score(y_test, p_test), 3))\n'
             '# TODO: plot ROC and PR curves; relate AUPRC to the base rate.'),
        md("## Section 2 — Calibration\n\n"
           "A well-discriminating model can be badly miscalibrated. Calibration is "
           "what matters the moment a prediction informs a decision. Plot a "
           "reliability curve and compute a calibration error."),
        code('from sklearn.calibration import calibration_curve\n'
             'frac_pos, mean_pred = calibration_curve(y_test, p_test, n_bins=10, strategy="quantile")\n'
             '# TODO: plot mean_pred vs frac_pos against the diagonal; report ECE.\n'
             'print(list(zip(mean_pred.round(2), frac_pos.round(2))))'),
        md("## Section 3 — Clinical utility\n\n"
           "Decision-curve analysis / net benefit: choose an operating threshold "
           "from the **decision**, not the metric. Net benefit at threshold *t* = "
           "`TP/n - FP/n * (t/(1-t))`."),
        code('import numpy as np\n\n'
             'def net_benefit(y_true, p, t):\n'
             '    pred = (p >= t).astype(int)\n'
             '    tp = np.sum((pred == 1) & (y_true == 1))\n'
             '    fp = np.sum((pred == 1) & (y_true == 0))\n'
             '    n = len(y_true)\n'
             '    return tp / n - fp / n * (t / (1 - t))\n\n'
             'for t in [0.1, 0.2, 0.3, 0.5]:\n'
             '    print(t, round(net_benefit(y_test.values, p_test, t), 4))\n'
             '# TODO: plot net benefit vs treat-all / treat-none across thresholds.'),
        md("## Section 4 — Disaggregated (subgroup / fairness) evaluation\n\n"
           "Aggregate metrics hide subgroup failures. Report your metrics "
           "per-subgroup and name the gap that would concern you."),
        code('for g, name in [(0, "A"), (1, "B")]:\n'
             '    mask = test_df["subgroup"].values == g\n'
             '    print(name, "AUROC:", round(roc_auc_score(y_test[mask], p_test[mask]), 3))\n'
             '# TODO: add calibration and net benefit per subgroup; is the gap acceptable?'),
        md("## Section 5 — Uncertainty & power\n\n"
           "A small test set yields an estimate too noisy to act on. Bootstrap a "
           "confidence interval for your primary metric and reason about the test "
           "size you actually need."),
        code('rng = np.random.default_rng(0)\n'
             'boot = []\n'
             'yt, pt = y_test.values, p_test\n'
             'for _ in range(1000):\n'
             '    idx = rng.integers(0, len(yt), len(yt))\n'
             '    if yt[idx].sum() in (0, len(idx)):\n'
             '        continue\n'
             '    boot.append(roc_auc_score(yt[idx], pt[idx]))\n'
             'print("AUROC 95% CI:", np.round(np.percentile(boot, [2.5, 97.5]), 3))'),
        md("## Section 6 — Leakage & shortcut probing\n\n"
           "A planted shortcut inflates in-distribution performance and collapses "
           "under shift. Compare a model **with** the shortcut feature against one "
           "**without** it, on the shifted test set."),
        code('def auroc_with(features):\n'
             '    m = LogisticRegression(max_iter=1000).fit(X_train[features], y_train)\n'
             '    return roc_auc_score(y_test, m.predict_proba(X_test[features])[:, 1])\n\n'
             'print("with shortcut:   ", round(auroc_with(["x1", "x2", "shortcut"]), 3))\n'
             'print("without shortcut:", round(auroc_with(["x1", "x2"]), 3))\n'
             '# A big gap means the model leaned on a feature that will not generalize.'),
        md("## Section 7 — Findings → Workbook Part 3\n\n"
           "*Convert what you found into your evaluation plan (Project Workbook "
           "Part 3):*\n\n"
           "- **Estimand** — what, precisely, are you measuring?\n"
           "- **Primary metric** and why it tracks the real decision (not "
           "convenience).\n"
           "- **Secondary metrics** — calibration, net benefit, others.\n"
           "- **Subgroup / fairness plan** — which subgroups; what gap concerns you.\n"
           "- **Power** — how much test data you need for a usable estimate.\n"
           "- **Top 3 threats to validity** (leakage, shortcut, shift) and your "
           "guard against each."),
    ]
    return nb


def build_methods():
    nb = new_notebook()
    nb.cells = [
        md("# Methods Lab — build your project's methods notebook\n\n"
           "**AHLI Health AI Summer Camp 2026 · Day 4 workshop**\n\n"
           + colab_badge("methods-lab-template.ipynb") + "\n\n" + INTRO_NOTE +
           "\nReuse your Day 3 evaluation moves as the *comparison harness* here: "
           "every model goes through the same evaluation."),
        md("## Section 0 — Project setup\n\n"
           "*Restate your project and reuse your data substrate from Day 3 (the "
           "synthetic generator is repeated here so this notebook stands alone).*"),
        code(SYNTH),
        md("## Section 1 — Baseline\n\n"
           "A penalized linear model is the bar any complex method must clear. "
           "If a heavier model can't beat this, the complexity isn't buying you "
           "anything."),
        code('from sklearn.linear_model import LogisticRegression\n'
             'from sklearn.metrics import roc_auc_score\n\n'
             'def evaluate(model, name):\n'
             '    model.fit(X_train, y_train)\n'
             '    auc = roc_auc_score(y_test, model.predict_proba(X_test)[:, 1])\n'
             '    print(f"{name:24s} AUROC {auc:.3f}")\n'
             '    return auc\n\n'
             'evaluate(LogisticRegression(max_iter=1000, C=1.0), "Penalized logistic")'),
        md("## Section 2 — Gradient-boosted trees\n\n"
           "A strong tabular workhorse. Does it beat the baseline on YOUR metric, "
           "or just on AUROC?"),
        code('from sklearn.ensemble import HistGradientBoostingClassifier\n'
             'evaluate(HistGradientBoostingClassifier(max_depth=3), "Gradient-boosted trees")'),
        md("## Section 3 — A small neural network\n\n"
           "Capacity is a choice to justify, not a default. (Swap in a torch model "
           "if your project needs one.)"),
        code('from sklearn.neural_network import MLPClassifier\n'
             'evaluate(MLPClassifier(hidden_layer_sizes=(32, 16), max_iter=500), "Small MLP")'),
        md("## Section 4 — Representation / foundation-model approach\n\n"
           "*When does leveraging a pretrained, general representation help, and "
           "when does a focused task-specific model win? For imaging/text/genomics, "
           "treat your encoder's output as the feature matrix and slot it in here.* "
           "Below is a placeholder representation (PCA) to keep the harness runnable; "
           "replace it with your project's representation."),
        code('from sklearn.decomposition import PCA\n'
             'from sklearn.pipeline import make_pipeline\n'
             'evaluate(make_pipeline(PCA(n_components=3), LogisticRegression(max_iter=1000)),\n'
             '         "Representation + linear")'),
        md("## Section 5 — Comparison harness\n\n"
           "Run every model through the **same** evaluation (reuse your Day 3 "
           "moves), and look at learning curves vs. sample size. The lesson is "
           "usually that complexity often does not help."),
        code('from sklearn.model_selection import learning_curve\n'
             'import numpy as np\n\n'
             'sizes, train_scores, val_scores = learning_curve(\n'
             '    HistGradientBoostingClassifier(max_depth=3), X_train, y_train,\n'
             '    train_sizes=np.linspace(0.2, 1.0, 5), scoring="roc_auc", cv=3)\n'
             'print("sizes:", sizes)\n'
             'print("val AUROC:", val_scores.mean(axis=1).round(3))\n'
             '# TODO: plot learning curves; add calibration & net benefit to the harness.'),
        md("## Section 6 — The shortcut, revisited\n\n"
           "Which methods most exploit the spurious feature? Trustworthiness is "
           "not the same as raw performance — a model that leans on the shortcut "
           "scores well in-distribution and fails under shift."),
        code('for feats, label in [(["x1", "x2", "shortcut"], "with shortcut"),\n'
             '                      (["x1", "x2"], "without shortcut")]:\n'
             '    m = HistGradientBoostingClassifier(max_depth=3).fit(X_train[feats], y_train)\n'
             '    auc = roc_auc_score(y_test, m.predict_proba(X_test[feats])[:, 1])\n'
             '    print(f"{label:18s} AUROC {auc:.3f}")'),
        md("## Section 7 — Findings → Workbook Part 4\n\n"
           "*Convert what you found into your method rationale (Project Workbook "
           "Part 4):*\n\n"
           "- **Chosen approach** and why it fits your data and your Day 3 metrics.\n"
           "- **Foundation vs. task-specific** — your decision and reasoning.\n"
           "- **Fine-tune / prompt / train-from-scratch** — your decision.\n"
           "- **Baseline** — and why it is or isn't enough.\n"
           "- **Internal-validation plan.**\n"
           "- **Main methodological risk**, and a credible alternative."),
    ]
    return nb


for name, nb in [("evaluation-lab-template", build_eval()), ("methods-lab-template", build_methods())]:
    nb.metadata["kernelspec"] = {"name": "python3", "display_name": "Python 3", "language": "python"}
    nb.metadata["language_info"] = {"name": "python"}
    path = OUT / f"{name}.ipynb"
    nbf.write(nb, str(path))
    print("wrote", path)
