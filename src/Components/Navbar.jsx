import "../Styles/Navbar.css";

import collegeLogo from "../Assets/logos/college-logo.png";
import nextLogo from "../Assets/logos/next-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* =========================
            LOGO AREA
        ========================= */}

        <a href="#home" className="navbar-brand">

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
            DESKTOP NAVIGATION
        ========================= */}

        <div className="navbar-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#vision">
            Vision
          </a>

          <a href="#what-we-do">
            What We Do
          </a>

          <a href="#impact">
            Impact
          </a>

          <a href="#activities">
            Events
          </a>

          <a href="#team">
            Team
          </a>

          <a href="#gallery">
            Gallery
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          className="navbar-menu"
          type="button"
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
        </button>

      </div>

    </nav>
  );
}