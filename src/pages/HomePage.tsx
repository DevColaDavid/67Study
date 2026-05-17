import { Link } from 'react-router-dom';
import { SUBJECTS } from '../data/subjects';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

const SUBJECT_ICONS: Record<string, string> = {
  'ap-chemistry': '🧪',
  'ap-calculus': '∫',
  'ap-world-history': '🌍',
  'religion': '✝️',
  'jrotc': '🎖️',
  'ap-us-history': '🦅',
};

const SUBJECT_TAGLINES: Record<string, string> = {
  'ap-chemistry': 'Atoms, reactions, and equilibrium',
  'ap-calculus': 'Limits, derivatives, and integrals',
  'ap-world-history': 'Empires, trade, and revolutions',
  'religion': 'Faith, scripture, and the Church',
  'jrotc': 'Leadership, drill, and service',
  'ap-us-history': 'From colonization to the modern era',
};

export default function HomePage() {
  const { isAdmin } = useAuth();
  const { readUnits } = useProgress();

  return (
    <main className="home-page">
      <div className="home-hero">
        <h1 className="home-title">67 Study</h1>
        <p className="home-subtitle">Your notes, organized by unit.</p>
      </div>

      <div className="subject-grid">
        {SUBJECTS.map((s) => {
          const read = Math.min((readUnits[s.slug] ?? []).length, s.units.length);
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

        <Link to="/chat" className="subject-card subject-card--chat">
          <div className="subject-card-accent" />
          <div className="subject-card-body">
            <span className="subject-card-icon">💬</span>
            <div className="subject-card-info">
              <span className="subject-card-name">Study Chat</span>
              <span className="subject-card-tagline">Global + subject rooms</span>
            </div>
          </div>
          <div className="subject-card-footer">
            <span className="subject-card-units">7 rooms</span>
          </div>
        </Link>

        {isAdmin && (
          <Link to="/admin" className="subject-card subject-card--admin">
            <div className="subject-card-accent" />
            <div className="subject-card-body">
              <span className="subject-card-icon">⚙️</span>
              <div className="subject-card-info">
                <span className="subject-card-name">Admin Panel</span>
                <span className="subject-card-tagline">Chat, users & more</span>
              </div>
            </div>
            <div className="subject-card-footer">
              <span className="subject-card-units">Admins only</span>
            </div>
          </Link>
        )}
      </div>
    </main>
  );
}
