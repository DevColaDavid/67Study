import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import GithubSlugger from 'github-slugger';
import { getSubject, getUnit } from '../data/subjects';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Vite glob import — all markdown files, loaded as raw strings on demand
const markdownModules = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
});

type CalcMode = 'ab' | 'bc';

interface Heading {
  level: number;
  text: string;
  id: string;
}

function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger();
  return (markdown.match(/^#{1,3} .+/gm) ?? [])
    .filter((line) => !line.startsWith('# ')) // skip h1 (page title)
    .map((line) => {
      const level = (line.match(/^#+/) as RegExpMatchArray)[0].length;
      const text = line.replace(/^#+\s/, '');
      const id = slugger.slug(text);
      return { level, text, id };
    });
}

function stripFrontmatter(markdown: string): string {
  return markdown.replace(/^---[\s\S]*?---\n?/, '');
}

function getReadUnits(slug: string): number[] {
  try {
    const raw = localStorage.getItem(`read-units:${slug}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setUnitRead(slug: string, unit: number, read: boolean) {
  const current = getReadUnits(slug);
  const updated = read ? [...new Set([...current, unit])] : current.filter((u) => u !== unit);
  localStorage.setItem(`read-units:${slug}`, JSON.stringify(updated));
}

function getCalcMode(): CalcMode {
  return (localStorage.getItem('calc-mode') as CalcMode) ?? 'bc';
}

export default function UnitPage() {
  const { subject, unitId } = useParams<{ subject: string; unitId: string }>();
  const navigate = useNavigate();

  const subjectMeta = subject ? getSubject(subject) : undefined;
  const unitNum = unitId ? parseInt(unitId, 10) : NaN;
  const unitMeta = subjectMeta && !isNaN(unitNum) ? getUnit(subject!, unitNum) : undefined;

  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isRead, setIsRead] = useState(false);
  const [calcMode, setCalcMode] = useState<CalcMode>(getCalcMode);

  useEffect(() => {
    if (!subjectMeta || !unitMeta) return;
    setContent(null);
    setError(false);
    setIsRead(getReadUnits(subjectMeta.slug).includes(unitNum));

    const key = `../content/${subjectMeta.slug}/unit-${unitNum}.md`;
    const loader = markdownModules[key];
    if (!loader) { setError(true); return; }

    loader().then((md) => setContent(md as string)).catch(() => setError(true));
  }, [subjectMeta, unitMeta, unitNum]);

  const toggleRead = useCallback(() => {
    if (!subjectMeta) return;
    const next = !isRead;
    setUnitRead(subjectMeta.slug, unitNum, next);
    setIsRead(next);
  }, [subjectMeta, unitNum, isRead]);

  const updateCalcMode = (m: CalcMode) => {
    setCalcMode(m);
    localStorage.setItem('calc-mode', m);
  };

  if (!subjectMeta || !unitMeta) return <Navigate to="/" replace />;

  const isCalc = subjectMeta.slug === 'ap-calculus';
  const hideBc = isCalc && calcMode === 'ab';

  const headings = content ? extractHeadings(stripFrontmatter(content)) : [];
  const prevUnit = subjectMeta.units.find((u) => u.unit === unitNum - 1);
  const nextUnit = subjectMeta.units.find((u) => u.unit === unitNum + 1);

  return (
    <div className={`unit-layout${hideBc ? ' hide-bc' : ''}`} data-color={subjectMeta.color}>
      {/* Sidebar */}
      <aside className={`unit-sidebar${sidebarOpen ? '' : ' unit-sidebar--closed'}`}>
        <div className="sidebar-header">
          <Link to={`/${subjectMeta.slug}`} className="sidebar-back">
            ← {subjectMeta.name}
          </Link>
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
            <p className="sidebar-unit-label">Unit {unitNum}</p>
            <nav className="sidebar-toc">
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={`toc-link toc-level-${h.level}`}
                >
                  {h.text}
                </a>
              ))}
              {headings.length === 0 && content && (
                <span className="toc-empty">No sections yet</span>
              )}
            </nav>
          </>
        )}
      </aside>

      {/* Main content */}
      <main className="unit-main">
        <div className="unit-topbar">
          <h1 className="unit-page-title">
            <span className="unit-page-number">Unit {unitNum}</span>
            {unitMeta.title}
          </h1>
          <div className="unit-topbar-actions">
            {isCalc && (
              <div className="mode-toggle">
                <button
                  className={`mode-toggle-btn${calcMode === 'ab' ? ' mode-toggle-btn--active' : ''}`}
                  onClick={() => updateCalcMode('ab')}
                >
                  AB
                </button>
                <button
                  className={`mode-toggle-btn${calcMode === 'bc' ? ' mode-toggle-btn--active' : ''}`}
                  onClick={() => updateCalcMode('bc')}
                >
                  BC
                </button>
              </div>
            )}
            <button
              className={`read-btn${isRead ? ' read-btn--done' : ''}`}
              onClick={toggleRead}
            >
              {isRead ? '✓ Marked as read' : 'Mark as read'}
            </button>
          </div>
        </div>

        <div className="unit-content">
          {error && <p className="unit-error">Could not load content for this unit.</p>}
          {!error && !content && <p className="unit-loading">Loading…</p>}
          {content && <MarkdownRenderer content={stripFrontmatter(content)} />}
        </div>

        {/* Prev / Next navigation */}
        <nav className="unit-nav">
          {prevUnit ? (
            <button className="unit-nav-btn unit-nav-btn--prev" onClick={() => navigate(`/${subjectMeta.slug}/units/${prevUnit.unit}`)}>
              ← Unit {prevUnit.unit}: {prevUnit.title}
            </button>
          ) : <span />}
          {nextUnit && (
            <button className="unit-nav-btn unit-nav-btn--next" onClick={() => navigate(`/${subjectMeta.slug}/units/${nextUnit.unit}`)}>
              Unit {nextUnit.unit}: {nextUnit.title} →
            </button>
          )}
        </nav>
      </main>
    </div>
  );
}
