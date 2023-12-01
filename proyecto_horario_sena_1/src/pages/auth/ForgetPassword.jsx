import React from "react";

//Hooks

//Iconos react Remix
import { RiLockUnlockLine, RiMailLine } from "react-icons/ri";

// Router
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-secondary-900 p-8 rounded-lg flex flex-col gap-4 shadow-blue-950 shadow-lg w-auto lg:w-[450px]">
        <div className="flex items-center justify-center">
          <img
            src="./public/logoSenaCort.png"
            alt="LogoSena"
            className="h-18 w-auto "
          />
        </div>
        <h1 className="text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-3">
          recuperar <span className="text-primary">contraseña</span>{" "}
        </h1>
        <form>
          <div className="relative mb-2">
            <RiLockUnlockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              required
              type="text"
              className="py-3 px-4 bg-secondary-10 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all"
              placeholder="Numero de identificacion..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary/70 w-full py-3 px-4 rounded-lg text-white/95 hover:bg-primary hover:text-white hover:shadow-xl transition-colors uppercase font-bold"
            >
              Enviar
            </button>
          </div>
        </form>
        {/* Eliminamos la opcion de resgitrarse o tenemos que cambiarlo a iniciar sesion */}
        <div className='flex flex-col items-center gap-4 text-gray-100'>
          <span className='flex items-center gap-2'>
            ¿Ya tienes cuenta?
            <Link 
              className='text-primary hover:text-gray-100 transition-colors' 
              to='/'>Inicia Sesion</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
