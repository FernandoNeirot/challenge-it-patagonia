/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { apiLoginFirebase } from "../infrastructure/user.api";
import { LOCAL_STORAGE } from "../../../shared/utils/localStorage";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/sliders/user";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false)
  const dispatch = useDispatch<any>();
  const login = async (user: string, pass: string) => {
    setIsError(false);
    setLoading(true);
    try {
      const response = await apiLoginFirebase({ user, pass });
      
      if (!response || response?.error?.isError ) setIsError(true);
      else {
        LOCAL_STORAGE.set(LOCAL_STORAGE.constants.JWT, JSON.stringify(response.data) || "");
        dispatch(addUser({ id: response.data?.id, userName: response.data?.userName, userTypeId: response.data?.userTypeId }));
        setIsAuth(true);
      }
    } catch {
      setIsError(true);
      setIsAuth(false);
    }
    setLoading(false);
  };

  return {
    loading,
    isError,
    isAuth,
    login,
  };
};

export default useLogin;
