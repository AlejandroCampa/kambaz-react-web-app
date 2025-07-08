
import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { aid } = useParams();
  return (
    <div id="wd-assignment-editor">
      <h3>Edit Assignment {aid}</h3>
      <label>Assignment Name</label><br/>
      <input defaultValue={`Assignment ${aid}`} /><br/>
      <label>Description</label><br/>
      <textarea cols={40} rows={5} defaultValue="Describe the assignment here." /><br/>
      <label>Points</label><br/>
      <input type="number" defaultValue={100} /><br/>
      <label>Assignment Group</label><br/>
      <select defaultValue="ASSIGNMENTS">
        <option value="ASSIGNMENTS">Assignments</option>
        <option value="QUIZZES">Quizzes</option>
        <option value="EXAMS">Exams</option>
        <option value="PROJECT">Project</option>
      </select><br/>
      <label>Display Grade as</label><br/>
      <select defaultValue="Percentage">
        <option value="Percentage">Percentage</option>
        <option value="Points">Points</option>
        <option value="Letter">Letter</option>
      </select><br/>
      <label>Submission Type</label><br/>
      <select defaultValue="ONLINE">
        <option value="ONLINE">Online</option>
        <option value="INPERSON">In Person</option>
      </select><br/>
      <fieldset>
        <legend>Online Entry Options</legend>
        <input type="checkbox" defaultChecked /> Text Entry<br/>
        <input type="checkbox" /> File Uploads<br/>
        <input type="checkbox" /> Website URL<br/>
      </fieldset>
      <label>Assign To</label><br/>
      <input defaultValue="Everyone" /><br/>
      <label>Due</label><br/>
      <input type="date" defaultValue="2025-07-31" /><br/>
      <label>Available from</label><br/>
      <input type="date" defaultValue="2025-07-01" /><br/>
      <label>Until</label><br/>
      <input type="date" defaultValue="2025-08-01" /><br/>
    </div>
  );
}
