import {NavLink} from 'react-router-dom'

const Menu = () =>{
   return(
      <nav className="bg-green-500 py-3 px-4">
         <ul className="flex justify-end">
            <li className="px-2"><NavLink to='/' className='text-white hover:underline'>Inicio</NavLink></li>
         </ul>
      </nav>
   )
}

export default Menu
