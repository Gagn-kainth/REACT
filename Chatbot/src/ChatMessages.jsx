import userImg from "./assets/user.png";
import botImg from "./assets/bot.png";
import { useEffect,useRef } from "react";

function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "user" 
          ? "chat-message-user" 
          : "chat-message-robot"
       }>
      {sender === "robot" && <img src={botImg} alt="robot" className="chat-message-profile"/>}
    <div className="chat-message-text">
      {message}
    </div>
      {sender === "user" && <img src={userImg} alt="user" className="chat-message-profile"/>}
    </div>
  );
}

function ChatMessages({ chatMessages }) {

  const chatMessagesRef = useRef(null);
   
    useEffect(()=>{
    const containerElem = chatMessagesRef.current;
    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
      },[chatMessages])
 
  return (

    <div  
      className="chat-messages-container"
      ref={chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
