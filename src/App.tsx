import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import HomePage from './pages/HomePage';
import SubjectHubPage from './pages/SubjectHubPage';
import UnitPage from './pages/UnitPage';
import WordLabPage from './pages/WordLabPage';
import PracticeQuestionsPage from './pages/PracticeQuestionsPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import AdminPage from './pages/AdminPage';
import ProfileDropdown from './components/ProfileDropdown';

// Lazy: SearchPage eager-globs every unit's markdown into its search index, so it must
// stay out of the main bundle and only load when the user actually opens /search.
const SearchPage = lazy(() => import('./pages/SearchPage'));

// Subjects that require an account even to view content (currently just test prep,
// since its vocab/quiz progress is tied to a signed-in user).
const GATED_SUBJECTS = ['test-prep'];

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="chat-loading">Loading…</div>;
  if (!user) return <Navigate to={`/login?next=${encodeURIComponent(location.pathname)}`} replace />;
  return <>{children}</>;
}

function SubjectGuard({ children }: { children: React.ReactNode }) {
  const { subject } = useParams<{ subject: string }>();
  if (subject && GATED_SUBJECTS.includes(subject)) return <AuthGuard>{children}</AuthGuard>;
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<AuthGuard><ChatPage /></AuthGuard>} />
        <Route path="/admin" element={<AuthGuard><AdminPage /></AuthGuard>} />
        <Route path="/:subject" element={<SubjectGuard><SubjectHubPage /></SubjectGuard>} />
        <Route path="/:subject/vocab" element={<AuthGuard><WordLabPage /></AuthGuard>} />
        <Route path="/:subject/practice" element={<AuthGuard><PracticeQuestionsPage /></AuthGuard>} />
        <Route path="/:subject/units/:unitId" element={<SubjectGuard><UnitPage /></SubjectGuard>} />
        <Route
          path="/search"
          element={
            <Suspense fallback={<div className="chat-loading">Loading…</div>}>
              <SearchPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ProfileDropdown />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
          <AppRoutes />
        </ProgressProvider>
      </AuthProvider>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}
