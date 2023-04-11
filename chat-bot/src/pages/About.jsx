import React from "react";

function Sobre(){
    return (
            <div className="absolute top-28 text-white flex justify-center w-full h-4/6">

                <div className=" flex flex-col justify-center items-center top-8 w-8/12 h-96">
                    <h1 className="-mt-9  font-oswald text-2xl">SOBRE</h1>
                    <div className="flex flex-row gap-20 w-full items-center justify-center mt-28">
                        <div className="w-52 h-48 text-black bg-gray-50 flex items-center justify-center shadow-lg">
                            <img src="/img/Document-Card-icon.svg" alt="Descrição da imagem" class="w-48 h-48 object-cover"></img>
                        </div>

                        <div className="w-52 h-48 text-black bg-gray-50 flex items-center justify-center shadow-lg">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="green" class="w-24 h-24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        </span>

                       
                        </div>
                    </div>
                </div>
            </div>
)
}

export default Sobre;