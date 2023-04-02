import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/murabiblioteca" element={<MainPage />} />
    <Route path="*" element={<Navigate to="/murabiblioteca" />} />
  </Routes>
);

export default RoutesMain;
