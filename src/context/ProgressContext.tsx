import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';
import { SUBJECTS } from '../data/subjects';

type ProgressMap = Record<string, number[]>;

interface ProgressContextValue {
  readUnits: ProgressMap;
  isUnitRead: (slug: string, unitNum: number) => boolean;
  markUnit: (slug: string, unitNum: number, read: boolean) => Promise<void>;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const ALL_SLUGS = SUBJECTS.map((s) => s.slug);

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

  useEffect(() => {
    if (!user) {
      setReadUnits({});
      return;
    }

    const ref = doc(db, 'progress', user.uid);
    getDoc(ref).then((snap) => {
      if (snap.exists()) {
        setReadUnits(snap.data() as ProgressMap);
      } else {
        // First login — migrate any existing localStorage progress
        const migrated = migrateFromLocalStorage();
        setReadUnits(migrated);
        if (Object.keys(migrated).length > 0) {
          setDoc(ref, migrated).catch(console.error);
        }
      }
    }).catch(console.error);
  }, [user]);

  const isUnitRead = useCallback((slug: string, unitNum: number): boolean => {
    return readUnits[slug]?.includes(unitNum) ?? false;
  }, [readUnits]);

  const markUnit = useCallback(async (slug: string, unitNum: number, read: boolean) => {
    const current = readUnits[slug] ?? [];
    const updated = read
      ? [...new Set([...current, unitNum])]
      : current.filter((u) => u !== unitNum);
    const next = { ...readUnits, [slug]: updated };
    setReadUnits(next); // optimistic — UI updates instantly
    if (user) {
      await setDoc(doc(db, 'progress', user.uid), next);
    }
  }, [user, readUnits]);

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
