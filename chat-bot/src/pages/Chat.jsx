import React, { useState, useEffect }  from "react";
import axios from "axios";
import Message from "../components/Chat/Message";
import TextBox from "../components/Chat/TextBox";
import Loading from "../components/Chat/Loading";
import Background from "../components/Background";
import NavBar from "../components/NavBar";


function Chat () {
  const [hello, setHello] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [userMSG, setUserMSG] = useState({'type': '', 'text': ''});
  const [ subject, setSubject ] = useState({'theme': '', 'length': 2});
  const [ search, setSearch ] = useState();
  const [ questions, setQuestions ] = useState([]);
  
  useEffect(() => {
    //Consultar mensagem de saudação
    axios.get('http://localhost:8000/api/hello')
    .then(response => setHello((response.data)));
    
  }, []);

  useEffect(() => {
    if (userMSG.type !== '') {
      setConversation([...conversation, dialogueGen(userMSG.type, userMSG.text)]);
    }
  }, [userMSG]);

  useEffect(() => {
    if (subject.theme !== '') {
      axios.get('http://127.0.0.1:8000/api/keywords/fluxo/hatunamatata ontem manha login acessar fluxo teste')
    .then(response => setQuestions((response.data)));
    }
  }, [search]);

  useEffect(() => {
    if (conversation.length === subject.length) {
      switch(userMSG.text) {
        case '1' : {
          setSubject({'theme': 'fluxo', 'length': subject.length});
          break;
        }
        case '2' : {
          setSubject({'theme': 'edital', 'length': subject.length});
          break;
        }
        case '3' : {
          setSubject({'theme': 'documentação', 'length': subject.length});
          break;
        }
        default: {
          setConversation([...conversation, dialogueGen("robot", "Digite: </br>'1' para falar sobre 'fluxo' </br>'2' para falar sobre 'editais' </br>'3' para falar sobre 'Documentação'")]);
          setSubject({'theme': '', 'length': subject.length + 2});
          break;
      }
      }
    }
  }, [conversation]);
  
  useEffect(() => {
    if (subject.theme !== '') {
      setConversation([...conversation, dialogueGen('robot', 'Descreva de maneira breve o problema que está enfrentando')])
    }
  }, [subject]);

  useEffect(() => {
    if (hello.resposta !== undefined) {
      //Renderizar primeira mensagem
      setConversation([...conversation, dialogueGen("robot", hello.resposta)]);
    } 
    // else if (!hello.resposta) {
    //   setConversation([...conversation, loading()]);
    // }
  }, [hello.resposta]);

  const loading = () => {
    return (
      <Loading/>
    );
  }
  
  const dialogueGen = (type, text) => {
    return (
      <Message type={type} text={text}/>
      )
    }

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
          {conversation}
        </div>
        <TextBox setUserMSG={setUserMSG}/>
      </div>
    </>
  );
}

export default Chat;