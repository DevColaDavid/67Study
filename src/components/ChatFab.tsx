import { useLocation, useNavigate } from 'react-router-dom';

export default function ChatFab() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/chat' || location.pathname === '/login') return null;

  return (
    <button
      className="chat-fab"
      onClick={() => navigate('/chat')}
      aria-label="Open Study Chat"
      title="Study Chat"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z"/>
      </svg>
    </button>
  );
}
