
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Gridi from './views/Gridi.jsx'
import Details from './views/Details.jsx'
import "./main.css"
import Error404 from './views/Error404.jsx'
import Home from './views/Home.jsx'
import App from './App.jsx'
import Perfil from './views/Perfil.jsx'
import Bienvenida from './views/Bienvenida.jsx'

createRoot(document.getElementById('root')).render(
   
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
      </Routes>
   </BrowserRouter>
   
)
