import { Link } from "react-router-dom"
import Logo from "../components/logo"


function Home() {
   return (
      <>
         <div className="container h-dvh py-6">
            <div className="p-6 bg-white shadow-md">
               <div className="logo-size mx-auto my-6">
                  <Logo />
               </div>
               
               <h1 className="text-center text-red-700 font-bold text-6xl">Bienvenido a las paginas de las criptomonedas</h1>
               <div className="pt-3">
                  <Link to='/criptomonedas' className="border bg-blue-600 px-4 py-2 text-white w-fit block mx-auto rounded-lg my-7">Ingresar</Link>
               </div>
               
            </div>
            
         </div>
         
      </>
      
   )
}

export default Home