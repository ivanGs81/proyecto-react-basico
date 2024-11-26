
// eslint-disable-next-line react/prop-types
function Card({ key, nombre, precioDolar, lastValue, site }) {
   return(
      
      <li key={key} className="border-gray-200 bg-white border p-3 m-4 rounded-md shadow-sm">
         <h5 className="text-xl font-bold text-red-800">{nombre}</h5>
         <div className="flex py-2">
            <p className="grow text-sm"><span className="font-semibold">Precio:</span> {Math.round(precioDolar)} USD</p>
            <p className="grow text-sm"><span className="font-semibold">Valor actual:</span> { Math.round(lastValue)  }</p>
         </div>
         <a href={site} className="text-xs text-end block text-blue-500 hover:text-blue-700 hover:underline" target="_blank">Más información</a>
      </li>
   )
}

export default Card
