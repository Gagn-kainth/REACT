import { useState } from "react";
import { Chatbot } from "supersimpledev";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputs(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);  

    setChatMessages([
     ...newChatMessages,
      { 
        message: response, sender: "robot", id: crypto.randomUUID() 
      },
    ]);
    setInputText('');
  }
  
  return (
    <>
      <input
        value={inputText}
        placeholder="Send a message to Chatbot"
        size={30}
        onChange={saveInputs}
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default ChatInput;