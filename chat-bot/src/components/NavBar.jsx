import { NavLink } from "react-router-dom";

function NavBar(){

    return (
        <nav 
        className="w-screen flex justify-center h-8 items-center top-3 absolute divide-x-2 font-roboto"
        >
            <NavLink 
           
            activeClassName="active"
            to="/"           
            className="w-32 h-8 flex items-center justify-center text-white" 
            > 
             
            HOME
            </NavLink>

            <NavLink 
            activeClassName="active"
            to="/sobre" 
            className="w-32 h-8 flex items-center justify-center text-white" 
            >
            SOBRE
            </NavLink>
        </nav>
    )
}

export default NavBar;