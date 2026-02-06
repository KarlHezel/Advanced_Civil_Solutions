import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "./Button.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close menu when navigating
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close if you click outside the dropdown
  useEffect(() => {
    if (!open) return;

    const onMouseDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  return (
    <header className="nav">
      <Container>
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="Advanced Civil Solutions Home">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">Advanced Civil Solutions</span>
          </Link>

          {/* Desktop links */}
          <nav className="nav-links nav-desktop" aria-label="Primary navigation">
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

          {/* Desktop CTA */}
          <div className="nav-cta nav-desktop">
            <Button as={Link} to="/book-demo" variant="primary">
              Book a Demo
            </Button>
            <Button as={Link} to="/contact" variant="ghost">
              Contact
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger nav-mobile"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-mobile-menu"
          >
            <span className="hamburger-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div
            id="nav-mobile-menu"
            ref={dropdownRef}
            className="nav-mobile-menu nav-mobile fade-in"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="nav-mobile-links" aria-label="Mobile primary navigation">
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

            <div className="nav-mobile-cta">
              <Button as={Link} to="/book-demo" variant="primary">
                Book a Demo
              </Button>
              <Button as={Link} to="/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}