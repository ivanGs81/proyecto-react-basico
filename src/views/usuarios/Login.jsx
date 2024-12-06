import axios from 'axios'
import { useState } from 'react'

function Login() {
   const [user, setUser] = useState({
      email: "",
      password: ""
   });

   const submit = (e) => {
      e.preventDefault()
      axios.post("https://reqres.in/api/login", user)
         .then(data => {
            localStorage.setItem("tokenCriptonet", data.data.token)
         })
         .catch(e => console.error(e))
   }
   return (
      <div className="container">
         <div className="bg-white border border-gray-22 shadow w-64 p-4 mx-auto">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={submit}>
               <div>
                  <label htmlFor="email">Correo</label>
                  <input required onChange={ (e) => {
                     setUser({
                        ...user,
                        email: e.target.value
                     })
                  }} type="email" name="email" className="border" />
               </div>
               <div>
                  <label htmlFor="pss">Contraseña</label>
                  <input required onChange={(e) =>{
                     setUser({
                        ...user,
                        password: e.target.value
                     })
                  }} type="password" name="pss" className="border" />
               </div>
               <div>
                  <button type="submit">Acceder</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login