import React from "react";
import { NavLink } from "react-router-dom";
import Background from '../components/Background';
import Frame from "../components/Frame";
import NavBar from "../components/NavBar";


function Home(){
    return (
        <>
            <NavBar/>
            <Background/>
            <div className="absolute top-28 text-white flex justify-center w-full h-4/6">

                    <div className=" flex flex-col justify-center items-center top-8 w-8/12 h-96">
                        <h1 className="-mt-9 font-oswald text-2xl">Tire duvidas com nosso assistente a qualquer hora!</h1>
                        <div className="flex flex-row gap-20 w-full items-center justify-center mt-28">
                            <Frame src="/img/fluxo-Card-Icon.svg" alt="Descrição da imagem" className="w-24 h-24 object-cover"/>
                            <Frame src="/img/Document2-Card-Icon.svg" alt="Descrição da imagem" className="w-24 h-24 object-cover"/>
                            <NavLink
                                to="/chat" 
                            >
                                <Frame src="/img/Icon-Chat.svg" alt="Descrição da imagem" className="w-24 h-24 object-cover"/>
                            </NavLink>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Home;