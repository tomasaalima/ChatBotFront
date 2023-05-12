import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="">
      <div className="popup-content">
        <button onClick={onClose}>Fechar</button>
        <p>Conteúdo do pop-up</p>
      </div>
    </div>
  );
};

export default Popup;