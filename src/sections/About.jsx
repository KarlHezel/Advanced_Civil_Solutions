export default function About() {
  return (
    <div className="container">
      <div className="sectionHead">
        <h2>About</h2>
        <p className="muted">
          Advanced Civil Solutions focuses on reliable execution, clear communication,
          and clean deliverables for every project.
        </p>
      </div>

      <div className="twoCol">
        <div className="card">
          <div className="cardTitle">How we work</div>
          <ul className="list">
            <li>Confirm scope and expectations</li>
            <li>Provide a clear plan and timeline</li>
            <li>Execute with consistent updates</li>
            <li>Close out with clean documentation</li>
          </ul>
        </div>

        <div className="card">
          <div className="cardTitle">What you get</div>
          <ul className="list">
            <li>Professional communication</li>
            <li>Transparent progress</li>
            <li>Mobile-friendly deliverables</li>
            <li>Quality rememberable work</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
