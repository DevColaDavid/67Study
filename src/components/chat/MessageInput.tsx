import { useState, useRef, KeyboardEvent } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';

interface Props {
  room: string;
}

export default function MessageInput({ room }: Props) {
  const { user } = useAuth();
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function send() {
    const trimmed = text.trim();
    if (!trimmed || !user || sending) return;
    setSending(true);
    setText('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
    try {
      await addDoc(collection(db, 'messages'), {
        text: trimmed,
        uid: user.uid,
        displayName: user.displayName ?? 'Anonymous',
        photoURL: user.photoURL ?? '',
        room,
        timestamp: serverTimestamp(),
      });
    } finally {
      setSending(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function handleInput() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
  }

  return (
    <div className="message-input-row">
      <textarea
        ref={textareaRef}
        className="message-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        placeholder="Message… (Enter to send, Shift+Enter for newline)"
        rows={1}
        disabled={sending}
      />
      <button
        className="send-btn"
        onClick={send}
        disabled={!text.trim() || sending}
        aria-label="Send message"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </div>
  );
}
