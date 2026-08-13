import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import "../Styles/About.css";

export default function About() {
  return (
    <section className="about-section" id="about">

      <div className="container about-container">

        {/* =========================
            SECTION LABEL
        ========================= */}

        <motion.div
          className="about-label"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span>01</span>
          <span>ABOUT E-CELL</span>
        </motion.div>


        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="about-content">

          {/* LEFT */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Where ideas begin
            <span>and possibilities take shape.</span>
          </motion.h2>


          {/* RIGHT TEXT */}

          <motion.div
            className="about-description"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
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


        {/* =========================
            IDEA ECOSYSTEM VISUAL
        ========================= */}

        <motion.div
          className="about-visual"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="idea-system">

            {/* ORBIT 1 */}

            <motion.div
              className="idea-orbit idea-orbit-one"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="idea-node node-one"></span>
            </motion.div>


            {/* ORBIT 2 */}

            <motion.div
              className="idea-orbit idea-orbit-two"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="idea-node node-two"></span>
            </motion.div>


            {/* ORBIT 3 */}

            <motion.div
              className="idea-orbit idea-orbit-three"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="idea-node node-three"></span>
            </motion.div>


            {/* CONNECTION LINES */}

            <div className="idea-line idea-line-one"></div>
            <div className="idea-line idea-line-two"></div>
            <div className="idea-line idea-line-three"></div>


            {/* CENTER */}

            <motion.div
              className="idea-center"
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="idea-center-symbol">
                +
              </div>

              <span>IDEAS</span>

            </motion.div>


            {/* LABELS */}

            <motion.div
              className="idea-label idea-label-one"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              CREATE
            </motion.div>


            <motion.div
              className="idea-label idea-label-two"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              CONNECT
            </motion.div>


            <motion.div
              className="idea-label idea-label-three"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              BUILD
            </motion.div>


            <motion.div
              className="idea-label idea-label-four"
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              IMPACT
            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}