import { useState } from 'react';
import type { ReactNode } from 'react';

export interface QuizQuestion {
  id: string;
  prompt: ReactNode;
  choices: string[];
  correctIndex: number;
  explanation?: ReactNode;
}

interface Props {
  questions: QuizQuestion[];
  onExit: () => void;
  hasNextGroup?: boolean;
  onNextGroup?: () => void;
}

export default function QuizSession({ questions, onExit, hasNextGroup, onNextGroup }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const total = questions.length;
  const done = index >= total;
  const current = questions[index];

  const choose = (choiceIndex: number) => {
    if (selected !== null) return;
    setSelected(choiceIndex);
    if (choiceIndex === current.correctIndex) setScore((s) => s + 1);
  };

  const next = () => {
    setSelected(null);
    setIndex((i) => i + 1);
  };

  if (total === 0) {
    return (
      <div className="wordlab-session">
        <p className="wordlab-empty">Not enough items to build a quiz — need at least 4 in this filter.</p>
        <button className="wordlab-btn" onClick={onExit}>Back</button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="wordlab-session wordlab-session--summary">
        <h3>Quiz complete</h3>
        <p className="wordlab-summary-score">{score} / {total} correct</p>
        <div className="wordlab-session-actions">
          <button className="wordlab-btn" onClick={onExit}>Back to list</button>
          {hasNextGroup && onNextGroup && (
            <button className="wordlab-btn wordlab-btn--accent" onClick={onNextGroup}>Next group →</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="wordlab-session">
      <div className="wordlab-progress-row">
        <div className="wordlab-progress-bar-wrap">
          <div className="wordlab-progress-bar" style={{ width: `${(index / total) * 100}%` }} />
        </div>
        <span className="wordlab-progress-label">{index + 1} / {total} · Score {score}</span>
      </div>

      <div className="quiz-prompt">{current.prompt}</div>

      <div className="quiz-choices">
        {current.choices.map((choice, i) => {
          let cls = 'quiz-choice';
          if (selected !== null) {
            if (i === current.correctIndex) cls += ' quiz-choice--correct';
            else if (i === selected) cls += ' quiz-choice--wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => choose(i)} disabled={selected !== null}>
              {choice}
            </button>
          );
        })}
      </div>

      {selected !== null && current.explanation && (
        <div className="quiz-rationale">{current.explanation}</div>
      )}

      {selected !== null && (
        <button className="wordlab-btn wordlab-btn--accent" onClick={next}>
          {index + 1 === total ? 'See results' : 'Next question'}
        </button>
      )}
      <button className="wordlab-exit-link" onClick={onExit}>Exit session</button>
    </div>
  );
}
