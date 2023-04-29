import React from "react";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import PageVideos from "../components/PageVideos";
import { useState } from "react";
import PageManuais from "../components/PageManuais";


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
                                ? "bg-gray-900 text-white"
                                : "bg-gray-100 text-gray-900"
                            } flex items-center justify-center w-2/4 font-roboto h-10`}
                            
                            >
                            VÍDEOS
                            </button>

                            <button 
                            onClick={() => handleTabClick("tab2")}
                            className={`${
                                activeTab === "tab2"
                                ? "bg-gray-900 text-white"
                                : "bg-gray-100 text-gray-900"
                            } flex items-center justify-center w-2/4 font-roboto h-10`}                            >
                            MANUAIS
                            </button>
                        </nav>

                        <div className="h-full w-full bg-white grid grid-cols-2 gap-x-4 text-black">
                        <div>
                            {activeTab === "tab1" && (
                                <div className="">
                                    <PageVideos className="w-full h-full bg-slate-500"></PageVideos>
                                    <PageVideos className="w-full h-full bg-slate-500"></PageVideos>
                                </div>
                            )}
                            {activeTab === "tab2" && <PageManuais className="w-full h-full bg-slate-500"></PageManuais>}
                        </div>
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VidAndImage;