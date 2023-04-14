import React from "react";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import { NavLink } from "react-router-dom";



function VidAndImage(){

    return (
        
        <>
        <NavBar/>
        <Background/>
        <div className="absolute top-28 text-white flex justify-center w-full h-5/6">
                    <div className=" flex flex-col justify-center items-center w-8/12">
                        <h1 className="font-oswald text-2xl mt-6">Aproveite nossos tutoriais!</h1>
                        <div className="flex flex-col w-11/12 h-4/6 items-center justify-center mt-28">
                            <nav className="w-full flex justify-center h-11 items-center top-3 divide-x-2 font-roboto bg-footer">
                                <NavLink  
                                className="flex items-center justify-center w-2/4 font-roboto h-10"
                                // style={linkStyle}
                                >
                                VÍDEOS
                                </NavLink>

                                <NavLink 
                                className="flex items-center justify-center w-2/4 font-roboto h-10"
                                // style={linkStyle}
                                >
                                MANUAIS
                                </NavLink>
                            </nav>
                            <div className="h-full w-full bg-green-500 flex items-center justify-center">
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default VidAndImage;