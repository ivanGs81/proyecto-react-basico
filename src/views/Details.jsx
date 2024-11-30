
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
         <a href="/criptomonedas" className="text-green-700 flex py-4 font-semibold"><span>{ backPage() }</span><span>Volver</span></a>
         <div className="flex">
            <div className="border border-gray-200 shadow-sm p-3 me-4 bg-white">
               <h1 className="text-2xl font-bold text-green-700">{criptos.name} ({criptos.symbol})</h1>
            </div>
            <div className="border border-gray-200 shadow-sm px-3 py-2 bg-white">
               <p className="text-sm py-1"><span className="font-bold">Ranking:</span> {criptos.rank}</p>
               <p className="text-sm py-1"><span className="font-bold">Cantidad:</span> { parseFloat(criptos.supply).toFixed(2) }</p>
               <p className="text-sm py-1"><span className="font-bold">Precio por cantidad:</span> { parseFloat(criptos.marketCapUsd).toFixed(2)} USD</p>
               <p className="text-sm py-1"><span className="font-bold">Precio por USD:</span> { parseFloat(criptos.volumeUsd24Hr).toFixed(2)} USD</p>
               
            </div>
         </div>
      </div>
      
   )

   function backPage() {
      return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#15803d"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>;
   }
}

export default Details
