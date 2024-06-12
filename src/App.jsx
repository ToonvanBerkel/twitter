import React, { useState } from 'react';
import CreateMessage from './components/CreateMessage.jsx';
import MessageList from './components/MessageList.jsx';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <CreateMessage addMessage={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;