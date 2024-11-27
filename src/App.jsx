import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

import Card from "./components/Card"

function App() {
  const [criptos, setCriptos] = useState()
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("la peticion fallo")
      })
  }, [])

  if (!criptos) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <p className="font-semibold text-red-700 text-5xl">Cargando...</p>
      </div>
    )
  }


  return (
    <div className="container mx-auto">
      <h1 className="text-green-800 text-3xl font-bold text-center mb-3">Lista de Criptos</h1>
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
            />
          )) 
        }
        
      </ul>
    </div>
    
  )

}

export default App
// mas informacion: https://docs.coincap.io/
