import { useNavigate } from "react-router";
import { LOCAL_STORAGE } from "../../utils/localStorage";
import { useEffect, useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CreatePhraseModal from "../form/createPhrase";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const { value: jwt } = useLocalStorage({ key: LOCAL_STORAGE.constants.JWT });
  const [activeCreateModal, setActiveCreateModal] = useState(false);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const handleChangePage = (page: string) => {
    navigate(page);
  };
  const handleModalCreatePhrase = () => {
    setActiveCreateModal(!activeCreateModal);
  };

  const handleLogout = () => {
    LOCAL_STORAGE.remove(LOCAL_STORAGE.constants.JWT);
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsMenuFixed(true);
      } else {
        setIsMenuFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-50 w-full">
      {location.pathname.includes("login") ? null : (
        <>
          {isMenuFixed && <div className="h-[115px]" />}
          {activeCreateModal && (
            <CreatePhraseModal
              handleModalCreatePhrase={handleModalCreatePhrase}
            />
          )}

          <div
            className={`${
              isMenuFixed
                ? "fixed animate-slide-down"
                : "relative animate-slide-up"
            } p-2 top-0 w-full bg-gray-800 text-white p-${
              isMenuFixed ? "2" : "4"
            } flex justify-between items-center cursor-pointer`}
            style={{ zIndex: 10 }}
          >
            <div
              className="flex items-center"
              onClick={() => handleChangePage("/")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1028/1028163.png"
                alt="logo"
                className={`${isMenuFixed ? "h-8 w-8" : "h-16 w-16"}`}
              />
              <div className={`ml-4 ${isMenuFixed ? "flex space-x-2" : ""}`}>
                <p className="text-md font-bold">Gestion</p>
                <p className="text-md font-bold">de Frases</p>
              </div>
            </div>
            <div>
              {jwt ? (
                <>
                  <button
                    onClick={handleModalCreatePhrase}
                    className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
                  >
                    Crear frase
                  </button>
                  <button
                    onClick={handleLogout}
                    className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
                  >
                    Salir
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleChangePage("login")}
                  className="mr-5 border rounded-xl py-1 hover:bg-slate-700 px-3"
                >
                  Ingresar
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderComponent;
