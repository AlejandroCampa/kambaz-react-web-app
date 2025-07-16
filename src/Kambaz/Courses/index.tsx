
import { Routes, Route, Navigate, useParams } from "react-router";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

export default function Courses() {
  //const { cid } = useParams();
  return (
    <div id="wd-course-shell">
      <table>
        <tbody>
          <tr>
            <td valign="top" style={{paddingRight: '1rem'}}>
              <CourseNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to={`Home`} />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<Piazza />} />
                <Route path="Zoom" element={<Zoom />} />
                <Route path="Quizzes" element={<Quizzes />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid/Edit" element={<AssignmentEditor />} />
                <Route path="Grades" element={<Grades />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
