import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Details = () => {
   const param = useParams();
   const [cript, setCript] = useState()
   const API_URL = import.meta.env.VITE_API_URL;

   useEffect(() => {
      axios.get(`${API_URL}assets/${param.id}`)
         .then((data) => {
            setCript(data.data.data)
         })
         .catch(() =>{
            console.error('Error en el dato')
         })
   }, [])
   if(!cript){
      return(
         <p>cargando..</p>
      )
   }

   return(
      <div className="container mx-auto h-dvh">
         <div className="border border-black">
            <h1>Detalle de la criptomoneda {cript.name}</h1>
         </div>
         
      </div>
      
   )
}

export default Details
