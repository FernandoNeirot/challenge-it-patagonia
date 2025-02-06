import { useNavigate } from "react-router";
import ButtonComponent from "../../../shared/components/form/button";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col items-center justify-center bg-blue-900' style={{ height: "100vh"
      ,backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/027/812/512/non_2x/3d-rendering-of-abstract-technology-background-with-connecting-dots-and-lines-network-concept-abstract-background-with-binary-code-flowing-through-a-network-of-interconnected-nodes-ai-generated-free-photo.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "fixed",
      width: "100%",
      
      top: 0,
      left: 0,
      zIndex: 0,
     }}>
      <div className="flex flex-col items-center justify-center bg-blue-900 opacity-[.98] p-10 rounded-xl">

      <h1 className='text-red-300 font-bold text-4xl mb-10'>Seccion no encontrada</h1>
      
      <p>Por favor, contacta al administrador si crees que esto es un error.</p>
      <ButtonComponent text="Volver al inicio" className=' bg-blue-950 py-2 px-4 text-cyan-50 mt-10 rounded-xl' onClick={() => navigate('/') }/>
      </div>
    </div>
  )
}