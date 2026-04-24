import { Link } from "react-router-dom";

const UNITS: { to: string; title: string; desc: string }[] = [
  { to: "/ap-chemistry/units/1", title: "Unit 1", desc: "Atomic Structure and Properties" },
  { to: "/ap-chemistry/units/2", title: "Unit 2", desc: "Compound Structure and Properties" },
  { to: "/ap-chemistry/units/3", title: "Unit 3", desc: "Properties of Substances and Mixtures" },
  { to: "/ap-chemistry/units/4", title: "Unit 4", desc: "Chemical Reactions" },
  { to: "/ap-chemistry/units/5", title: "Unit 5", desc: "Kinetics" },
  { to: "/ap-chemistry/units/6", title: "Unit 6", desc: "Thermochemistry" },
  { to: "/ap-chemistry/units/7", title: "Unit 7", desc: "Equilibrium" },
  { to: "/ap-chemistry/units/8", title: "Unit 8", desc: "Acids and Bases" },
  { to: "/ap-chemistry/units/9", title: "Unit 9", desc: "Thermodynamics and Electrochemistry" },
];

export function ChemistryHubPage() {
  return (
    <main id="main" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div className="doc-title-block">
        <h1 className="doc-title subject-title-row">
          <span className="subject-icon">🧪</span>
          <span>AP Chemistry</span>
        </h1>
        <div className="doc-meta">
          <span>
            <Link className="all-subjects-link" to="/">
              ← All subjects
            </Link>
          </span>
        </div>
      </div>
      <div className="two-col">
        {UNITS.map((u) => (
          <Link key={u.to} className="card" to={u.to}>
            <div className="card-title">{u.title}</div>
            <p>{u.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
