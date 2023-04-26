import React from "react";
import Message from "../components/Chat/Message";
import TextBox from "../components/Chat/TextBox";
import Background from "../components/Background";
import NavBar from "../components/NavBar";

function Chat () {
  return (
    <>
      <NavBar/>
      <Background/>
      <div 
        className="absolute center bg-white shadow-xl overflow-hidden
        mobile:left-1/10 mobile:top-1/4 mobile:w-4/5 mobile:h-1/2
        desktop:left-1/4 desktop:top-1/4 desktop:w-1/2 desktop:h-1/2
        "
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