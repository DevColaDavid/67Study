import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import HomePage from './pages/HomePage';
import SubjectHubPage from './pages/SubjectHubPage';
import UnitPage from './pages/UnitPage';
import WordLabPage from './pages/WordLabPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import AdminPage from './pages/AdminPage';
import ProfileDropdown from './components/ProfileDropdown';

// Lazy: SearchPage eager-globs every unit's markdown into its search index, so it must
// stay out of the main bundle and only load when the user actually opens /search.
const SearchPage = lazy(() => import('./pages/SearchPage'));

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="chat-loading">Loading…</div>;
  if (!user) return <Navigate to={`/login?next=${encodeURIComponent(location.pathname)}`} replace />;
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={
          <AuthGuard>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/:subject" element={<SubjectHubPage />} />
              <Route path="/:subject/vocab" element={<WordLabPage />} />
              <Route path="/:subject/units/:unitId" element={<UnitPage />} />
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
          </AuthGuard>
        } />
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
    </BrowserRouter>
  );
}
