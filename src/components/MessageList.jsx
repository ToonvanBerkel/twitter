import React from 'react';
import Message from './Message.jsx';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <Message key={index} text={message} />
      ))}
    </div>
  );
};

export default MessageList;
