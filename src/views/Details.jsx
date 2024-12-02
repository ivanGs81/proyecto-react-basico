
import { useParams } from "react-router-dom"
import { useFetcht, useFetchtHistory } from "../scripts/useFetcht";


const Details = () => {
   const param = useParams();

   const { criptos, loading, error } = useFetcht(`assets/${param.id}`)
   const { history } = useFetchtHistory(param.id, "?interval=d1")

   
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
            <div className="mx-3 mb-3">
               <div className="flex border border-gray-200 shadow-sm bg-white p-3">
                  <p className="text-sm px-2"><span className="font-bold">Ranking:</span> {criptos.rank}</p>
                  <p className="text-sm px-2"><span className="font-bold">Cantidad:</span> { parseFloat(criptos.supply).toFixed(2) }</p>
                  <p className="text-sm px-2"><span className="font-bold">Precio cant.:</span> { parseFloat(criptos.marketCapUsd).toFixed(2)} USD</p>
                  <p className="text-sm px-2"><span className="font-bold">Precio USD:</span> { parseFloat(criptos.volumeUsd24Hr).toFixed(2)} USD</p>
               </div>
               {/* <span>{JSON.stringify(history)}</span> */}
               <table className="w-full mt-3">
                  <thead className="bg-green-400">
                     <th className="text-white">Fecha</th>
                     <th className="text-white">Precio</th>
                  </thead>
                  <tbody className="border-gray-300 border border-t-0">
                     {history.map(({date, priceUsd, time}) =>(
                        <tr className="bg-white border-b-gray-300 border-b" key={time}>
                           <td className="px-3 py-2">{date}</td>
                           <td className="px-3 py-2">{parseFloat(priceUsd).toFixed(2)} USD</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            
         </div>
      </div>
      
   )

   function backPage() {
      return <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#15803d"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>;
   }
}

export default Details
