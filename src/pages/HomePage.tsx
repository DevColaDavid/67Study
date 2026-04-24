import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main id="main" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div className="doc-title-block">
        <h1 className="doc-title">AP Study Subject Hub</h1>
      </div>
      <div className="two-col">
        <Link className="card" to="/ap-chemistry">
          <div className="card-title subject-card-title">
            <span>🧪</span>
            <span>AP Chemistry</span>
          </div>
        </Link>
        <Link className="card" to="/ap-world-history">
          <div className="card-title subject-card-title">
            <span>🌍</span>
            <span>AP World History</span>
          </div>
        </Link>
        <Link className="card" to="/ap-calculus">
          <div className="card-title subject-card-title">
            <span>∫</span>
            <span>AP Calculus</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
