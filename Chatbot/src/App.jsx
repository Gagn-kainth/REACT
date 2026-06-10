import ChatInput from "./Chatinput"
import ChatMessage from "./ChatMessage"

function App() {
  

  return (
    <>
    <ChatInput/>
    <ChatMessage message="hello chatbot" sender="user"/>
    <ChatMessage message="Hello! How can I help you? "sender="robot"/>
    <ChatMessage message="can you get me todays date" sender="user"/>
    <ChatMessage message="Today is June 10"sender="robot"/>
    </>
  )
}

export default App
