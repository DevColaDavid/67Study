import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { getSubject } from '../data/subjects';

type CalcMode = 'ab' | 'bc';

function getReadUnits(slug: string): number[] {
  try {
    const raw = localStorage.getItem(`read-units:${slug}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function getCalcMode(): CalcMode {
  return (localStorage.getItem('calc-mode') as CalcMode) ?? 'bc';
}

export default function SubjectHubPage() {
  const { subject } = useParams<{ subject: string }>();
  const meta = subject ? getSubject(subject) : undefined;

  if (!meta) return <Navigate to="/" replace />;

  const isCalc = meta.slug === 'ap-calculus';
  const [calcMode, setCalcMode] = useState<CalcMode>(getCalcMode);

  const updateMode = (m: CalcMode) => {
    setCalcMode(m);
    localStorage.setItem('calc-mode', m);
  };

  const readUnits = getReadUnits(meta.slug);
  const countableUnits = isCalc && calcMode === 'ab'
    ? meta.units.filter((u) => !u.bcOnly)
    : meta.units;
  const countedRead = readUnits.filter((n) => countableUnits.some((u) => u.unit === n)).length;
  const progress = countableUnits.length > 0
    ? Math.round((countedRead / countableUnits.length) * 100)
    : 0;

  return (
    <div className="hub-page" data-color={meta.color}>
      <div className="hub-topnav">
        <Link to="/" className="hub-back">← All subjects</Link>
      </div>

      <div className="hub-header">
        <div className="hub-title-row">
          <h1 className="hub-title">{meta.name}</h1>
          {isCalc && (
            <div className="mode-toggle">
              <button
                className={`mode-toggle-btn${calcMode === 'ab' ? ' mode-toggle-btn--active' : ''}`}
                onClick={() => updateMode('ab')}
              >
                AB
              </button>
              <button
                className={`mode-toggle-btn${calcMode === 'bc' ? ' mode-toggle-btn--active' : ''}`}
                onClick={() => updateMode('bc')}
              >
                BC
              </button>
            </div>
          )}
        </div>
        <div className="hub-progress-row">
          <div className="hub-progress-bar-wrap">
            <div className="hub-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <span className="hub-progress-label">{countedRead} / {countableUnits.length} units read</span>
        </div>
      </div>

      <div className="unit-grid">
        {meta.units.map((u) => {
          const isRead = readUnits.includes(u.unit);
          const isDimmed = isCalc && calcMode === 'ab' && u.bcOnly;
          return (
            <Link
              key={u.unit}
              to={`/${meta.slug}/units/${u.unit}`}
              className={`unit-card${isRead ? ' unit-card--read' : ''}${isDimmed ? ' unit-card--bc-dim' : ''}`}
            >
              <span className="unit-card-number">Unit {u.unit}</span>
              <span className="unit-card-title">{u.title}</span>
              <div className="unit-card-footer">
                {u.bcOnly && <span className="unit-card-badge">BC only</span>}
                {isRead && <span className="unit-card-check">✓ Read</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
