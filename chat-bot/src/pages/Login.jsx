import React from "react";
import DataField from "../components/Login/DataField";

function Login() {
  return(
    <main
      className="bg-ground-login w-full h-full bg-cover bg-no-repeat bg-center relative z-0"
    >
      <div
        className="w-1/4 h-1/2 bg-white absolute left-middle-login top-1/4 shadow-2xl z-10 flex flex-col items-center"
      >
        <form
          className="p-10 flex flex-col text-center items-center"
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
          <DataField label="Email" type="email" holder="Digite seu email"/>
          <DataField label="Senha" type="password" holder="Digite sua senha"/>
        </form>
        <p
          className="text-red-400 text-xs underline absolute right-16 bottom-22"
        >
          Esqueceu sua senha?
        </p>
        <input
          className="bg-button text-white w-16 h-7 mt-4"
          type="submit"
          value="Login"/>
      </div>
    </main>
  );
}

export default Login;
