import { useEffect, useState } from "react";
import { LOCAL_STORAGE } from "../shared/utils/localStorage";
import { useNavigate } from "react-router";

interface ILocalStorage {
  key: string;
}

const useLocalStorage = ({ key }: ILocalStorage) => {
  const [value, setValue] = useState<string | null>(null);
  const router = useNavigate();
  useEffect(() => {
    const handleStorageChange = () => {
      const response = LOCAL_STORAGE.get(key);      
      setValue(response);
      // validacion para cuando se elimine jwt y se haga redireccion a login
      if(key === LOCAL_STORAGE.constants.JWT && !response && !window.location.pathname.includes("login")){
        router("/login")
      }
    };
    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);
  return {
    value,
  };
};

export default useLocalStorage;
