import { useContext } from "react"
import { UserContext } from "../contexto/userContext"
import ButtonBack from "../components/buttonBack"


function Perfil() {
   
   const usuario = useContext(UserContext)

   return (
      <div className="container border border-black">
         <ButtonBack/>
         <div className="w-96 mx-auto border border-gray-200 py-4 bg-white shadow-md">
            <div className="bg-green-400 w-10 h-10 rounded-full mx-auto"></div>
            <h1 className="text-3xl font-semibold mb-2 text-center">Perfil de { usuario.name }</h1>
            <p className="text-center">Usuario desde: {usuario.registered}</p>
            <p className="text-center">Rol: {usuario.role}</p>
         </div>
         
      </div>
      
   )
}

export default Perfil
