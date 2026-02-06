import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="section">
      <Container>
        <div className="surface card">
          <div className="card-title">Page not found</div>
          <p className="card-body">The page you requested does not exist.</p>
          <div className="hero-actions" style={{ marginTop: 14 }}>
            <Button as={Link} to="/" variant="primary">
              Go Home
            </Button>
            <Button as={Link} to="/contact" variant="ghost">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
