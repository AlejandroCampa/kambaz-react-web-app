import "./index.css";

export default function Lab2() {
  return (
    <div id="wd-lab2" className="container mt-4">
      <h2 className="wd-heading">Lab 2 – CSS Practice</h2>

      <p className="wd-paragraph">
        This lab covers CSS basics: selectors, styling, positioning, spacing, margins,
        padding, borders, rounded corners, layout styling, and Bootstrap integration.
      </p>

      <div className="wd-box-container">
        <div className="wd-box red">Box 1</div>
        <div className="wd-box green">Box 2</div>
        <div className="wd-box blue">Box 3</div>
      </div>

      <div className="wd-flex-layout">
        <div className="wd-card">Flex Item 1</div>
        <div className="wd-card">Flex Item 2</div>
        <div className="wd-card">Flex Item 3</div>
      </div>

      <div className="mt-4">
        <button className="btn btn-primary me-2">Primary</button>
        <button className="btn btn-success me-2">Success</button>
        <button className="btn btn-danger">Danger</button>
      </div>

      <div className="mt-5 p-3 border rounded bg-light">
        <h4 className="text-muted">Additional CSS Features</h4>
        <ul>
          <li>External CSS selectors and class-based styling</li>
          <li>Box model: margin, padding, border</li>
          <li>Rounded corners and shadows</li>
          <li>Flexbox layout and spacing</li>
          <li>Bootstrap button and layout utility classes</li>
        </ul>
      </div>
    </div>
  );
}
