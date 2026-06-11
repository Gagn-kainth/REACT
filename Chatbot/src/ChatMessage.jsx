import userImg from "./assets/user.png";
import botImg from "./assets/bot.png";
import "./ChatMessage.css";

function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "user"
          ? "chat-message-user"
          : "chat-message-robot"
      }>
      {sender === "robot" && <img src={botImg} alt="robot" className="chat-message-profile" />}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === "user" && <img src={userImg} alt="user" className="chat-message-profile" />}
    </div>
  );
}

export default ChatMessage;
