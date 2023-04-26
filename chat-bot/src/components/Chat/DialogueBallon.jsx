import React from "react";

function DialogueBallon(props) {
  const { side } = props;
  const { text } = props;

  const ballonColor = (side === "left")?"bg-message1": "bg-message2";

  return (
      <div>
        <div //probleminha de cache?
          className={`w-48 h-16 absolute ${side}-16 flex flex-row justify-${(side === "left")?"start":"end"} z-0`}
        >
          <img
            src={`/img/chat/chatTail${side}.png`}
            alt="cauda do balão"
            className="w-1/4 h-1/2 z-0"
          />
        </div>
        <div
          className={`relative w-48 min-h-10 ${ballonColor} rounded-lg z-10`}
        >
          <p
            className="p-2 text-xs text-white"
          >
          {text}
          </p>
        </div>
      </div>
  );
}

export default DialogueBallon;
