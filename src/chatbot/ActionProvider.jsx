import React from "react";
import { createClientMessage, createCustomMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //helper function to insert client message to state (takes client-message as parameter)
  const mapClientMessageToState = (message) => {
    const clientMessage = createClientMessage(message);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
  };

  //helper function to insert custom bot message to state (takes registered-custom-message name as parameter)
  const mapCustomMessageToState = (type) => {
    const botMessage = createCustomMessage(`Bot message for ${type}`, type);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGotit = (message) => {
    mapClientMessageToState(message);
    mapCustomMessageToState("Bookslot");
  };

  const handleSlotConfirmByClient = (message) => {
    mapClientMessageToState(message);
    mapCustomMessageToState("NameInput");
  };

  const handleConfirmName = (message) => {
    mapClientMessageToState(message);
    mapCustomMessageToState("AgeInput");
  };

  const handleExit = (message) => {
    mapClientMessageToState(message);
    mapCustomMessageToState("BotExit");
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotit,
            handleSlotConfirmByClient,
            handleConfirmName,
            handleExit
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
