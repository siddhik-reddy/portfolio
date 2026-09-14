import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection.js";
import ThemeToggle from "./ThemeToggle.jsx";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand">
          Siddhik Reddy
        </a>

        <nav className="nav-links" aria-label="Primary">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link ${active === s.id ? "is-active" : ""}`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Mobile">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
