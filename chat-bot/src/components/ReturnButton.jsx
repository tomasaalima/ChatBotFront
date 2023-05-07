import React from "react";
import { NavLink } from "react-router-dom";

function ReturnButton({h, left, top, bg, color, value, to}) {

  return (
    <NavLink
      to={to}
    >
      <div
        className={`absolute ${top} ${left} h-${h} w-auto`}
      >        
        <button
          className={`h-full w-full bg-${bg} text-${color} cursor-pointer flex flex-row justify-center p-1 gap-1`}
          type="button"
        >
        <img
            className="w-5 h-auto"
            src="/img/returnIcon.svg"
            alt="Ícone de retorno"
        >
        </img>
        <p>{value}</p>
        </button>
      </div>
    </NavLink>
  );
}

export  default ReturnButton;