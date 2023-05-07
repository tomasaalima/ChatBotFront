import React from "react";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import { useState } from "react";
import Video from "../components/Video";
import FrameEdital from "../components/FrameEdital";


function VidAndImage(){

    const [activeTab, setActiveTab] = useState("tab1");
      
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        
        <>
        <NavBar/>
        <Background/>
        <div className="absolute top-20 text-white flex justify-center w-full h-5/6">
                <div className=" flex flex-col justify-center items-center w-8/12">
                    <h1 className="font-oswald text-2xl mt-6">Aproveite nossos tutoriais!</h1>
                    <div className="flex flex-col w-11/12 h-4/6 items-center justify-center mt-28">
                        <nav className="w-full flex justify-center h-11 items-center top-3 divide-x-2 font-roboto bg-footer">
                            <button  
                            onClick={() => handleTabClick("tab1")}
                            className={`${
                                activeTab === "tab1"
                                ? "bg-footer text-white"
                                : "bg-slate-200 text-gray-900"
                            } flex items-center justify-center w-2/4 font-roboto h-10`}
                            >
                            VÍDEOS
                            </button>

                            <button 
                            onClick={() => handleTabClick("tab2")}
                            className={`${
                                activeTab === "tab2"
                                ? "bg-footer text-white"
                                : "bg-slate-200 text-gray-900"
                            } flex items-center justify-center w-2/4 font-roboto h-10`}                            >
                            MANUAIS
                            </button>
                        </nav>
                        <div className="h-full w-full  text-black bg-white">
                        <div className="h-full w-full">
                            {activeTab === "tab1" && (
                                <div className="h-full w-full grid grid-cols-2 gap-x-4 text-black">
                                    <Video link="https://www.youtube.com/embed/H2bKVI7eS4s" description="Joji"></Video>
                                    <Video link="https://www.youtube.com/embed/wjEzE6HSgWo" description="ANALfabeto"></Video>
                                
                                </div>
                            )}
                            {activeTab === "tab2"&& (
                                <div className="h-full w-full grid grid-cols-2 gap-x-4 text-black">
                                    <FrameEdital document="Permanencia 2023.1"></FrameEdital>
                                    <FrameEdital document="Permanencia 2023.2"></FrameEdital>
                        <div className="h-full w-full bg-white sm:flex sm:flex-col sm:items-center md:grid md:grid-cols-2 gap-x-4 text-black">
                            <Video link="https://www.youtube.com/embed/H2bKVI7eS4s"></Video>
                            <Video link="https://www.youtube.com/embed/H2bKVI7eS4s"></Video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VidAndImage;