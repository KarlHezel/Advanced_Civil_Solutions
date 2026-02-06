import React from "react";
import Container from "../components/Container.jsx";
import FadeIn from "../components/FadeIn.jsx";
import Card from "../components/Card.jsx";
import HeadshotPlaceholder from "../components/HeadshotPlaceholder.jsx";

export default function About() {
  return (
    <section className="section">
      <Container>
        <FadeIn>
          <div className="kicker">About Us</div>
          <h1 className="h2" style={{ marginTop: 10 }}>
            Premium, stable engineering for organizations that operate under scrutiny.
          </h1>
          <p className="p">
            Advanced Civil Solutions focuses on clarity, reliability, and enterprise-ready delivery—built for
            environments where credibility is non-negotiable.
          </p>

          <div className="grid" style={{ gridTemplateColumns: "1fr 1.4fr", gap: 16, marginTop: 18 }}>
            <div>
              <HeadshotPlaceholder />
            </div>

            <div className="surface card">
              <div className="card-title" style={{ fontSize: 18 }}>
                Jordan Hayes
              </div>
              <div className="small" style={{ marginBottom: 12 }}>
                Founder • Systems Engineering & Delivery
              </div>

              <p className="card-body">
                Jordan builds mission-critical software and operational systems with an emphasis on
                secure-by-design execution, disciplined delivery, and calm, structured communication.
              </p>

              <hr className="hr-gold" />

              <div style={{ display: "grid", gap: 10 }}>
                <Card title="Credibility highlights">
                  <ul style={{ margin: 0, paddingLeft: 18, color: "#4b5563", lineHeight: 1.7 }}>
                    <li>Experience delivering production systems with strong reliability expectations</li>
                    <li>Focus on audit-friendly change control and integration-ready architecture</li>
                    <li>Comfortable bridging technical execution and stakeholder alignment</li>
                  </ul>
                </Card>

                <Card title="Focus areas">
                  <ul style={{ margin: 0, paddingLeft: 18, color: "#4b5563", lineHeight: 1.7 }}>
                    <li>Operational platforms and infrastructure intelligence</li>
                    <li>Secure workflows and enterprise integrations</li>
                    <li>Field-ready systems with clear serviceability</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
