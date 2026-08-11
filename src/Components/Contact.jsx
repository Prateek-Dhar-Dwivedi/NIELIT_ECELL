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

        {/* Heading */}

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


        {/* Contact content */}

        <div className="contact-content">

          {/* Main CTA */}

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
              href="mailto:ecell@college.edu"
              className="contact-email"
            >
              <span>
                ecell@college.edu
              </span>

              <span className="contact-email-icon">
                <FiArrowUpRight />
              </span>
            </a>

          </motion.div>


          {/* Information */}

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

            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL</span>
                <p>ecell@college.edu</p>
              </div>

            </div>


            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FiMapPin />
              </div>

              <div>
                <span>LOCATION</span>
                <p>
                  Your College Campus
                </p>
              </div>

            </div>


            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FiInstagram />
              </div>

              <div>
                <span>INSTAGRAM</span>
                <p>
                  @ecell
                </p>
              </div>

            </div>


            <div className="contact-info-item">

              <div className="contact-info-icon">
                <FiLinkedin />
              </div>

              <div>
                <span>LINKEDIN</span>
                <p>
                  E-Cell
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}