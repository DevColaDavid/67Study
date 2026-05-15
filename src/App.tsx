import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubjectHubPage from './pages/SubjectHubPage';
import UnitPage from './pages/UnitPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:subject" element={<SubjectHubPage />} />
        <Route path="/:subject/units/:unitId" element={<UnitPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
