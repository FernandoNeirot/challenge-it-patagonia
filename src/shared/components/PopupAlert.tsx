import { useEffect, useState } from "react";
import {
  AppDispatch,
  IStateRedux,
} from "../_architecture/domain/state.interface";
import { useDispatch, useSelector } from "react-redux";
import { changePopupAlert } from "../../redux/sliders/global";
import PortalToMain from "./PortalToMain";

const PopupAlert = () => {
  const dispatch = useDispatch<AppDispatch>();
  const alert = useSelector(
    (state: IStateRedux) => state.global
  ).openPopupAlert;

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    const timerClose = setTimeout(() => {
      dispatch(
        changePopupAlert({ open: false, type: "", title: "", message: "" })
      );
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerClose);
    };
  }, []);

  return (
    <PortalToMain>
      <div
        style={{ zIndex: 1000 }}
        className={` right-[20px] fixed ${
          alert.type === "error" ? "bg-red-500" : "bg-green-700"
        } py-2 bottom-5 px-4 rounded-lg transition-all duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-md font-bold">{alert.title}</h3>
        <p>{alert.message}</p>
      </div>
    </PortalToMain>
  );
};

export default PopupAlert;
