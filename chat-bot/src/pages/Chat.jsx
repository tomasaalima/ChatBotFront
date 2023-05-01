/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef }  from "react";
import { animateScroll as scroll } from 'react-scroll';
import axios from "axios";

import Background from "../components/Background";
import BadLoading from "../components/Chat/BadLoading";
import Message from "../components/Chat/Message";
import MenuMessage from "../components/Chat/MenuMessage";
import ValidateBlock from "../components/Chat/ValidateBlock";
import TextBox from "../components/Chat/TextBox";
import NavBar from "../components/NavBar";

function Chat () {
  const [ conversation, setConversation ] = useState([]);
  const [ userMSG, setUserMSG ] = useState({'type': '', 'text': ''});
  const [ subject, setSubject ] = useState({'theme': '', 'length': 2});
  const [ selection, setSelection ] =useState({'text': '', 'counter': 0});
  const [ validation, setValidation ] =useState({'result': ''});
  const [ hello, setHello ] = useState([]);
  const [ ReadyToSearch, setReadyToSearch ] = useState(false);
  const [ search, setSearch ] = useState('');
  const [ questions, setQuestions ] = useState([]);

  const ref = useRef(null);
  
  //Consultar mensagem de saudação
  useEffect(() => {
    axios.get('http://localhost:8000/api/hello')
    .then(response => setHello((response.data)))
    .catch(error => {
      setConversation([...conversation, errorGen()]);
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
      setConversation([...conversation, errorGen()]);
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
    scrollToBottom();
  }, [conversation]);
  
  //Tratamento de inicio de conversa aberta
  useEffect(() => {
    if (subject.theme !== '') {
      setConversation([...conversation, dialogueGen('robot', 'Descreva de maneira breve o problema que está enfrentando')])
      setReadyToSearch(true);
      setValidation({'result': ''});
    }
  }, [subject.theme]);

  //Exibição das perguntas
  useEffect(() => {
    if (questions.length > 0) {
      //let value = questions.map((object) => object.pergunta).reduce((text, value) => text + "<br/>"+ value);
      setConversation([...conversation, menuGen()]);
    }
  }, [questions]);
  
  //Exibição de saudação
  useEffect(() => {
    if (hello.resposta !== undefined) {
      setConversation([...conversation, dialogueGen("robot", hello.resposta)]);
    }
  }, [hello.resposta]);

  //Tratamento na apresentação pelo componente com menu (MenuMessageGen) 
  useEffect(() => {
    if (selection.text !== '') {
      if (selection.counter === 1) {
        setConversation(prevConversation => [
          ...prevConversation.slice(0, prevConversation.length - 2),
          dialogueGen("robot", selection.text), validationGen()
        ]);
      }else
        setConversation([...conversation, dialogueGen("robot", selection.text), validationGen()]);
    }
  }, [selection.text]);

  //Direciona segunda a validação (validationGen)
  useEffect(() => {
    if (validation.result === 'yes') {
      setConversation([...conversation, dialogueGen("robot", "Fico em feliz em ter ajudado!")]);
    } else if (validation.result === 'no'){
      setDefaultProps();
      setConversation([...conversation, dialogueGen("robot", "Digite: </br>'1' para falar sobre 'fluxo' </br>'2' para falar sobre 'editais' </br>'3' para falar sobre 'Documentação'")]);
    }
  }, [validation.result]);

  //Indicar mal conectividade com o servidor
  const errorGen = () => {
    return (
      <BadLoading/>
    );
  }
  
  //Gerar componente de mensagem com menu
  const menuGen = () => {
    return (
      <MenuMessage setSelection={setSelection}>
        {questions}
      </MenuMessage>
    );
  }

  //Gerar componente de mensagem normal
  const dialogueGen = (type, text) => {
    return (
      <Message type={type} text={text}/>
      )
    }

  //Finalizar a conversa ou iniciar um novo loop
  const validationGen = () => {
    return (
      <ValidateBlock setValidation={setValidation}/>
    );
  }

  //Resetar propriedades
  const setDefaultProps = () => {
    setSubject({'theme': '', 'length': conversation.length + 2});
    setSearch(''); 
    setHello([]); 
    setQuestions([]);
    setSelection({'text': '', 'counter': 0});
    setReadyToSearch(false);
  }

  //Ir para o final do container que possui scroll
  const scrollToBottom = () => {
      scroll.scrollToBottom({
        containerId: 'my-scrollable-div',
        duration: 200,
        smooth: true,
      });
  };
    

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
          ref={ref}
          id="my-scrollable-div"
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