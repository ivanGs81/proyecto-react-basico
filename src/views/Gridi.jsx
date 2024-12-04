
import { useFetcht } from "../scripts/hooks/useFetcht"
import Card from "../components/Card"

function Gridi() {

  const [criptos, carga] = useFetcht("assets");

  if(carga) return <span>Cargando..</span>

  return (
    <div className="container mx-auto">
      <h1 className="text-green-800 text-3xl font-bold text-center my-4">Lista de Criptos</h1>
      <ul className="grid grid-cols-4">
        { 
          criptos && (
            criptos.map(({id, name, priceUsd, changePercent24Hr, explorer, symbol}) => (
              // eslint-disable-next-line react/jsx-key
              <Card
                key={id}
                nombre={name}
                precioDolar={priceUsd}
                lastValue={ changePercent24Hr } 
                site={explorer}
                simbol={symbol}
                ident={id}
              />
            )) 
          )
        }
        
      </ul>
    </div>
    
  )
  
}

export default Gridi

