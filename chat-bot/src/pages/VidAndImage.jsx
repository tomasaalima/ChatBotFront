import React from "react";
import NavBar from "../components/NavBar";
import Background from "../components/Background";
import Video from "../components/Video";
import { useState } from "react";




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
                    <div>
      <div className="text-black">
        <button
          onClick={() => handleTabClick("tab1")}
          className={activeTab === "tab1" ? "active" : ""}
        >
          Tab 1
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={activeTab === "tab2" ? "active" : ""}
        >
          Tab 2
        </button>
        <button
          onClick={() => handleTabClick("tab3")}
          className={activeTab === "tab3" ? "active" : ""}
        >
          Tab 3
        </button>
      </div>
      <div className="text-black text-3xl">
        {activeTab === "tab1" && <p>Conteúdo da Tab 1</p>}
        {activeTab === "tab2" && <p>Conteúdo da Tab 2</p>}
        {activeTab === "tab3" && <p>Conteúdo da Tab 3</p>}
      </div>
    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VidAndImage;