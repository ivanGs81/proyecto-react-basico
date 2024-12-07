
// eslint-disable-next-line react/prop-types
export default function FormButton({tipo, contenido}) {
   return (
      <button type={tipo} className="bg-green-600 text-white px-4 font-regular rounded-full shadow-md border border-green-600 text-xs py-2">{contenido}</button>
   )
}
