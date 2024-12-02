import axios from "axios"
import { useEffect, useState } from "react"

export function useFetcht(url) {
   const API_URL = import.meta.env.VITE_API_URL;
   const [datas, setDatas] = useState();
   const [carga, setCarga] = useState(false);

   useEffect(() => {
      setCarga(true)
      axios.get(`${API_URL}${url}`)
         .then((data) => setDatas(data.data.data))
         .catch((e) => console.error(e))
         .finally(() => setCarga(false))
   }, []);

   return [datas, carga]
}


// mas informacion: https://docs.coincap.io/
