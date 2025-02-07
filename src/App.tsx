import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRoute from "./shared/components/PrivateRoute";
import HomePage from "./pages/home/presentation";
import LoginPage from "./pages/login/presentation";

import { NotFound } from "./pages/NotFound/presentation";
import { useSelector } from "react-redux";
import { IStateRedux } from "./shared/_architecture/domain/state.interface";

import HeaderComponent from "./shared/components/Header";
import MenuMobile from "./shared/components/MenuMobile";
import PopupAlert from "./shared/components/PopupAlert";
import CreateEditDeletePhraseModal from "./shared/components/form/createEditDeletePhrase";

function App() {
  const globalData = useSelector((state: IStateRedux) => state.global);
  return (
    <div className="w-full bg-black overflow-hidden">
      <BrowserRouter>
        <HeaderComponent />
        {globalData.openModalCreatePhrase && <CreateEditDeletePhraseModal />}
        {globalData.openMobileMenu && <MenuMobile />}
        {globalData.openPopupAlert.open && <PopupAlert />}
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
