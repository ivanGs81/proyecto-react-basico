import {NavLink, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexto/userContext'

const Menu = () =>{
   
   const navigation = useNavigate()
   const usuario2 = useContext(UserContext)

   return(
      <nav className="bg-green-500 py-3 px-2">
         <ul className="flex justify-end items-center">
            <li className="px-2"><NavLink to='/' className='text-white hover:underline text-sm'>Inicio</NavLink></li>
            <li className="px-2 flex items-center">
               <NavLink to='/perfil' className='text-white hover:underline text-sm pl-2 mt-1'>Perfil de { usuario2.name }</NavLink>
               <div className="w-6 h-6 bg-green-950 ml-2 rounded-full"></div>
            </li>
            <li className="px-2 flex items-center"><a onClick={() => {
               localStorage.removeItem("tokenCriptonet")
               navigation("/")
            }} className='text-white hover:underline text-sm pl-2 mt-1'>Cerrar sesión</a></li>
         </ul>
      </nav>
   )
}

export default Menu
