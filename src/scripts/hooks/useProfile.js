import { useEffect, useState } from "react"

export function useProfile() {
   const [usering, setUsering] = useState({})
   useEffect(() => {
      setUsering({
         name: "Ivan Guardia",
         registered: "22/09/2024"
      })
   }, [])
   return  usering
}
