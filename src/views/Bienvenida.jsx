import { Link } from "react-router-dom";
import Logo from "../components/logo";

function Bienvenida() {
   return <div className="container h-dvh py-6">
      <div className="bg-white shadow-md p-6">
         <div className="w-24 mx-auto my-6">
            <Logo />
         </div>
         <h1 className="text-center text-sky-700 font-bold text-6xl uppercase">CriptoNet</h1>
         <p className="text-center text-sky-400 text-md mt-2">El sitio con mas 100 criptomonedas registradas</p>
         <div className="flex justify-center">
            <Link to='/criptomonedas' className="border bg-green-500 px-4 py-2 text-white w-fit block rounded-full my-7 mr-2">Ingresar</Link>
            <Link to='/perfil' className="border bg-green-500 px-4 py-2 text-white w-fit block rounded-full my-7">Perfil</Link>
         </div>
      </div>
   </div>
}

export default  Bienvenida
