# AHLI Health AI Summer Camp — website

Starter website for the **AHLI Health AI Summer Camp 2026**, built with
[Astro](https://astro.build). It is a **static site**: the build produces plain
HTML, CSS, and JavaScript that any static host — including **GitHub Pages** —
serves directly. No server or database required.

The design uses a clean, sidebar-driven editorial layout in the official
**AHLI** palette and typography, with the AHLI logo.

---

## Quick start

Requires [Node.js](https://nodejs.org) 18.20.8+ (or 20.3+ / 22+).

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # preview the built site locally
```

---

## Deploying

There is **no deploy workflow** right now — the site is built and reviewed
locally (`npm run dev` / `npm run build` + `npm run preview`) and is not
published anywhere yet. When you're ready to publish (e.g. to GitHub Pages):

1. **Set the site URL** in `astro.config.mjs`:
   - **Project page** (repo is e.g. `ahli-summer-camp`):
     ```js
     site: 'https://your-org.github.io',
     base: '/ahli-summer-camp',   // uncomment this line
     ```
   - **Org/user page** (repo named `your-org.github.io`):
     ```js
     site: 'https://your-org.github.io',
     // leave `base` commented out
     ```
   - **Custom domain** (e.g. `camp.ahli.org`): set `site` to that URL, leave
     `base` commented out, and add a `CNAME` file in `public/`.
2. **Re-add a deploy workflow** (the standard `withastro/action` GitHub Pages
   workflow), and in the repo set **Settings → Pages → Source → GitHub Actions**.
3. **Turn off the review banner** — set `REVIEW_MODE = false` in `src/lib/site.ts`.

All internal links use the `url()` helper in `src/lib/site.ts`, so they adjust
automatically once `base` is set correctly — no per-page edits needed.

---

## Editing content

| To change… | Edit… |
|---|---|
| Camp name, dates, email, funder | `src/lib/site.ts` (the `SITE` object) |
| Navigation menu | `src/lib/site.ts` (the `NAV` array) |
| Page text | the matching file in `src/pages/` |
| Curriculum / schedule | `src/lib/curriculum.ts` (the `days` array + `dailyRhythm`) |
| **Instructors & students** | generated — see "People (instructors & cohort)" below |
| **Resource links** | `src/lib/resources.ts` |
| Per-day curriculum outlines | `src/content/days/day-N.md` |
| Instructor guide / Project Workbook | `src/md/*.md` |
| Workshop notebooks | `scripts/build-notebooks.py` → `public/notebooks/*.ipynb` |
| Lecture slide decks | built in the companion `ahli-summer-camp-slides` repo; `npm run sync:slides` → `public/slides/` |
| Internal review banner | `REVIEW_MODE` in `src/lib/site.ts` (set `false` to hide) |
| Colors, fonts, layout | `src/styles/global.css` (CSS variables in `:root`) |
| Logo assets | `public/logos/` (see "Branding" below) |

### People (instructors & cohort)

Both the instructor pages (`/instructors/`, `/instructors/<slug>/`) and the
student pages (`/students/`, `/students/<slug>/`) are built from **generated
data**, not hand-edited, and share the same components (`ProfileCard` for the
grids, `ProfileDetail` for profiles, `ProfileLinks`/`Icon` for the link icons).
The flow:

```
.student_source/<Name>/{links.json, bio.md, headshot.png}     ← local source (gitignored)
.instructor_source/<Name>/{links.json, bio.md, headshot.png}  ← local source (gitignored)
        │  npm run build:people        (or build:students / build:instructors)
        ├─ resized headshots → public/people/<slug>.jpg
        └─ profile data      → src/data/students.json + src/data/instructors.json
                                                          ← committed; the site reads these
```

- Put each source folder (one subfolder per person, each with `links.json`,
  `bio.md`, and `headshot.png`) at `./.student_source/` and
  `./.instructor_source/`. Both are **gitignored** — raw bios/resumes are never
  committed.
- Run `npm run build:people` (needs ImageMagick `convert` on PATH). It
  slugifies names, resizes headshots, parses bios/links/awards/press, and writes
  the two JSON files. Typed access is via `src/lib/students.ts` and
  `src/lib/instructors.ts`.
- Commit `src/data/*.json` and `public/people/*.jpg`.
- **Order** is a stable, non-alphabetical shuffle: the generator sorts by a hash
  of each person's slug, so the order is fixed across regenerations and a newly
  added person slots in without reshuffling everyone else.

Each profile surfaces the person's headshot, role/position, affiliation, links
(website, Scholar, GitHub, LinkedIn, X, Bluesky, ORCID, email) shown as
icon buttons, full bio, awards, and a "Featured in" press section — designed to
showcase them and support their visibility.

- Put the source folder (one subfolder per student, each with `links.json`,
  `bio.md`, and `headshot.png`) at `./.student_source/`. It is **gitignored** —
  the raw bios/resumes are never committed.
- Run `npm run build:students` (needs ImageMagick `convert` on PATH). It
  slugifies names, resizes headshots, parses bios/links/awards/press, and writes
  `src/data/students.json`.
- Commit `src/data/students.json` and `public/people/*.jpg`. The pages render
  from the typed wrapper in `src/lib/students.ts`.

Each profile surfaces the student's headshot, position, affiliation, links
(website, Scholar, GitHub, LinkedIn, etc.), full bio, awards, and press
highlights — designed to showcase them and support their visibility.

### Branding

The site uses the official **AHLI** palette and logo:

- **Logos** live in `public/logos/` (cropped from the AHLI logo kit):
  `ahli-horizontal-white.svg` (sidebar / dark backgrounds),
  `ahli-horizontal-color.svg` and `ahli-vertical-color.svg` (light backgrounds),
  `ahli-mark-color.svg` (the cross mark, also used as the favicon).
- **Colours** are AHLI brand hexes, defined as CSS variables in `:root` in
  `src/styles/global.css` (indigo `#404C98`, blue `#107BBC`, teal `#048A81`,
  cyan `#00B0C8`, mint `#5BC7B2`, magenta `#CF206D`, lime `#A1CD59`).
- **Fonts** are Montserrat (headings) and Open Sans (body), per the AHLI
  guidelines, loaded from Google Fonts in `BaseLayout.astro`.

Each file in `src/pages/` becomes a page: `about.astro` → `/about/`.
Add a new page by creating a new `.astro` file there and adding it to `NAV`.

### Placeholders to fill in

This is a starter template. Items still marked as placeholders:

- **Instructors & students** — generated from `./.instructor_source/` and
  `./.student_source/` via `npm run build:people` (see "People" above). The 2026
  cohort and instructors are already populated in `src/data/*.json`.
- **Resource links** — `src/lib/resources.ts` (all public).
- **Contact email** — `SITE.email` in `src/lib/site.ts`.
- **Site URL** — `astro.config.mjs`.

---

## Project structure

```
ahli-summer-camp/
├── astro.config.mjs            # site URL + base path config
├── scripts/
│   ├── build-people.mjs        # generates students.json + instructors.json from sources
│   ├── build-notebooks.py      # generates the Day 3 & 4 workshop notebooks
│   └── sync-slides.mjs         # vendors Marp decks from the companion slides repo
├── public/
│   ├── favicon.svg             # AHLI cross mark
│   ├── logos/                  # AHLI logo lockups (white / colour / mark) + sponsor
│   ├── people/                 # generated headshots (<slug>.jpg)
│   ├── notebooks/              # generated workshop notebooks (.ipynb)
│   └── slides/                 # synced lecture decks (Marp HTML + PDF)
├── src/
│   ├── content.config.ts       # content collection: per-day curriculum outlines
│   ├── content/
│   │   └── days/               # day-1.md … day-7.md (detailed day outlines)
│   ├── md/                     # instructor-guide.md, project-workbook.md (rendered pages)
│   ├── components/
│   │   ├── Hero.astro          # reusable page banner
│   │   ├── Icon.astro          # inline SVG icon set (brand + utility)
│   │   ├── ProfileCard.astro   # grid card (links to a profile)
│   │   ├── ProfileDetail.astro # full profile layout (bio, awards, press)
│   │   ├── ProfileLinks.astro  # icon link buttons
│   │   ├── ReviewNotice.astro  # internal pre-launch review banner (REVIEW_MODE)
│   │   └── Sidebar.astro       # fixed navigation sidebar
│   ├── data/
│   │   ├── students.json       # generated cohort data (committed)
│   │   └── instructors.json    # generated instructor data (committed)
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell, fonts, mobile drawer, footer
│   ├── lib/
│   │   ├── site.ts             # site constants, nav, url() helper
│   │   ├── curriculum.ts       # day-by-day schedule content
│   │   ├── students.ts         # typed access to students.json
│   │   ├── instructors.ts      # typed access to instructors.json
│   │   ├── notebooks.ts        # workshop notebook metadata + Colab URLs
│   │   └── resources.ts        # student + instructor resource links
│   ├── pages/                  # one file per route
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── curriculum.astro             # /curriculum/  (overview + daily rhythm)
│   │   ├── curriculum/[day].astro       # /curriculum/day-N/  (detailed outline)
│   │   ├── instructors.astro            # /instructors/  (grid)
│   │   ├── instructors/[slug].astro     # /instructors/<slug>/  (one per instructor)
│   │   ├── students.astro               # /students/  (cohort grid)
│   │   ├── students/[slug].astro        # /students/<slug>/  (one per student)
│   │   ├── notebooks/[notebook].astro   # /notebooks/<slug>/  (rendered + Colab + download)
│   │   ├── resources.astro
│   │   ├── sponsors.astro
│   │   ├── instructor-guide.astro       # /instructor-guide/  (renders src/md)
│   │   ├── project-workbook.astro       # /project-workbook/  (renders src/md)
│   │   └── faq.astro
│   └── styles/
│       └── global.css
└── (no deploy workflow yet — see "Deploying")
```
