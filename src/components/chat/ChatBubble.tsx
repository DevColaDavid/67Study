import { useState } from 'react';
import { deleteDoc, doc, addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';

export interface Message {
  id: string;
  text: string;
  uid: string;
  displayName: string;
  photoURL: string;
  room: string;
  timestamp: { seconds: number } | null;
}

interface Props {
  message: Message;
  isOwn: boolean;
  showAvatar: boolean;
}

function formatTime(ts: { seconds: number } | null): string {
  if (!ts) return '';
  return new Date(ts.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatBubble({ message, isOwn, showAvatar }: Props) {
  const { isAdmin, user } = useAuth();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!user || deleting) return;
    setDeleting(true);
    try {
      await deleteDoc(doc(db, 'messages', message.id));
      await addDoc(collection(db, 'admin_logs'), {
        action: 'delete_message',
        adminUid: user.uid,
        adminName: user.displayName ?? 'Admin',
        room: message.room,
        count: 1,
        messagePreview: message.text.slice(0, 80),
        messageAuthor: message.displayName,
        timestamp: Timestamp.now(),
      });
    } catch {
      setDeleting(false);
    }
  }

  return (
    <div className={`chat-bubble${isOwn ? ' chat-bubble--own' : ''}`}>
      {!isOwn && (
        <div className="bubble-avatar-col">
          {showAvatar ? (
            <img className="bubble-avatar" src={message.photoURL} alt={message.displayName} referrerPolicy="no-referrer" />
          ) : (
            <div className="bubble-avatar-gap" />
          )}
        </div>
      )}
      <div className="bubble-body">
        {showAvatar && !isOwn && (
          <span className="bubble-name">{message.displayName}</span>
        )}
        <div className="bubble-row">
          <div className="bubble-text">{message.text}</div>
          {isAdmin && (
            <button
              className="bubble-delete"
              onClick={handleDelete}
              disabled={deleting}
              title="Delete message"
              aria-label="Delete message"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4h6v2"/>
              </svg>
            </button>
          )}
        </div>
        <span className="bubble-time">{formatTime(message.timestamp)}</span>
      </div>
      {isOwn && (
        <div className="bubble-avatar-col">
          {showAvatar ? (
            <img className="bubble-avatar" src={message.photoURL} alt={message.displayName} referrerPolicy="no-referrer" />
          ) : (
            <div className="bubble-avatar-gap" />
          )}
        </div>
      )}
    </div>
  );
}
