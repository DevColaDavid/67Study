# 67 Study — Agent & Developer Guide

## What this project is
A personal study app for a 10th grade student. Content lives in plain `.md` files — Obsidian opens them directly. Five subjects are currently active. No backend, no auth, no TTS.

## Tech stack
- **React 19 + TypeScript + Vite**
- `react-markdown` + `remark-gfm` + `remark-math` + `rehype-katex` + `rehype-slug`
- Plain CSS with custom properties (dark theme); no CSS framework, no Tailwind
- `react-router-dom` v7 for routing
- `localStorage` for progress tracking (client-side only)

## Commands
```
npm run dev      # Vite dev server → http://localhost:5173
npm run build    # TypeScript check + production build
npm run preview  # Serve the production build locally
```

---

## Project structure

```
67-Study/
├── CLAUDE.md                        ← you are here
├── index.html                       ← sets page <title>
├── styles.css                       ← entire design system (dark theme)
├── src/
│   ├── main.tsx                     ← React entry point
│   ├── App.tsx                      ← router (3 routes, no auth wrapper)
│   ├── data/
│   │   └── subjects.ts              ← SINGLE SOURCE OF TRUTH for all subjects/units
│   ├── components/
│   │   └── MarkdownRenderer.tsx     ← renders .md → React (callouts + KaTeX)
│   ├── pages/
│   │   ├── HomePage.tsx             ← subject card grid with progress bars
│   │   ├── SubjectHubPage.tsx       ← unit grid for one subject
│   │   └── UnitPage.tsx             ← loads + renders a unit .md file
│   └── content/
│       ├── ap-chemistry/            ← unit-1.md … unit-9.md  (stubs — no content yet)
│       ├── ap-calculus/             ← unit-1.md … unit-10.md (full content)
│       ├── ap-world-history/        ← unit-1.md … unit-9.md  (full content)
│       ├── religion/                ← unit-1.md, unit-2.md   (full content)
│       └── jrotc/                   ← unit-1.md, unit-2.md   (full content)
```

---

## Active subjects

| Subject | Slug | Color | Units | Status |
|---|---|---|---|---|
| AP Chemistry | `ap-chemistry` | teal | 9 | Stubs only — no content yet |
| AP Calculus | `ap-calculus` | violet | 10 | Full content |
| AP World History | `ap-world-history` | amber | 9 | Full content |
| Religion | `religion` | rose | 2 | Full content |
| JROTC | `jrotc` | olive | 2 | Full content |

---

## Architecture

### Routing (`src/App.tsx`)
Three routes — no auth wrapper, no lazy retry logic:
```
/                       → HomePage
/:subject               → SubjectHubPage  (e.g. /ap-calculus)
/:subject/units/:unitId → UnitPage        (e.g. /ap-calculus/units/3)
*                       → Navigate to /
```
The `:subject` param is the slug string. `getSubject(slug)` in `subjects.ts` resolves it to metadata.

### Data flow
```
subjects.ts  →  HomePage (card list)
             →  SubjectHubPage (unit grid)
             →  UnitPage (prev/next links, sidebar label)

import.meta.glob('../content/**/*.md', { query: '?raw' })
             →  UnitPage loads the correct .md on demand (Vite code-splits each file)
             →  MarkdownRenderer renders it
```

### Content loading (`src/pages/UnitPage.tsx`)
- Uses `import.meta.glob` with `?raw` — every `.md` file becomes its own lazy chunk
- Key lookup: `../content/${slug}/unit-${unitId}.md`
- Strips YAML frontmatter before passing to `MarkdownRenderer`
- Extracts `##` and `###` headings via regex → sidebar TOC links

### MarkdownRenderer (`src/components/MarkdownRenderer.tsx`)
Plugins applied in order:
1. `remark-gfm` — tables, strikethrough, task lists
2. `remark-math` — `$...$` and `$$...$$` math syntax
3. `rehype-slug` — auto-generates `id` on all headings (enables TOC anchor links)
4. `rehype-katex` — renders math via KaTeX

Custom component override — `blockquote`:
- Detects `[!type] Title` on the first line of a blockquote
- Maps type → CSS class: `callout callout-<type>`
- Supported types: `tip`, `hint`, `important`, `warning`, `caution`, `danger`, `example`, `note`, `info`, `quote`, `summary`, `abstract`
- Falls back to a plain styled blockquote if no `[!type]` detected

### Progress tracking
- Key: `read-units:<slug>` in `localStorage`
- Value: JSON array of unit numbers, e.g. `[1, 3, 5]`
- Written by the "Mark as read" button in `UnitPage`
- Read by `HomePage` and `SubjectHubPage` to render progress bars

---

## UI & Design system

All styles live in `styles.css`. No component-scoped CSS, no CSS modules.

### Design tokens (CSS custom properties on `:root`)
```css
--bg           #0f1117   page background
--surface      #181c27   card / sidebar background
--surface2     #1e2435   code blocks, table headers, badge backgrounds
--border       #2a3148   all borders and dividers
--text         #d4daf0   body text
--text-dim     #8892b0   secondary text, labels, placeholders
--text-bright  #eef2ff   headings, card names, strong emphasis
--heading      #a8c1ff   markdown heading color
--radius       10px      standard border-radius
--accent       #5b8dee   active accent (overridden per-page by data-color)
```

### Subject accent colors
Set via `data-color` attribute on the page root element:
```css
[data-color="teal"]   → --accent: #7dd3a8   (AP Chemistry)
[data-color="violet"] → --accent: #9b8ee8   (AP Calculus)
[data-color="amber"]  → --accent: #f0a04b   (AP World History)
[data-color="rose"]   → --accent: #e879a0   (Religion)
[data-color="olive"]  → --accent: #8db87a   (JROTC)
```
When adding a new subject, add a color token + `[data-color]` rule to `styles.css` and reference it in `subjects.ts`.

### Typography
```
Body / prose:   "Lora" (Georgia fallback) — serif, 15.5px, line-height 1.8
Headings / UI:  "Outfit" (sans-serif) — used for all labels, card names, buttons
Code:           "Fira Code" / "Cascadia Code" (monospace)
```
Fonts loaded from Google Fonts in `index.html`.

### Layout sections and their CSS classes

**Home page** (`.home-page`):
- `.home-hero` — centered title + subtitle
- `.subject-grid` — `repeat(3, 1fr)` grid, collapses to `1fr` below 720px
- `.subject-card` — flex column; has `data-color` attr for accent
  - `.subject-card-accent` — 5px colored top bar
  - `.subject-card-body` — icon + name + tagline
  - `.subject-card-footer` — units count + thin progress bar + percentage

**Hub page** (`.hub-page`):
- `.hub-topnav` / `.hub-back` — back navigation bar
- `.hub-header` — subject title + inline progress row
- `.hub-progress-row` — flex row: progress bar + "X / Y units read" label
- `.unit-grid` — `repeat(3, 1fr)` grid, collapses to `1fr` below 720px
- `.unit-card` — flex column; `.unit-card--read` variant adds accent border
  - `.unit-card-number` — "Unit N" label in accent color
  - `.unit-card-title` — unit title
  - `.unit-card-footer` — "BC only" badge + "✓ Read" check

**Unit page** (`.unit-layout`):
- `.unit-sidebar` — sticky left panel, 260px wide; `.unit-sidebar--closed` collapses to 40px
  - `.sidebar-header` — back link + toggle button
  - `.sidebar-toc` — list of `.toc-link` anchors (`.toc-level-3` for H3)
- `.unit-main` — main content column, max-width 820px
  - `.unit-topbar` — title + "Mark as read" button
  - `.unit-content` — wraps `<MarkdownRenderer>`
  - `.unit-nav` — prev/next buttons at the bottom

**Markdown body** (`.markdown-body`):
- Headings, paragraphs, lists, bold/em, hr, blockquote, table, code, pre — all styled
- `.katex-display` — block math display
- Callouts: `.callout`, `.callout-title`, `.callout-body`
  - `.callout-tip` (teal), `.callout-warning` (red), `.callout-example` (amber), `.callout-note` (violet), `.callout-quote` / `.callout-summary` (gray)

### Hover and transition conventions
- Cards: `border-color → var(--accent)` + `translateY(-2px)` on hover, 0.15s transition
- Links: `color: var(--accent)`, underline on hover
- Buttons: border-color + color transition to accent

---

## Content format

Every unit file is a plain `.md` file. Frontmatter is required.

### Frontmatter
```yaml
---
title: "Unit N: Title Here"
unit: N
---
```
Calculus BC-only units also add `bcOnly: true`.

### Heading conventions
- `#` H1 — matches frontmatter title; only one per file
- `##` H2 — major section; appears in sidebar TOC
- `###` H3 — subsection; also appears in TOC (indented)
- `####` H4 — fine-grained; does NOT appear in TOC

### Math (KaTeX)
```
Inline: $f(x) = x^2$
Block:  $$\int_a^b f(x)\,dx$$
```

### Callouts (Obsidian-compatible syntax)
```
> [!tip] Title
> Body text here.

> [!warning] Common Mistake
> Don't confuse X with Y.

> [!example] Example
> Walk through a specific problem.

> [!note] Key Definition
> Term: definition.
```

| Type | Aliases | Accent |
|---|---|---|
| `tip` | `hint`, `important` | teal |
| `warning` | `caution`, `danger` | red |
| `example` | — | amber |
| `note` | `info` | violet |
| `quote` / `summary` | `abstract` | gray |

---

## How to extend

### Add a new subject
1. Pick a slug (e.g. `ap-physics`), a color token (add to `styles.css` if new), and an icon/tagline
2. Add a `SubjectMeta` entry to `SUBJECTS` in `src/data/subjects.ts`
3. Add the `[data-color="<color>"]` rule to `styles.css` if using a new color
4. Create `src/content/<slug>/unit-N.md` for each unit
5. Add the icon and tagline to `SUBJECT_ICONS` and `SUBJECT_TAGLINES` in `src/pages/HomePage.tsx`
6. No routing changes — `App.tsx` handles any slug dynamically

### Add a unit to an existing subject
1. Add a `UnitMeta` entry to the subject's `units` array in `src/data/subjects.ts`
2. Create `src/content/<slug>/unit-N.md`

### Modify the UI
- All styles are in `styles.css` — search by class name
- Component structure is in the relevant page file (`HomePage.tsx`, `SubjectHubPage.tsx`, `UnitPage.tsx`)
- Do not introduce CSS modules or styled-components — keep everything in `styles.css`
- Do not add a CSS framework — the design system is intentionally minimal and hand-written

### Content source
The Obsidian vault at `C:\Users\david\iCloudDrive\iCloud~md~obsidian\Obsidian Vault\` contains:
- `APWorld/` — AP World History source notes
- `Religion/` — Religion exam notes
- `JROTC/` — JROTC exam study guide

When migrating from Obsidian: strip `[[wikilinks]]`, remove `[!info]` source callouts, add proper frontmatter.
