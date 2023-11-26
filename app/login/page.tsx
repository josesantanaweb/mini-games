"use client";

import AuthForm from "@/components/auth-form";
import Header from "@/components/header";

import { luckiest } from "@/utils/fonts";

const Login = () => {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex items-center justify-center flex-1 px-5">
        <div className="w-full">
          <h1
            className={`${luckiest.className} my-8 text-3xl text-center text-gray-200 uppercase`}
          >
            Iniciar
            <span className="text-yellow-400 drop-shadow-md"> Sesion</span>
          </h1>
          <AuthForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
