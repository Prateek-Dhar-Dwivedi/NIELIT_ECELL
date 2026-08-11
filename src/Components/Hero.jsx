import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

import "../Styles/Hero.css";

export default function Hero() {
  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero" id="home">

      {/* =========================
          BACKGROUND ELEMENTS
      ========================= */}

      <div className="hero-grid"></div>

      <motion.div
        className="hero-orbit hero-orbit-one"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="hero-orbit hero-orbit-two"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="hero-dot"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <span>E-CELL</span>
            <span>•</span>
            <span>ENTREPRENEURSHIP</span>
            <span>•</span>
            <span>INNOVATION</span>
          </motion.div>


          {/* TITLE */}

          <div className="hero-title">

            <motion.h1
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              BUILD WHAT
            </motion.h1>


            <motion.h1
              className="hero-outline"
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.48,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              COMES
            </motion.h1>


            <motion.h1
              className="hero-outline"
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.61,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              NEXT.
            </motion.h1>

          </div>


          {/* DESCRIPTION */}

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
          >
            A student-driven ecosystem where ideas,
            innovation and entrepreneurship come together
            to create meaningful impact.
          </motion.p>


          {/* ACTIONS */}

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.95,
            }}
          >

            <a
              href="#about"
              className="hero-primary"
            >
              <span>Explore E-Cell</span>

              <span className="hero-button-icon">
                <FiArrowUpRight />
              </span>
            </a>


            <button
              type="button"
              className="hero-secondary"
              onClick={scrollToAbout}
            >
              <span>Discover More</span>

              <FiArrowDown />
            </button>

          </motion.div>

        </div>


        {/* =========================
            RIGHT VISUAL
        ========================= */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.8,
            x: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <motion.div
            className="hero-diamond hero-diamond-outer"
            animate={{
              rotate: [45, 48, 45],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="hero-diamond hero-diamond-inner"
            animate={{
              rotate: [-45, -42, -45],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          <motion.div
            className="hero-logo-box"
            whileHover={{
              scale: 1.04,
              rotate: 2,
            }}
            transition={{
              duration: 0.5,
            }}
          >

            <span>
              N.E.X.T.
            </span>

          </motion.div>


          <div className="hero-visual-line"></div>

        </motion.div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <motion.div
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
      >

        <span>SCROLL TO EXPLORE</span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiArrowDown />
        </motion.div>

      </motion.div>

    </section>
  );
}