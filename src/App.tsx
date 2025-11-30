import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../components/MainPage";
import UploadPage from "../components/UploadPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;