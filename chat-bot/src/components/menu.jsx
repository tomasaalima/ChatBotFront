import { Link } from "react-router-dom";

function Menu(){
    return (
        <nav className="w-screen text-white flex justify-center h-10 gap-9 items-center top-3 absolute">
            <Link to="/">Home</Link>
            <Link to="/tutorial">Tutorial</Link>
            <Link to="/sobre">Sobre</Link>
        </nav>
    )
}

export default Menu;