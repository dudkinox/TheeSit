import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import QuestionPage from "./pages/Question";
import FinishPage from "./pages/FinishPage";
import AdminPage from "./pages/Admin";
import LoginPage from "./pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
