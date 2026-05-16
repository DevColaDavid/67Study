import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { Message } from './ChatBubble';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

interface Props {
  room: string;
}

export default function ChatWindow({ room }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([]); // clear stale messages immediately when room changes
    const q = query(
      collection(db, 'messages'),
      where('room', '==', room)
      // no orderBy here — Firestore requires a composite index for where+orderBy
      // on different fields; we sort client-side instead
    );
    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        const msgs = snap.docs.map(
          (d) => ({ id: d.id, ...(d.data() as Omit<Message, 'id'>) })
        );
        msgs.sort((a, b) => (a.timestamp?.seconds ?? 0) - (b.timestamp?.seconds ?? 0));
        setMessages(msgs);
      },
      (err) => console.error('Chat listener error:', err)
    );
    return unsubscribe;
  }, [room]);

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput room={room} />
    </div>
  );
}
