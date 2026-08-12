import "../Styles/Navbar.css";
import { useState } from "react";

import collegeLogo from "../Assets/logos/college-logo.png";
import nextLogo from "../Assets/logos/next-logo.png";
import meityEmblem from "../Assets/logos/meity-emblem.png";

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
            src={collegeLogo}
            alt="College Logo"
            className="college-logo"
          />

          <div className="logo-divider"></div>

          <img
            src={nextLogo}
            alt="N.E.X.T. Logo"
            className="next-logo"
          />

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

        <div className="meity-brand">
          <div className="meity-text">
            <span>Ministry of Electronics & Information Technology</span>
            <span>Government of India</span>
          </div>

          <img
            src={meityEmblem}
            alt="Government of India Emblem"
            className="meity-emblem"
          />
        </div>
        
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