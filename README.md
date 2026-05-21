# AHLI Health AI Summer Camp — website

Starter website for the **AHLI Health AI Summer Camp 2026**, built with
[Astro](https://astro.build). It is a **static site**: the build produces plain
HTML, CSS, and JavaScript that any static host — including **GitHub Pages** —
serves directly. No server or database required.

The design recreates the clean, sidebar-driven editorial layout the team liked,
in the camp's navy / purple / teal palette.

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
| Instructors | the `faculty` array in `src/pages/instructors.astro` |
| Application dates / form link | the top of `src/pages/apply.astro` |
| Colors, fonts, layout | `src/styles/global.css` (CSS variables in `:root`) |

Each file in `src/pages/` becomes a page: `about.astro` → `/about/`.
Add a new page by creating a new `.astro` file there and adding it to `NAV`.

### Placeholders to fill in

This is a starter template. Items still marked as placeholders:

- **Instructor names** — `src/pages/instructors.astro` (kept generic on purpose;
  drop in confirmed faculty).
- **Application dates and form link** — `src/pages/apply.astro`.
- **Contact email** — `SITE.email` in `src/lib/site.ts`.
- **Site URL** — `astro.config.mjs`.

---

## Project structure

```
ahli-summer-camp/
├── astro.config.mjs            # site URL + base path config
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.astro          # reusable page banner
│   │   └── Sidebar.astro       # fixed navigation sidebar
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell, fonts, mobile drawer, footer
│   ├── lib/
│   │   └── site.ts             # site constants, nav, url() helper
│   ├── pages/                  # one file per route
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── curriculum.astro
│   │   ├── instructors.astro
│   │   ├── apply.astro
│   │   └── faq.astro
│   └── styles/
│       └── global.css
└── .github/workflows/deploy.yml
```
