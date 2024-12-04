import axios from "axios"
import { useEffect, useState } from "react"

export function useFetcht(url) {
   const API_URL = import.meta.env.VITE_API_URL;
   const [datas, setDatas] = useState();
   const [carga, setCarga] = useState(false);
   const [error, setError] = useState()

   useEffect(() => {
      setCarga(true)
      axios.get(`${API_URL}${url}`)
         .then((data) => setDatas(data.data.data))
         .catch(() => setError(error))
         .finally(() => setCarga(false))
   }, []);

   return [datas, carga, error]
}


// mas informacion: https://docs.coincap.io/
