import { Link } from "react-router-dom";

export default function LabsPage() {
  return (
    <div>
      <h1>Labs</h1>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1 – HTML Practice</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2 – CSS Practice</Link></li>
      </ul>
    </div>
  );
}