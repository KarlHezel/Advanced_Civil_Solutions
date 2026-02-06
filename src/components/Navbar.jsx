import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "./Button.jsx";

export default function Navbar() {
  return (
    <header className="nav">
      <Container>
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="Advanced Civil Solutions Home">
            <span className="brand-mark" aria-hidden="true" />
            <span>Advanced Civil Solutions</span>
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
            <NavLink to="/book-demo" className={({ isActive }) => (isActive ? "active" : "")}>
              Book Demo
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </nav>

          <div className="nav-cta">
            <Button as={Link} to="/book-demo" variant="primary">
              Book a Demo
            </Button>
            <Button as={Link} to="/contact" variant="ghost">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}