import {Link} from 'react-router-dom'

const Menu = () =>{
   return(
      <nav className="bg-green-500 py-3 px-4">
         <ul className="flex justify-end">
            <li className="px-2"><Link to='/' className='text-white hover:underline'>Inicio</Link></li>
            <li className="px-2"><Link to='/guias' className='text-white hover:underline'>Guias</Link></li>
         </ul>
      </nav>
   )
}

export default Menu
