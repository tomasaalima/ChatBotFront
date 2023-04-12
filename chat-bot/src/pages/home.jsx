import React from "react";
import MakeLogin from "../components/MakeLogin";
import Background from "../components/Background";
import Frame from "../components/Frame";


function Home(){
    return (
        <>
            <Background/>
            <div className="absolute top-28 text-white flex justify-center w-full h-4/6">
                    <MakeLogin/>
                    <div className=" flex flex-col justify-center items-center top-8 w-8/12 h-96">
                        <h1 className="-mt-9 font-oswald text-2xl">Tire duvidas com nosso assistente a qualquer hora!</h1>
                        <div className="flex flex-row gap-20 w-full items-center justify-center mt-28 ">
                            <Frame src="/img/fluxo-Card-Icon.svg" alt="logo de inicio" className="w-24 h-24 object-cover" tittle="Comece por aqui"/>
                            <Frame src="/img/Document2-Card-Icon.svg" alt="logo de edital" className="w-16 h-16 object-cover mt-5" tittle="Edital"/>
                            <Frame src="/img/Icon-Chat.svg" alt="logo de chat" className="w-24 h-24 object-cover" tittle="Chat" to="/chat"/>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home;