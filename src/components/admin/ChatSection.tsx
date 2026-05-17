import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, getDocs, writeBatch, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { SUBJECTS } from '../../data/subjects';

const ROOMS = [
  { id: 'global', label: 'Global' },
  ...SUBJECTS.map((s) => ({ id: s.slug, label: s.name })),
];

interface LogEntry {
  id: string;
  action: string;
  adminName: string;
  count: number;
  messagePreview: string;
  messageAuthor: string;
  timestamp: { seconds: number } | null;
}

interface Message {
  id: string;
  text: string;
  displayName: string;
  timestamp: { seconds: number } | null;
}

function formatTs(ts: { seconds: number } | null) {
  if (!ts) return '—';
  return new Date(ts.seconds * 1000).toLocaleString();
}

function roomLabel(id: string) {
  return ROOMS.find((r) => r.id === id)?.label ?? id;
}

export default function ChatSection() {
  const { user } = useAuth();
  const [room, setRoom] = useState('global');
  const [messages, setMessages] = useState<Message[]>([]);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setMessages([]);
    const q = query(collection(db, 'rooms', room, 'messages'), orderBy('timestamp', 'asc'));
    const unsub = onSnapshot(q,
      (snap) => setMessages(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Message, 'id'>) }))),
      (err) => console.error('ChatSection messages error:', err)
    );
    return unsub;
  }, [room]);

  useEffect(() => {
    setLogs([]);
    const q = query(collection(db, 'rooms', room, 'logs'), orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q,
      (snap) => setLogs(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<LogEntry, 'id'>) }))),
      (err) => console.error('ChatSection logs error:', err)
    );
    return unsub;
  }, [room]);

  async function deleteAll() {
    if (!user || deleting) return;
    setDeleting(true);
    try {
      const snap = await getDocs(collection(db, 'rooms', room, 'messages'));
      const batch = writeBatch(db);
      snap.docs.forEach((d) => batch.delete(d.ref));
      await batch.commit();
      await addDoc(collection(db, 'rooms', room, 'logs'), {
        action: 'delete_all',
        adminUid: user.uid,
        adminName: user.displayName ?? 'Admin',
        count: snap.size,
        messagePreview: '',
        messageAuthor: '',
        timestamp: Timestamp.now(),
      });
    } finally {
      setDeleting(false);
      setConfirming(false);
    }
  }

  return (
    <div className="chat-section">
      <h2 className="admin-section-title">Chat Moderation</h2>

      <div className="admin-room-selector">
        {ROOMS.map((r) => (
          <button
            key={r.id}
            className={`admin-room-tab${room === r.id ? ' admin-room-tab--active' : ''}`}
            onClick={() => { setRoom(r.id); setConfirming(false); }}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="chat-section-body">
        <div className="chat-section-messages">
          <div className="chat-section-messages-header">
            <span className="admin-section-subtitle">
              {messages.length} message{messages.length !== 1 ? 's' : ''} in {roomLabel(room)}
            </span>
            {!confirming ? (
              <button className="admin-danger-btn" onClick={() => setConfirming(true)} disabled={messages.length === 0}>
                Delete All
              </button>
            ) : (
              <div className="admin-confirm-inline">
                <span>Delete all {messages.length} messages?</span>
                <button className="admin-danger-btn" onClick={deleteAll} disabled={deleting}>
                  {deleting ? 'Deleting…' : 'Confirm'}
                </button>
                <button className="admin-cancel-btn" onClick={() => setConfirming(false)}>Cancel</button>
              </div>
            )}
          </div>
          <div className="chat-section-message-list">
            {messages.length === 0 ? (
              <p className="admin-empty">No messages in this room.</p>
            ) : (
              messages.map((m) => (
                <div key={m.id} className="chat-section-message-row">
                  <span className="csm-name">{m.displayName}</span>
                  <span className="csm-text">{m.text}</span>
                  <span className="csm-time">{formatTs(m.timestamp)}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="chat-section-logs">
          <span className="admin-section-subtitle">Action Log</span>
          <div className="admin-log-list">
            {logs.length === 0 ? (
              <p className="admin-log-empty">No actions logged.</p>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="log-entry">
                  <span className={`log-action-badge log-action-badge--${log.action}`}>
                    {log.action.replace('_', ' ')}
                  </span>
                  <div className="log-entry-body">
                    <span className="log-admin">{log.adminName}</span>
                    <span className="log-detail">
                      {log.action === 'delete_all'
                        ? `deleted all (${log.count})`
                        : log.action === 'delete_selected'
                        ? `deleted ${log.count} selected`
                        : `deleted msg by ${log.messageAuthor}`}
                    </span>
                    <span className="log-time">{formatTs(log.timestamp)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
