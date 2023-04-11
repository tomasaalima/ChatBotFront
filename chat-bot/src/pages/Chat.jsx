import React from "react";
import Message from "../components/Chat/Message";
import TextBox from "../components/Chat/TextBox";

function Chat () {
  return (
    <>
      <div
        className="absolute left-1/3 top-1/4 w-1/3 h-1/2 center bg-white shadow-xl overflow-auto"
      >
        <header
          className="bg-chat-header text-center text-white"
        > 
          Chat Bot 
        </header>

        <Message type="robot" text="robô falando"/>
        <Message type="user" text="usuário falando"/>
        <Message type="robot" text="robô falando"/>
        <Message type="user" text="usuário falando"/>
        <Message type="robot" text="robô falando"/>
        <Message type="user" text="usuário falando"/>
        <Message type="robot" text="robô falando"/>
        <Message type="user" text="usuário falando"/>

        <TextBox/>
      </div>
    </>
  );
}

export default Chat;