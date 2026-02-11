// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Container from "../components/Container.jsx";
import Button from "./Button.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  // Close menu when navigating
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close if you tap/click outside the dropdown
  // IMPORTANT: ignore taps on the hamburger, or it will "close then immediately reopen"
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e) => {
      const inMenu = dropdownRef.current?.contains(e.target);
      const inHamburger = hamburgerRef.current?.contains(e.target);

      if (!inMenu && !inHamburger) closeMenu();
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <header className="nav">
      <Container>
        <div className="nav-inner">
          {/* Brand */}
          <Link to="/" className="brand" aria-label="Advanced Civil Solutions Home">
            <img
              src="/Logo.webp"
              alt="Advanced Civil Solutions"
              className="brand-logo"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="120"
              height="120"
            />
            <span className="brand-text">Advanced Civil Solutions</span>
          </Link>

          {/* Desktop: Links + CTA */}
          <div className="nav-right nav-desktop">
            <nav className="nav-links" aria-label="Primary navigation">
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>

              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </nav>

            <Button
              as={NavLink}
              to="/book-consultation"
              variant="primary"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Book a Consultation
            </Button>

          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="nav-hamburger nav-mobile"
            type="button"
            onClick={toggleMenu}
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

        {/* Mobile dropdown + backdrop */}
        {open && (
          <>
            {/* Backdrop */}
            <div className="nav-backdrop" onClick={closeMenu} aria-hidden="true" />

            {/* Menu panel */}
            <div
              id="nav-mobile-menu"
              ref={dropdownRef}
              className="nav-mobile-menu fade-in"
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
              </nav>

              <div className="nav-mobile-cta">
                <Button as={Link} to="/book-consultation" variant="primary" onClick={closeMenu}>
                  Book a Consultation
                </Button>
              </div>
            </div>
          </>
        )}
      </Container>
    </header>
  );
}
