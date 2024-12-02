// eslint-disable-next-line react/prop-types
export default function CardTable({ history }) {
   return (
      <table className="w-full">
         <thead className="bg-green-400">
            <th className="text-white">Fecha</th>
            <th className="text-white">Precio</th>
         </thead>
         <tbody className="border-gray-300 border border-t-0">
            {history.map(({date, priceUsd, time}) =>(
               <tr className="bg-white border-b-gray-300 border-b" key={time}>
                  <td className="px-3 py-2">{new Date(date).toDateString()}</td>
                  <td className="px-3 py-2">{parseFloat(priceUsd).toFixed(2)} USD</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}
