import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import QuestionPage from "./pages/Question";
import FinishPage from "./pages/FinishPage";
import FaceDetection from "./pages/FaceDetection";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/face-detection" element={<FaceDetection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
