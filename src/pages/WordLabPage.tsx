import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { getSubject } from '../data/subjects';
import { VOCAB } from '../data/vocab';
import { WORD_PARTS, type WordPartType } from '../data/wordParts';
import { TRANSITIONS, type TransitionType } from '../data/transitions';
import FlashcardSession, { type FlashcardItem } from '../components/wordlab/FlashcardSession';
import QuizSession, { type QuizQuestion } from '../components/wordlab/QuizSession';
import { useMastered } from '../components/wordlab/useMastered';
import { useWordNotes } from '../components/wordlab/useWordNotes';
import { sample, shuffle } from '../components/wordlab/utils';
import { useProgress } from '../context/ProgressContext';

type Tab = 'vocab' | 'parts' | 'transitions';
type Mode = 'browse' | 'flashcards' | 'quiz';

const PAGE_SIZE = 24;

const TRANSITION_TYPES: TransitionType[] = [
  'Contrast', 'Cause & Effect', 'Addition', 'Examples', 'Similarity', 'Clarification', 'Alternatives', 'Sequence',
];
const WORD_PART_TYPES: WordPartType[] = ['prefix', 'suffix', 'root'];

const SECTION_TABS: { id: Tab; label: string }[] = [
  { id: 'vocab', label: 'Vocabulary' },
  { id: 'parts', label: 'Word Parts' },
  { id: 'transitions', label: 'Transitions' },
];

export default function WordLabPage() {
  const { subject } = useParams<{ subject: string }>();
  const meta = subject ? getSubject(subject) : undefined;
  const location = useLocation();
  const navigate = useNavigate();
  const { isUnitRead } = useProgress();

  const [tab, setTab] = useState<Tab>('vocab');
  const [mode, setMode] = useState<Mode>('browse');
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 640);
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);

  const [vocabLevel, setVocabLevel] = useState('All');
  const [vocabPos, setVocabPos] = useState('All');
  const [partType, setPartType] = useState<WordPartType | 'All'>('All');
  const [transitionType, setTransitionType] = useState<TransitionType | 'All'>('All');

  const vocabMastered = useMastered('wordlab-mastered-vocab');
  const partsMastered = useMastered('wordlab-mastered-parts');
  const transitionsMastered = useMastered('wordlab-mastered-transitions');

  const vocabFlagged = useMastered('wordlab-flagged-vocab');
  const partsFlagged = useMastered('wordlab-flagged-parts');
  const transitionsFlagged = useMastered('wordlab-flagged-transitions');

  const vocabNotes = useWordNotes('wordlab-notes-vocab');
  const partsNotes = useWordNotes('wordlab-notes-parts');
  const transitionsNotes = useWordNotes('wordlab-notes-transitions');

  const [sessionCards, setSessionCards] = useState<FlashcardItem[]>([]);
  const [sessionStartIndex, setSessionStartIndex] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [sessionKey, setSessionKey] = useState(0);

  const vocabPosOptions = useMemo(
    () => Array.from(new Set(VOCAB.map((v) => v.pos))).sort(),
    [],
  );

  const filteredVocab = useMemo(() => {
    const q = search.trim().toLowerCase();
    return VOCAB.filter((v) =>
      (vocabLevel === 'All' || v.level === vocabLevel) &&
      (vocabPos === 'All' || v.pos === vocabPos) &&
      (!q || v.word.toLowerCase().includes(q)),
    );
  }, [search, vocabLevel, vocabPos]);

  const filteredParts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return WORD_PARTS.filter((p) =>
      (partType === 'All' || p.type === partType) &&
      (!q || p.part.toLowerCase().includes(q) || p.meaning.toLowerCase().includes(q)),
    );
  }, [search, partType]);

  const filteredTransitions = useMemo(() => {
    const q = search.trim().toLowerCase();
    return TRANSITIONS.filter((t) =>
      (transitionType === 'All' || t.type === transitionType) &&
      (!q || t.word.toLowerCase().includes(q)),
    );
  }, [search, transitionType]);

  const filteredLength =
    tab === 'vocab' ? filteredVocab.length : tab === 'parts' ? filteredParts.length : filteredTransitions.length;
  const pageCount = Math.max(1, Math.ceil(filteredLength / PAGE_SIZE));
  const pageStart = page * PAGE_SIZE;

  if (!meta) return <Navigate to="/" replace />;

  const thisUnit = meta.units.find((u) => u.link === location.pathname);
  const unitNum = thisUnit?.unit;
  const prevUnit = unitNum !== undefined ? meta.units.find((u) => u.unit === unitNum - 1) : undefined;
  const nextUnit = unitNum !== undefined ? meta.units.find((u) => u.unit === unitNum + 1) : undefined;

  const goToUnit = (u: { unit: number; link?: string }) =>
    navigate(u.link ?? `/${meta.slug}/units/${u.unit}`);

  const switchTab = (t: Tab) => {
    setTab(t);
    setMode('browse');
    setSearch('');
    setPage(0);
  };

  const resetPage = () => setPage(0);

  const exitSession = () => setMode('browse');

  // ---- Flashcards run over the ENTIRE filtered list, in order — no grouping, no randomness ----
  const buildVocabFlashcards = (): FlashcardItem[] =>
    filteredVocab.map((v) => ({
      id: v.word,
      word: <span className="flashcard-word">{v.word}</span>,
      meaning: (
        <span>
          {v.definition ?? 'No definition available yet.'}
          {v.sentence && (
            <>
              <br />
              <em className="wordlab-card-sentence">&ldquo;{v.sentence}&rdquo;</em>
            </>
          )}
        </span>
      ),
      badges: (
        <>
          <span className="wordlab-card-badge wordlab-card-badge--level">{v.level}</span>
          <span className="wordlab-card-badge">{v.pos}</span>
        </>
      ),
    }));

  const buildVocabQuiz = (pageIndex: number): QuizQuestion[] => {
    const pagePool = filteredVocab.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE).filter((v) => v.definition);
    const distractorPool = filteredVocab.filter((v) => v.definition);
    if (pagePool.length === 0 || distractorPool.length < 4) return [];
    return pagePool.map((v) => {
      const distractors = sample(distractorPool.filter((p) => p.word !== v.word), 3).map((p) => p.definition as string);
      const choices = shuffle([v.definition as string, ...distractors]);
      return {
        id: v.word,
        prompt: <span>What does <strong>"{v.word}"</strong> ({v.pos}) mean?</span>,
        choices,
        correctIndex: choices.indexOf(v.definition as string),
      };
    });
  };

  const buildPartsFlashcards = (): FlashcardItem[] =>
    filteredParts.map((p) => ({
      id: p.part,
      word: <span className="flashcard-word">{p.part}</span>,
      meaning: (
        <span>
          {p.meaning}
          <br />
          <em>{p.examples.join(', ')}</em>
        </span>
      ),
      badges: <span className="wordlab-card-badge">{p.type}</span>,
    }));

  const buildPartsQuiz = (pageIndex: number): QuizQuestion[] => {
    const pagePool = filteredParts.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE);
    if (pagePool.length === 0 || filteredParts.length < 4) return [];
    return pagePool.map((p) => {
      const distractors = sample(filteredParts.filter((x) => x.part !== p.part), 3).map((x) => x.meaning);
      const choices = shuffle([p.meaning, ...distractors]);
      return {
        id: p.part,
        prompt: <span>What does the {p.type} <strong>"{p.part}"</strong> mean?</span>,
        choices,
        correctIndex: choices.indexOf(p.meaning),
      };
    });
  };

  const buildTransitionsFlashcards = (): FlashcardItem[] =>
    filteredTransitions.map((t) => ({
      id: t.word,
      word: <span className="flashcard-word">{t.word}</span>,
      meaning: (
        <span>
          <strong>{t.type}</strong>
          <br />
          <em>{t.usage}</em>
        </span>
      ),
      badges: <span className="wordlab-card-badge">{t.type}</span>,
    }));

  const buildTransitionsQuiz = (pageIndex: number): QuizQuestion[] => {
    const pagePool = filteredTransitions.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE);
    if (pagePool.length === 0) return [];
    return pagePool.map((t) => {
      const distractors = sample(TRANSITION_TYPES.filter((x) => x !== t.type), 3);
      const choices = shuffle([t.type, ...distractors]);
      return {
        id: t.word,
        prompt: <span>Which relationship does <strong>"{t.word}"</strong> signal? <br /><em>"{t.usage}"</em></span>,
        choices,
        correctIndex: choices.indexOf(t.type),
      };
    });
  };

  const launchFlashcards = (startIndex: number) => {
    if (tab === 'vocab') setSessionCards(buildVocabFlashcards());
    else if (tab === 'parts') setSessionCards(buildPartsFlashcards());
    else setSessionCards(buildTransitionsFlashcards());
    setSessionStartIndex(startIndex);
    setSessionKey((k) => k + 1);
    setMode('flashcards');
  };

  const launchQuiz = (pageIndex: number) => {
    if (tab === 'vocab') setSessionQuestions(buildVocabQuiz(pageIndex));
    else if (tab === 'parts') setSessionQuestions(buildPartsQuiz(pageIndex));
    else setSessionQuestions(buildTransitionsQuiz(pageIndex));
    setSessionKey((k) => k + 1);
    setMode('quiz');
  };

  const hasNextPage = page + 1 < pageCount;
  const goNextQuizGroup = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    launchQuiz(nextPage);
  };

  const activeMastered =
    tab === 'vocab' ? vocabMastered : tab === 'parts' ? partsMastered : transitionsMastered;
  const activeFlagged =
    tab === 'vocab' ? vocabFlagged : tab === 'parts' ? partsFlagged : transitionsFlagged;
  const activeNotes =
    tab === 'vocab' ? vocabNotes : tab === 'parts' ? partsNotes : transitionsNotes;

  return (
    <div className="unit-layout" data-color={meta.color}>
      {sidebarOpen && (
        <div className="unit-sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}
      <aside className={`unit-sidebar${sidebarOpen ? '' : ' unit-sidebar--closed'}`}>
        <div className="sidebar-header">
          <Link to={`/${meta.slug}`} className="sidebar-back">← {meta.name}</Link>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? '‹' : '›'}
          </button>
        </div>

        {sidebarOpen && (
          <>
            <p className="sidebar-unit-label">Units</p>
            <div className="unit-switcher">
              <button
                className="unit-switcher-arrow"
                disabled={!prevUnit}
                aria-label="Previous unit"
                onClick={() => prevUnit && goToUnit(prevUnit)}
              >
                ‹
              </button>
              <button
                className="unit-switcher-current"
                aria-expanded={unitDropdownOpen}
                onClick={() => setUnitDropdownOpen((v) => !v)}
              >
                <span className="unit-switcher-label">
                  {unitNum !== undefined ? `Unit ${unitNum}: ${thisUnit?.title}` : meta.name}
                </span>
                <span className="unit-switcher-caret">{unitDropdownOpen ? '▲' : '▼'}</span>
              </button>
              <button
                className="unit-switcher-arrow"
                disabled={!nextUnit}
                aria-label="Next unit"
                onClick={() => nextUnit && goToUnit(nextUnit)}
              >
                ›
              </button>
            </div>

            {unitDropdownOpen && (
              <nav className="sidebar-unit-list">
                {meta.units.map((u) => (
                  <Link
                    key={u.unit}
                    to={u.link ?? `/${meta.slug}/units/${u.unit}`}
                    className={`unit-side-link${u.unit === unitNum ? ' unit-side-link--active' : ''}`}
                    onClick={() => setUnitDropdownOpen(false)}
                  >
                    <span className="unit-side-num">{u.unit}</span>
                    <span className="unit-side-title">{u.title}</span>
                    {isUnitRead(meta.slug, u.unit) && (
                      <span className="unit-side-check">✓</span>
                    )}
                  </Link>
                ))}
              </nav>
            )}

            <div className="sidebar-divider" />

            <p className="sidebar-unit-label">Sections</p>
            <nav className="sidebar-toc">
              {SECTION_TABS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`toc-link toc-section-link${tab === s.id ? ' toc-link--active' : ''}`}
                  onClick={() => switchTab(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </>
        )}
      </aside>

      <main className="unit-main wordlab-page" data-color={meta.color}>
      <div className="wordlab-header">
        <h1 className="hub-title">Vocab, Word Parts &amp; Transitions</h1>
        <p className="wordlab-subtitle">Practice with flashcards and quizzes — progress saves on this device.</p>
      </div>

      <div className="wordlab-tabs">
        <button className={`wordlab-tab${tab === 'vocab' ? ' wordlab-tab--active' : ''}`} onClick={() => switchTab('vocab')}>Vocabulary</button>
        <button className={`wordlab-tab${tab === 'parts' ? ' wordlab-tab--active' : ''}`} onClick={() => switchTab('parts')}>Word Parts</button>
        <button className={`wordlab-tab${tab === 'transitions' ? ' wordlab-tab--active' : ''}`} onClick={() => switchTab('transitions')}>Transitions</button>
      </div>

      {mode === 'browse' && (
        <>
          <div className="wordlab-controls">
            <input
              className="wordlab-search"
              type="text"
              placeholder="Search…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); resetPage(); }}
            />

            {tab === 'vocab' && (
              <>
                <select className="wordlab-select" value={vocabLevel} onChange={(e) => { setVocabLevel(e.target.value); resetPage(); }}>
                  <option value="All">Level (All)</option>
                  {['Easy', 'Medium', 'Hard', 'Challenge'].map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
                <select className="wordlab-select" value={vocabPos} onChange={(e) => { setVocabPos(e.target.value); resetPage(); }}>
                  <option value="All">Part of Speech (All)</option>
                  {vocabPosOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </>
            )}

            {tab === 'parts' && (
              <select className="wordlab-select" value={partType} onChange={(e) => { setPartType(e.target.value as WordPartType | 'All'); resetPage(); }}>
                <option value="All">Type (All)</option>
                {WORD_PART_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            )}

            {tab === 'transitions' && (
              <select className="wordlab-select" value={transitionType} onChange={(e) => { setTransitionType(e.target.value as TransitionType | 'All'); resetPage(); }}>
                <option value="All">Type (All)</option>
                {TRANSITION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            )}
          </div>

          <div className="wordlab-quiz-row">
            <button className="wordlab-btn wordlab-btn--accent" onClick={() => launchQuiz(page)}>
              Quiz (this page, {Math.min(PAGE_SIZE, filteredLength - pageStart)} cards)
            </button>
            <span className="wordlab-hint-inline">Click any word below to jump into flashcards at that word.</span>
          </div>

          {tab === 'vocab' && (
            <>
              <p className="wordlab-count">{filteredVocab.length} words · {vocabMastered.mastered.size} mastered</p>
              <div className="wordlab-grid">
                {filteredVocab.slice(pageStart, pageStart + PAGE_SIZE).map((v, i) => (
                  <button
                    key={v.word}
                    type="button"
                    className={`wordlab-card${vocabMastered.mastered.has(v.word) ? ' wordlab-card--mastered' : ''}`}
                    onClick={() => launchFlashcards(pageStart + i)}
                  >
                    <span className="wordlab-card-word">{v.word}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {tab === 'parts' && (
            <>
              <p className="wordlab-count">{filteredParts.length} word parts · {partsMastered.mastered.size} mastered</p>
              <div className="wordlab-grid">
                {filteredParts.slice(pageStart, pageStart + PAGE_SIZE).map((p, i) => (
                  <button
                    key={p.part}
                    type="button"
                    className={`wordlab-card${partsMastered.mastered.has(p.part) ? ' wordlab-card--mastered' : ''}`}
                    onClick={() => launchFlashcards(pageStart + i)}
                  >
                    <span className="wordlab-card-word">{p.part}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {tab === 'transitions' && (
            <>
              <p className="wordlab-count">{filteredTransitions.length} transitions · {transitionsMastered.mastered.size} mastered</p>
              <div className="wordlab-grid">
                {filteredTransitions.slice(pageStart, pageStart + PAGE_SIZE).map((t, i) => (
                  <button
                    key={t.word}
                    type="button"
                    className={`wordlab-card${transitionsMastered.mastered.has(t.word) ? ' wordlab-card--mastered' : ''}`}
                    onClick={() => launchFlashcards(pageStart + i)}
                  >
                    <span className="wordlab-card-word">{t.word}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          <div className="wordlab-pagination">
            <button className="wordlab-btn" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>← Previous</button>
            <span className="wordlab-page-label">Page {page + 1} of {pageCount}</span>
            <button className="wordlab-btn" disabled={page + 1 >= pageCount} onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}>Next →</button>
          </div>

          <p className="wordlab-mastered-hint">{activeMastered.mastered.size} marked as known in this category</p>
        </>
      )}

      {mode === 'flashcards' && (
        <FlashcardSession
          key={sessionKey}
          items={sessionCards}
          startIndex={sessionStartIndex}
          mastered={activeMastered.mastered}
          onToggleMastered={(id) => (activeMastered.mastered.has(id) ? activeMastered.remove(id) : activeMastered.add(id))}
          flagged={activeFlagged.mastered}
          onToggleFlag={(id) => (activeFlagged.mastered.has(id) ? activeFlagged.remove(id) : activeFlagged.add(id))}
          notes={activeNotes.notes}
          onNoteChange={activeNotes.setNote}
          onExit={exitSession}
        />
      )}
      {mode === 'quiz' && (
        <QuizSession
          key={sessionKey}
          questions={sessionQuestions}
          onExit={exitSession}
          hasNextGroup={hasNextPage}
          onNextGroup={goNextQuizGroup}
        />
      )}
      </main>
    </div>
  );
}
