/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios"

const UserContext = createContext()


function UserContextProvider({ children }) {
   const [usering, setUsering] = useState({})

   useEffect(() => {
      axios.post(`https://reqres.in/api/users/2`)
         .then((data) => {
            //setProfile(data)
            console.log(data.data)
         })
         .catch(e => console.error(e))
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