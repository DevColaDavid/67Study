import { createContext, useContext, useEffect, useRef, useState, useCallback, ReactNode } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';
import { SUBJECTS } from '../data/subjects';

type ProgressMap = Record<string, number[]>;

interface ProgressContextValue {
  readUnits: ProgressMap;
  isUnitRead: (slug: string, unitNum: number) => boolean;
  markUnit: (slug: string, unitNum: number, read: boolean) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const ALL_SLUGS = SUBJECTS.map((s) => s.slug);

function cacheKey(uid: string) {
  return `progress:${uid}`;
}

function readCache(uid: string): ProgressMap | null {
  try {
    const raw = localStorage.getItem(cacheKey(uid));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(uid: string, data: ProgressMap) {
  try {
    localStorage.setItem(cacheKey(uid), JSON.stringify(data));
  } catch {}
}

function migrateFromLocalStorage(): ProgressMap {
  const map: ProgressMap = {};
  ALL_SLUGS.forEach((slug) => {
    try {
      const raw = localStorage.getItem(`read-units:${slug}`);
      if (raw) map[slug] = JSON.parse(raw);
    } catch {}
  });
  return map;
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [readUnits, setReadUnits] = useState<ProgressMap>({});

  // Always holds the latest state so the debounce timer writes the right thing
  const latestProgress = useRef<ProgressMap>({});
  const writeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    latestProgress.current = readUnits;
  }, [readUnits]);

  useEffect(() => {
    if (!user) {
      if (writeTimer.current) clearTimeout(writeTimer.current);
      setReadUnits({});
      return;
    }

    // 1. Show localStorage snapshot immediately — no loading flash
    const cached = readCache(user.uid);
    if (cached) setReadUnits(cached);

    // 2. Fetch from Firestore (served from IndexedDB cache if offline)
    const ref = doc(db, 'progress', user.uid);
    getDoc(ref).then((snap) => {
      if (snap.exists()) {
        const data = snap.data() as ProgressMap;
        setReadUnits(data);
        writeCache(user.uid, data);
      } else if (!cached) {
        // First ever login — migrate any pre-auth localStorage progress
        const migrated = migrateFromLocalStorage();
        setReadUnits(migrated);
        if (Object.keys(migrated).length > 0) {
          setDoc(ref, migrated).catch(console.error);
          writeCache(user.uid, migrated);
        }
      }
    }).catch(console.error);
  }, [user]);

  const isUnitRead = useCallback((slug: string, unitNum: number): boolean => {
    return latestProgress.current[slug]?.includes(unitNum) ?? false;
  }, []);

  const markUnit = useCallback((slug: string, unitNum: number, read: boolean) => {
    const current = latestProgress.current[slug] ?? [];
    const updated = read
      ? [...new Set([...current, unitNum])]
      : current.filter((u) => u !== unitNum);
    const next = { ...latestProgress.current, [slug]: updated };

    setReadUnits(next); // optimistic UI update

    if (!user) return;

    writeCache(user.uid, next); // local cache always in sync

    // Debounce the Firestore write — rapid marks become one write
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      setDoc(doc(db, 'progress', user.uid), latestProgress.current).catch(console.error);
    }, 800);
  }, [user]);

  return (
    <ProgressContext.Provider value={{ readUnits, isUnitRead, markUnit }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
