import React, { useState } from "react";
import "./VideoAdmin.css"; // Importe o arquivo CSS

function VideoAdmin(props) {
  const { link } = props;
  const [showButtons, setShowButtons] = useState(false);

  const handleMouseEnter = () => {
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setShowButtons(false);
  };

  return (
    <div
      className="video-wrapper h-5/6 m-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        src={`${link}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {showButtons && (
        <div className="buttons-wrapper">
          <button>Botão 1</button>
          <button>Botão 2</button>
        </div>
      )}
    </div>
  );
}

export default VideoAdmin;
