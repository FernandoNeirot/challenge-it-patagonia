import { BrowserRouter, Route, Routes } from "react-router";
import PrivateRoute from "./shared/components/PrivateRoute";
import HomePage from "./pages/home/presentation";
import LoginPage from "./pages/login/presentation";
import HeaderComponent from "./shared/components/header";
import { NotFound } from "./pages/NotFound/presentation";

function App() {
  return (
    <div className="w-full bg-black">
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound/>} />
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
  )
}

export default App
