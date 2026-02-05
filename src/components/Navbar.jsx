import { useEffect, useState } from "react";

export default function Navbar({ links }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="navWrap">
      <nav className="nav">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go home">
          Advanced Civil Solutions
        </button>

        <button
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navLinks ${open ? "open" : ""}`}>
          {links.map((l) => (
            <button key={l.id} className="navLink" onClick={() => goTo(l.id)}>
              {l.label}
            </button>
          ))}
          <button className="navCta" onClick={() => goTo("contact")}>
            Get a Quote
          </button>
        </div>
      </nav>
    </header>
  );
}