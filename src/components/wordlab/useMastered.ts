import { useCallback, useState } from 'react';

function read(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function useMastered(key: string) {
  const [mastered, setMastered] = useState<Set<string>>(() => read(key));

  const add = useCallback((id: string) => {
    setMastered((prev) => {
      const next = new Set(prev);
      next.add(id);
      localStorage.setItem(key, JSON.stringify([...next]));
      return next;
    });
  }, [key]);

  const remove = useCallback((id: string) => {
    setMastered((prev) => {
      const next = new Set(prev);
      next.delete(id);
      localStorage.setItem(key, JSON.stringify([...next]));
      return next;
    });
  }, [key]);

  return { mastered, add, remove };
}
