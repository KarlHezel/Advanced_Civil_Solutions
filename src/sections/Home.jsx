export default function Home() {
  return (
    <div className="container hero">
      <div className="heroText">
        <h1>Civil solutions that are fast, accurate, and dependable.</h1>
        <p className="lead">
          We help clients plan, coordinate, and execute civil work with clear timelines and clean deliverables.
        </p>

        <div className="heroButtons">
          <a className="btnPrimary" href="#contact">Request a Quote</a>
          <a className="btnGhost" href="#services">View Services</a>
        </div>

        <div className="heroBadges">
          <span className="badge">Mobile-first</span>
          <span className="badge">Fast turnaround</span>
          <span className="badge">Clear documentation</span>
        </div>
      </div>

      <div className="heroCard">
        <div className="card">
          <div className="cardTitle">Quick Contact</div>
          <div className="muted">Email: info@yourdomain.com</div>
          <div className="muted">Phone: (xxx) xxx-xxxx</div>
          <div className="muted">Service Area: Your Region</div>
        </div>
      </div>
    </div>
  );
}