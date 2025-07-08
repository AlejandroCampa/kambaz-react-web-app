
import { Link } from "react-router-dom";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      {/* ---------- Heading Tags ---------- */}
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      {/* ---------- Paragraph Tags ---------- */}
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is the first paragraph. The paragraph tag is used to create vertical gaps between blocks of text.
        </p>
        <p id="wd-p-2">
          This is the second paragraph. Notice the space above created automatically by the &lt;p&gt; element.
        </p>
        <p id="wd-p-3">
          This is the third paragraph. Each paragraph is rendered as a block element with top and bottom margin.
        </p>
      </div>

      {/* ---------- Lists ---------- */}
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet.</li>
          <li>Pour batter onto skillet.</li>
          <li>Flip when bubbly.</li>
          <li>Cook other side.</li>
          <li>Serve and enjoy!</li>
        </ol>

        My favorite recipe:
        <ol id="wd-your-favorite-recipe">
          <li>Boil pasta.</li>
          <li>Heat marinara sauce.</li>
          <li>Combine and garnish with basil.</li>
        </ol>

        <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>

        Your favorite books (in no particular order)
        <ul id="wd-your-books">
          <li>Atomic Habits</li>
          <li>Sapiens</li>
          <li>Clean Code</li>
        </ul>
      </div>

      {/* ---------- Table ---------- */}
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
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
              ["Q3", "JavaScript", "2025-05-15", 92],
              ["Q4", "React", "2025-05-22", 95],
              ["Q5", "Redux", "2025-05-29", 88],
              ["Q6", "Node", "2025-06-05", 93],
              ["Q7", "Express", "2025-06-12", 91],
              ["Q8", "MongoDB", "2025-06-19", 89],
              ["Q9", "Docker", "2025-06-26", 90],
              ["Q10", "Netlify", "2025-07-03", 94],
            ].map(([quiz, topic, date, grade]) => (
              <tr key={quiz}>
                <td>{quiz}</td>
                <td>{topic}</td>
                <td>{date}</td>
                <td>{grade}</td>
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
      </div>

      {/* ---------- Images ---------- */}
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet: <br/>
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br/>
        Loading a local image:<br/>
        <img id="wd-teslabot" src="/images/teslabot.jpg" height="200px" />
      </div>

      {/* ---------- Forms ---------- */}
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" defaultValue="123@#$asd" id="wd-text-fields-password" /> <br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" placeholder="Doe" defaultValue="Wonderland" title="The last name" id="wd-text-fields-last-name" /> <br />

          <h5>Text boxes</h5>
          <label>Biography:</label><br/>
          <textarea id="wd-textarea" cols={30} rows={5}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </textarea>

          <h5 id="wd-buttons">Buttons</h5>
          <button type="button" onClick={() => alert('Life is Good!')} id="wd-all-good">
            Hello World!
          </button>

          <h5>File upload</h5>
          <input type="file" id="wd-file-upload" />

          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">Comedy</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">Drama</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-scifi" />
          <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">Fantasy</label><br />

          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label><br/>

          <h4 id="wd-dropdowns">Dropdowns</h4>
          <h5>Select one</h5>
          <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option selected value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
          <select multiple id="wd-select-many-genre">
            <option value="COMEDY" selected>Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" selected>Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          <h4>Other HTML field types</h4>
          <label htmlFor="wd-text-fields-email"> Email: </label>
          <input type="email" placeholder="jdoe@somewhere.com" id="wd-text-fields-email"/><br/>
          <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
          <input type="number" defaultValue="100000" placeholder="1000" id="wd-text-fields-salary-start"/><br/>
          <label htmlFor="wd-text-fields-rating"> Rating: </label>
          <input type="range" defaultValue="4" max="5" id="wd-text-fields-rating"/><br/>
          <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
          <input type="date" defaultValue="2000-01-21" id="wd-text-fields-dob"/><br/>
        </form>
      </div>

      {/* ---------- Anchor ---------- */}
      <h4>Anchor tag</h4>
      Please <a href="https://www.lipsum.com" id="wd-lipsum">click here</a> to get dummy text.<br/>
      My GitHub repo: <a href="https://github.com/YOUR_USERNAME/YOUR_REPO" id="wd-github">here</a><br/>

      {/* Link back to Kambaz */}
      <p><Link to="/Kambaz">Go to Kambaz App</Link></p>
    </div>
  );
}
