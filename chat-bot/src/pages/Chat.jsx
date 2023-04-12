import React from "react";
import Message from "../components/Chat/Message";
import TextBox from "../components/Chat/TextBox";
import Background from "../components/Background";

function Chat () {
  return (
    <>
      <Background/>
      <div 
        className="absolute left-1/3 top-1/4 w-1/3 h-1/2 center bg-white shadow-xl overflow-hidden"
      >
      <header
            className="bg-chat-header text-center text-white"
          > 
            Chat Bot 
          </header>
        <div
          className="absolute w-full h-full center bg-white shadow-xl overflow-auto pb-16"
        >
          <Message type="robot" text="robô falando"/>
          <Message type="user" text="usuário falando"/>
          <Message type="robot" text="robô falando"/>
          <Message type="user" text="usuário falando"/>
          <Message type="robot" text="robô falando"/>
          <Message type="user" text="usuário falando"/>
          <Message type="robot" text="robô falando"/>
          <Message type="user" text="usuário falando"/>
        </div>
          <TextBox/>
      </div>
    </>
  );
}

export default Chat;