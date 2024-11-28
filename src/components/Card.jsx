
// eslint-disable-next-line react/prop-types
function Card({ key, nombre, precioDolar, lastValue, site, simbol }) {
   const clases = "border-gray-200 bg-white border p-3 m-4 rounded-md border-l-4 shadow-sm";
   return(
      
      <li key={key} className={(lastValue > 0) ? "border-l-green-600 " + clases : "border-l-red-500 " + clases }>
         <h5 className="text-xl font-bold text-blue-700">{nombre} ({simbol})</h5>
         <div className="flex py-2">
            <p className="grow text-sm"><span className="font-semibold">Precio:</span> {parseFloat(precioDolar).toFixed(2)} USD</p>
            <p className="grow text-sm"><span className="font-semibold">Valor actual:</span> <span className={(lastValue > 0) ? "positive" : "negative"}>{ parseFloat(lastValue).toFixed(1) } %</span></p>
         </div>
         <div className="flex justify-end">
            <a href={site} className="text-xs block text-blue-500 hover:text-blue-700 hover:underline px-1" target="_blank">Más información</a>
            <a href="/detalles" className="text-xs block text-blue-500 hover:text-blue-700 hover:underline px-1 border-l border-l-blue-300" target="_blank" >Mas detalles</a>
         </div>
         
      </li>
   )
}

export default Card
