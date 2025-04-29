import React, { useState } from 'react';
import LandingPage from './components/LadingPage';
import ChatPage from './components/ChatPage';
import './components/ChatPage';

function App() {
  const [inChat, setInChat] = useState(false);
  const handleLeaveChat = () => {
    setInChat(false);
  };
    
  return (
    <div className="App">
      {inChat ? (
        <ChatPage onLeaveChat={handleLeaveChat} />
      ) : (
        <LandingPage onEnterChat={() => setInChat(true)} />
      )}
    </div>
  );
}

export default App;

