import { Link } from "react-router-dom"


function Home() {
   return (
      <>
         <div>Bienvenido a las paginas de las criptomonedas</div>
         <Link to='/criptomonedas'>Lista de criptos</Link>
      </>
      
   )
}

export default Home