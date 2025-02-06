import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRoute from "./shared/components/PrivateRoute";
import HomePage from "./pages/home/presentation";
import LoginPage from "./pages/login/presentation";

import { NotFound } from "./pages/NotFound/presentation";
import { useSelector } from "react-redux";
import { IStateRedux } from "./shared/_architecture/domain/state.interface";
import CreatePhraseModal from "./shared/components/form/createEditPhrase";
import HeaderComponent from "./shared/components/Header";
import MenuMobile from "./shared/components/MenuMobile";

function App() {
  const globalData = useSelector((state: IStateRedux) => state.global);
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <HeaderComponent />
        {globalData.openModalCreatePhrase && <CreatePhraseModal />}
        {globalData.openMobileMenu && <MenuMobile />}
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
