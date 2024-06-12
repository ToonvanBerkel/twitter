import React, { useState } from 'react';

const CreateMessage = ({ addMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type your message" 
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default CreateMessage;
