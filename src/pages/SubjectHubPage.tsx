import { Link, useParams, Navigate } from 'react-router-dom';
import { getSubject } from '../data/subjects';

function getReadUnits(slug: string): number[] {
  try {
    const raw = localStorage.getItem(`read-units:${slug}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function SubjectHubPage() {
  const { subject } = useParams<{ subject: string }>();
  const meta = subject ? getSubject(subject) : undefined;

  if (!meta) return <Navigate to="/" replace />;

  const readUnits = getReadUnits(meta.slug);
  const progress = Math.round((readUnits.length / meta.units.length) * 100);

  return (
    <div className="hub-page" data-color={meta.color}>
      <div className="hub-topnav">
        <Link to="/" className="hub-back">← All subjects</Link>
      </div>

      <div className="hub-header">
        <h1 className="hub-title">{meta.name}</h1>
        <div className="hub-progress-row">
          <div className="hub-progress-bar-wrap">
            <div className="hub-progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <span className="hub-progress-label">{readUnits.length} / {meta.units.length} units read</span>
        </div>
      </div>

      <div className="unit-grid">
        {meta.units.map((u) => {
          const isRead = readUnits.includes(u.unit);
          return (
            <Link
              key={u.unit}
              to={`/${meta.slug}/units/${u.unit}`}
              className={`unit-card${isRead ? ' unit-card--read' : ''}`}
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
