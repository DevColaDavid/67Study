import { useState } from 'react';
import type { ReactNode } from 'react';

export interface FlashcardItem {
  id: string;
  word: ReactNode;
  meaning: ReactNode;
  badges?: ReactNode;
}

interface Props {
  items: FlashcardItem[];
  startIndex: number;
  mastered: Set<string>;
  onToggleMastered: (id: string) => void;
  flagged: Set<string>;
  onToggleFlag: (id: string) => void;
  notes: Record<string, string>;
  onNoteChange: (id: string, text: string) => void;
  onExit: () => void;
}

const NOTE_LIMIT = 250;

export default function FlashcardSession({
  items, startIndex, mastered, onToggleMastered, flagged, onToggleFlag, notes, onNoteChange, onExit,
}: Props) {
  const [index, setIndex] = useState(startIndex);
  const [flipped, setFlipped] = useState(false);

  const total = items.length;

  if (total === 0) {
    return (
      <div className="wordlab-session">
        <p className="wordlab-empty">No cards match your filters.</p>
        <button className="wordlab-btn" onClick={onExit}>Back</button>
      </div>
    );
  }

  const current = items[index];
  const isKnown = mastered.has(current.id);
  const isFlagged = flagged.has(current.id);
  const noteText = notes[current.id] ?? '';

  const goTo = (i: number) => {
    setIndex(Math.max(0, Math.min(total - 1, i)));
    setFlipped(false);
  };

  return (
    <div className="wordlab-session">
      <div className="flashcard-topbar">
        <div className="flashcard-badges">{current.badges}</div>
        <div className="flashcard-topbar-right">
          <span className="wordlab-progress-label">Word {index + 1} of {total}</span>
          <button
            type="button"
            className={`flashcard-bookmark${isFlagged ? ' flashcard-bookmark--active' : ''}`}
            onClick={() => onToggleFlag(current.id)}
            aria-label={isFlagged ? 'Remove bookmark' : 'Bookmark this word'}
            title={isFlagged ? 'Remove bookmark' : 'Bookmark this word'}
          >
            🔖
          </button>
        </div>
      </div>

      <div className="flashcard-nav-row">
        <button
          type="button"
          className="flashcard-nav-btn"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous word"
        >
          ‹
        </button>

        <button
          type="button"
          className={`flashcard${flipped ? ' flashcard--flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
        >
          <div className="flashcard-face flashcard-front">{current.word}</div>
          <div className="flashcard-face flashcard-back">{current.meaning}</div>
        </button>

        <button
          type="button"
          className="flashcard-nav-btn"
          onClick={() => goTo(index + 1)}
          disabled={index === total - 1}
          aria-label="Next word"
        >
          ›
        </button>
      </div>
      <p className="wordlab-hint">Click the card to flip</p>

      <label className="flashcard-know-row">
        <input type="checkbox" checked={isKnown} onChange={() => onToggleMastered(current.id)} />
        I know this word
      </label>

      <textarea
        className="flashcard-note"
        placeholder="Write your own example sentence…"
        value={noteText}
        maxLength={NOTE_LIMIT}
        onChange={(e) => onNoteChange(current.id, e.target.value)}
      />
      <span className="flashcard-note-count">{noteText.length}/{NOTE_LIMIT}</span>

      <button className="wordlab-exit-link" onClick={onExit}>Exit session</button>
    </div>
  );
}
