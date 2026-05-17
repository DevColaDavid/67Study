import { useEffect, useState, useCallback } from 'react';
import { collection, query, orderBy, limitToLast, onSnapshot, doc, addDoc, Timestamp, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import { Message } from './ChatBubble';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const MESSAGE_LIMIT = 50;

interface Props {
  room: string;
}

export default function ChatWindow({ room }: Props) {
  const { isAdmin, user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkDeleting, setBulkDeleting] = useState(false);

  useEffect(() => {
    setMessages([]);
    setSelectMode(false);
    setSelectedIds(new Set());
    const q = query(
      collection(db, 'rooms', room, 'messages'),
      orderBy('timestamp', 'asc'),
      limitToLast(MESSAGE_LIMIT)
    );
    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        setMessages(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Message, 'id'>) })));
      },
      (err) => console.error('Chat listener error:', err)
    );
    return unsubscribe;
  }, [room]);

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const handleMessageDeleted = useCallback((id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }, []);

  function selectAll() {
    setSelectedIds(new Set(messages.map((m) => m.id)));
  }

  function exitSelectMode() {
    setSelectMode(false);
    setSelectedIds(new Set());
  }

  async function deleteSelected() {
    if (!user || selectedIds.size === 0 || bulkDeleting) return;
    setBulkDeleting(true);
    try {
      const previews = messages
        .filter((m) => selectedIds.has(m.id))
        .map((m) => m.text.slice(0, 40))
        .join(', ');

      const batch = writeBatch(db);
      selectedIds.forEach((id) => batch.delete(doc(db, 'rooms', room, 'messages', id)));
      await batch.commit();

      await addDoc(collection(db, 'rooms', room, 'logs'), {
        action: 'delete_selected',
        adminUid: user.uid,
        adminName: user.displayName ?? 'Admin',
        count: selectedIds.size,
        messagePreview: previews.slice(0, 80),
        messageAuthor: '',
        timestamp: Timestamp.now(),
      });

      exitSelectMode();
    } finally {
      setBulkDeleting(false);
    }
  }

  return (
    <div className="chat-window">
      {isAdmin && (
        <div className="chat-window-toolbar">
          {!selectMode ? (
            <button className="select-mode-btn" onClick={() => setSelectMode(true)}>
              Select messages
            </button>
          ) : (
            <div className="select-toolbar">
              <div className="select-toolbar-left">
                <button className="select-all-btn" onClick={selectAll}>Select All</button>
                <span className="select-count">{selectedIds.size} selected</span>
              </div>
              <div className="select-toolbar-right">
                <button
                  className="delete-selected-btn"
                  onClick={deleteSelected}
                  disabled={selectedIds.size === 0 || bulkDeleting}
                >
                  {bulkDeleting ? 'Deleting…' : `Delete (${selectedIds.size})`}
                </button>
                <button className="select-cancel-btn" onClick={exitSelectMode}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}

      <MessageList
        messages={messages}
        room={room}
        selectMode={selectMode}
        selectedIds={selectedIds}
        onToggle={toggleSelect}
        onDeleted={handleMessageDeleted}
      />

      {!selectMode && <MessageInput room={room} />}
    </div>
  );
}
