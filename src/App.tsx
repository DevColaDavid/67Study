import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import SubjectHubPage from './pages/SubjectHubPage';
import UnitPage from './pages/UnitPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import ChatFab from './components/ChatFab';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/:subject" element={<SubjectHubPage />} />
          <Route path="/:subject/units/:unitId" element={<UnitPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ChatFab />
      </AuthProvider>
    </BrowserRouter>
  );
}
