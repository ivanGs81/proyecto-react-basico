// eslint-disable-next-line react/prop-types
export default function CardDetails({ criptos }) {
   return (
      <div className="border border-gray-200 shadow-sm p-3 me-4 bg-white h-fit">
         <h1 className="text-2xl font-bold text-green-700 pb-4">{criptos.name} ({criptos.symbol})</h1>
         <p className="text-sm p-2"><span className="font-bold">Ranking:</span> {criptos.rank}</p>
         <p className="text-sm p-2"><span className="font-bold">Cantidad:</span> { parseFloat(criptos.supply).toFixed(2) }</p>
         <p className="text-sm p-2"><span className="font-bold">Precio cant.:</span> { parseFloat(criptos.marketCapUsd).toFixed(2)} USD</p>
         <p className="text-sm p-2"><span className="font-bold">Precio USD:</span> { parseFloat(criptos.volumeUsd24Hr).toFixed(2)} USD</p>
      </div>
   )
}
