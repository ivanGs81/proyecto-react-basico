const Error404 = () => (
   <div className="container h-dvh flex justify-center items-center">
      <div className="border border-gray-100 w-fit h-fit p-4 bg-white rounded-md shadow-sm border-b-4 border-b-red-800 flex flex-col items-center">
         <h1 className="text-4xl text-red-800 font-bold">Error 404</h1>
         <p>Página no encontrada</p>
         <a href="/" className="bg-blue-600 px-4 py-2 mt-2 w-fit h-fit text-white hover:bg-blue-800 rounded-full">Volver</a>
      </div>
   </div>
   
   
)

export default Error404
