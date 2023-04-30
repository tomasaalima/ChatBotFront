import React, { useState, useEffect }  from "react";
import axios from "axios";
import Message from "../components/Chat/Message";
import TextBox from "../components/Chat/TextBox";
import Loading from "../components/Chat/Loading";
import Background from "../components/Background";
import NavBar from "../components/NavBar";

function Chat () {
  const [ hello, setHello ] = useState([]);
  const [ conversation, setConversation ] = useState([]);
  const [ userMSG, setUserMSG ] = useState({'type': '', 'text': ''});
  const [ subject, setSubject ] = useState({'theme': '', 'length': 2});
  const [ ReadyToSearch, setReadyToSearch ] = useState(false);
  const [ search, setSearch ] = useState('');
  const [ questions, setQuestions ] = useState([]);
  
  //Consultar mensagem de saudação
  useEffect(() => {
    axios.get('http://localhost:8000/api/hello')
    .then(response => setHello((response.data)))
    .catch(error => {
      setConversation([...conversation, loading()]);
    });
  }, []);

  //Captar mensagem do usuário
  useEffect(() => {
    if (userMSG.type !== '') {
      setConversation([...conversation, dialogueGen(userMSG.type, userMSG.text)]);
    }
    if (ReadyToSearch === true) {
      setSearch(userMSG.text);
    }
  }, [userMSG]);

  //Consultar perguntas respectivas às palavras chave
  useEffect(() => {
    if (search) {
      axios.get('http://localhost:8000/api/keywords/'+subject.theme+'/'+userMSG.text+'')
    .then(response => setQuestions((response.data))).catch(error => {
      setConversation([...conversation, loading()]);
    });
  }
  }, [search]);

  //Tratamento de definição do tema das perguntas 
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
  
  //Tratamento de inicio de conversa aberta
  useEffect(() => {
    if (subject.theme !== '') {
      setConversation([...conversation, dialogueGen('robot', 'Descreva de maneira breve o problema que está enfrentando')])
      setReadyToSearch(true);
    }
  }, [subject.theme]);

  //Tsc
  useEffect(() => {
    if (questions.length > 0) {
      let value = questions.map((object) => object.pergunta).reduce((text, value) => text + "<br/>"+ value);
      setConversation([...conversation, dialogueGen("robot", "Algum desses tópicos te ajuda?<br/>" + value)]);
    }
  }, [questions]);
  
  //Exibição de saudação
  useEffect(() => {
    if (hello.resposta !== undefined) {
      setConversation([...conversation, dialogueGen("robot", hello.resposta)]);
    }
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