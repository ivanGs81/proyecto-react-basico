import { Navigate, Outlet } from "react-router-dom"
import Menu from "./components/Menu"

const App = () => {

   if(!localStorage.getItem("tokenCriptonet")) return <Navigate to="/login" />

   return (
      <>
         <Menu />
         <Outlet />
      </>
   )
}

export default App
