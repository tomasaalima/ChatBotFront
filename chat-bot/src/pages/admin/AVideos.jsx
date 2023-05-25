import React from "react";
import NavBar from "../../components/NavBar";
import Background from "../../components/Background";
import Exit from "../../components/admin/Exit";
import VideoAdmin from "../../components/admin/VideoAdmin";
import SessionProtect from "../../components/Login/SessionProtect";


function AVideos(){

    return (
        <>
            <SessionProtect/>
            <NavBar/>
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
                                Olá Administrador(a), seja Bem-Vindo(a)!
                            </h1>
                            <div 
                                className="flex flex-col w-11/12 h-4/6 items-center justify-center mt-28 drop-shadow-lg"
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
                                            Vídeos
                                        </h1>
                                    </nav>
                                </div>
                                <div 
                                    className="h-full w-full bg-white grid grid-cols-2 gap-x-4 text-white "
                                >                                   
                                    <VideoAdmin 
                                        link="https://www.youtube.com/watch?v=qUjRTg0U0Qs" 
                                        description="video 1"
                                    >
                                    </VideoAdmin>
                                    <VideoAdmin 
                                        link="https://www.youtube.com/watch?v=in24OC-inBc" 
                                        description="video 2"
                                    >
                                    </VideoAdmin>
                                </div>
                            </div>
                        </div>
            </div>
        </>
    )
}

export default AVideos;