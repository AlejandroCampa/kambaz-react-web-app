
import { Link, useParams } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  return (
    <div id="wd-assignments">
      <h3>Assignments</h3>
      <input placeholder="Search Assignments" style={{width: "60%"}}/><br/>
      <button>Create Assignment</button>
      <h4>Assignments</h4>
      <ul>
        <li><Link to={`/Kambaz/Courses/${cid}/Assignments/1/Edit`}>Assignment 1</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/Assignments/2/Edit`}>Assignment 2</Link></li>
      </ul>
    </div>
  );
}
