import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ChatSection from '../components/admin/ChatSection';
import UsersSection from '../components/admin/UsersSection';

type Tab = 'chat' | 'users';

export default function AdminPage() {
  const { isAdmin, isSuperAdmin } = useAuth();
  const [tab, setTab] = useState<Tab>('chat');

  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <main className="admin-page">
      <div className="admin-topnav">
        <Link to="/" className="chat-back">← Home</Link>
        <span className="admin-topnav-title">Admin Panel</span>
        {isSuperAdmin && <span className="admin-badge">Superadmin</span>}
      </div>

      <div className="admin-layout">
        <nav className="admin-sidebar">
          <button
            className={`admin-nav-tab${tab === 'chat' ? ' admin-nav-tab--active' : ''}`}
            onClick={() => setTab('chat')}
          >
            💬 Chat
          </button>
          {isSuperAdmin && (
            <button
              className={`admin-nav-tab${tab === 'users' ? ' admin-nav-tab--active' : ''}`}
              onClick={() => setTab('users')}
            >
              👥 Users
            </button>
          )}
        </nav>

        <div className="admin-content">
          {tab === 'chat' && <ChatSection />}
          {tab === 'users' && isSuperAdmin && <UsersSection />}
        </div>
      </div>
    </main>
  );
}
