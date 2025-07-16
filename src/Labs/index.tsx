// src/Labs/index.tsx
import { Routes, Route } from "react-router-dom";
import LabsPage from "./LabsPage";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";

export default function Labs() {
  return (
    <Routes>
      <Route path="/" element={<LabsPage />} />
      <Route path="Lab1" element={<Lab1 />} />
      <Route path="Lab2" element={<Lab2 />} />
    </Routes>
  );
}
