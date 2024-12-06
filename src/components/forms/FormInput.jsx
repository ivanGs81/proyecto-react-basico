export default function FormInput({ nombre, etiqueta, tipo }) {
   return (
      <div>
         <label htmlFor={nombre}>{etiqueta}</label>
         <input type={tipo} name={nombre} className="border" />
      </div>
   )
}


