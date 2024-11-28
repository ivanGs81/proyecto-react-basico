
import { useFetcht } from "../scripts/useFetcht"
import Card from "../components/Card"

function Gridi() {

  const { criptos, loading, error } = useFetcht("assets");

  if (loading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <p className="font-semibold text-red-700 text-5xl">Cargando...</p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <p className="font-semibold text-red-700 text-lg">Error: {error}</p>
      </div>
    )
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-green-800 text-3xl font-bold text-center my-4">Lista de Criptos</h1>
      <ul className="grid grid-cols-4">
        { 
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
        }
        
      </ul>
    </div>
    
  )
  
}

export default Gridi

