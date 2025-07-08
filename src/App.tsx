
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LabsPage from "./Labs/LabsPage";
import Kambaz from "./Kambaz";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="Kambaz" />} />
        <Route path="/Labs/*" element={<LabsPage />} />
        <Route path="/Kambaz/*" element={<Kambaz />} />
      </Routes>
    </HashRouter>
  );
}
