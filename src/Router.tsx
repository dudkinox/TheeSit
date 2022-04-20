import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import QuestionPage from "./pages/Question";
import FinishPage from "./pages/FinishPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/finish" element={<FinishPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
