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

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and deploys automatically.

1. **Create the repo** and push this project to the `main` branch.
2. **Set the site URL** in `astro.config.mjs`:
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
3. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Push to `main`. The Actions tab shows the build; the site goes live at the
   `site` URL once it finishes.

All internal links use the `url()` helper in `src/lib/site.ts`, so they adjust
automatically once `base` is set correctly — no per-page edits needed.

---

## Editing content

| To change… | Edit… |
|---|---|
| Camp name, dates, email, funder | `src/lib/site.ts` (the `SITE` object) |
| Navigation menu | `src/lib/site.ts` (the `NAV` array) |
| Page text | the matching file in `src/pages/` |
| Curriculum days | the `days` array in `src/pages/curriculum.astro` |
| **Instructors & students** | generated — see "People (instructors & cohort)" below |
| **Resource links (incl. gated)** | `src/lib/resources.ts` |
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
- **Resource links** — `src/lib/resources.ts` (public + gated material).
- **Contact email** — `SITE.email` in `src/lib/site.ts`.
- **Site URL** — `astro.config.mjs`.

---

## Project structure

```
ahli-summer-camp/
├── astro.config.mjs            # site URL + base path config
├── scripts/
│   └── build-people.mjs        # generates students.json + instructors.json from sources
├── public/
│   ├── favicon.svg             # AHLI cross mark
│   ├── logos/                  # AHLI logo lockups (white / colour / mark) + sponsor
│   └── people/                 # generated headshots (<slug>.jpg)
├── src/
│   ├── components/
│   │   ├── Hero.astro          # reusable page banner
│   │   ├── Icon.astro          # inline SVG icon set (brand + utility)
│   │   ├── ProfileCard.astro   # grid card (links to a profile)
│   │   ├── ProfileDetail.astro # full profile layout (bio, awards, press)
│   │   ├── ProfileLinks.astro  # icon link buttons
│   │   └── Sidebar.astro       # fixed navigation sidebar
│   ├── data/
│   │   ├── students.json       # generated cohort data (committed)
│   │   └── instructors.json    # generated instructor data (committed)
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell, fonts, mobile drawer, footer
│   ├── lib/
│   │   ├── site.ts             # site constants, nav, url() helper
│   │   ├── students.ts         # typed access to students.json
│   │   ├── instructors.ts      # typed access to instructors.json
│   │   └── resources.ts        # student + instructor resource links
│   ├── pages/                  # one file per route
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── curriculum.astro
│   │   ├── instructors.astro            # /instructors/  (grid)
│   │   ├── instructors/[slug].astro     # /instructors/<slug>/  (one per instructor)
│   │   ├── students.astro               # /students/  (cohort grid)
│   │   ├── students/[slug].astro        # /students/<slug>/  (one per student)
│   │   ├── resources.astro
│   │   ├── sponsors.astro
│   │   └── faq.astro
│   └── styles/
│       └── global.css
└── .github/workflows/deploy.yml
```

---

## Gating private content (logins & recordings)

Some resources (lab notebooks, session recordings) should be restricted to the
cohort. A few facts shape how to do this on a static site:

- **A static host (GitHub Pages) serves files to anyone with the URL.**
  Client-side JavaScript can *hide* a link or show a login box, but it cannot
  stop someone from fetching the underlying file directly. So pure-JS gating is
  honour-system only, not real protection.
- **Real gating must be enforced where the bytes are served** — at the edge, by
  a serverless function, or by the content host. Importantly, **the site can
  stay static**; you only add a gatekeeper in front of the protected material.

Options, lowest-effort first (the build stays static in all of them):

1. **Offload gated material to an access-controlled host (recommended to start).**
   Keep the site on GitHub Pages. Put documents/notebooks in a Google Drive or
   Dropbox folder shared with cohort emails, and recordings on a private video
   host (Vimeo private/domain-locked, or Mux/Cloudflare Stream with signed
   playback). The site just links out; Google/Vimeo enforce the login. No auth
   code, no extra infra.
2. **Cloudflare Access in front of a `/members` path or subdomain.**
   Move hosting/DNS to Cloudflare (Cloudflare Pages still builds this static
   site unchanged). Cloudflare authenticates via Google/GitHub/email-OTP **at
   the edge** before serving — genuine protection of the actual files, still no
   app code.
3. **Identity provider + serverless signed URLs (most control).**
   Add Auth0/Firebase/Netlify Identity for login and a small serverless function
   that hands authorized users short-lived signed URLs to private storage
   (S3/GCS/R2) for files and recordings. Most flexible, most work.

The Resources page (`src/pages/resources.astro`) already separates public from
gated items: set `gated: true` on a resource in `src/lib/resources.ts` and it
renders with a lock and a "Cohort only" tag pointing at `gatedHref`. Wire that
href to whichever option above you choose.
