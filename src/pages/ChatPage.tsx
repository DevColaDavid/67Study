import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import RoomSelector from '../components/chat/RoomSelector';
import ChatWindow from '../components/chat/ChatWindow';
import AdminPanel from '../components/chat/AdminPanel';

export default function ChatPage() {
  const { user, isAdmin, signOut } = useAuth();
  const [room, setRoom] = useState('global');

  return (
    <main className="chat-page">
      <div className="chat-topnav">
        <Link to="/" className="chat-back">← Home</Link>
        <span className="chat-topnav-title">Study Chat</span>
        <div className="chat-topnav-right">
          {isAdmin && (
            <Link to="/admin" className="chat-admin-link">Admin Panel</Link>
          )}
          <img
            className="chat-user-avatar"
            src={user.photoURL ?? ''}
            alt={user.displayName ?? ''}
            referrerPolicy="no-referrer"
          />
          <span className="chat-user-name">{user.displayName}</span>
          <button className="chat-signout-btn" onClick={signOut}>Sign out</button>
        </div>
      </div>

      <RoomSelector room={room} onRoomChange={setRoom} />

      <div className="chat-body">
        <ChatWindow room={room} />
        {isAdmin && <AdminPanel room={room} />}
      </div>
    </main>
  );
}
