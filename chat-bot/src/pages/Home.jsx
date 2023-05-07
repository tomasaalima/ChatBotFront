import React from "react";
import MakeLogin from "../components/MakeLogin";
import Background from "../components/Background";
import Frame from "../components/Frame";
import NavBar from "../components/NavBar";



function Home(){
    return (
        <>
            <NavBar/>
            <Background/>
            <div className="absolute top-28 text-white flex justify-center w-full h-4/6">
                    <MakeLogin/>
                    <div className=" flex flex-col justify-center items-center w-9/12 sm:mt-80 sm:items:center md:mt-0 md:items:center">
                        <h1 className="-mt-9 font-oswald text-2xl sm:pt-20 md:pt-0">Tire duvidas com nosso assistente a qualquer hora!</h1>
                        <div className=" flex flex-col sm:flex-col md:flex-row sm:gap-5 md:gap-20 gap-20 items-center justify-center sm:mt-10 mt-28 w-full sm:justify-end sm:justify-center ">
                            <div className="flex flex-col sm:flex-col md:flex-row sm:gap-5 md:gap-20 gap-20">
                            <Frame src="/img/fluxo-Card-Icon.svg" alt="logo de inicio" className="w-24 h-24 object-cover" tittle="Comece por aqui" to="/home/starts"/>
                            <Frame src="/img/Document2-Card-Icon.svg" alt="logo de edital" className="w-16 h-16 object-cover mt-5" tittle="Edital" to="/edital"/>
                            <Frame src="/img/Icon-Chat.svg" alt="logo de chat" className="w-24 h-24 object-cover" tittle="Chat" to="/chat"/>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Home;