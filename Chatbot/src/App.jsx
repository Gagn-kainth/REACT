import { useState } from "react"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is June 10",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages
        chatMessages={chatMessages}
      />
    </>
  )
}

export default App