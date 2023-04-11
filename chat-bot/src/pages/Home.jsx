import React from "react";
import MakeLogin from "../components/MakeLogin";


function Home(){
    return (
        <div className="absolute top-28 text-white flex justify-center w-full h-4/6">

                <MakeLogin/>

                <div className=" flex flex-col justify-center items-center top-8 w-8/12 h-96">
                    <h1 className="-mt-9 font-oswald text-2xl">Tire duvidas com nosso assistente a qualquer hora!</h1>
                    <div className="flex flex-row gap-20 w-full items-center justify-center mt-28 ">

                        <button className="transition-opacity duration-500 ease-in-out bg-green-300 transform hover:-translate-y-1 hover:scale-110">
                            <div className="w-52 h-48 text-black bg-gray-50 flex flex-col items-center justify-center shadow-lg transition delay-300 duration-300 ease-in-out">
                            <img src="/img/fluxo-Card-Icon.svg" alt="Descrição da imagem" class="w-24 h-24 object-cover"></img>
                            <h2 className="text-green-900">Comece por aqui</h2>
                            </div>
                        </button>

                        <button className="transition-opacity duration-500 ease-in-out bg-green-300 transform hover:-translate-y-1 hover:scale-110">
                            <div className="w-52 h-48 text-black bg-gray-50 flex flex-col items-center justify-center shadow-lg ">
                            <img src="/img/Document2-Card-Icon.svg" alt="Descrição da imagem" class="w-16 h-16 object-cover mt-5"></img>
                            <h2 className=" text-green-900 mt-5">Edital</h2>
                            </div>
                        </button>

                        
                        <button className="transition-opacity duration-500 ease-in-out bg-green-300 transform hover:-translate-y-1 hover:scale-110">
                            <div className="w-52 h-48 text-black bg-gray-50 flex flex-col items-center justify-center shadow-lg">
                            <img src="/img/Icon-Chat.svg" alt="Descrição da imagem" class="w-24 h-24 object-cover"></img>
                            <h2 className="text-green-900">Chat</h2>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
    )
}

export default Home;