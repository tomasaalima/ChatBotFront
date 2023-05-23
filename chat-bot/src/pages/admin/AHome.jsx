import React from "react";
import { useState } from "react";
import Exit from "./../../components/admin/Exit";
import NavBar from "./../../components/NavBar";
import Background from "./../../components/Background"
import FrameAdmin from "../../components/admin/FrameAdmin";
import SessionProtect from "../../components/Login/SessionProtect";



function AHome(){

    const [activeTab, setActiveTab] = useState("tab1");
      
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        
        <>
        <SessionProtect/>
        <NavBar/>
        <Background/>
        <Exit/>
        <div className="absolute top-20 text-white flex justify-center w-full h-5/6">
                <div className=" flex flex-col justify-center items-center w-10/12">
                    <h1 className="font-oswald text-2xl mt-6">Olá Administrador(a), seja Bem-Vindo(a)!</h1>
                    <div className="flex flex-col w-10/12 h-4/6 items-center justify-center mt-16">
                        <nav className="w-full flex justify-center h-11 items-center top-3 divide-x-2 font-roboto bg-footer">
                            <button  
                            onClick={() => handleTabClick("tab1")}
                            className={`${
                                activeTab === "tab1"
                                ? "bg-footer text-white"
                                : "bg-slate-200 text-gray-800"
                            } flex items-center justify-center w-2/4 font-roboto h-10`}
                            
                            >
                            EDITAR MATERIAL
                            </button>

                            <button 
                            onClick={() => handleTabClick("tab2")}
                            className={`${
                                activeTab === "tab2"
                                ? "bg-footer text-white"
                                : "bg-slate-200 text-gray-800"
                            } flex items-center justify-center w-2/4 font-roboto h-10`}>
                            POSTAR MATERIAL
                            </button>
                        </nav>
                        <div className="h-full w-full  text-black bg-white">
                        <div className="h-full w-full">
                            {activeTab === "tab1" && (
                                <div className="h-full w-full flex gap-x-24 text-black justify-center items-center">
                                <FrameAdmin src="/img/admin/Manuais-icon.png" alt="Redirecionamento manuais" className="w-28 object-cover" tittle="Manuais" to="/admin/manuals"/>
                                <FrameAdmin src="/img/admin/icon-documentAdmin.png" alt="Redirecionamento edital" className="w-20 object-cover mt-2" tittle="Edital" to="/admin/edicts"/>
                                <FrameAdmin src="/img/admin/video-icon.png" alt="Redirecionamento vídeos" className="w-28 object-cover" tittle="Vídeos" to="/admin/videos"/>
                                
                                </div>
                            )}
                            {activeTab === "tab2"&& (
                                <div className="h-full w-full grid grid-cols-3 gap-x-4 text-black">
                                   

                                </div>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AHome;