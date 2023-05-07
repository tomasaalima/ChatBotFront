import React from "react";
import Background from '../components/Background';
import Frame from "../components/Frame";
import NavBar from "../components/NavBar";
import MakeLogin from "../components/MakeLogin";

function About(){
    return (
        <>
            <NavBar/>
            <Background/>
            <div 
                className="absolute top-28 text-white flex justify-center w-full h-4/6"
            >
                <MakeLogin/>
                <div 
                    className=" flex flex-col justify-center items-center top-8 w-9/12 sm:mt-40 sm:items:center md:mt-0 md:items:center"
                >
                    <h1 
                        className="-mt-9 font-oswald text-2xl"
                    >
                    SOBRE
                    </h1>

                    <div 
                        className="flex flex-col w-full sm:flex-col md:flex-row sm:gap-5 md:gap-20 gap-20 items-center justify-center sm:mt-10 md:mt-28 mt-28 sm:justify-end sm:justify-center"
                    >
                        <Frame src="/img/Document-Card-icon.svg" alt="Descrição da imagem" className="w-24 h-24 object-cover" tittle="titulo"/>
                        <Frame src="/img/Document2-Card-Icon.svg" alt="Descrição da imagem" className="w-24 h-24 object-cover" tittle="titulo"/>
                    </div>
                </div>
            </div>
        </>
)
}

export default About;