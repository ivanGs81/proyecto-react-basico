/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

function UserContextProvider({ children }) {
   const [usering, setUsering] = useState({})
   useEffect(() => {
      setUsering({
         name: "Juanito",
         registered: "12/10/2024",
         role: "Administrador"
      })
   }, [])
   return (
      <UserContext.Provider value={usering}>
         { children }
      </UserContext.Provider>
   )
}

export { UserContext, UserContextProvider }