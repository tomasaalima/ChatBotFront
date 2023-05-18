import React, { useContext, useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import DataField from "../components/Login/DataField";
import ReturnButton from "../components/ReturnButton";
import { AuthContext } from "../contexts/AuthContext";
import { FieldContext } from "../contexts/FieldContext";

function Login() {
  const [ click, setClick ] = useState(false);
  const [ warning, setWarning ] = useState('');

  const { mail, passwd } = useContext(FieldContext);

  const navigate = useNavigate();
  const { token, setCredentials } = useContext(AuthContext);
  //setCredentials({"email": "lea.considine@example.com","password": "password"});

  //console.log(token);

  useEffect(() => {
    if (mail !== '' && passwd !== '' && click) {
      setCredentials({"email": mail,"password": passwd});
      setWarning('');
      setClick(false);
    } else if (click) {
      setWarning("revise os campos")
      setClick(false);
    }
  }, [click]);

  useEffect(() => {
    if (token.access_token){
      if (token.access_token === 'denied') setWarning("Email ou Senha incorretos");
      else navigate('/admin/');
    }
  }, [token]);

  return(
    <main
      className="bg-ground-login w-full h-full bg-cover bg-no-repeat bg-center relative z-0"
    >
      <ReturnButton h="8" w="14" left="left-10" top="top-10" bg="buttom" value="Voltar" color="white" to="/"/>
      <div
        className=" bg-white absolute shadow-2xl z-10 flex flex-col items-center justify-center
        mobile:left-1/10 mobile:top-1/4 mobile:w-4/5 mobile:h-1/2
        desktop:left-middle-login desktop:top-1/5 desktop:w-1/4 desktop:h-1/2
        "
      >
        <form
          className="p-10 pb-4 flex flex-col text-center items-center"
        >
        <div
          className="rounded-full bg-user-logo w-1/3 mb-4"
        >
          <img
            className="p-3"
            src="/img/login/user-icon.svg"
            alt="imagem do usuário"
          />
        </div>
          <p
          className="mb-4 text-sm text-red-500"
          >
            Obs.: Essa área é exclusiva apenas para usuários administradores
          </p>
          <DataField
            label="Email" 
            type="email" 
            holder="Digite seu email"
          />
          <DataField 
            label="Senha" 
            type="password" 
            holder="Digite sua senha" 
          />
        </form>
        <div
          className="flex justify-end w-4/5"
        >
          <NavLink
            to="/recover"
          >
            <p
              className="text-red-400 text-xs underline"
            >
              Esqueceu sua senha?
            </p>
          </NavLink>
        </div>
        <button
          className="bg-buttom text-white w-0 h-7 mt-10 cursor-pointer
          mobile:w-2/5 mobile:h-7
          desktop:w-1/5 desktop:h-7
          "
          type="submit"
          onClick={() =>setClick(true)}
        >
         Login
        </button>
        {warning && <p>{warning}</p>}
      </div>
    </main>
  );
}

export default Login;
