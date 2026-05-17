import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
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

export default function AdminPanel({ room }: Props) {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    // subcollection per room — no composite index needed
    const q = query(
      collection(db, 'rooms', room, 'logs'),
      orderBy('timestamp', 'desc')
    );
    const unsubscribe = onSnapshot(
      q,
      (snap) => setLogs(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<LogEntry, 'id'>) }))),
      (err) => console.error('Admin log listener error:', err)
    );
    return unsubscribe;
  }, [room]);

  const actionLabel = (action: LogEntry['action']) => {
    if (action === 'delete_all') return 'delete all';
    if (action === 'delete_selected') return 'bulk delete';
    return 'delete';
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <span className="admin-badge">Admin</span>
        <span className="admin-panel-label">Action Log</span>
      </div>
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
    </div>
  );
}
