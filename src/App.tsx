import { Component, lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import { CalculusHubPage } from "./pages/CalculusHubPage";
import { ChemistryHubPage } from "./pages/ChemistryHubPage";
import { HomePage } from "./pages/HomePage";
import { WorldHistoryHubPage } from "./pages/WorldHistoryHubPage";
import { ChemistryUnit2Page } from "./pages/chemistry/ChemistryUnit2Page";
import { CalculusUnitContentPage } from "./pages/calculus/CalculusUnitContentPage";
import { ChemistryGeneratedUnitContentPage } from "./pages/chemistry/ChemistryGeneratedUnitContentPage";
import { WorldHistoryUnitContentPage } from "./pages/world-history/WorldHistoryUnitContentPage";
import { ReadAloudDock } from "./readAloud/ReadAloudDock";

const CHUNK_RELOAD_MARKER = "apstudy:chunk-reload-attempted";

function lazyWithRetry(factory: () => Promise<{ default: () => ReactNode }>) {
  return lazy(async () => {
    try {
      const module = await factory();
      sessionStorage.removeItem(CHUNK_RELOAD_MARKER);
      return module;
    } catch (error) {
      const hasRetried = sessionStorage.getItem(CHUNK_RELOAD_MARKER) === "true";
      if (!hasRetried) {
        sessionStorage.setItem(CHUNK_RELOAD_MARKER, "true");
        window.location.reload();
      }
      throw error;
    }
  });
}

type UnitRouteErrorBoundaryProps = { children: ReactNode };
type UnitRouteErrorBoundaryState = { hasError: boolean };

class UnitRouteErrorBoundary extends Component<
  UnitRouteErrorBoundaryProps,
  UnitRouteErrorBoundaryState
> {
  public constructor(props: UnitRouteErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <main id="main" style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>
          <p className="doc-label">This page failed to load.</p>
          <button
            type="button"
            onClick={() => {
              sessionStorage.removeItem(CHUNK_RELOAD_MARKER);
              window.location.reload();
            }}
          >
            Reload page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}

const ChemistryUnit1Lazy = lazyWithRetry(() => import("./pages/chemistry/ChemistryUnit1Page"));

const unitLoadingFallback = (
  <main id="main" style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>
    <p className="doc-label">Loading unit…</p>
  </main>
);

function ChemistryUnitRoute() {
  const { unitId } = useParams();
  const n = unitId ? Number.parseInt(unitId, 10) : NaN;
  if (!Number.isFinite(n) || n < 1 || n > 9) {
    return <Navigate to="/ap-chemistry" replace />;
  }
  if (n === 2) {
    return <ChemistryUnit2Page />;
  }
  if (n >= 3 && n <= 9) {
    return <ChemistryGeneratedUnitContentPage unitNumber={n} />;
  }
  return (
    <Suspense fallback={unitLoadingFallback}>
      <ChemistryUnit1Lazy />
    </Suspense>
  );
}

function CalculusUnitRoute() {
  const { unitId } = useParams();
  const n = unitId ? Number.parseInt(unitId, 10) : NaN;
  if (!Number.isFinite(n) || n < 1 || n > 10) {
    return <Navigate to="/ap-calculus" replace />;
  }
  return <CalculusUnitContentPage unitNumber={n} />;
}

function WorldHistoryUnitRoute() {
  const { unitId } = useParams();
  const n = unitId ? Number.parseInt(unitId, 10) : NaN;
  if (!Number.isFinite(n) || n < 1 || n > 9) {
    return <Navigate to="/ap-world-history" replace />;
  }
  return <WorldHistoryUnitContentPage unitNumber={n} />;
}

function Shell() {
  const { unlocked } = useAuth();
  return (
    <>
      <UnitRouteErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ap-chemistry" element={<ChemistryHubPage />} />
            <Route path="/ap-chemistry/units/:unitId" element={<ChemistryUnitRoute />} />
            <Route path="/ap-calculus" element={<CalculusHubPage />} />
            <Route path="/ap-calculus/units/:unitId" element={<CalculusUnitRoute />} />
            <Route path="/ap-world-history" element={<WorldHistoryHubPage />} />
            <Route path="/ap-world-history/units/:unitId" element={<WorldHistoryUnitRoute />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </UnitRouteErrorBoundary>
      {unlocked ? <ReadAloudDock /> : null}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
