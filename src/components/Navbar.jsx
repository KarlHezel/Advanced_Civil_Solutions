// src/components/Navbar.jsx
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
          {/* Brand */}
          <Link to="/" className="brand" aria-label="Advanced Civil Solutions Home">
            <img src="/Logo.png" alt="Advanced Civil Solutions" className="brand-logo" />
            <span className="brand-text">Advanced Civil Solutions</span>
          </Link>
          {/* Desktop: Links + CTA grouped together on the right */}
          <div className="nav-right nav-desktop">
            <nav className="nav-links" aria-label="Primary navigation">
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>

              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </nav>

            <Button as={Link} to="/book-consultation" variant="primary">
              Book a Consultation
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
            {open ? (
            // X icon
            <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon">
              <path
                d="M5 7h14M5 12h14M5 17h14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          )}

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

              <NavLink
                to="/book-consultation"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Book Consultation
              </NavLink>
            </nav>

            <div className="nav-mobile-cta">
              <Button as={Link} to="/book-consultation" variant="primary">
                Book a Consultation
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
