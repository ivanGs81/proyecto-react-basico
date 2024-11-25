import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

import "./App.css"

function App() {
  const [criptos, setCriptos] = useState()
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    // fetch(`${API_URL}assets`)
    axios.get(`${API_URL}assets`)
      //.then((resp) => resp.json())
      .then((data) => {
        setCriptos(data.data.data)
        //console.log(data)
      })
      .catch(() => {
        console.error("la peticion fallo")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>


  return (
    <>
      <h1 className="text-green-800 text-3xl font-bold">Lista de Criptos</h1>
      <ul>
        { 
          criptos.map(({id, name, priceUsd}) => (
            <li key={id} >Nombre: {name}, Precio: {Math.round(priceUsd)} USD</li>
          )) 
        }
        
      </ul>
    </>
    
  )
}

export default App
