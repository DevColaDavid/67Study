import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import RoomSelector from '../components/chat/RoomSelector';
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
          <Link to="/admin" className="chat-admin-link">Admin Panel</Link>
        )}
      </div>

      <RoomSelector room={room} onRoomChange={setRoom} />

      <div className="chat-body">
        <ChatWindow room={room} />
        {isAdmin && <AdminPanel room={room} />}
      </div>
    </main>
  );
}
