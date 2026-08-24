import { useParams, Navigate, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { getSubject, getUnit } from '../data/subjects';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { useProgress } from '../context/ProgressContext';
import { extractHeadings, stripFrontmatter } from '../lib/markdownUtils';

// Vite glob import — all markdown files, loaded as raw strings on demand
const markdownModules = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
});

type CalcMode = 'ab' | 'bc';

function getCalcMode(): CalcMode {
  return (localStorage.getItem('calc-mode') as CalcMode) ?? 'bc';
}

export default function UnitPage() {
  const { subject, unitId } = useParams<{ subject: string; unitId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const { isUnitRead, markUnit } = useProgress();

  const subjectMeta = subject ? getSubject(subject) : undefined;
  const unitNum = unitId ? parseInt(unitId, 10) : NaN;
  const unitMeta = subjectMeta && !isNaN(unitNum) ? getUnit(subject!, unitNum) : undefined;

  const isRead = subjectMeta ? isUnitRead(subjectMeta.slug, unitNum) : false;

  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState(false);
  // ponytail: no resize listener — rotating a phone mid-session won't reopen the sidebar; fine for a personal study app
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth > 640);
  const [calcMode, setCalcMode] = useState<CalcMode>(getCalcMode);
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);

  useEffect(() => { setUnitDropdownOpen(false); }, [unitNum]);

  useEffect(() => {
    if (!subjectMeta || !unitMeta) return;
    setContent(null);
    setError(false);

    const key = `../content/${subjectMeta.slug}/unit-${unitNum}.md`;
    const loader = markdownModules[key];
    if (!loader) { setError(true); return; }

    loader().then((md) => setContent(md as string)).catch(() => setError(true));
  }, [subjectMeta, unitMeta, unitNum]);

  // Deep-link support: scroll to the heading named by the URL hash once content has rendered
  useEffect(() => {
    if (!content || !location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const el = document.getElementById(id);
    el?.scrollIntoView({ block: 'start' });
  }, [content, location.hash]);

  const headings = useMemo(
    () => (content ? extractHeadings(stripFrontmatter(content)) : []),
    [content],
  );

  // Scrollspy: highlight whichever heading is currently at/above the top-of-viewport offset
  const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) {
      setActiveHeadingId(null);
      return;
    }

    const offset = 96;
    let ticking = false;
    const updateActive = () => {
      ticking = false;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top - offset <= 0) current = el.id;
        else break;
      }
      setActiveHeadingId(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [headings]);

  // Keep the active sidebar link scrolled into view as the page scrolls
  useEffect(() => {
    if (!activeHeadingId) return;
    const link = document.querySelector(`.sidebar-toc a[href="#${CSS.escape(activeHeadingId)}"]`);
    link?.scrollIntoView({ block: 'nearest' });
  }, [activeHeadingId]);

  const toggleRead = useCallback(() => {
    if (!subjectMeta) return;
    markUnit(subjectMeta.slug, unitNum, !isRead);
  }, [subjectMeta, unitNum, isRead, markUnit]);

  const updateCalcMode = (m: CalcMode) => {
    setCalcMode(m);
    localStorage.setItem('calc-mode', m);
  };

  if (!subjectMeta || !unitMeta) return <Navigate to="/" replace />;

  const isCalc = subjectMeta.slug === 'ap-calculus';
  const hideBc = isCalc && calcMode === 'ab';

  const prevUnit = subjectMeta.units.find((u) => u.unit === unitNum - 1);
  const nextUnit = subjectMeta.units.find((u) => u.unit === unitNum + 1);

  return (
    <div className={`unit-layout${hideBc ? ' hide-bc' : ''}`} data-color={subjectMeta.color}>
      {sidebarOpen && (
        <div className="unit-sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}
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
            <p className="sidebar-unit-label">Units</p>
            <div className="unit-switcher">
              <button
                className="unit-switcher-arrow"
                disabled={!prevUnit}
                aria-label="Previous unit"
                onClick={() => prevUnit && navigate(prevUnit.link ?? `/${subjectMeta.slug}/units/${prevUnit.unit}`)}
              >
                ‹
              </button>
              <button
                className="unit-switcher-current"
                aria-expanded={unitDropdownOpen}
                onClick={() => setUnitDropdownOpen((v) => !v)}
              >
                <span className="unit-switcher-label">Unit {unitNum}: {unitMeta.title}</span>
                <span className="unit-switcher-caret">{unitDropdownOpen ? '▲' : '▼'}</span>
              </button>
              <button
                className="unit-switcher-arrow"
                disabled={!nextUnit}
                aria-label="Next unit"
                onClick={() => nextUnit && navigate(nextUnit.link ?? `/${subjectMeta.slug}/units/${nextUnit.unit}`)}
              >
                ›
              </button>
            </div>

            {unitDropdownOpen && (
              <nav className="sidebar-unit-list">
                {subjectMeta.units.map((u) => (
                  <Link
                    key={u.unit}
                    to={u.link ?? `/${subjectMeta.slug}/units/${u.unit}`}
                    className={`unit-side-link${u.unit === unitNum ? ' unit-side-link--active' : ''}`}
                    onClick={() => setUnitDropdownOpen(false)}
                  >
                    <span className="unit-side-num">{u.unit}</span>
                    <span className="unit-side-title">{u.title}</span>
                    {isUnitRead(subjectMeta.slug, u.unit) && (
                      <span className="unit-side-check">✓</span>
                    )}
                  </Link>
                ))}
              </nav>
            )}

            <div className="sidebar-divider" />

            <p className="sidebar-unit-label">Unit {unitNum}</p>
            <nav className="sidebar-toc">
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={`toc-link toc-level-${h.level}${h.id === activeHeadingId ? ' toc-link--active' : ''}`}
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
            <Link
              to={`/search?subject=${subjectMeta.slug}`}
              className="unit-search-link"
              aria-label={`Search ${subjectMeta.name}`}
              title={`Search ${subjectMeta.name}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search this class</span>
            </Link>
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
            <button className="unit-nav-btn unit-nav-btn--prev" onClick={() => navigate(prevUnit.link ?? `/${subjectMeta.slug}/units/${prevUnit.unit}`)}>
              ← Unit {prevUnit.unit}: {prevUnit.title}
            </button>
          ) : <span />}
          {nextUnit && (
            <button className="unit-nav-btn unit-nav-btn--next" onClick={() => navigate(nextUnit.link ?? `/${subjectMeta.slug}/units/${nextUnit.unit}`)}>
              Unit {nextUnit.unit}: {nextUnit.title} →
            </button>
          )}
        </nav>
      </main>
    </div>
  );
}
