import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexto/userContext'

const Menu = () =>{
   
   const usuario2 = useContext(UserContext)

   return(
      <nav className="bg-green-500 py-3 px-4">
         <ul className="flex justify-end">
            <li className="px-2"><NavLink to='/' className='text-white hover:underline'>Inicio</NavLink></li>
            <li className="px-2"><NavLink to='/perfil' className='text-white hover:underline'>Perfil de { usuario2.name }</NavLink></li>
         </ul>
      </nav>
   )
}

export default Menu
