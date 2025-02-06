
export const Unauthorized = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-slate-200' style={{ height: 'calc(100vh - 115px)' }}>
      <h1 className='text-red-600 font-bold text-4xl mb-10'>Acceso denegado</h1>
      <p>No tienes permiso para ver esta página.</p>
      <p>Por favor, contacta al administrador si crees que esto es un error.</p>
      <button className=' bg-blue-900 py-2 px-4 text-cyan-50 mt-10 rounded-xl' onClick={() => window.location.href = '/'}>Volver al inicio</button>
    </div>
  )
}