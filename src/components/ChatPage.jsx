import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatPage.css'; // Importe o arquivo CSS


function ChatPage({ onLeaveChat}) {
  const [messages, setMessages] = useState([
    { user: "Sistema", text: "Bem-vindo ao chat da FURIA!" },
  ]);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatContainerRef = useRef(null);
  const [showSettings, setShowSettings] = useState(false); 
  const [nicknameColor, setNicknameColor] = useState('#ffed4a');
  const [username, setUsername] = useState('Você');
  const [avatar, setAvatar] = useState('😊'); 

  useEffect(() => {
    const timer = setInterval(() => {
      const updates = [
        "FURIA 1 x 0 [Adversário] 🔥",
        "Clutch incrível de [Jogador]! 🏆",
        "Próximo jogo AO VIVO em 1 hora!",
        "Participe da nossa enquete!",
      ];
      const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
      setMessages(prev => [...prev, { user: "Sistema", text: randomUpdate }]);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  function sendMessage() {
    if (input.trim() === "") return;
    setMessages(prev => [...prev, { user: username, text: input, color: nicknameColor }]);
    setInput("");
    setShowEmojiPicker(false);
}

  const onEmojiClick = (emojiData, event) => {
    if (emojiData) {
      setInput(prevInput => prevInput + emojiData.emoji);
      setShowEmojiPicker(false);
    }
  };

  function toggleEmojiPicker() {
    setShowEmojiPicker(prev => !prev);
  }

  const toggleSettings = () => {
    setShowSettings(prev => !prev);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value); // Por enquanto, aceitando texto como avatar (pode ser um emoji)
    // Para seleção de avatar mais complexa (lista de imagens), precisaremos de uma UI diferente
  };

  const handleBackOrLeave = () => {
    // implementar a lógica para voltar ao início ou sair do chat
   // alert('Funcionalidade de Voltar/Sair implementada aqui!');
   onLeaveChat()
 };

  return (
    <div className="chat-container">
         <div className="chat-header"> {/* Menu superior */}
        <button onClick={handleBackOrLeave} className="header-button">Voltar/Sair</button>
        <button onClick={toggleSettings} className="header-button">⚙️</button> {/* Ícone de configurações */}
      </div>

      {showSettings && (
        <div className="settings-panel">
          <h3>Personalizar</h3>
          <div className="setting-item">
            <label htmlFor="username">Nome de Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="setting-item">
            <label htmlFor="avatar">Avatar:</label>
            <input
              type="text"
              id="avatar"
              value={avatar}
              onChange={handleAvatarChange}
              placeholder="Use um emoji"
            />
            {/* No futuro, aqui poderia haver uma lista de avatares para escolher */}
          </div>
        </div>
      )}

  {/* AQUI COMEÇA O VÍDEO */}
  <div className="video-container">
    <iframe
      width="100%"
      height="500"
      src="https://www.youtube.com/watch?v=IE-rdJ0Rg6o"
      title="Transmissão ao Vivo"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
  {/* AQUI TERMINA O VÍDEO */}

     <div ref={chatContainerRef} className="message-area">
    {messages.slice().reverse().map((msg, index) => (
        <div key={index} className={`message ${msg.user === 'Sistema' ? 'system-message' : (msg.user === username ? 'my-message' : '')}`}>
            <span className="avatar">
                {/* ... código para exibir o avatar ... */}
            </span>
            <strong style={{ color: msg.color }}>{msg.user}:</strong> <span>{msg.text}</span>
        </div>
        
    ))}
</div>
      <div className="input-area">
        <button onClick={toggleEmojiPicker} className="emoji-button">
          😊
        </button>
        <input
          className="message-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Digite sua mensagem..."
        />
        <button
          onClick={sendMessage}
          className="send-button"
        >
          Enviar
        </button>
      </div>
      {showEmojiPicker && (
        <div className="emoji-picker-container">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}

export default ChatPage;