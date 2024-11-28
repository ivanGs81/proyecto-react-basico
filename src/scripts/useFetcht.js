import axios from "axios"
import { useEffect, useState } from "react"

export function useFetcht(url) {
   const API_URL = import.meta.env.VITE_API_URL;
   const [criptos, setCriptos] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null)

   useEffect(() => {
      setLoading(true)
      axios.get(API_URL + url)
         .then((data) => setCriptos(data.data.data))
         .catch(() => setError(error))
         .finally(() => setLoading(false)) 
   }, []);

   return { criptos, loading, error }
}

// mas informacion: https://docs.coincap.io/
