import { useNavigate } from "react-router-dom";
import BackIcon from "./BackIcon";


function ButtonBack() {
   const navegar = useNavigate();
   return (
      <button className="text-white flex justify-between font-semibold bg-green-500 rounded-md my-3 pr-4 py-1 drop-shadow-sm" onClick={() => navegar(-1)}><span><BackIcon /></span><span>Volver</span></button>
   )
}

export default ButtonBack
