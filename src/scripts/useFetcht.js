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


export function useFetchtHistory(id,dato) {
   const API_URL = import.meta.env.VITE_API_URL;
   const [history, setHistory] = useState([]);
   const [loadingHistory, setLoadingHistory] = useState(true);
   const [errorHistory, setErrorHistory] = useState(null)

   useEffect(() => {
      setLoadingHistory(true)
      axios.get(`${API_URL}assets/${id}/history${dato}`)
         .then((data) => setHistory(data.data.data))
         .catch(() => setErrorHistory(errorHistory))
         .finally(() => setLoadingHistory(false)) 
   }, []);

   return { history, loadingHistory, errorHistory }
}

// mas informacion: https://docs.coincap.io/
