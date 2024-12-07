// eslint-disable-next-line react/prop-types
export default function FormInput({ nombre, etiqueta, tipo, change }) {
   return (
      <div className="my-4">
         <label htmlFor={nombre} className="text-xs text-green-700 font-regular underline">{etiqueta}</label>
         <input required onChange={change} type={tipo} name={nombre} className="border-b border-b-gray-500 w-full text-sm py-1 pl-2 text-blue-500" />
      </div>
   )
}


