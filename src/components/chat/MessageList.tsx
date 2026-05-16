import { useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import ChatBubble, { Message } from './ChatBubble';

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
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
            isOwn={isOwn}
            showAvatar={showAvatar}
          />
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}
