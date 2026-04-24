import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import { mdxComponents } from "./mdx/mdxComponents";
import { CalculusHubPage } from "./pages/CalculusHubPage";
import { ChemistryHubPage } from "./pages/ChemistryHubPage";
import { HomePage } from "./pages/HomePage";
import { WorldHistoryHubPage } from "./pages/WorldHistoryHubPage";
import { ChemistryUnit2Page } from "./pages/chemistry/ChemistryUnit2Page";
import { ReadAloudDock } from "./readAloud/ReadAloudDock";

const ChemistryUnit1Lazy = lazy(() => import("./pages/chemistry/ChemistryUnit1Page"));
const ChemistryUnit3Lazy = lazy(() => import("./pages/chemistry/ChemistryUnit3Page"));
const ChemistryUnit4Lazy = lazy(() => import("./pages/chemistry/ChemistryUnit4Page"));
const ChemistryUnit5Lazy = lazy(() => import("./pages/chemistry/ChemistryUnit5Page"));
const ChemistryUnit6Lazy = lazy(() => import("./pages/chemistry/ChemistryUnit6Page"));
const ChemistryUnit7Lazy = lazy(() => import("./pages/chemistry/ChemistryUnit7Page"));
const ChemistryUnit8Lazy = lazy(() => import("./pages/chemistry/ChemistryUnit8Page"));
const ChemistryUnit9Lazy = lazy(() => import("./pages/chemistry/ChemistryUnit9Page"));

const calculusUnitLazy = {
  1: lazy(() => import("./pages/calculus/CalculusUnit1Page")),
  2: lazy(() => import("./pages/calculus/CalculusUnit2Page")),
  3: lazy(() => import("./pages/calculus/CalculusUnit3Page")),
  4: lazy(() => import("./pages/calculus/CalculusUnit4Page")),
  5: lazy(() => import("./pages/calculus/CalculusUnit5Page")),
  6: lazy(() => import("./pages/calculus/CalculusUnit6Page")),
  7: lazy(() => import("./pages/calculus/CalculusUnit7Page")),
  8: lazy(() => import("./pages/calculus/CalculusUnit8Page")),
  9: lazy(() => import("./pages/calculus/CalculusUnit9Page")),
  10: lazy(() => import("./pages/calculus/CalculusUnit10Page")),
} as const;

const worldHistoryUnitLazy = {
  1: lazy(() => import("./pages/world-history/WorldHistoryUnit1Page")),
  2: lazy(() => import("./pages/world-history/WorldHistoryUnit2Page")),
  3: lazy(() => import("./pages/world-history/WorldHistoryUnit3Page")),
  4: lazy(() => import("./pages/world-history/WorldHistoryUnit4Page")),
  5: lazy(() => import("./pages/world-history/WorldHistoryUnit5Page")),
  6: lazy(() => import("./pages/world-history/WorldHistoryUnit6Page")),
  7: lazy(() => import("./pages/world-history/WorldHistoryUnit7Page")),
  8: lazy(() => import("./pages/world-history/WorldHistoryUnit8Page")),
  9: lazy(() => import("./pages/world-history/WorldHistoryUnit9Page")),
} as const;

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
  const LazyPage =
    n === 1
      ? ChemistryUnit1Lazy
      : n === 3
        ? ChemistryUnit3Lazy
        : n === 4
          ? ChemistryUnit4Lazy
          : n === 5
            ? ChemistryUnit5Lazy
            : n === 6
              ? ChemistryUnit6Lazy
              : n === 7
                ? ChemistryUnit7Lazy
                : n === 8
                  ? ChemistryUnit8Lazy
                  : ChemistryUnit9Lazy;
  return (
    <Suspense fallback={unitLoadingFallback}>
      <LazyPage />
    </Suspense>
  );
}

function CalculusUnitRoute() {
  const { unitId } = useParams();
  const n = unitId ? Number.parseInt(unitId, 10) : NaN;
  if (!Number.isFinite(n) || n < 1 || n > 10) {
    return <Navigate to="/ap-calculus" replace />;
  }
  const LazyPage = calculusUnitLazy[n as keyof typeof calculusUnitLazy];
  return (
    <Suspense fallback={unitLoadingFallback}>
      <LazyPage />
    </Suspense>
  );
}

function WorldHistoryUnitRoute() {
  const { unitId } = useParams();
  const n = unitId ? Number.parseInt(unitId, 10) : NaN;
  if (!Number.isFinite(n) || n < 1 || n > 9) {
    return <Navigate to="/ap-world-history" replace />;
  }
  const LazyPage = worldHistoryUnitLazy[n as keyof typeof worldHistoryUnitLazy];
  return (
    <Suspense fallback={unitLoadingFallback}>
      <LazyPage />
    </Suspense>
  );
}

function Shell() {
  const { unlocked } = useAuth();
  return (
    <>
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
      {unlocked ? <ReadAloudDock /> : null}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MDXProvider components={mdxComponents}>
        <Shell />
      </MDXProvider>
    </AuthProvider>
  );
}
