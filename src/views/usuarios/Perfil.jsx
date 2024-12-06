import { useContext } from "react"
import { UserContext } from "../../contexto/userContext"
import ButtonBack from "../../components/ButtonBack"


function Perfil() {
   
   const usuario = useContext(UserContext)

   return (
      <div className="container">
         
         <div className="w-96 mx-auto border border-gray-300 py-6 bg-white shadow-md rounded-md my-4">
            <div className="bg-green-400 w-28 h-28 rounded-full mx-auto mb-4"></div>
            <h1 className="text-3xl font-semibold mb-2 text-center">Perfil de { usuario.name }</h1>
            <p className="text-center">Usuario desde: {usuario.registered}</p>
            <p className="text-center">Rol: {usuario.role}</p>
            <div className="flex justify-center"><ButtonBack /></div>
            
         </div>
         
      </div>
      
   )
}

export default Perfil
