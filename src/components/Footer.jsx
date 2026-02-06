import React from "react";
import Container from "../components/Container.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Advanced Civil Solutions</div>
            <div className="small">
              Mission-critical civil and security-grade engineering. Built for reliability,
              auditability, and enterprise adoption.
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Capabilities</div>
            <div className="small">Secure systems • Infrastructure analytics • Field-ready solutions</div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Compliance-friendly</div>
            <div className="small">
              Designed to support controlled environments, traceable changes, and operational resilience.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18 }} className="small">
          © {new Date().getFullYear()} Advanced Civil Solutions. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}