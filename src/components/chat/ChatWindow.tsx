import { useEffect, useState } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
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
    const q = query(
      collection(db, 'messages'),
      where('room', '==', room),
      orderBy('timestamp', 'asc')
    );
    const unsubscribe = onSnapshot(q, (snap) => {
      setMessages(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Message, 'id'>) }))
      );
    });
    return unsubscribe;
  }, [room]);

  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput room={room} />
    </div>
  );
}
