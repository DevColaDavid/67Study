import { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

interface LogEntry {
  id: string;
  action: 'delete_message' | 'delete_selected' | 'delete_all';
  adminName: string;
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

const actionLabel = (action: LogEntry['action']) => {
  if (action === 'delete_all') return 'delete all';
  if (action === 'delete_selected') return 'bulk delete';
  return 'delete';
};

export default function AdminPanel({ room }: Props) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, 'rooms', room, 'logs'),
      orderBy('timestamp', 'desc'),
      limit(30)
    );
    const unsubscribe = onSnapshot(
      q,
      (snap) => setLogs(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<LogEntry, 'id'>) }))),
      (err) => console.error('Admin log listener error:', err)
    );
    return unsubscribe;
  }, [room]);

  return (
    <div className={`admin-panel${open ? ' admin-panel--open' : ''}`}>
      <button className="admin-panel-header" onClick={() => setOpen((o) => !o)}>
        <span className="admin-badge">Admin</span>
        <span className="admin-panel-label">
          Action Log{logs.length > 0 ? ` (${logs.length})` : ''}
        </span>
        <svg
          className={`admin-panel-chevron${open ? ' admin-panel-chevron--up' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="admin-log-list">
          {logs.length === 0 ? (
            <p className="admin-log-empty">No actions logged for this room yet.</p>
          ) : (
            logs.map((log) => (
              <div key={log.id} className="log-entry">
                <span className={`log-action-badge log-action-badge--${log.action}`}>
                  {actionLabel(log.action)}
                </span>
                <div className="log-entry-body">
                  <span className="log-admin">{log.adminName}</span>
                  {log.action === 'delete_all' ? (
                    <span className="log-detail">deleted all messages ({log.count})</span>
                  ) : log.action === 'delete_selected' ? (
                    <span className="log-detail">deleted {log.count} selected message{log.count !== 1 ? 's' : ''}</span>
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
