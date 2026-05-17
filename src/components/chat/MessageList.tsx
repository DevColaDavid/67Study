import { useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import ChatBubble, { Message } from './ChatBubble';

interface Props {
  messages: Message[];
  room: string;
  selectMode: boolean;
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
  onDeleted: (id: string) => void;
}

export default function MessageList({ messages, room, selectMode, selectedIds, onToggle, onDeleted }: Props) {
  const { user } = useAuth();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="message-list message-list--empty">
        <p>No messages yet. Say hello!</p>
      </div>
    );
  }

  return (
    <div className="message-list">
      {messages.map((msg, i) => {
        const prev = messages[i - 1];
        const isOwn = msg.uid === user?.uid;
        const showAvatar = !prev || prev.uid !== msg.uid;
        return (
          <ChatBubble
            key={msg.id}
            message={msg}
            room={room}
            isOwn={isOwn}
            showAvatar={showAvatar}
            selectMode={selectMode}
            selected={selectedIds.has(msg.id)}
            onToggle={() => onToggle(msg.id)}
            onDeleted={() => onDeleted(msg.id)}
          />
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}
