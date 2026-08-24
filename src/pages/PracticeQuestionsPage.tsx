import { Link, Navigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { getSubject } from '../data/subjects';
import QuizSession, { type QuizQuestion } from '../components/wordlab/QuizSession';
import { shuffle } from '../components/wordlab/utils';

interface BankQuestion {
  id: string;
  domain: string;
  skill: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  choices: { A: string; B: string; C: string; D: string };
  correct: 'A' | 'B' | 'C' | 'D';
  rationale: string;
}

const DOMAIN_FILES = [
  ['Information and Ideas', () => import('../data/testprep/information-and-ideas.json')],
  ['Craft and Structure', () => import('../data/testprep/craft-and-structure.json')],
  ['Expression of Ideas', () => import('../data/testprep/expression-of-ideas.json')],
  ['Standard English Conventions', () => import('../data/testprep/standard-english-conventions.json')],
] as const;
const DOMAINS = DOMAIN_FILES.map(([d]) => d);
const DIFFICULTIES = ['Easy', 'Medium', 'Hard'] as const;
const LIMIT_PRESETS = [10, 25, 50, 100] as const;
const LETTERS = ['A', 'B', 'C', 'D'] as const;

function toggle(set: Set<string>, value: string): Set<string> {
  const next = new Set(set);
  next.has(value) ? next.delete(value) : next.add(value);
  return next;
}

export default function PracticeQuestionsPage() {
  const { subject } = useParams<{ subject: string }>();
  const meta = subject ? getSubject(subject) : undefined;

  const [bank, setBank] = useState<BankQuestion[] | null>(null);
  const [domains, setDomains] = useState<Set<string>>(new Set());
  const [skills, setSkills] = useState<Set<string>>(new Set());
  const [difficulty, setDifficulty] = useState<'All' | typeof DIFFICULTIES[number]>('All');
  const [limit, setLimit] = useState<number | 'All' | 'Custom'>('All');
  const [customLimit, setCustomLimit] = useState(15);

  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [sessionKey, setSessionKey] = useState(0);
  const [inSession, setInSession] = useState(false);

  useEffect(() => {
    Promise.all(DOMAIN_FILES.map(([, load]) => load().then((m) => m.default as BankQuestion[]))).then((sets) => {
      setBank(sets.flat());
    });
  }, []);

  const skillOptions = useMemo(() => {
    if (!bank) return [];
    const pool = domains.size === 0 ? bank : bank.filter((q) => domains.has(q.domain));
    return Array.from(new Set(pool.map((q) => q.skill))).sort();
  }, [bank, domains]);

  const filtered = useMemo(() => {
    if (!bank) return [];
    return bank.filter(
      (q) =>
        (domains.size === 0 || domains.has(q.domain)) &&
        (skills.size === 0 || skills.has(q.skill)) &&
        (difficulty === 'All' || q.difficulty === difficulty),
    );
  }, [bank, domains, skills, difficulty]);

  const toggleDomain = (d: string) => setDomains((s) => toggle(s, d));
  const toggleSkill = (s: string) => setSkills((prev) => toggle(prev, s));

  const toQuizQuestions = (items: BankQuestion[]): QuizQuestion[] =>
    items.map((q) => ({
      id: q.id,
      prompt: (
        <div style={{ textAlign: 'left' }}>
          <div className="quiz-meta-badges">
            <span className="wordlab-card-badge">{q.skill}</span>
            <span className="wordlab-card-badge wordlab-card-badge--level">{q.difficulty}</span>
          </div>
          <p>{q.question}</p>
        </div>
      ),
      choices: LETTERS.map((l) => `${l}. ${q.choices[l]}`),
      correctIndex: LETTERS.indexOf(q.correct),
      explanation: q.rationale,
    }));

  const requestedCount = limit === 'All' ? filtered.length : limit === 'Custom' ? customLimit : limit;
  const startCount = Math.min(Math.max(requestedCount, 0), filtered.length);

  const startPractice = () => {
    const shuffled = shuffle(filtered);
    setSessionQuestions(toQuizQuestions(shuffled.slice(0, startCount)));
    setSessionKey((k) => k + 1);
    setInSession(true);
  };

  if (!meta) return <Navigate to="/" replace />;

  return (
    <div className="wordlab-page" data-color={meta.color}>
      <div className="wordlab-topnav">
        <Link to={`/${meta.slug}`} className="hub-back">← {meta.name}</Link>
      </div>

      <div className="wordlab-header">
        <h1 className="hub-title">Practice Questions</h1>
        <p className="wordlab-subtitle">SAT Reading &amp; Writing question bank — all domains combined by default; narrow it down if you want.</p>
      </div>

      {!bank && <p className="wordlab-count">Loading question bank…</p>}

      {bank && !inSession && (
        <div className="practice-filters">
          <div className="practice-filter-group">
            <h3 className="practice-filter-label">Target Domains <span className="practice-filter-hint">(optional — leave blank for all)</span></h3>
            <div className="filter-chip-grid">
              {DOMAINS.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`filter-chip${domains.has(d) ? ' filter-chip--active' : ''}`}
                  onClick={() => toggleDomain(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="practice-filter-group">
            <h3 className="practice-filter-label">Target Skills <span className="practice-filter-hint">(optional — leave blank for all)</span></h3>
            <div className="filter-chip-grid">
              {skillOptions.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`filter-chip${skills.has(s) ? ' filter-chip--active' : ''}`}
                  onClick={() => toggleSkill(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="practice-filter-group">
            <h3 className="practice-filter-label">Difficulty</h3>
            <div className="filter-chip-row">
              {(['All', ...DIFFICULTIES] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`filter-chip${difficulty === d ? ' filter-chip--active' : ''}`}
                  onClick={() => setDifficulty(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="practice-filter-group">
            <h3 className="practice-filter-label">Question Limit</h3>
            <div className="filter-chip-row">
              {LIMIT_PRESETS.map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`filter-chip${limit === n ? ' filter-chip--active' : ''}`}
                  onClick={() => setLimit(n)}
                >
                  {n} Qs
                </button>
              ))}
              <button
                type="button"
                className={`filter-chip${limit === 'All' ? ' filter-chip--active' : ''}`}
                onClick={() => setLimit('All')}
              >
                Full Bank (All Qs)
              </button>
              <button
                type="button"
                className={`filter-chip${limit === 'Custom' ? ' filter-chip--active' : ''}`}
                onClick={() => setLimit('Custom')}
              >
                Custom
              </button>
              {limit === 'Custom' && (
                <input
                  className="wordlab-select filter-chip-custom-input"
                  type="number"
                  min={1}
                  max={filtered.length || 1}
                  value={customLimit}
                  onChange={(e) => setCustomLimit(Math.max(1, Number(e.target.value) || 1))}
                />
              )}
            </div>
          </div>

          <p className="wordlab-count">{filtered.length} questions match this filter</p>
          <button
            className="wordlab-btn wordlab-btn--accent"
            disabled={startCount === 0}
            onClick={startPractice}
          >
            Start Practice Drill ({startCount} questions)
          </button>
        </div>
      )}

      {inSession && (
        <QuizSession
          key={sessionKey}
          questions={sessionQuestions}
          onExit={() => setInSession(false)}
        />
      )}
    </div>
  );
}
