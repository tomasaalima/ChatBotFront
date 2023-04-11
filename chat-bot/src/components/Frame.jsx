import React from "react";

function Frame(props) {
  const { src } = props;
  const { alt } = props;
  const { className } = props;

  return (
    <div
      className="w-52 h-48 text-black bg-gray-50 flex items-center justify-center shadow-lg"
    >
      <img
        src={`${src}`} 
        alt={`${alt}`} 
        className={`${className}`}
      />
    </div>
  );
}

export default Frame;
