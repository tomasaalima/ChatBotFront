import React from "react";
import { NavLink } from "react-router-dom";

function Frame(props) {
  const { src } = props;
  const { alt } = props;
  const { className } = props;
  const { tittle } = props;
  const { to } = props;

  return (
    <NavLink
      to={to}
    >
      <button
        className="transition-opacity duration-500 ease-in-out bg-green-300 transform hover:-translate-y-1 hover:scale-110"
      >
        <div
          className="w-52 h-48 text-black bg-gray-50 flex flex-col items-center justify-center shadow-lg transition delay-300 duration-300 ease-in-out"
        >
          <img
            src={`${src}`}
            alt={`${alt}`}
            className={`${className}`}
          />
          <h2
            className="text-green-900 mt-5"
          >
            {tittle}
          </h2>
        </div>
      </button>
    </NavLink>
  );
}

export default Frame;
