import React from "react";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import { NavLink } from "react-router-dom";



function Edital(){

    return (
        
        <>
        <NavBar/>
        <Background/>
        <div className="absolute top-28 text-white flex justify-center w-full h-5/6">
                    <div className=" flex flex-col justify-center items-center w-8/12">
                        <h1 className="font-oswald text-2xl mt-6">Aproveite nossos tutoriais!</h1>
                        <div className="flex flex-col w-11/12 h-4/6 items-center justify-center mt-28 drop-shadow-lg">
                            <div className="w-full flex justify-center h-11 items-center  bg-white">
                                <nav className="w-11/12 flex justify-center h-11 items-center font-roboto text-footer border-b-2 border-b-green-600">
                                    <NavLink
                                    className="flex items-center justify-center font-roboto h-10 text-2xl "
                                    // style={linkStyle}
                                    >
                                    Editais
                                    </NavLink>
                                </nav>
                            </div>
                            <div className="h-full w-full bg-green-100 grid grid-cols-2 gap-x-4 text-white ">
                                <div className=" h-40 w-3/4 m-auto flex items-center justify-center"> 
                                    <span className="editalhover w-3/4 h-3/4">
                                    <div className="bg-green-400 h-5/6">
                                            oi
                                        </div>
                                        <button className="w-full h-1/4 bg-footer bottom-0 ">
                                            oisdasa
                                        </button>
                                    </span>
                                </div>
                                <div className="h-40 w-3/4 m-auto flex items-center justify-center"> 
                                    <span className="editalhover w-3/4 h-3/4">
                                        <div className="bg-green-400 h-5/6 flex items-center justify-center">
                                            <img src="/img/Pdf-Icon.svg" alt="Icon PDF" 
                                            className="w-16"
                                            />
                                            <div>
                                                <h2 className="text-green-950 mt-3">(Nome Documento)</h2>
                                                <button className="ml-36 mt-2 flex items-end justify-end">
                                                    <img src="/img/Download-Icon.svg" alt="Icon Download"
                                                    className="w-8 mr-0 "
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="w-full h-1/4 bg-footer bottom-0 font-exo2 text-white">
                                            {/* <img src="/img/Eye-Icon.svg" alt="Icon Eye"
                                            /> */}
                                            Visualizar
                                        </button>
                                    </span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Edital;