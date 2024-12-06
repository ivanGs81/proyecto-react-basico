import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BotonVerde({ contenido, url }) {
   return (
      <Link to={url}
      className="border bg-green-500
                  px-4 py-2
                  text-white w-fit block rounded-full
                  my-7 mr-2
                  shadow-md
                  hover:bg-green-600
                  transition-colors duration-75
                  font-regular">{ contenido }</Link>
   )
}

export default BotonVerde