import { useContext } from "react"
import { UserContext } from "../contexto/userContext"
import ButtonBack from "../components/buttonBack"


function Perfil() {
   
   const usuario = useContext(UserContext)

   return (
      <div className="container">
         <ButtonBack/>
         <h1>Perfil de { usuario.name }</h1>
         <p>usuario desde: {usuario.registered}</p>
      </div>
      
   )
}

export default Perfil
