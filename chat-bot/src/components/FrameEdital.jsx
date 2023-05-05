import React from "react";


function FrameEdital(props){
    const { document } = props;
    const { session } = true;

    return(
        <div className="h-40 w-3/4 m-auto flex items-center justify-center"> 
        <span className="editalhover w-3/4 h-3/4">
            <div
            className="flex flex-row w-full h-full"
            >
                <div className="bg-green-400 h-full flex items-center justify-center">
                    <div>
                        <img src="/img/Pdf-Icon.svg" alt="Icon PDF"
                        className="w-16"
                        />
                    </div>
                    <div className=" w-4/6">
                        <h2 className="text-green-950 mt-3 "
                        >{`${document}`}</h2>
                        <div className="flex">
                            <div className="w-full flex justify-end items-end ">
                                <img
                                src="/img/Download-Icon.svg"
                                alt="Icon Download"
                                className="w-1/6 mr-0 "
                                />
                            </div>
                        </div>
                    </div>
                 </div>
                {session && (
                <div
                    className="bg-red-600 w-1/5 h-full flex flex-col text-center justify-center"
                >
                    <img
                        className=""
                        alt="Icone de lixeira"
                        src="/img/trashIcon.svg"
                    >

                    </img>
                </div>
                )}
            </div>
            <button className="w-full h-1/4 bg-footer bottom-0 font-exo2 text-white">
                Visualizar
            </button>
        </span>

    </div>
    )
}

export default FrameEdital;