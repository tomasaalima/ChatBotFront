import React, { useState } from 'react';
import Popup from './Popup';



function ManagementManuals(props){
    const { document } = props;

    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return(
        <div className="h-40 w-5/6 m-auto flex items-center justify-center"> 
        <span className="editalhover w-3/4 h-4/6">
            <div className="bg-green-400 h-5/6 flex items-center justify-center">
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
            <div className="flex flex-row h-8">
                <button className="w-full bg-redfooter bottom-0 font-exo2 text-white">
                {/* <img
                    src={`/img/admin/trash-icon.png`}
                    alt="cauda do balão"
                    className="w-1/4 h-1/2 z-0"
                 /> */}
                    Remover
                </button>
                <button 
                    className="w-full bg-footer bottom-0 font-exo2 text-white"
                    onClick={handleButtonClick}>
                 
                    Editar
                </button>

                {showPopup && <Popup onClose={handleClosePopup} />}
               
                
            </div>
        </span>

    </div>
    )
}

export default ManagementManuals;