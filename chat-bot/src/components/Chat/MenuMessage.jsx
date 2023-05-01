import React, { useEffect, useState } from "react";
import Robot from "./Robot";
import MenuBallon from "./MenuBallon";
import Message from "./Message";


function MenuMessage(props) {
  const [ list, setList ] = useState([]);
  const [ counter, setCounter ] = useState(0);

  let answers;

  useEffect(() => {
    if (props.children) {
      setList([...props.children]);
    }
  }, [props.children]);
  
  if (props) {
    answers = list.map((element) => {
      return (
        <button
          type="button"
          className="w-full p-2 hover:bg-gray-800 focus:bg-gray-800 text-start rounded-md" 
          onClick={() => {
            props.setSelection({'text': element.resposta, 'counter': counter});
            setCounter(1);
          }}
        >
          {element.pergunta}
        </button>
      );
    })
  }

  return (
    <div
      className="overflow-auto flex flex-row items-start gap-8 pl-4 pt-4 pb-4"
    >
      <Robot/>
      <MenuBallon side="left">
          <p
            className="pl-1"
          >
          Algum desses tópicos diz algo sobre sua dúvida?
          </p>
          {answers}
      </MenuBallon>
    </div>
  );
}

export default MenuMessage;