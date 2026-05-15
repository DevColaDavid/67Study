import { Link } from 'react-router-dom';
import { SUBJECTS } from '../data/subjects';

function getReadCount(slug: string, total: number): number {
  try {
    const raw = localStorage.getItem(`read-units:${slug}`);
    const arr: number[] = raw ? JSON.parse(raw) : [];
    return Math.min(arr.length, total);
  } catch {
    return 0;
  }
}

const SUBJECT_ICONS: Record<string, string> = {
  'ap-chemistry': '🧪',
  'ap-calculus': '∫',
  'ap-world-history': '🌍',
  'religion': '✝️',
  'jrotc': '🎖️',
};

const SUBJECT_TAGLINES: Record<string, string> = {
  'ap-chemistry': 'Atoms, reactions, and equilibrium',
  'ap-calculus': 'Limits, derivatives, and integrals',
  'ap-world-history': 'Empires, trade, and revolutions',
  'religion': 'Faith, scripture, and the Church',
  'jrotc': 'Leadership, drill, and service',
};

export default function HomePage() {
  return (
    <main className="home-page">
      <div className="home-hero">
        <h1 className="home-title">67 Study</h1>
        <p className="home-subtitle">Your notes, organized by unit.</p>
      </div>

      <div className="subject-grid">
        {SUBJECTS.map((s) => {
          const read = getReadCount(s.slug, s.units.length);
          const pct = Math.round((read / s.units.length) * 100);
          return (
            <Link key={s.id} to={`/${s.slug}`} className="subject-card" data-color={s.color}>
              <div className="subject-card-accent" />
              <div className="subject-card-body">
                <span className="subject-card-icon">{SUBJECT_ICONS[s.id] ?? '📚'}</span>
                <div className="subject-card-info">
                  <span className="subject-card-name">{s.name}</span>
                  <span className="subject-card-tagline">{SUBJECT_TAGLINES[s.id]}</span>
                </div>
              </div>
              <div className="subject-card-footer">
                <span className="subject-card-units">{s.units.length} units</span>
                <div className="subject-card-bar-wrap">
                  <div className="subject-card-bar" style={{ width: `${pct}%` }} />
                </div>
                <span className="subject-card-pct">{pct}%</span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
