import axios from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import FormButton from '../../components/forms/FormButton';
import FormInput from '../../components/forms/FormInput';

function Login() {

   const navigation = useNavigate()

   const [user, setUser] = useState({
      email: "",
      password: ""
   });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null)
   const submit = (e) => {
      e.preventDefault()
      setLoading(true)
      axios.post("https://reqres.in/api/login", user)
         .then(data => {
            localStorage.setItem("tokenCriptonet", data.data.token)
            navigation("/")
         })
         .catch(e =>{
            console.table(e)
            setError(e.response.data.error)
         } )
         .finally(() => setLoading(false))
   }

   if(localStorage.getItem("tokenCriptonet")) return <Navigate to="/criptomonedas" />

   return (
      <div className="container h-dvh flex justify-center items-center">
         <div className="bg-white border border-gray-300 shadow w-72 h-fit p-6 rounded-lg">
            <img src="./logo.svg" alt="" className='w-10 mx-auto mb-2' />
            <h1 className='text-lg font-regular text-center'>Iniciar Sesión</h1>
            <form onSubmit={submit}>
               
               <FormInput
                  nombre={"email"}
                  tipo={"email"}
                  etiqueta={"Correo"}
                  change={(e) => {
                     setUser({
                        ...user,
                        email: e.target.value
                     })
                  }} />
               <FormInput
                  nombre={"password"}
                  tipo={"password"}
                  etiqueta={"Contraseña"}
                  change={(e) => {
                     setUser({
                        ...user,
                        password: e.target.value
                     })
                  }} />
               
               <div className='flex justify-center mt-4'>
                  <FormButton contenido={loading ? "Cargando..." : "Acceder"} tipo={"submit"} />
               </div>
            </form>
            { error && <span className='text-red-600 text-xs uppercase font-regular'>{error}</span> }
         </div>
      </div>
   )
}

export default Login
