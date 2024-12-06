
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Gridi from './views/Gridi.jsx'
import Details from './views/Details.jsx'
import './main.css'
import Error404 from './views/Error404.jsx'
import Home from './views/Home.jsx'
import App from './App.jsx'
import Perfil from './views/usuarios/Perfil.jsx'
import Bienvenida from './views/Bienvenida.jsx'
import {UserContextProvider} from '../src/contexto/userContext.jsx'
import Login from './views/usuarios/login.jsx'

createRoot(document.getElementById('root')).render(
   
   <UserContextProvider>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Home /> }>
               <Route index element={ <Bienvenida /> } />
               <Route path='perfil' element={ <Perfil /> } />
            </Route>
            <Route path='/criptomonedas' element={ <App /> }>
               <Route index element={ <Gridi /> } />
               <Route path=':id' element={ <Details /> } />
            </Route>
            <Route path='*' element={ <Error404 /> } />
            <Route path='/login' element={ <Login /> } />
         </Routes>
      </BrowserRouter>
   </UserContextProvider>
   
)
