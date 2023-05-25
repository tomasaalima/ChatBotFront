import React from "react";
import Background from '../components/Background';
import NavBar from "../components/NavBar";
import MakeLogin from "../components/MakeLogin";

function About(){
    return (
        <>
            <NavBar/>
            <Background/>
            <MakeLogin/>
            <div 
                className="absolute top-20 text-white flex justify-center w-full h-5/6"
            >
                <div 
                    className=" flex flex-col justify-center items-center w-8/12"
                >
                    <h1 
                        className="font-oswald text-2xl mt-6"
                    >
                        Tire dúvidas com nosso assistente a qualquer hora!
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
                                    Sobre o sistema
                                </h1>
                            </nav>
                        </div>
                        <div 
                            className="h-full w-full bg-white text-black flex justify-center items-center "
                        >
                        <div className="w-11/12 h-5/6 text-justify text-lg text-green-800 flex flex-col gap-5">
                        <p>
                        O sistema é uma ferramenta criada para auxiliar no processo de inscrição no programa de Manutenção Acadêmica disponibilizado pelo IFPE-Campus Belo Jardim. Nele é possível acessar aos editais divulgados, aos tutoriais disponíveis e conversar com assistente virtual, que tira dúvidas e facilita o entendimento do usuário. A abordagem do ChatBot Manu, como é chamado o assistente virtual, é voltada para a comunicação informal, com intuito de cativar o usuário e facilitar na hora tirar suas dúvidas.
                        </p>
                        
                        <p>
                        O objetivo do sistema é possibilitar a centralização de informações de forma intuitiva, através de uma análise prévia das principais dúvidas que os discentes possuem no ato de inscrição no programa de Manutenção Acadêmica no portal Fluxo - IFPE.
                        </p>
                        
                        <p>
                        Desenvolvido pelos discentes do 5° Período de Engenharia de Software do Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco - Campus Belo Jardim.
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export default About;