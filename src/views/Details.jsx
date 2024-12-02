
import { useParams } from "react-router-dom"
import { useFetcht} from "../scripts/useFetcht";
import CardDetails from "../components/CardDetails";
import CardTable from "../components/CardTable";
import BackIcon from "../components/BackIcon";


const Details = () => {
   const param = useParams();

   const [criptos, cargaCripto] = useFetcht(`assets/${param.id}`)
   const [history, cargaHist] = useFetcht(`assets/${param.id}/history?interval=d1`)

   if(cargaCripto || cargaHist) return <span>Cargando...</span>
   
   return(
      <div className="container mx-auto h-dvh">
         <a href="/criptomonedas" className="text-green-700 flex py-4 font-semibold"><span>{ <BackIcon /> }</span><span>Volver</span></a>
         <div className="flex">
            {
               criptos && ( <CardDetails criptos={criptos} /> )
            }
               
            
            <div className="mx-4 grow">
               <h2 className="text-green-600 mb-3 font-semibold text-2xl">Historial de precios</h2>
               {
                  history && ( <CardTable history={history} /> )
               }
               
            </div>
            
         </div>
      </div>
      
   )

}

export default Details
