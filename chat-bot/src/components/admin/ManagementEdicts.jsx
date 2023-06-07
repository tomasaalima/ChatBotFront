import React, { useContext, useEffect, useState } from 'react';
import PopupAlert from './PopupAlert';
import PopupEdit from './PopupEdit';
import axios from 'axios';

function ManagementEdicts({ document, unique }){
    const [ idValue, setIdValue ] = useState(null);
    const [download, setDownload] = useState(null);
    const [ mouseEnter, setMouseEnter ] = useState(null);

    useEffect(() => {
        if (unique !== undefined) {
            setIdValue(unique)
        }
    }, [unique]);

    useEffect(() => {
        if (idValue !== null) {
            axios.get(`http://localhost:8000/api/manuais/${idValue}`)
            .then(response => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                setDownload(blob);
            })
            .catch((error) => console.log(error));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idValue]);

    //PopUp Alert
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
      setModalOpen(true);
    };
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    //PopUp Edit

    const [editOpen, setEditOpen] = useState(false);
    const abrirEdit = () => {
        setEditOpen(true);
    }
    const fecharEdit = () => {
        setEditOpen(false);
    }

    return(
        <div 
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
            className="h-40 w-full m-auto flex items-center justify-center"
        >
        <span 
            className="editalhover w-4/5 h-4/6"
        >
            <div 
                className="bg-green-400 h-5/6 flex items-center justify-center"
            >
                <div>
                    <img 
                        src="/img/Pdf-Icon.svg" 
                        alt="Icon PDF"
                        className="w-16"
                    />
                </div>

                <div 
                    className=" w-4/6"
                >
                    <h2 
                        className="text-green-950 mt-3 "
                    >
                        {`${document}`}
                    </h2>
                    <div 
                        className="flex"
                    >
                        <div 
                            className="w-full flex justify-end items-end"
                        >
                        {download && (
                            <a 
                                href={URL.createObjectURL(download)} 
                                download={document}
                                className="w-1/6 mr-0 "
                                >
                                <img 
                                    src="/img/Download-Icon.svg"
                                    alt="Icon Download"
                                    className="w-full"
                                />
                            </a>
                        )}
                        </div>
                    </div>
                </div>

            </div>
            <div 
                className={`h-8 ${mouseEnter ? "flex flex-row" : "mobile:flex desktop:hidden  flex-row"}`}
            >
                <button 
                    className="w-full bg-redfooter bottom-0 font-exo2 text-white"
                    onClick={handleOpenModal}
                >
                    Remover
                </button>
                <button
                    onClick={abrirEdit} 
                    className="w-full bg-footer bottom-0 font-exo2 text-white"
                >                 
                    Editar
                </button>

                <PopupAlert 
                    isOpen={modalOpen} 
                    onClose={handleCloseModal}
                    id={idValue}
                    type={"editais"}
                />
                <PopupEdit 
                    isOpen={editOpen} 
                    onClose={fecharEdit} 
                    id={idValue}
                    type={["dadoseditais", "editais"]}
                />
            </div>
        </span>

    </div>
    )
}

export default ManagementEdicts;