
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Details from './views/Details.jsx'
import "./main.css"
import Error404 from './views/Error404.jsx'
import Menu from './components/Menu.jsx'
import Guias from './views/Guia.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Menu />
      <Routes>
         <Route path='/' element={<App />} />
         <Route path='/detalles' element={ <Details />} />
         <Route path='/guias' element={ <Guias />} />
         <Route path='*' element={<Error404 />} />
      </Routes>
   </BrowserRouter>
   
)
