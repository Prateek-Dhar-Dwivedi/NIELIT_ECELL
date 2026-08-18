import "../Styles/Navbar.css";
import { useState } from "react";

import collegeLogo from "../Assets/logos/college-logo.png";
import nextLogo from "../Assets/logos/next-logo.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* =========================
            LOGO AREA
        ========================= */}

        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src={nextLogo}
            alt="N.E.X.T. Logo"
            className="next-logo"
          />
          <div className="logo-divider"></div>
        </a>


        {/* =========================
            NAVIGATION
        ========================= */}

        <div
          className={`navbar-links ${menuOpen ? "navbar-links-active" : ""
            }`}
        >

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#vision" onClick={closeMenu}>
            Vision
          </a>

          <a href="#what-we-do" onClick={closeMenu}>
            What We Do
          </a>

          <a href="#impact" onClick={closeMenu}>
            Impact
          </a>

          <a href="#activities" onClick={closeMenu}>
            Events
          </a>

          <a href="#team" onClick={closeMenu}>
            Team
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>

        <a href="#home" className="college-brand" onClick={closeMenu}>
          <div className="logo-divider right-divider"></div>
          <img
            src={collegeLogo}
            alt="College Logo"
            className="college-logo"
          />
        </a>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          className={`navbar-menu ${menuOpen ? "open" : ""
            }`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>

        </button>

      </div>

    </nav>
  );
}