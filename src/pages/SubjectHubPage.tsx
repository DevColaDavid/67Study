import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { getSubject } from '../data/subjects';
import { useProgress } from '../context/ProgressContext';

type CalcMode = 'ab' | 'bc';
type PhysicsMode = 'mech' | 'em' | 'both';

function getCalcMode(): CalcMode {
  return (localStorage.getItem('calc-mode') as CalcMode) ?? 'bc';
}

function getPhysicsMode(): PhysicsMode {
  return (localStorage.getItem('physics-c-mode') as PhysicsMode) ?? 'both';
}

export default function SubjectHubPage() {
  const { subject } = useParams<{ subject: string }>();
  const meta = subject ? getSubject(subject) : undefined;
  const { readUnits: allReadUnits } = useProgress();

  if (!meta) return <Navigate to="/" replace />;

  const isCalc = meta.slug === 'ap-calculus';
  const isPhysics = meta.slug === 'ap-physics-c';

  const [calcMode, setCalcMode] = useState<CalcMode>(getCalcMode);
  const [physicsMode, setPhysicsMode] = useState<PhysicsMode>(getPhysicsMode);

  const updateCalcMode = (m: CalcMode) => {
    setCalcMode(m);
    localStorage.setItem('calc-mode', m);
  };

  const updatePhysicsMode = (m: PhysicsMode) => {
    setPhysicsMode(m);
    localStorage.setItem('physics-c-mode', m);
  };

  const readUnits = allReadUnits[meta.slug] ?? [];

  const countableUnits =
    isCalc && calcMode === 'ab'       ? meta.units.filter((u) => !u.bcOnly) :
    isPhysics && physicsMode === 'mech' ? meta.units.filter((u) => !u.emOnly) :
    isPhysics && physicsMode === 'em'   ? meta.units.filter((u) => u.emOnly) :
    meta.units;

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

          {isPhysics && (
            <div className="mode-toggle">
              <button
                className={`mode-toggle-btn${physicsMode === 'mech' ? ' mode-toggle-btn--active' : ''}`}
                onClick={() => updatePhysicsMode('mech')}
              >
                Mech
              </button>
              <button
                className={`mode-toggle-btn${physicsMode === 'em' ? ' mode-toggle-btn--active' : ''}`}
                onClick={() => updatePhysicsMode('em')}
              >
                E&amp;M
              </button>
              <button
                className={`mode-toggle-btn${physicsMode === 'both' ? ' mode-toggle-btn--active' : ''}`}
                onClick={() => updatePhysicsMode('both')}
              >
                Both
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
          const isDimmed =
            (isCalc && calcMode === 'ab' && !!u.bcOnly) ||
            (isPhysics && physicsMode === 'mech' && !!u.emOnly) ||
            (isPhysics && physicsMode === 'em' && !u.emOnly);
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
                {u.emOnly && <span className="unit-card-badge">E&amp;M</span>}
                {isRead && <span className="unit-card-check">✓ Read</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
