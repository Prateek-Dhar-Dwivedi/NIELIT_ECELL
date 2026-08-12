import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiInstagram,
  FiLinkedin
} from "react-icons/fi";

import "../Styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="container">

        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          className="contact-heading"
          initial={{
            opacity: 0,
            y: 35
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.25
          }}
          transition={{
            duration: 0.8
          }}
        >

          <div className="section-label">
            <span>08</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2>
            Have an idea?
            <span>Let's talk.</span>
          </h2>

        </motion.div>


        {/* =========================
            CONTACT CONTENT
        ========================= */}

        <div className="contact-content">

          {/* =========================
              MAIN CTA
          ========================= */}

          <motion.div
            className="contact-cta"
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.8
            }}
          >

            <p>
              Whether you want to collaborate, participate
              in an event, share an idea or simply connect
              with us — we'd love to hear from you.
            </p>

            <a
              href="mailto:ecell.nielitrpr@gmail.com"
              className="contact-email"
            >

              <span>
                next.ndu@nielit.ac.in
              </span>

              <span className="contact-email-icon">
                <FiArrowUpRight />
              </span>

            </a>

          </motion.div>


          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
          >

            {/* EMAIL */}

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL</span>

                <p>
                  next.ndu@nielit.ac.in
                </p>
              </div>

            </div>


            {/* LOCATION */}

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FiMapPin />
              </div>

              <div>
                <span>LOCATION</span>

                <p>
                  NIELIT Ropar Campus
                </p>
              </div>

            </div>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/ecell.nielitrpr/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item contact-social-link"
            >

              <div className="contact-info-icon">
                <FiInstagram />
              </div>

              <div>
                <span>INSTAGRAM</span>

                <p>
                  @ecell.nielitrpr
                </p>
              </div>

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/company/next-ecell-ndu/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item contact-social-link"
            >

              <div className="contact-info-icon">
                <FiLinkedin />
              </div>

              <div>
                <span>LINKEDIN</span>

                <p>
                  NEXT E-Cell NDU
                </p>
              </div>

            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}