// src/App.tsx
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Kambaz from "./Kambaz";
import Labs from "./Labs"; // this is src/Labs/index.tsx

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Kambaz" />} />
        <Route path="/Kambaz/*" element={<Kambaz />} />
        <Route path="/Labs/*" element={<Labs />} />
      </Routes>
    </HashRouter>
  );
}
