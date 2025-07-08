
import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    {id: 1, title: "CS5610 Web Dev", number: "CS5610", name: "Web Development"},
    {id: 2, title: "CS5200 Database", number: "CS5200", name: "Database Management"},
    {id: 3, title: "CS4550 OOD", number: "CS4550", name: "Object‑Oriented Design"},
  ];
  return (
    <div id="wd-dashboard">
      <h2>Dashboard</h2>
      <h3>Published Courses</h3>
      <div style={{display: "flex", gap: "1rem"}}>
        {courses.map(c => (
          <Link key={c.id} to={`/Kambaz/Courses/${c.id}/Home`}>
            <div style={{border: "1px solid #888", padding: "1rem", width: 180}}>
              <h4>{c.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
