import { useCallback, useState } from 'react';

function read(key: string): Record<string, string> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function useWordNotes(key: string) {
  const [notes, setNotes] = useState<Record<string, string>>(() => read(key));

  const setNote = useCallback((id: string, text: string) => {
    setNotes((prev) => {
      const next = { ...prev, [id]: text };
      if (!text) delete next[id];
      localStorage.setItem(key, JSON.stringify(next));
      return next;
    });
  }, [key]);

  return { notes, setNote };
}
