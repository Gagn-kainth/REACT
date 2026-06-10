import userImg from "./assets/user.png";
import botImg from "./assets/bot.png";
function ChatMessage({ message, sender }) {
  //   const message = props.message;
  //   const sender = props.sender;

  //const{message,sender}=props;

  /*  if (sender === "robot") {
    return (
      <div>
        <img src={botImg} alt="robot" width={40} />
        {message}
      </div>
    );
  }
*/
  return (
    <div>
      {sender === "robot" && <img src={botImg} alt="robot" width={40} />}
      {message}
      {sender === "user" && <img src={userImg} alt="user" width={40} />}
    </div>
  );
}

export default ChatMessage;
