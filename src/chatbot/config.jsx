import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import Gotit from "./Gotit";
import Bookslot from "./Bookslot";
import Input from "./Input";
import BotExit from "./BotExit";

const botName = "HappilyEver";

const config = {
  initialMessages: [createCustomMessage("Gotit message", "Gotit")],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customMessages: {
    Gotit: (props) => <Gotit {...props} />,
    Bookslot: (props) => <Bookslot {...props} />,

    NameInput: (props) => { 
      const customProps = {...props, inputType:"NameInput"};
      return <Input {...customProps} />
    },

    AgeInput: (props) => { 
      const customProps = {...props, inputType:"AgeInput"};
      return <Input {...customProps} />
    },
    BotExit: (props) => <BotExit {...props} />,
  },
};

export default config;
