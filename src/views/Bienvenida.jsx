import Logo from "../components/logo";
import BotonVerde from "../components/BotonVerde";

function Bienvenida() {
   return <div className="container h-dvh py-6">
      <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
         <div className="w-24 mx-auto my-6">
            <Logo />
         </div>
         <h1 className="text-center text-sky-800 font-medium text-6xl uppercase">CriptoNet</h1>
         <p className="text-center text-sky-600 text-sm mt-2">El sitio con mas 100 criptomonedas registradas</p>
         <div className="flex justify-center">
            <BotonVerde contenido={"Ingresar"} url={"/criptomonedas"} />
         </div>
      </div>
   </div>
}

export default  Bienvenida
