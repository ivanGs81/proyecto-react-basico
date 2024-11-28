
import { useParams } from "react-router-dom"
import { useFetcht } from "../scripts/useFetcht";

const Details = () => {
   const param = useParams();

   const { criptos, loading, error } = useFetcht(`assets/${param.id}`)
   
   if(loading){
      return(
         <p>cargando..</p>
      )
   }
   if(error){
      return(
         <p>Error: {error}</p>
      )
   }
   return(
      <div className="container mx-auto h-dvh">
         <a href="/criptomonedas">Volver</a>
         <div className="row">
            <div className="border border-black">
               <h1>{criptos.name} ({criptos.symbol})</h1>
            </div>
            <div className="border border-black">
               <p>Ranking: {criptos.rank}</p>
               <p>Cantidad: { parseFloat(criptos.supply).toFixed(2) }</p>
               <p>Precio por cantidad: { parseFloat(criptos.marketCapUsd).toFixed(2)} USD</p>
               <p>Precio por USD: { parseFloat(criptos.volumeUsd24Hr).toFixed(2)} USD</p>
               
            </div>
         </div>
         
         
      </div>
      
   )
}

export default Details
