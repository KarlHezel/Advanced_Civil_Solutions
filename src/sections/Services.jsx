const items = [
  { title: "Site & Project Support", desc: "Planning, coordination, and field support for civil projects." },
  { title: "Documentation & Reports", desc: "Clear deliverables, summaries, and project documentation." },
  { title: "Permitting & Coordination", desc: "Support with permit packages and stakeholder coordination." },
  { title: "Consulting", desc: "Scope definition, risk review, and execution planning." },
];

export default function Services() {
  return (
    <div className="container">
      <div className="sectionHead">
        <h2>Services</h2>
        <p className="muted">Simple, professional services that scale from small jobs to large projects.</p>
      </div>

      <div className="grid">
        {items.map((x) => (
          <div key={x.title} className="card">
            <div className="cardTitle">{x.title}</div>
            <p className="muted">{x.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
