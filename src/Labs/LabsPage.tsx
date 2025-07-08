import React from "react";

function LabsPage() {
  return (
    <>
      {/* ---------- IDENTIFICATION + LINKS ---------- */}
      <h1>Lab 1 – Alejandro Campa (Section ###)</h1>
      <p>
        Deployed site:&nbsp;
        <a href="https://joyful-lamington-9450a4.netlify.app/">Netlify link</a> &nbsp;|&nbsp;
        GitHub:&nbsp;
        <a id="wd-github" href="https://github.com/AlejandroCampa/kambaz-react-web-app">
          repo
        </a>
      </p>

      {/* ---------- HEADING + PARAGRAPH ---------- */}
      <h2>Assignment 1</h2>
      <p>
        This lab practices HTML headings, paragraphs, lists, tables, images, and
        forms inside a React SPA.
      </p>

      {/* ---------- ORDERED LIST (recipe) ---------- */}
      <h3>My Favorite Recipe</h3>
      <ol id="wd-your-favorite-recipe">
        <li>Boil pasta (8 min)</li>
        <li>Heat marinara</li>
        <li>Combine &amp; top with basil</li>
      </ol>

      {/* ---------- UNORDERED LIST (books) ---------- */}
      <h3>My Favorite Books</h3>
      <ul id="wd-your-books">
        <li>Dune</li>
        <li>1984</li>
        <li>Atomic Habits</li>
      </ul>

      {/* ---------- TABLE Q1–Q10 ---------- */}
      <h3>Quiz Scores</h3>
      <table
        style={{ border: "1px solid white" }}
        cellPadding={4}
        width="60%"
      >
        <thead>
          <tr>
            <th>Quiz</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Q1", "HTML", "2025-05-01", 85],
            ["Q2", "CSS", "2025-05-08", 90],
            ["Q3", "JS", "2025-05-15", 92],
            ["Q4", "React", "2025-05-22", 95],
            ["Q5", "Redux", "2025-05-29", 88],
            ["Q6", "Node", "2025-06-05", 93],
            ["Q7", "Express", "2025-06-12", 91],
            ["Q8", "Mongo", "2025-06-19", 89],
            ["Q9", "Docker", "2025-06-26", 90],
            ["Q10", "Netlify", "2025-07-03", 94],
          ].map(([q, topic, d, g]) => (
            <tr key={q}>
              <td>{q}</td>
              <td>{topic}</td>
              <td>{d}</td>
              <td>{g}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td>91</td>
          </tr>
        </tfoot>
      </table>

      {/* ---------- IMAGES ---------- */}
      <h3>Images</h3>
      <img
        id="wd-starship"
        width="250"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/SpaceX_Starship_SN9.jpg/640px-SpaceX_Starship_SN9.jpg"
        alt="Starship"
      />
      &nbsp;
      <img
        id="wd-teslabot"
        width="200"
        src="https://upload.wikimedia.org/wikipedia/commons/2/24/Tesla_Bot.jpg"
        alt="Teslabot"
      />

      {/* ---------- FULL FORM ---------- */}
      <h3>Comprehensive Form</h3>
      <form>
        {/* username / password / first / last */}
        <label>
          Username: <input type="text" placeholder="jdoe" />
        </label>
        <br />
        <label>
          Password: <input type="password" defaultValue="12345" />
        </label>
        <br />
        <label>
          First&nbsp;Name: <input type="text" placeholder="John" />
        </label>
        <br />
        <label>
          Last&nbsp;Name: <input type="text" placeholder="Doe" />
        </label>
        <br />

        {/* textarea */}
        <label>
          Biography:
          <br />
          <textarea rows={3} cols={40} placeholder="About me..." />
        </label>
        <br />

        {/* file upload */}
        <label>
          Upload&nbsp;file: <input type="file" />
        </label>
        <br />

        {/* radios */}
        <p>Favorite&nbsp;Genre&nbsp;(radio)</p>
        {["Comedy", "Drama", "SciFi", "Fantasy"].map((g) => (
          <label key={g}>
            <input type="radio" name="genre" /> {g}{" "}
          </label>
        ))}
        <br />

        {/* checkboxes */}
        <p>Genres&nbsp;I&nbsp;watch&nbsp;(checkbox)</p>
        {["Comedy", "Drama", "SciFi", "Fantasy"].map((g) => (
          <label key={g}>
            <input type="checkbox" /> {g}{" "}
          </label>
        ))}
        <br />

        {/* dropdowns */}
        <label>
          Select&nbsp;one:
          <select>
            <option>Comedy</option>
            <option>Drama</option>
            <option>SciFi</option>
            <option>Fantasy</option>
          </select>
        </label>
        <br />
        <label>
          Select&nbsp;many:
          <select multiple style={{ height: 70 }}>
            <option>Comedy</option>
            <option>Drama</option>
            <option>SciFi</option>
            <option>Fantasy</option>
          </select>
        </label>
        <br />

        {/* email / salary / range / date */}
        <label>
          Email: <input type="email" placeholder="me@site.com" />
        </label>
        <br />
        <label>
          Salary: <input type="number" defaultValue={100000} />
        </label>
        <br />
        <label>
          Rating: <input type="range" min={0} max={10} defaultValue={5} />
        </label>
        <br />
        <label>
          DOB: <input type="date" defaultValue="2000-01-01" />
        </label>
        <br />

        <button type="button" onClick={() => alert("Form submitted!")}>
          Submit
        </button>
      </form>
    </>
  );
}

export default LabsPage;
