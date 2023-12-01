//Hooks
import { useEffect, useState } from "react";

import { isAuthenticated } from "../../utils/httpRequest";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
//Iconos react Remix
import {
  RiMailLine,
  RiLock2Line,
  RiEyeLine,
  RiEyeOffLine,
  RiPassPendingLine,
} from "react-icons/ri";

// Router
import { Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  
  const [idTipoDocFK, setIdTipoDocFK] = useState();
  const [numeroIdent, setNumeroIdent] = useState("");
  const [contrasenaUsuario, setContrasenaUsuario] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/index", { replace: true });
    }
  }, [navigate]);

  const login = () => {
    const url = "https://pqddmp2g-5000.use2.devtunnels.ms/auth/";

    const data = {
      idTipoDocFK,
      numeroIdent,
      contrasenaUsuario,
    };
    if (!idTipoDocFK || !numeroIdent || !contrasenaUsuario) {
      alert("Fata del información")
    }
    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          if (!response.data.success) {
            alert("Acceso denegado");
            return;
          }
          const token = response.data.token;

          // Almacena el token en las cookies
          Cookies.set("token", token);

          navigate("/index", { replace: true });
          window.location.reload();
        } else {
          setResult("Error al iniciar sesión.");
        }
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error.message);
        setResult("Error al iniciar sesión.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-secondary-900 p-8 rounded-lg flex flex-col gap-4 shadow-blue-950 shadow-lg w-auto lg:w-[450px]">
        <div className="flex items-center justify-center">
          <img
            src="./public/logoSenaCort.png"
            alt="LogoSena"
            className="h-18 w-auto mb-2"
          />
        </div>
        <h1 className="text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-1">
          Iniciar <span className="text-primary">sesión</span>{" "}
        </h1>
        <form>
          <div className="relative mb-4">
            <select className="w-full px-2 py-3 rounded-lg text-gray-600 outline-none" id="idTipoDocFK" name="idTipoDocFK" required onChange={(e) => setIdTipoDocFK(e.target.value, 10)}v>
              <option value={0}>Tipo Identificacion...</option>
              <option value={1}>CC</option>
              <option value={2}>TI</option>
              <option value={3}>CE</option>
              <option value={4}>NA</option>
            </select>
          </div>
          <div className="relative mb-4">
            <RiPassPendingLine  className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              id="numeroIdent"
              name="numeroIdent"
              required
              onChange={(e) => setNumeroIdent(e.target.value)}
              className="py-3 px-4 bg-secondary-10 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all"
              placeholder="Numero De Documento..."
            />
          </div>
          <div className="relative mb-4">
            <RiLock2Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"} 
              id="contrasenaUsuario"
              name="contrasenaUsuario"
              required
              onChange={(e) => setContrasenaUsuario(e.target.value)}
              className="py-3 px-8 -100 w-full outline-none rounded-lg border border-secondary-900 focus:border-primary transition-all"
              placeholder="Contraseña..."
            />
            {showPassword ? (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary"
              />
            ) : (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary"
              />
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={login}
              className="mt-4 bg-primary/70 w-full py-3 px-4 rounded-lg text-white/95 hover:bg-primary hover:text-white hover:shadow-xl transition-colors uppercase font-bold"
            >
              Ingresar
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4 text-gray-100">
          <Link
            className="hover:text-primary transition-colors"
            to="/olvide-mi-contraseña"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
