import useResize from "../../hooks/useResize";
import ButtonComponent from "./form/button";
import {
  changeMobileMenu,
  changeModalCreatePhrases,
} from "../../redux/sliders/global";
import { LOCAL_STORAGE } from "../utils/localStorage";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SlMenu } from "react-icons/sl";
import useAuth from "../../hooks/useAuth";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const width = useResize();
  const {isAuthApp}=useAuth()
  const handleModalCreatePhrase = () => {
    dispatch(changeModalCreatePhrases());
  };

  const handleLogout = () => {
    LOCAL_STORAGE.remove(LOCAL_STORAGE.constants.JWT);
    window.location.reload();
  };
  const handleChangePage = (page: string) => {
    navigate(page);
  };
  const handleActiveMenuMobile = () => {
    dispatch(changeMobileMenu());
  };
  return (
    <>
      {width > 600 ? (
        <div className="ml-2 min-w-[200px] flex items-center justify-end mt-1">
          {isAuthApp ? (
            <div className="flex justify-end items-center">
              <ButtonComponent
                onClick={handleModalCreatePhrase}
                text="Crear frase"
              />
              <ButtonComponent
                onClick={handleLogout}
                text="Salir"
                className="ml-2"
              />
            </div>
          ) : (
            <button
              onClick={() => handleChangePage("login")}
              className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
            >
              Ingresar
            </button>
          )}
        </div>
      ) : (
        <div className="ml-3 flex items-center justify-end mt-1">
          <SlMenu onClick={handleActiveMenuMobile} />
        </div>
      )}
    </>
  );
};

export default Menu;
