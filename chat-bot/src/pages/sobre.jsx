import React from "react";

function Sobre(){
    return (
            <div className="absolute top-28 text-white flex justify-center w-full h-4/6">

                <div className=" flex flex-col justify-center items-center top-8 w-8/12 h-96">
                    <h1 className="-mt-9  font-oswald text-2xl">SOBRE</h1>
                    <div className="flex flex-row gap-20 w-full items-center justify-center mt-28">
                        <div className="w-52 h-48 text-black bg-gray-50 flex items-center justify-center shadow-lg">
                        <img src="/img/fluxo-Card-Icon.svg" alt="Descrição da imagem" class="w-24 h-24 object-cover"></img>


                        </div>
                        <div className="w-52 h-48 text-black bg-gray-50 flex items-center justify-center shadow-lg">
                        <img src="/img/Document2-Card-Icon.svg" alt="Descrição da imagem" class="w-24 h-24 object-cover"></img>


                       
                        </div>
                    </div>
                </div>
            </div>
)
}

export default Sobre;