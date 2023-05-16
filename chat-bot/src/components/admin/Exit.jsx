import React from "react";
import { NavLink } from "react-router-dom";

function Exit(){
    return(
        <NavLink
            to="/"
        >
            <button className="h-10 bg-green-600 flex items-center justify-center fixed text-white top-3 right-4 w-24 font-exo2 rounded-sm hover:bg-green-500">
                SAIR
            </button>
        </NavLink>
    )
}

export default Exit;