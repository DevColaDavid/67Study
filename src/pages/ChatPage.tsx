import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SUBJECTS } from '../data/subjects';
import ChatWindow from '../components/chat/ChatWindow';
import AdminPanel from '../components/chat/AdminPanel';

export default function ChatPage() {
  const { isAdmin } = useAuth();
  const [room, setRoom] = useState('global');

  return (
    <main className="chat-page">
      <div className="chat-topnav">
        <Link to="/" className="chat-back">← Home</Link>
        <span className="chat-topnav-title">Study Chat</span>
        {isAdmin && (
          <Link to="/admin" className="chat-admin-link">Admin</Link>
        )}
      </div>

      <div className="chat-layout">
        <nav className="chat-sidebar">
          <button
            className={`chat-sidebar-tab${room === 'global' ? ' chat-sidebar-tab--active' : ''}`}
            onClick={() => setRoom('global')}
          >
            💬 Global
          </button>
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              className={`chat-sidebar-tab${room === s.slug ? ' chat-sidebar-tab--active' : ''}`}
              onClick={() => setRoom(s.slug)}
            >
              {s.name}
            </button>
          ))}
        </nav>

        <div className="chat-body">
          <ChatWindow room={room} />
          {isAdmin && <AdminPanel room={room} />}
        </div>
      </div>
    </main>
  );
}
