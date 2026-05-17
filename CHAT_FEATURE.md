# Chat Feature — Progress & Agent Guide

**Branch:** `feature/chat`  
**Status:** 🟡 Code complete — awaiting Firebase project setup

---

## Goal

Add a real-time study chat to the app. Users sign in with Google and can chat in a **Global** room or any of the **6 subject-specific rooms**. An admin account can delete individual messages or all messages in a room, and every admin action is logged.

---

## Tech choices

| Concern | Choice |
|---|---|
| Auth | Firebase Google Sign-In |
| Database | Cloud Firestore |
| Real-time | Firestore `onSnapshot` listeners |
| Hosting | No change — stays on Vite dev/build |

---

## Firestore data model

```
/messages/{messageId}
  text:          string
  uid:           string
  displayName:   string
  photoURL:      string
  room:          string   'global' | subject slug (e.g. 'ap-calculus')
  timestamp:     Timestamp

/admin_logs/{logId}
  action:          'delete_message' | 'delete_all'
  adminUid:        string
  adminName:       string
  room:            string
  count:           number
  messagePreview:  string   (first 80 chars)
  messageAuthor:   string
  timestamp:       Timestamp

/admins/{uid}
  displayName:  string
  addedAt:      Timestamp
```

---

## Files added / modified

### New files
| File | Purpose |
|---|---|
| `src/firebase.ts` | Firebase app init — reads VITE_ env vars |
| `src/context/AuthContext.tsx` | `AuthProvider` + `useAuth()` hook |
| `src/pages/LoginPage.tsx` | Google Sign-In page at `/login` |
| `src/pages/ChatPage.tsx` | Chat page at `/chat` |
| `src/components/chat/RoomSelector.tsx` | Tab bar: Global + 6 subjects |
| `src/components/chat/ChatWindow.tsx` | Firestore listener + MessageList + MessageInput |
| `src/components/chat/MessageList.tsx` | Scrollable list, auto-scroll to latest |
| `src/components/chat/ChatBubble.tsx` | Message bubble (own = right, others = left) |
| `src/components/chat/MessageInput.tsx` | Auto-resize textarea, Enter to send |
| `src/components/chat/AdminPanel.tsx` | Delete All + Admin Logs tabs |
| `src/components/ChatFab.tsx` | Floating chat button on all non-chat pages |
| `.env.local.example` | Template for Firebase config keys |

### Modified files
| File | Change |
|---|---|
| `src/App.tsx` | Added `/login`, `/chat` routes; wrapped in `AuthProvider`; added `ChatFab` |
| `src/pages/HomePage.tsx` | Added "Study Chat" card to subject grid |
| `styles.css` | Added all chat-related CSS classes |
| `.gitignore` | Added `.env.local` |
| `package.json` | Added `firebase` dependency |

---

## Routing

```
/login              → LoginPage   (Google Sign-In)
/chat               → ChatPage    (auth-guarded — redirects to /login if not signed in)
```

The `ChatFab` floating button is rendered in `App.tsx` outside routes — it appears on every page except `/chat` and `/login`.

---

## Firestore security rules

Paste these in Firebase Console → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{id} {
      allow read: if request.auth != null;
      allow create: if request.auth != null
        && request.resource.data.uid == request.auth.uid;
      allow delete: if exists(/databases/$(database)/documents/admins/$(request.auth.uid));
    }
    match /admin_logs/{id} {
      allow read, create: if exists(/databases/$(database)/documents/admins/$(request.auth.uid));
    }
    match /admins/{uid} {
      allow read: if request.auth != null;
    }
  }
}
```

---

## Setup checklist

- [ ] Create Firebase project at console.firebase.google.com
- [ ] Enable Google Sign-In (Authentication → Sign-in method → Google)
- [ ] Create Firestore database (production mode)
- [ ] Paste security rules above into Firestore → Rules
- [ ] Copy Web app config → create `.env.local` from `.env.local.example`
- [ ] Run `npm run dev` and sign in with Google
- [ ] Note your UID from Firebase Console → Authentication → Users
- [ ] Add `admins/{your-uid}` document in Firestore to activate admin access

---

## What still needs to be done

> Update this section as work progresses.

| Task | Status | Notes |
|---|---|---|
| Firebase project creation | ⬜ Not started | Owner must do this manually |
| `.env.local` filled in | ⬜ Not started | Requires Firebase config keys |
| Firestore indexes | ⬜ Not started | Firestore will prompt in console for composite indexes on first query (room + timestamp) |
| Admin UID added to Firestore | ⬜ Not started | Do after first sign-in |
| End-to-end test (send message) | ⬜ Not started | — |
| End-to-end test (admin delete) | ⬜ Not started | — |
| End-to-end test (admin logs) | ⬜ Not started | — |
| PR merge to main | ⬜ Not started | After all tests pass |

---

## Known limitations / future work

- No unread message count on the FAB (planned but not built)
- No push notifications
- Messages are ordered by Firestore `timestamp` — if two messages arrive within the same millisecond they may appear out of order (extremely unlikely)
- Firestore composite indexes for `(room, timestamp)` will need to be created on first query — Firebase Console will show a link in the browser console to create them automatically
- No image/file attachment support
- No message editing

---

## Agent instructions

If you are an agent picking up work on this feature:

1. Read this file first for current status.
2. Read `CLAUDE.md` for the overall project architecture, design system, and conventions.
3. All chat code lives under `src/components/chat/`, `src/context/`, `src/pages/LoginPage.tsx`, and `src/pages/ChatPage.tsx`.
4. All chat styles are at the bottom of `styles.css` — search for `Chat card (home page)`.
5. Firebase config is loaded from `.env.local` (not committed). The template is `.env.local.example`.
6. Do not introduce CSS modules or Tailwind — all styles go in `styles.css`.
7. Do not add any new routing patterns — the existing `App.tsx` handles slugs dynamically.
8. Update the "What still needs to be done" table above whenever you complete or add a task.
