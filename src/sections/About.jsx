export default function About() {
  return (
    <div className="container">
      {/* =====================
          COMPANY SUMMARY
         ===================== */}
      <div className="sectionHead">
        <h2>About Advanced Civil Solutions</h2>
        <p className="muted">
          Engineering high-trust civil and security systems for organizations that
          operate under scrutiny.
        </p>
      </div>

      <p className="muted" style={{ maxWidth: 760 }}>
        Advanced Civil Solutions designs and delivers reliable, audit-ready solutions
        for government agencies, prime contractors, and regulated enterprises.
        Our work prioritizes disciplined execution, clear accountability, and
        long-term maintainability.
      </p>

      {/* =====================
          MISSION & VISION
         ===================== */}
      <div className="twoCol" style={{ marginTop: 32 }}>
        <div>
          <h3 className="cardTitle">Mission</h3>
          <p className="muted">
            Deliver dependable systems with disciplined execution and clear
            accountability—every day.
          </p>
        </div>

        <div>
          <h3 className="cardTitle">Vision</h3>
          <p className="muted">
            Become a trusted delivery partner for mission-critical civil and
            security outcomes where credibility is earned through execution.
          </p>
        </div>
      </div>

      {/* =====================
          MISSION-DRIVEN ETHOS
         ===================== */}
      <div className="sectionHead" style={{ marginTop: 40 }}>
        <h2>Mission-Driven Ethos</h2>
        <p className="muted">
          A focused approach shaped by high-accountability environments.
        </p>
      </div>

      <div className="twoCol">
        <div className="card">
          <div className="cardTitle">Discipline</div>
          <p className="muted">
            Clear plans, controlled change, and predictable delivery.
          </p>
        </div>

        <div className="card">
          <div className="cardTitle">Accountability</div>
          <p className="muted">
            Ownership, traceability, and measurable progress.
          </p>
        </div>

        <div className="card">
          <div className="cardTitle">Execution under pressure</div>
          <p className="muted">
            Calm, structured delivery when timelines and constraints tighten.
          </p>
        </div>

        <div className="card">
          <div className="cardTitle">Security by design</div>
          <p className="muted">
            Least privilege, controlled access, and audit-ready systems.
          </p>
        </div>
      </div>

      {/* =====================
          CORE VALUES
         ===================== */}
      <div className="sectionHead" style={{ marginTop: 40 }}>
        <h2>Core Values</h2>
      </div>

      <div className="twoCol">
        <div className="card">
          <div className="cardTitle">Integrity First</div>
          <p className="muted">Honest communication and transparent decisions.</p>
        </div>

        <div className="card">
          <div className="cardTitle">Mission Focused</div>
          <p className="muted">Priorities aligned to outcomes and risk reduction.</p>
        </div>

        <div className="card">
          <div className="cardTitle">Engineering Excellence</div>
          <p className="muted">Clean architecture, strong defaults, durability.</p>
        </div>

        <div className="card">
          <div className="cardTitle">Security by Design</div>
          <p className="muted">Secure-by-default workflows and governance.</p>
        </div>

        <div className="card">
          <div className="cardTitle">Partnership Driven</div>
          <p className="muted">Collaborate well, document clearly, leave teams stronger.</p>
        </div>
      </div>

      {/* =====================
          WHO WE SUPPORT
         ===================== */}
      <div className="sectionHead" style={{ marginTop: 40 }}>
        <h2>Who We Support</h2>
      </div>

      <ul className="list" style={{ maxWidth: 520 }}>
        <li>Government agencies</li>
        <li>Prime contractors</li>
        <li>Small businesses entering government contracting</li>
      </ul>

      {/* =====================
          LEADERSHIP / TEAM
         ===================== */}
      <div className="sectionHead" style={{ marginTop: 40 }}>
        <h2>Leadership</h2>
        <p className="muted">
          People you can trust with mission-critical work.
        </p>
      </div>

      <div className="twoCol">
        <div className="card">
          <div className="cardTitle">Jordan Hayes</div>
          <p className="muted">
            Founder • Systems Engineering & Delivery
          </p>
          <p className="muted">
            Leads delivery of operational and security-conscious systems with a
            focus on reliability, audit readiness, and stakeholder alignment.
          </p>
        </div>

        <div className="card">
          <div className="cardTitle">Credibility Highlights</div>
          <ul className="list">
            <li>Production systems with strong reliability expectations</li>
            <li>Audit-friendly change control and integration-ready architecture</li>
            <li>Comfortable bridging technical execution and leadership alignment</li>
          </ul>
        </div>
      </div>

      {/* =====================
          STATUS
         ===================== */}
      <div className="sectionHead" style={{ marginTop: 40 }}>
        <h2>Status</h2>
      </div>

      <p className="muted">
        Veteran-led / Veteran-owned (if applicable). Supporting documentation
        available upon request.
      </p>
    </div>
  );
}
