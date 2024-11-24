import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [criptos, setCriptos] = useState()
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos(data.data)
        //console.log(data.data)
      })
      .catch(() => {
        console.error("la peticion fallo")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>


  return (
    <>
      <h1>Lista de criptos</h1>
      <ul>
        { 
          criptos.map(({id, name, priceUsd}) => (
            <li key={id}>Nombre: {name}, Precio: {priceUsd}</li>
          )) 
        }
        
      </ul>
    </>
    
  )
}

export default App
