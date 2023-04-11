import { NavLink } from "react-router-dom";

function Menu(){

    const linkStyle = ({isActive}) => {
        return {
            backgroundColor: isActive ? 'white' : 'transparent',
            color : isActive ? 'darkgreen' : 'white',
        }
    }

    //<img src="/img/Home-Nav-Icon.svg" alt="Icon Home" className="w-6"></img>  

    return (
        <nav 
        className="w-screen flex justify-center h-8 items-center top-3 absolute divide-x-2 font-roboto">
            <NavLink 
            to="/" 
            className="w-32 h-8 flex items-center justify-center" 
            style={linkStyle}> 
            <img src="/img/Home-Nav-Icon.svg" alt="Icon Home" className="w-5 mr-2 -mt-1"></img>  
            HOME</NavLink>
            <NavLink to="/sobre" 
            className="w-32 h-8 flex items-center justify-center" 
            style={linkStyle}>SOBRE</NavLink>
        </nav>
    )
}

export default Menu;