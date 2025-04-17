import React, { useState } from 'react';
import '../styles/messages.css';

const conversations = [
  { id: 1, name: 'Andreea Popescu', company: 'Tech Solutions', lastMessage: 'Ne-ar plăcea să discutăm mai multe detalii.', timestamp: '10:45' },
  { id: 2, name: 'Mihai Ionescu', company: 'Creative Agency', lastMessage: 'Interviul este programat pentru joi.', timestamp: '09:20' },
  { id: 3, name: 'Ioana Georgescu', company: 'Visionary Labs', lastMessage: 'Mulțumim pentru aplicație!', timestamp: 'Luni' },
];

const messagesMock = {
  1: [
    { sender: 'employer', text: 'Salut! Mulțumim pentru aplicație.', time: '10:30' },
    { sender: 'user', text: 'Bună ziua! Mulțumesc și eu!', time: '10:31' },
    { sender: 'employer', text: 'Ne-ar plăcea să discutăm mai multe detalii.', time: '10:45' },
  ],
  2: [
    { sender: 'employer', text: 'Interviul este programat pentru joi.', time: '09:20' },
  ],
  3: [
    { sender: 'employer', text: 'Mulțumim pentru aplicație!', time: 'Luni' },
  ],
};

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const currentMessages = messagesMock[selectedConversation.id] || [];

  const handleSend = () => {
    if (newMessage.trim()) {
      currentMessages.push({ sender: 'user', text: newMessage, time: 'Acum' });
      setNewMessage('');
    }
  };

  return (
    <>
      <button className="toggle-chat-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      <div className={`messages-widget ${isOpen ? 'open' : 'hidden'}`}>
        <div className="chat-sidebar">
          <h5>Conversații</h5>
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`conversation ${conv.id === selectedConversation.id ? 'active' : ''}`}
              onClick={() => setSelectedConversation(conv)}
            >
              <div className="conversation-header">
                <strong>{conv.name}</strong>
                <span className="timestamp">{conv.timestamp}</span>
              </div>
              <small className="text-muted">{conv.lastMessage}</small>
            </div>
          ))}
        </div>

        <div className="chat-content">
          <div className="chat-header">
            <h6>{selectedConversation.name} - {selectedConversation.company}</h6>
            <button className="close-chat" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chat-messages">
            {currentMessages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-text">{msg.text}</div>
                <div className="message-time">{msg.time}</div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Scrie un mesaj..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Trimite</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
