import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          {/* Company */}
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>
              Advanced Civil Solutions LLC
            </div>
            <div className="small">
              We help companies win, manage, and deliver government contracts
              with clear documentation and reliable execution.
            </div>
          </div>

          {/* What We Do */}
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>
              What We Do
            </div>
            <div className="small">
              Prime contracting • Contract administration • Procurement support • Training
            </div>
          </div>

          {/* Built for Government Work */}
          <div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>
              Built for Government Work
            </div>
            <div className="small">
              Compliant sourcing, organized documentation, and on-time delivery —
              ready for government review.
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div style={{ marginTop: 18 }} className="small">
          © {new Date().getFullYear()} Advanced Civil Solutions LLC
          {" • "}
          <Link to="/privacy"> Privacy Policy</Link>
        </div>
      </Container>
    </footer>
  );
}
