import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import SearchPhrases from "./SearchPhrases";
import Menu from "./Menu";
import useAuth from "../../hooks/useAuth";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const { isAuthApp } = useAuth();

  const handleChangePage = (page: string) => {
    navigate(page);
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
              className="flex items-center w-full"
              onClick={() => handleChangePage("/")}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1028/1028163.png"
                alt="logo"
                className={`${isMenuFixed ? "h-8 w-8" : "h-16 w-16"}`}
              />
              <div className={`ml-4 min-w-[90px] `}>
                <p className="text-md font-bold">Gestion</p>
                <p className="text-md font-bold">de Frases</p>
              </div>
              {isAuthApp && <SearchPhrases />}
            </div>
            <Menu />
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderComponent;
