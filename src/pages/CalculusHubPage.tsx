import { Link } from "react-router-dom";
import { CALCULUS_UNIT_SWITCHER } from "../data/calculus";

export function CalculusHubPage() {
  return (
    <main id="main" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div className="doc-title-block">
        <h1 className="doc-title subject-title-row">
          <span className="subject-icon">∫</span>
          <span>AP Calculus</span>
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
        {CALCULUS_UNIT_SWITCHER.map((u) => {
          const m = u.label.match(/^Unit (\d+): (.+)$/);
          const unitNum = m?.[1] ?? "";
          const desc = m?.[2] ?? u.label;
          return (
            <Link key={u.to} className="card" to={u.to}>
              <div className="card-title">
                Unit {unitNum}
                {u.bcOnly ? (
                  <>
                    {" "}
                    <span className="bc-badge" aria-label="BC only unit">
                      BC
                    </span>
                  </>
                ) : null}
              </div>
              <p>{desc}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
