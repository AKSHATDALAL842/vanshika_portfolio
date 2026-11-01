# Project Overview — Vanshika Jain Portfolio

_Rewritten on 2026-10-31 after re-reading every source and config file. This replaces an earlier version that had gone stale: `data.ts`, `About.tsx` and the profile image changed after it was written._

## 1. What it is

A single-page, dark-themed personal portfolio website for **Vanshika Jain**, a graphic designer (branding, packaging, advertisement) based in Jaipur, India, studying a BVA at JECRC University. It is aimed at prospective clients and employers. It was scaffolded from **Google AI Studio** (`index.html` title, `assets/.aistudio/`, the `DISABLE_HMR` comment in `vite.config.ts`).

It is purely front-end: no backend, no API calls, no database. Content is hard-coded in `src/data.ts` and in the components. Anything a visitor submits is stored only in that visitor's own browser `localStorage`.

## 2. Tech stack

| Area | Choice |
|---|---|
| Language | TypeScript / TSX (ES2022, `jsx: react-jsx`) |
| UI | React 19 |
| Bundler / dev server | Vite 6 with `@vitejs/plugin-react` |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite`; CSS-first `@theme` in `src/index.css`, no tailwind config file |
| Animation | `motion` (imported from `motion/react`) |
| Icons | `lucide-react` |
| Fonts | Epilogue (display) and Inter (sans) from Google Fonts via CSS `@import`; `font-mono` is Tailwind's default mono stack |
| Package manager | npm. `node_modules/` (153 entries) exists, but there is **no `package-lock.json`** in the project root |

Declared but **unused** dependencies: `@google/genai`, `express`, `dotenv`, `tsx`, `esbuild`, `autoprefixer`. `vite` is listed in both `dependencies` and `devDependencies`. The `clean` script references a `server.js` that doesn't exist. These are AI Studio template leftovers.

## 3. Directory structure

```
vanshika-jain-portfolio/
├── index.html              # Vite entry HTML; #root + /src/main.tsx. Title still "My Google AI Studio App"
├── package.json            # scripts + deps; name still "react-example"
├── tsconfig.json           # noEmit, bundler resolution, "@/*" -> "./*"
├── vite.config.ts          # react + tailwind plugins, "@" alias, HMR toggle via DISABLE_HMR
├── PROJECT_OVERVIEW.md     # this file
├── assets/.aistudio/.gitignore   # contains only "*"; no real assets live in assets/
├── public/
│   └── vanshika.png        # portrait, 1086x1448 PNG, ~1.7 MB; served at /vanshika.png
└── src/
    ├── main.tsx            # React root + StrictMode, imports index.css
    ├── App.tsx             # page shell, grid background, scroll-spy; composes all sections
    ├── index.css           # Tailwind import, theme tokens, scrollbar, smooth scroll
    ├── data.ts             # all list content: projects, experience, skills, software, testimonials, achievements
    ├── types.ts            # ENTIRELY COMMENTED OUT (see issues)
    └── components/         # Header, Hero, Portfolio, About, Experience, Skills, Achievements, Contact, Footer
```

Not present: `.git` (not a git repo), README, docs, tests, CI config, Dockerfile, `.env.example`, lockfile.

## 4. Architecture and data flow

```
index.html -> main.tsx -> <App/>
                            ├─ <Header activeSection/>
                            ├─ <main> Hero -> Portfolio -> About -> Experience
                            │          -> Skills -> Achievements -> Contact </main>
                            └─ <Footer/>
```

- **State is local to each component** (`useState`). No router, context or store.
- **Only cross-component state:** `App` creates one `IntersectionObserver` per section id (`hero, portfolio, about, journey, skills, contact`, `rootMargin: '-30% 0px -55% 0px'`) and keeps `activeSection`, which `Header` uses to highlight the nav link. Navigation is `scrollIntoView` on the nav buttons, plus plain `#hash` anchors in the footer.
- **Content flow:** `data.ts` exports arrays. `Portfolio` uses `projectsData`; `Experience` uses `experienceData`; `Skills` uses `skillsData` and `softwareData`; `Achievements` uses `achievementsData` and `testimonialsData`. `Hero`, `About`, `Footer` and `Contact` hold their copy inline.
- **Persistence (client-only):**
  - `Achievements` -> `localStorage['vanshika_testimonials']`. A visitor can add a testimonial; the full merged list is saved and shown only in that browser.
  - `Contact` -> `localStorage['vanshika_inquiries']`. The "inquiry form" fakes a 1.5 s server delay, stores the inquiry locally, and shows a canned "auto-response" in a "Client Workspace" tab. Nothing is sent anywhere.
- **Images:** the portrait is now local (`/vanshika.png`). Project images are still remote: four `lh3.googleusercontent.com/aida-public/...` URLs (AI Studio generated mockups) and `picsum.photos` placeholders (the two non-"Case Study" projects, plus every "before" sketch). All use `referrerPolicy="no-referrer"`.

### Page sections (top to bottom)
1. **Hero** (`#hero`): headline "I build brand identities and stories that connect.", one CTA scrolling to the portfolio.
2. **Portfolio** (`#portfolio`): filter pills (All / Branding / Advertisement / Case Study), 2-column project grid, full-screen case-study modal.
3. **About** (`#about`): portrait (grayscale, colour on hover), clickable cycling "design philosophy" quote, two stat cards (2+ Years Experience, 5+ Advertisement Designs).
4. **Journey** (`#journey`): timeline filtered All / Experience / Education.
5. **Skills** (`#skills`): hover-reveal skill descriptions; software chips filtered All / Design / Dev / Marketing.
6. **Achievements** (`#achievements`): two award cards, then a testimonial carousel with an "add recommendation" form.
7. **Contact** (`#contact`): mailto CTA, location, simulated inquiry form and local inbox.
8. **Footer**: logo, links (Portfolio, About, Behance, LinkedIn, Instagram), scroll-to-top, copyright with current year.

## 5. Entry points, install, run, test

```bash
npm install          # no lockfile, so versions float within the ^ ranges
npm run dev          # vite --port=3000 --host=0.0.0.0  -> http://localhost:3000
npm run build        # vite build -> dist/
npm run preview      # serve the built bundle
npm run lint         # tsc --noEmit  (currently FAILS with 8 errors, see below)
npm run clean        # rm -rf dist server.js
```

`DISABLE_HMR=true` turns off HMR and file watching (AI Studio only). **There are no tests** and no test runner.

## 6. Important files

| File | Role |
|---|---|
| `src/data.ts` | Single source of truth for portfolio/CV content; edit here to change projects, jobs, skills, testimonials, awards |
| `src/App.tsx` | Page composition, grid background, scroll-spy |
| `src/components/Portfolio.tsx` | Largest component (480 lines): category filter, project grid, case-study modal with Case Study / Brand Assets tabs, before/after drag slider, click-to-copy hex swatches, prev/next project |
| `src/components/Contact.tsx` | Mailto CTA plus simulated inquiry form and local inbox |
| `src/components/Achievements.tsx` | Award cards, testimonial carousel, add-recommendation form |
| `src/components/Header.tsx` | Sticky header (blurs after 20 px scroll), desktop nav with animated underline, mobile drawer |
| `src/components/Experience.tsx` | Timeline with tab filter and hover-only "APPLIED VALUES" chips |
| `src/components/Skills.tsx` | Skills list and software chip filter |
| `src/components/About.tsx` | Portrait, mantra box, stats |
| `src/components/Hero.tsx`, `Footer.tsx` | Intro and footer |
| `src/index.css` | Theme tokens: `brand-bg #131313`, `brand-surface #1e1e1e`, `brand-border #2a2a2a`, `brand-text-muted #999999` |
| `src/types.ts` | Intended home of the domain types; currently all commented out |
| `vite.config.ts` | Plugins, `@` alias, AI-Studio HMR switch |

## 7. Conventions and patterns

- One default-exported function component per file, hooks only.
- Each section is a `<section id=...>`, typically `py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8 border-b border-brand-border`, with a small-caps label and a `font-display` h2. `About` and `Skills` use full-bleed backgrounds (`bg-brand-surface`, `bg-zinc-950`) with the width wrapper inside.
- Tailwind utilities inline; `bg-brand-*` tokens; `font-display` for headings, `font-mono` for labels and metadata.
- Almost every interactive element has a descriptive `id` (e.g. `btn-modal-next`, `nav-link-about`), apparently for automated/agent testing.
- Filtering = pill/tab state + `Array.filter`, animated with `AnimatePresence mode="popLayout"` and `layout`.
- Dark-only design.

## 8. Issues, open questions, technical debt

**Verified by running `npx tsc --noEmit` (read-only):**

1. **`npm run lint` fails with 8 errors.** `src/types.ts` is fully commented out, but `data.ts` (`Project, Experience, Skill, Software, Testimonial`), `Portfolio.tsx` (`Project`), `Achievements.tsx` (`Testimonial`) and `Contact.tsx` (`ContactInquiry`) import from it. The app still runs because Vite/esbuild erases type-only imports. **Do not just uncomment the file:** its `Project.category` union is `'Branding' | 'Packaging' | 'Campaign'`, but `data.ts` now uses `'Case Study'`, `'Branding'` and `'Advertisement'`, so uncommenting as-is would produce new type errors until the union is updated.

**Confirmed by reading the code:**

2. **Nav tracking skips Achievements.** `App.tsx` doesn't observe `achievements`, so scrolling through it leaves "Skills" highlighted (no nav item exists for it either).
3. **Instagram footer link is a dead `href="#"`.** The footer tagline still says "Branding • Packaging • Campaigns", while the site now says "Advertisement".
4. **Modal backdrop doesn't close on click.** The inner panel calls `stopPropagation`, but the outer overlay has no `onClick`. No Escape-key handling, no body scroll lock, no focus trap or `role="dialog"`.
5. **Hard-coded "Core Deliverables"** chips (Monogram Design / Corporate System / Press Guidelines) appear on every project, including the app/web mockups and the cosmetics packaging.
6. **Font previews:** only Inter and Epilogue map to a real family; everything else falls back to `monospace`. Space Grotesk, JetBrains Mono, Fira Code, Playfair Display and Outfit (named in `data.ts`) are never loaded.
7. **Slider drag quirk:** `handleMouseMove` moves the slider whenever the left button is held, even if the press started elsewhere.
8. **Category/content mismatch:** four projects are "Case Study" (all with `Logoipsum` placeholder client names and AI-generated mockups), one "Branding", one "Advertisement". The "Aroha Cosmetic Packaging" project is tagged `Advertisement` although it is packaging, and the old `Packaging` category no longer exists in the filters.
9. **Placeholder content presented as real work:** Logoipsum clients, `picsum.photos` random photos for Ritva and Aroha, and "before" images that are blurred Picsum photos, not sketches. The testimonials (named people at Ritva, Aroha, Duratech) are hard-coded and may be sample text; worth confirming they are real and approved.
10. **Contact form is simulated.** The UI says "Inquiry Sent Successfully", "Establishing secure handshake", "SHIELD SECURED" and "AI Onboarding", and the reply promises a 24-hour mood board and a scheduling link, but nothing is delivered. Only the `mailto:` link works. Budgets are in USD for an India-based designer. Visitors may believe their brief was sent.
11. **Testimonial form is local-only**, while its copy ("showcase it on this digital canvas") implies public display. Once a visitor has saved data, later edits to `testimonialsData` won't show for them, because the saved full list overrides the seed.
12. **`localStorage` access isn't try/catch-wrapped** for access errors (only `JSON.parse` is). It can throw in some private or blocked-storage contexts.
13. **Experience dates look inconsistent:** two roles both read "Dec '24 — Present" (Duratech and Freelance), and Mandala Art Gallery reads "Dec '24 — May '26" (already ended as of today, 2026-10-31). All three start in the same month, which looks like a placeholder. The About stat says "2+ years experience", which roughly fits Dec '24 onward. Education says "2023 — 2027". Worth confirming with the owner.
14. **Hard-coded stats and copy** in `About.tsx` (2+ years, 5+ advertisement designs). Experience hover chips ("ACCURACY / STRATEGY / COHESION") are identical decoration for every entry. Achievements are one-line award text with no dates or links.
15. **SEO/metadata:** `index.html` title is "My Google AI Studio App"; no meta description, favicon or Open Graph tags. `package.json` name is `react-example`.
16. **Remote AI Studio image URLs** (`lh3.googleusercontent.com/aida-public/...`) may expire or be blocked. I did not check that they load. Real work samples should be self-hosted (`public/`).
17. **Portrait is ~1.7 MB** unoptimised PNG, displayed at max ~340 px wide. Consider compressing or using WebP.
18. **`src/index.css`:** the `selection { ... }` rule is missing the `::` prefix, so it does nothing. The real selection colour comes from the `selection:` classes in `App.tsx`. The Google Fonts `@import` is also better as a `<link>` in `index.html` for load speed.
19. **`tsconfig.json`** enables `experimentalDecorators` and `useDefineForClassFields: false` with no decorators in use. The `@/*` alias points at the repo root (`./*`), not `src/`, and nothing uses it. `tsconfig` has no `strict` flag, so type-checking is lenient.
20. **Unnecessary `import React`** in `Portfolio.tsx`, `Achievements.tsx`, `Contact.tsx` under the `react-jsx` transform. No unused-import audit was run.
21. **Accessibility:** project cards and the mantra box are clickable `div`s that aren't keyboard-focusable; most `<label>`s aren't tied to inputs (`htmlFor`); the review star buttons have no accessible names; the portrait's colour-on-hover effect has no touch/keyboard equivalent.
22. **Personal data in source:** email `jainvanshika.design@gmail.com`, Behance `vanshikajain110`, LinkedIn `vanshikajain105`. Expected for a portfolio; note it if the repo is ever made public.
23. **No git history, no lockfile, no README, no tests.** Changes can't be diffed or rolled back, and installs aren't reproducible.

## 9. Coverage

- **Read in full (22 files):** `index.html`, `package.json`, `tsconfig.json`, `vite.config.ts`, `assets/.aistudio/.gitignore`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/types.ts`, `src/data.ts`, all nine files in `src/components/`, the previous `PROJECT_OVERVIEW.md`, plus `public/vanshika.png` inspected via `file` (dimensions and size only; I did not view the picture).
- **Skipped (3 items):** the two `.DS_Store` files (binary macOS metadata) and `node_modules/` (third-party, generated, 153 top-level entries).
- **Not present, so not read:** README, CONTRIBUTING, CLAUDE.md, docs, changelog, tests, CI config, Dockerfile, `.env.example`, lockfile.
- **Not verified:** I did not start the dev server or view the site in a browser, so visual and runtime behaviour is inferred from code. Remote image URLs were not checked for availability. `npm run build` was not run.
