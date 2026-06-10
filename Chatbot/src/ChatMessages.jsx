import userImg from "./assets/user.png";
import botImg from "./assets/bot.png";

function ChatMessage({ message, sender }) {
  return (
    <div>
      {sender === "robot" && (
        <img src={botImg} alt="robot" width={40} />
      )}
      {message}
      {sender === "user" && (
        <img src={userImg} alt="user" width={40} />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </>
  );
}

export default ChatMessages;