import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import PortalToMain from "./PortalToMain";
import {
  changeMobileMenu,
  changeModalCreatePhrases,
} from "../../redux/sliders/global";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ButtonComponent from "./form/button";
import { LOCAL_STORAGE } from "../utils/localStorage";
import { useNavigate } from "react-router";

const MenuMobile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const route = useNavigate();
  const { userName, isAuthApp } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      dispatch(changeMobileMenu());
    }, 1000);
    return () => clearTimeout(timer);
  };
  const handleOpenCreatePhrase = () => {
    handleClose();
    dispatch(changeModalCreatePhrases());
  };
  const handleLogin = () => {
    handleClose();
    route("/login");
  };
  const handleLogout = () => {
    LOCAL_STORAGE.remove(LOCAL_STORAGE.constants.JWT);
    window.location.reload();
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PortalToMain>
      <div
        className="z-30 fixed inset-0 flex items-end justify-end"
        style={{ zIndex: 100 }}
      >
        <div
          className="z-40 fixed inset-0 bg-black opacity-70 flex items-end justify-end"
          onClick={handleClose}
          style={{ zIndex: 110 }}
        />
        <div
          className={`z-50 max-w-[150px] w-full min-h-screen bg-blue-800 rounded-l-xl shadow-blue-200 shadow-sm p-2 transform transition-transform duration-1000 ${
            isVisible ? "-translate-x-[0px]" : "translate-x-[150px]"
          }`}
          style={{ zIndex: 120 }}
        >
          <div className="w-full mt-16 text-white border-b-2 font-bold border-white pb-2">
            hola, <br />
            {userName}
          </div>
          {isAuthApp && (
            <ButtonComponent
              className="w-full bg-transparent border-b-[1px] mt-2 pb-2 rounded-b-none"
              onClick={handleOpenCreatePhrase}
              text="Crear frase"
            />
          )}
          <ButtonComponent
            className={`w-full bg-transparent border-b-[1px] mt-2 pb-2 rounded-b-none text-amber-300 ${!isAuthApp?"text-red-600":""}`}
            onClick={() => (isAuthApp ? handleLogout() : handleLogin())}
            text={isAuthApp ? "Cerrar sesión" : "Iniciar sesión"}
          />
        </div>
      </div>
    </PortalToMain>
  );
};

export default MenuMobile;
