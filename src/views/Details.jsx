
import { useParams } from "react-router-dom"
import { useFetcht} from "../scripts/hooks/useFetcht";
import CardDetails from "../components/CardDetails";
import CardTable from "../components/CardTable";
import ButtonBack from "../components/buttonBack";


const Details = () => {
   const param = useParams();
   
   const [criptos, cargaCripto] = useFetcht(`assets/${param.id}`)
   const [history, cargaHist] = useFetcht(`assets/${param.id}/history?interval=d1`)

   if(cargaCripto || cargaHist) return <span>Cargando...</span>
   
   return(
      <div className="container mx-auto h-dvh">
         <ButtonBack />
         <div className="flex">
            { criptos && ( <CardDetails criptos={criptos} /> ) }
            { history && ( <CardTable history={history} /> ) }
         </div>
      </div>
      
   )

}

export default Details
