import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import "../Styles/About.css";

export default function About() {
  return (
    <section className="about-section" id="about">

      <div className="container about-container">

        {/* Section label */}

        <motion.div
          className="about-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span>01</span>
          <span>ABOUT E-CELL</span>
        </motion.div>


        {/* Main content */}

        <div className="about-content">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Where ideas begin
            <span>and possibilities take shape.</span>
          </motion.h2>


          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15
            }}
          >

            <p>
              E-Cell is a student-driven platform built to
              encourage entrepreneurship, innovation and
              creative thinking within the campus community.
            </p>

            <p>
              Through events, workshops, competitions and
              meaningful interactions, we aim to create an
              environment where students can explore ideas,
              learn from others and take their first steps
              towards building something meaningful.
            </p>

            <a
              href="#vision"
              className="about-link"
            >
              DISCOVER OUR VISION
              <FiArrowUpRight />
            </a>

          </motion.div>

        </div>


        {/* Animated visual */}

        <motion.div
          className="about-visual"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true,
            amount: 0.25
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >

          {/* Outer floating movement */}

          <motion.div
            className="about-visual-inner"
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >

            {/* Rotating geometry */}

            <motion.div
              className="about-grid"
              animate={{
                rotate: [45, 55, 45]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >

              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </motion.div>


            {/* Center mark */}

            <motion.div
              className="about-center-mark"
              animate={{
                scale: [1, 1.035, 1],
                boxShadow: [
                  "0 0 0 rgba(201, 162, 39, 0)",
                  "0 0 30px rgba(201, 162, 39, 0.12)",
                  "0 0 0 rgba(201, 162, 39, 0)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              N.E.X.T.
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}