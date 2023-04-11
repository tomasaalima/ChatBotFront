import React from "react";

function TextBox() {
  return (
      <div
          id="textBox"
          className="h-9 w-4/5 relative bottom-2 left-1/10 bg-text-box rounded-lg z-20"
        >
          <div
            className="pr-2 h-full w-full"
          >
            <form
              className="h-full w-full flex flex-row items-center place-content-between"
            >
              <div 
                className="flex-1"
              >
                <input 
                type="text" 
                id="first_name" 
                class="bg-transparent border-0 text-gray-900 text-sm w-full p-2.5" 
                placeholder="Por favor, digite aqui para interagir com o chat" 
                required
                />
              </div>
              <button
                className="h-auto w-6"
              >
                <img
                  className="h-auto w-6"
                  src="/img/chat/send.png"
                  alt="icone de envio"
                />
              </button>
            </form>
          </div>
        </div>
  );
}

export default TextBox;