import React from "react";
import Background from "../../components/Background";
import Exit from "../../components/admin/Exit";
import AMenu from "../../components/admin/AMenu";

function AAbout(){
    return (
        <>
            <AMenu/>
            <Background/>
            <Exit/>

            <div 
                className="absolute top-20 text-white flex justify-center w-full h-5/6"
            >
                <div 
                    className=" flex flex-col justify-center items-center w-8/12"
                >
                    <h1 
                        className="font-oswald text-2xl mt-6"
                    >
                        Tela de SOBRE do admin!
                    </h1>
                    <div 
                        className="flex flex-col w-11/12 h-4/6 items-center justify-center mt-20 drop-shadow-lg"
                    >
                        <div 
                            className="w-full flex justify-center h-11 items-center  bg-white"
                        >
                            <nav 
                                className="w-11/12 flex justify-center h-11 items-center font-roboto text-footer border-b-2 border-b-green-600"
                            >
                                <h1
                                    className="flex items-center justify-center font-roboto h-10 text-2xl "
                                >
                                    Sobre o sistema
                                </h1>
                            </nav>
                        </div>
                        <div 
                            className="h-full w-full bg-white text-black flex justify-center items-center "
                        >
                        <div className="w-11/12 h-5/6 text-justify text-lg text-green-800">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export default AAbout;