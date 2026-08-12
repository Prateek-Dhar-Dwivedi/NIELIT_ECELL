import {
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import "../Styles/Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        {/* =========================
            MAIN FOOTER
        ========================= */}

        <div className="footer-main">

          {/* =========================
              BRAND
          ========================= */}

          <div className="footer-brand">

            <p className="footer-label">
              E-CELL
            </p>

            <h2>
              Build.
              <span>Innovate.</span>
              Impact.
            </h2>

            <p className="footer-description">
              A student-driven initiative focused on
              entrepreneurship, innovation and creating
              meaningful opportunities.
            </p>

          </div>


          {/* =========================
              NAVIGATION
          ========================= */}

          <div className="footer-nav">

            <p className="footer-label">
              EXPLORE
            </p>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#vision">Vision</a>
            <a href="#what-we-do">What We Do</a>
            <a href="#activities">Activities</a>
            <a href="#team">Team</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>

          </div>


          {/* =========================
              CONNECT
          ========================= */}

          <div className="footer-connect">

            <p className="footer-label">
              CONNECT
            </p>


            {/* EMAIL */}

            <a href="mailto:next.ndu@nielit.ac.in">

              <FiMail />

              <span>
                Email
              </span>

              <FiArrowUpRight />

            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/ecell.nielitrpr/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FiInstagram />

              <span>
                Instagram
              </span>

              <FiArrowUpRight />

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/company/next-ecell-ndu/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FiLinkedin />

              <span>
                LinkedIn
              </span>

              <FiArrowUpRight />

            </a>

          </div>

        </div>


        {/* =========================
            BOTTOM
        ========================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} E-Cell.
            All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top"
          >
            BACK TO TOP

            <span>
              ↑
            </span>

          </button>

        </div>

      </div>

    </footer>
  );
}