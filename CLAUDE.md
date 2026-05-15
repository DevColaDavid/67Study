# APStudy — Developer & Agent Guide

## What this project is
A personal AP exam study app. Plain markdown files are the single source of truth for all study content. Three subjects: **AP Chemistry**, **AP Calculus**, **AP World History**.

## Tech stack
- React 19 + TypeScript + Vite
- `react-markdown` with `remark-gfm`, `remark-math`, `rehype-katex`, `rehype-slug`
- CSS custom properties (dark theme); no CSS framework

## Running the app
```
npm run dev      # dev server
npm run build    # TypeScript check + production build
npm run preview  # preview production build
```

---

## Project structure

```
src/
  content/
    ap-chemistry/       unit-1.md … unit-9.md
    ap-calculus/        unit-1.md … unit-10.md
    ap-world-history/   unit-1.md … unit-9.md
  components/
    MarkdownRenderer.tsx   renders .md with callouts + KaTeX
  pages/
    HomePage.tsx           subject cards + progress bars
    SubjectHubPage.tsx     unit grid for a single subject
    UnitPage.tsx           loads + renders a unit .md file
  data/
    subjects.ts            all subject/unit metadata (single source of truth)
  App.tsx                  router (3 routes)
  main.tsx
styles.css                 global dark theme
```

---

## Content format

Every unit file is a plain `.md` file. Obsidian can open them directly.

### Frontmatter (required)
```yaml
---
title: "Unit N: Title"
unit: N
---
```
Calculus BC-only units also include `bcOnly: true`.

### Markdown conventions
- `#` H1 — page title (matches frontmatter `title`); only one per file
- `##` H2 — major section; shows in sidebar TOC
- `###` H3 — subsection; also shows in TOC
- Standard markdown tables, bold, lists, inline code

### Math
Use standard KaTeX syntax — works in Obsidian and in the app:
```
Inline: $f(x) = x^2$
Block:  $$\int_a^b f(x)\,dx$$
```

### Callouts (Obsidian-compatible)
```
> [!tip] Big Picture
> Why this concept matters for the exam.

> [!warning] Common Mistake
> Students often confuse X with Y because…

> [!example] Example
> Walk through a specific problem or case.

> [!note] Key Definition
> Term: precise definition here.
```

Supported callout types and their colors:
| Type | Aliases | Color |
|---|---|---|
| `tip` | `hint`, `important` | teal |
| `warning` | `caution`, `danger` | red |
| `example` | — | amber |
| `note` | `info` | violet |
| `quote` / `summary` | `abstract` | gray |

---

## Adding a new subject
1. Add a `SubjectMeta` entry to `src/data/subjects.ts`
2. Create `src/content/<new-subject>/unit-N.md` stubs
3. No routing changes needed — `App.tsx` uses the slug from the URL to load any subject dynamically

## Adding a unit to an existing subject
1. Add a `UnitMeta` entry to the subject's `units` array in `src/data/subjects.ts`
2. Create `src/content/<subject>/unit-N.md`

---

## Progress tracking
Stored in `localStorage` under key `read-units:<slug>` as a JSON array of unit numbers.
No backend — fully client-side.

## Key decisions (and why)
- **Pure .md files** (not MDX) — portable to Obsidian, editable without a build step
- **No auth** — removed; this is a personal study tool
- **No TTS** — removed; added clutter with minimal benefit
- **Vite glob import** (`import.meta.glob`) — Vite code-splits every unit file; loads on demand
- **Single generic `UnitPage`** — no subject-specific pages; all content is markdown
