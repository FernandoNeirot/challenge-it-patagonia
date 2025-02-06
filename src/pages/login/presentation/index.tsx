 
import { useEffect, useState } from 'react'
import useLogin from '../application/useLogin';
import InputComponent from '../../../shared/components/form/Input';
import Loading from '../../../shared/components/form/loading';
import ButtonComponent from '../../../shared/components/form/button';
import useAuth from '../../../hooks/useAuth';

const LoginPage = () => {
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const { isError, loading, login, isAuth } = useLogin();
  const {isAuthApp} = useAuth();
  const handleLogin = async () => {
    login(user, pass);
  };
  useEffect(() => {
    if (isAuth) 
      window.location.assign("/");
    
  }, [isAuth]);

  useEffect(() => {
    if(isAuthApp)
      window.location.assign("/");
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen" style={{
      backgroundImage: 'url("https://ddigitals.net/wp-content/uploads/2021/09/estrategia-contenido-seo.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "fixed",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      zIndex: 0,
    }}>
      <div className="absolute w-full h-full bg-black opacity-80"></div>
      <div className="relative w-full max-w-[400px] min-h-[200px] border-spacing-0 border rounded-2xl shadow-2xl  border-blue-800 p-2 bg-blue-950">
        {loading && <Loading />}
        <p className=" text-center text-white p-5 ">Ingreso al sistema</p>
        <InputComponent
          name="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Usuario"          
        />
        <InputComponent
          name="pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Clave"
        />
        {isError && (
          <p className=" w-full text-center text-red-400 py-2">
            Error de credenciales
          </p>
        )}
        <div className="flex justify-center mt-5 mb-2">
          <ButtonComponent
            onClick={() => (!loading ? handleLogin() : {})}
            text="Ingresar"
            isLoading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage