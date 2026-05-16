import { useEffect, useState } from 'react';
import {
  collection, query, where, orderBy, onSnapshot,
  getDocs, writeBatch, addDoc, serverTimestamp, Timestamp,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';

interface LogEntry {
  id: string;
  action: 'delete_message' | 'delete_all';
  adminName: string;
  room: string;
  count: number;
  messagePreview: string;
  messageAuthor: string;
  timestamp: { seconds: number } | null;
}

interface Props {
  room: string;
}

function formatTs(ts: { seconds: number } | null): string {
  if (!ts) return '—';
  return new Date(ts.seconds * 1000).toLocaleString();
}

function roomLabel(room: string): string {
  if (room === 'global') return 'Global';
  return room.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function AdminPanel({ room }: Props) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'actions' | 'logs'>('actions');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, 'admin_logs'),
      where('room', '==', room),
      orderBy('timestamp', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snap) => {
      setLogs(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<LogEntry, 'id'>) })));
    });
    return unsubscribe;
  }, [room]);

  async function handleDeleteAll() {
    if (!user || deleting) return;
    setDeleting(true);
    try {
      const snap = await getDocs(
        query(collection(db, 'messages'), where('room', '==', room))
      );
      const batch = writeBatch(db);
      snap.docs.forEach((d) => batch.delete(d.ref));
      await batch.commit();
      await addDoc(collection(db, 'admin_logs'), {
        action: 'delete_all',
        adminUid: user.uid,
        adminName: user.displayName ?? 'Admin',
        room,
        count: snap.size,
        messagePreview: '',
        messageAuthor: '',
        timestamp: serverTimestamp(),
      });
    } finally {
      setDeleting(false);
      setConfirming(false);
    }
  }

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <span className="admin-badge">Admin</span>
        <div className="admin-tabs">
          <button
            className={`admin-tab${activeTab === 'actions' ? ' admin-tab--active' : ''}`}
            onClick={() => setActiveTab('actions')}
          >
            Actions
          </button>
          <button
            className={`admin-tab${activeTab === 'logs' ? ' admin-tab--active' : ''}`}
            onClick={() => setActiveTab('logs')}
          >
            Logs
          </button>
        </div>
      </div>

      {activeTab === 'actions' && (
        <div className="admin-actions">
          {!confirming ? (
            <button className="admin-danger-btn" onClick={() => setConfirming(true)}>
              Delete All Messages in {roomLabel(room)}
            </button>
          ) : (
            <div className="admin-confirm">
              <p>Delete all messages in <strong>{roomLabel(room)}</strong>? This cannot be undone.</p>
              <div className="admin-confirm-btns">
                <button className="admin-danger-btn" onClick={handleDeleteAll} disabled={deleting}>
                  {deleting ? 'Deleting…' : 'Yes, delete all'}
                </button>
                <button className="admin-cancel-btn" onClick={() => setConfirming(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="admin-log-list">
          {logs.length === 0 ? (
            <p className="admin-log-empty">No actions logged for this room yet.</p>
          ) : (
            logs.map((log) => (
              <div key={log.id} className="log-entry">
                <span className={`log-action-badge log-action-badge--${log.action}`}>
                  {log.action === 'delete_all' ? 'delete all' : 'delete'}
                </span>
                <div className="log-entry-body">
                  <span className="log-admin">{log.adminName}</span>
                  {log.action === 'delete_all' ? (
                    <span className="log-detail">deleted {log.count} message{log.count !== 1 ? 's' : ''}</span>
                  ) : (
                    <span className="log-detail">
                      deleted message by <em>{log.messageAuthor}</em>
                      {log.messagePreview ? `: "${log.messagePreview}"` : ''}
                    </span>
                  )}
                  <span className="log-time">{formatTs(log.timestamp)}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
