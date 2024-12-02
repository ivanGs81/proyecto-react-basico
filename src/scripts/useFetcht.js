import axios from "axios"
import { useEffect, useState } from "react"

export function useFetcht(url) {
   const API_URL = import.meta.env.VITE_API_URL;
   const [datas, setDatas] = useState();

   useEffect(() => {
      axios.get(`${API_URL}${url}`)
         .then((data) => setDatas(data.data.data))
         .catch((e) => console.error(e))
   }, []);

   return datas
}


// mas informacion: https://docs.coincap.io/
