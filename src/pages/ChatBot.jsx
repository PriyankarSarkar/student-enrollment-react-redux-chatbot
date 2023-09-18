import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./style.css";

import config from "../chatbot/config.jsx";
import MessageParser from "../chatbot/MessageParser.jsx";
import ActionProvider from "../chatbot/ActionProvider.jsx";

const ChatBot = () => {
  return (
    <div className="body">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBot;
