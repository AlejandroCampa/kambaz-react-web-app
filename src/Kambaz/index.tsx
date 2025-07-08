
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <h1>Kambaz</h1>
      <nav>
        <Link to="/Kambaz/Account">Account</Link> |
        <Link to="/Kambaz/Dashboard">Dashboard</Link> |
        <Link to="/Labs">Labs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="Account/*" element={<Account />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses/:cid/*" element={<Courses />} />
      </Routes>
    </div>
  );
}
