import { Link } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
function Card({ident, key, nombre, precioDolar, lastValue, site, simbol }) {
   const clases = "border-gray-200 bg-white border p-3 m-4 rounded-md border-l-4 shadow-sm";
   return(
      
      <li key={key} className={(lastValue > 0) ? "border-l-green-600 " + clases : "border-l-red-500 " + clases }>
         <h5 className="text-lg font-medium text-blue-700">{nombre} ({simbol})</h5>
         <div className="flex py-2">
            <p className="grow text-sm"><span className="font-regular">Precio:</span> {parseFloat(precioDolar).toFixed(2)} USD</p>
            <p className="grow text-sm"><span className="font-regular">Valor actual:</span> <span className={(lastValue > 0) ? "positive" : "negative"}>{ parseFloat(lastValue).toFixed(1) } %</span></p>
         </div>
         <div className="flex justify-end">
            <Link to={site} className="text-xs block text-blue-500 hover:text-blue-700 hover:underline px-1">Más informació</Link>
            <Link to={`/criptomonedas/${ident}`} className="text-xs block text-blue-500 hover:text-blue-700 hover:underline px-1 border-l border-l-blue-300">Mas detalles</Link>
         </div>
         
      </li>
   )
}

export default Card
