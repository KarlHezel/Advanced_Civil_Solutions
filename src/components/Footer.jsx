import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>

        <div style={{ padding: "24px 0" }}>
          {/* Company Title */}
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            Advanced Civil Solutions
          </div>

          {/* Legal + Privacy */}
          <div className="small">
            © {new Date().getFullYear()} Advanced Civil Solutions LLC
            {" • "}
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}
