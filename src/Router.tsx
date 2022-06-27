import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import QuestionPage from "./pages/Question";
import FinishPage from "./pages/FinishPage";
import AdminPage from "./pages/Admin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
