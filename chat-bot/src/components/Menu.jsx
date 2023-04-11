import { NavLink } from "react-router-dom";

function Menu(){

    const linkStyle = ({isActive}) => {
        return {
            backgroundColor: isActive ? 'white' : 'transparent',
            color : isActive ? 'darkgreen' : 'white',
            stroke : isActive ? '#11111' : 'white',
        }
    }

    //<img src="/img/Home-Nav-Icon.svg" alt="Icon Home" className="w-6"></img>  

    return (
        <nav 
        className="w-screen flex justify-center h-8 items-center top-3 absolute divide-x-2 font-roboto">
            <NavLink 
            to="/" 
            className="w-32 h-8 flex items-center justify-center" // w-5 mr-2 -mt-1
            style={linkStyle}> 
            <span className="w-5 mr-2">
                <svg className="fill-current text-zinc-50 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="green" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </span>           
             HOME</NavLink>
            <NavLink to="/sobre" 
            className="w-32 h-8 flex items-center justify-center " 
            style={linkStyle}>SOBRE</NavLink>
        </nav>
    )
}

export default Menu;