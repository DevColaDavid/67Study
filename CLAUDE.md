# 67 Study — Agent & Developer Guide

## What this project is
A personal study app for a 10th grade student. Five subjects with full Markdown content. Firebase backend for auth, real-time chat, and cloud progress sync. Dark-themed, no CSS framework.

**Current version: 2.0.0** — major milestone that added Firebase, auth, chat, and admin.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend framework | React 19 + TypeScript + Vite |
| Routing | `react-router-dom` v7 |
| Markdown rendering | `react-markdown` + `remark-gfm` + `remark-math` + `rehype-katex` + `rehype-slug` |
| Styling | Plain CSS with custom properties (dark theme) — no CSS framework, no Tailwind |
| Backend / DB | Firebase (Firestore + Auth) — `firebase` SDK v12 |
| Offline support | Firestore `persistentLocalCache` (IndexedDB) + `localStorage` snapshot cache |
| Math rendering | KaTeX via `rehype-katex` |

## Commands
```
npm run dev      # Vite dev server → http://localhost:5173
npm run build    # TypeScript check + production build
npm run preview  # Serve the production build locally
```

## Environment variables (`.env.local`)
All Firebase config values are read from `import.meta.env`:
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```
Never commit `.env.local`. See `.env.example` for the key names.

---

## Project structure

```
67-Study/
├── CLAUDE.md                          ← you are here
├── index.html                         ← sets page <title>, loads Google Fonts
├── styles.css                         ← entire design system (dark theme)
├── src/
│   ├── main.tsx                       ← React entry point
│   ├── firebase.ts                    ← Firebase app init, exports auth + db
│   ├── App.tsx                        ← router + AuthGuard wrapper
│   ├── context/
│   │   ├── AuthContext.tsx            ← Firebase auth state + role flags
│   │   └── ProgressContext.tsx        ← read-unit progress (Firestore + localStorage cache)
│   ├── data/
│   │   └── subjects.ts                ← SINGLE SOURCE OF TRUTH for all subjects/units
│   ├── components/
│   │   ├── MarkdownRenderer.tsx       ← renders .md → React (callouts + KaTeX)
│   │   ├── ChatFab.tsx                ← floating chat bubble button (all pages)
│   │   ├── ProfileDropdown.tsx        ← global user avatar + sign-out dropdown
│   │   ├── chat/
│   │   │   ├── ChatWindow.tsx         ← message list + input + admin select/delete toolbar
│   │   │   ├── ChatBubble.tsx         ← single message bubble + admin delete button
│   │   │   ├── MessageList.tsx        ← scrollable message list
│   │   │   ├── MessageInput.tsx       ← text input + send button
│   │   │   └── AdminPanel.tsx         ← inline admin controls (visible only to admins)
│   │   └── admin/
│   │       ├── ChatSection.tsx        ← full chat moderation UI (admin page)
│   │       ├── UsersSection.tsx       ← user list (superadmin only)
│   │       └── UserRow.tsx            ← single user row in admin panel
│   └── pages/
│       ├── LoginPage.tsx              ← sign-in (Google OAuth + email/password)
│       ├── HomePage.tsx               ← subject card grid with progress bars
│       ├── SubjectHubPage.tsx         ← unit grid for one subject
│       ├── UnitPage.tsx               ← loads + renders a unit .md file
│       ├── ChatPage.tsx               ← study chat (room tabs per subject + global)
│       └── AdminPage.tsx              ← admin panel (chat moderation + user list)
│
└── src/content/
    ├── ap-chemistry/                  ← unit-1.md … unit-9.md  (stubs — no content yet)
    ├── ap-calculus/                   ← unit-1.md … unit-10.md (full content)
    ├── ap-world-history/              ← unit-1.md … unit-9.md  (full content)
    ├── religion/                      ← unit-1.md, unit-2.md   (full content)
    └── jrotc/                         ← unit-1.md, unit-2.md   (full content)
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
| AP US History | `ap-us-history` | crimson | 9 | Full content |
| AP Physics C | `ap-physics-c` | sky | 13 | Stubs only (units 1–7 Mechanics, 8–13 E&M) |

---

## Architecture

### Routing (`src/App.tsx`)
All routes except `/login` are behind `AuthGuard` — redirects to `/login?next=…` if unauthenticated.

```
/login                  → LoginPage         (public)
/                       → HomePage          (auth required)
/chat                   → ChatPage          (auth required)
/admin                  → AdminPage         (auth required; redirects if not admin)
/:subject               → SubjectHubPage    (auth required)
/:subject/units/:unitId → UnitPage          (auth required)
*                       → Navigate to /
```

Global UI components rendered outside `<Routes>`:
- `<ChatFab />` — floating button that links to `/chat` (always visible after login)
- `<ProfileDropdown />` — avatar in top-right corner with sign-out action

### Authentication (`src/context/AuthContext.tsx`)
Exports `AuthProvider` + `useAuth()` hook. State:
- `user: User | null` — Firebase User object
- `isAdmin: boolean` — true if `admins/{uid}` doc exists in Firestore
- `isSuperAdmin: boolean` — true if `admins/{uid}.superadmin === true`
- `loading: boolean` — true until `onAuthStateChanged` fires

Methods: `signInWithGoogle()`, `signInWithEmail()`, `signUpWithEmail()`, `linkCredential()`, `signOut()`

On every auth state change, the provider also:
1. Checks `admins/{uid}` to set `isAdmin`/`isSuperAdmin`
2. Upserts `users/{uid}` with `displayName`, `photoURL`, `email`, `lastSeen`

Account linking: email/password accounts can be linked to an existing Google account via `linkCredential()`.

### Progress tracking (`src/context/ProgressContext.tsx`)
Exports `ProgressProvider` + `useProgress()` hook. State: `readUnits: Record<slug, number[]>`.

**Read flow (on login):**
1. Reads `localStorage` key `progress:{uid}` immediately → no loading flash
2. Fetches `progress/{uid}` from Firestore (served from IndexedDB if offline)
3. Firestore wins; updates state + localStorage cache

**Write flow (on markUnit):**
1. Optimistic state update
2. Writes to `localStorage` immediately
3. Debounces Firestore write by 800ms — rapid marks become one write

**Migration:** first-ever login migrates pre-auth `read-units:{slug}` keys to Firestore.

### Content loading (`src/pages/UnitPage.tsx`)
- `import.meta.glob('../content/**/*.md', { query: '?raw' })` — lazy chunk per file
- Key: `../content/${slug}/unit-${unitId}.md`
- Strips YAML frontmatter before rendering
- Extracts `##`/`###` headings via regex → sidebar TOC

### MarkdownRenderer (`src/components/MarkdownRenderer.tsx`)
Plugins: `remark-gfm` → `remark-math` → `rehype-slug` → `rehype-katex`

Custom `blockquote` override:
- Detects `[!type] Title` on first line
- Maps to `.callout .callout-<type>` CSS classes
- Types: `tip`, `hint`, `important`, `warning`, `caution`, `danger`, `example`, `note`, `info`, `quote`, `summary`, `abstract`

### Chat feature (`src/pages/ChatPage.tsx`)
Rooms: `global` + one room per subject slug.
- `ChatWindow` — real-time listener on `rooms/{room}/messages`, last 50 messages
- `MessageInput` — adds doc to `rooms/{room}/messages`
- Admin toolbar in `ChatWindow` — select messages, bulk delete
- Deletes log to `rooms/{room}/logs`

### Admin system
Access controlled by Firestore `admins` collection (not by app code alone).

**Admin** (`isAdmin`): can delete chat messages, see admin link, access `/admin`
**Superadmin** (`isSuperAdmin`): all admin powers + user list in admin panel

`/admin` page tabs:
- **Chat** — per-room message list, delete all, action log
- **Users** (superadmin only) — user list from `users` collection

---

## Firestore data model

```
users/{uid}
  uid: string
  displayName: string
  photoURL: string
  email: string
  lastSeen: Timestamp

admins/{uid}
  superadmin: boolean   ← optional; false/missing = regular admin

progress/{uid}
  [slug]: number[]      ← e.g. { "ap-calculus": [1, 3, 5] }

rooms/{roomId}/messages/{msgId}
  text: string
  displayName: string
  uid: string
  timestamp: Timestamp

rooms/{roomId}/logs/{logId}
  action: 'delete_all' | 'delete_selected' | 'delete_single'
  adminUid: string
  adminName: string
  count: number
  messagePreview: string
  messageAuthor: string
  timestamp: Timestamp
```

Room IDs: `'global'` and any subject slug (e.g. `'ap-calculus'`).

To grant admin: manually create `admins/{uid}` in Firestore console. Set `superadmin: true` for superadmin.

---

## UI & Design system

All styles live in `styles.css`. No CSS modules, no styled-components, no framework.

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
```css
[data-color="teal"]   → --accent: #7dd3a8   (AP Chemistry)
[data-color="violet"] → --accent: #9b8ee8   (AP Calculus)
[data-color="amber"]  → --accent: #f0a04b   (AP World History)
[data-color="rose"]   → --accent: #e879a0   (Religion)
[data-color="olive"]  → --accent: #8db87a   (JROTC)
```
New subject → add `[data-color]` rule to `styles.css` + entry in `subjects.ts`.

### Typography
```
Body / prose:   "Lora" (Georgia fallback) — serif, 15.5px, line-height 1.8
Headings / UI:  "Outfit" (sans-serif) — labels, card names, buttons, nav
Code:           "Fira Code" / "Cascadia Code" (monospace)
```

### Layout — CSS class map

**Login page** (`.login-page`): centered card, Google + email/password forms

**Home page** (`.home-page`):
- `.home-hero` — title + subtitle
- `.subject-grid` — 3-col grid → 1-col below 720px
- `.subject-card` / `.subject-card-accent` / `.subject-card-body` / `.subject-card-footer`

**Hub page** (`.hub-page`):
- `.hub-topnav` / `.hub-back` / `.hub-header` / `.hub-progress-row`
- `.unit-grid` — 3-col → 1-col; `.unit-card` / `.unit-card--read`

**Unit page** (`.unit-layout`):
- `.unit-sidebar` (260px, sticky; `.unit-sidebar--closed` = 40px) / `.sidebar-toc`
- `.unit-main` / `.unit-topbar` / `.unit-content` / `.unit-nav`

**Chat page** (`.chat-page`):
- `.chat-topnav` — top bar with back link + admin link
- `.chat-layout` — sidebar + body flex row
- `.chat-sidebar` / `.chat-sidebar-tab` / `.chat-sidebar-tab--active`
- `.chat-window` / `.chat-window-toolbar`
- `.select-toolbar` / `.select-toolbar-left` / `.select-toolbar-right`
- `.chat-bubble` / `.chat-bubble--own` / `.chat-bubble--selected`
- `.message-input` / `.send-btn`
- `.chat-fab` — floating action button

**Admin page** (`.admin-page`):
- `.admin-topnav` / `.admin-layout` / `.admin-sidebar` / `.admin-content`
- `.chat-section` / `.admin-room-selector` / `.admin-danger-btn`
- `.log-entry` / `.log-action-badge`
- `.users-section` / `.user-row`

**Markdown body** (`.markdown-body`):
- `.callout` / `.callout-title` / `.callout-body`
- `.callout-tip`, `.callout-warning`, `.callout-example`, `.callout-note`, `.callout-quote`

### Hover / transition conventions
- Cards: `border-color → var(--accent)` + `translateY(-2px)`, 0.15s
- Links: `color: var(--accent)`, underline on hover
- Buttons: border-color + color → accent

---

## Content format

Every unit file is a plain `.md` file. YAML frontmatter required.

### Frontmatter
```yaml
---
title: "Unit N: Title Here"
unit: N
---
```
Calculus BC-only units: `bcOnly: true`.

### Heading conventions
- `#` — H1, matches frontmatter title, one per file
- `##` — H2, major section, appears in sidebar TOC
- `###` — H3, subsection, appears in TOC (indented)
- `####` — H4, fine-grained, does NOT appear in TOC

### Math (KaTeX)
```
Inline: $f(x) = x^2$
Block:  $$\int_a^b f(x)\,dx$$
```

### Callouts
```
> [!tip] Title
> [!warning] Common Mistake
> [!example] Example
> [!note] Key Definition
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
1. Pick slug, color, icon, tagline
2. Add `SubjectMeta` to `SUBJECTS` in `src/data/subjects.ts`
3. Add `[data-color="<color>"]` rule to `styles.css` if new color
4. Create `src/content/<slug>/unit-N.md` for each unit
5. Add icon + tagline to `SUBJECT_ICONS` / `SUBJECT_TAGLINES` in `HomePage.tsx`
6. No routing changes needed — `App.tsx` handles any slug dynamically
7. New chat room appears automatically (ChatPage + AdminPage derive rooms from `SUBJECTS`)

### Add a unit to an existing subject
1. Add `UnitMeta` to the subject's `units[]` in `src/data/subjects.ts`
2. Create `src/content/<slug>/unit-N.md`

### Grant admin access
Open Firebase Console → Firestore → `admins` collection → create doc with ID = user's UID.
- Regular admin: doc can be empty or `{ superadmin: false }`
- Superadmin: `{ superadmin: true }`

### Modify the UI
- All styles in `styles.css` — search by class name
- Do NOT introduce CSS modules, styled-components, or any CSS framework
- Design system is intentionally minimal and hand-written

### Add a new Firebase feature
- Config already in `src/firebase.ts` — import `auth` or `db` from there
- Keep all auth logic in `AuthContext`; all progress logic in `ProgressContext`
- Add new Firestore collections to the data model table above when you add them

---

## Content source (Obsidian)
Vault at `C:\Users\david\iCloudDrive\iCloud~md~obsidian\Obsidian Vault\`:
- `APWorld/` — AP World History notes
- `Religion/` — Religion exam notes
- `JROTC/` — JROTC study guide

When migrating: strip `[[wikilinks]]`, remove `[!info]` source callouts, add frontmatter.

---

## Known gaps / next possibilities
- **AP Chemistry** — 9 stub files, no content written yet
- **Quiz/flashcard mode** — not implemented; progress tracks only "read" state
- **Push notifications** — not implemented
- **TTS** — not implemented, not planned
- **Mobile layout** — responsive breakpoints exist but chat UI could be improved on small screens
