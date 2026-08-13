import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

import "../Styles/Hero.css";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /*
   * Animation phases
   *
   * reveal    → show the four words one by one
   * hold      → keep the complete meaning visible
   * transform → transform the words into N.E.X.T.
   * next      → hold N.E.X.T.
   */

  const [phase, setPhase] = useState("reveal");

  useEffect(() => {
    let timer;

    if (phase === "reveal") {
      timer = setTimeout(() => {
        setPhase("hold");
      }, 5200);
    }

    if (phase === "hold") {
      timer = setTimeout(() => {
        setPhase("transform");
      }, 3500);
    }

    if (phase === "transform") {
      timer = setTimeout(() => {
        setPhase("next");
      }, 1800);
    }

    if (phase === "next") {
      timer = setTimeout(() => {
        setPhase("reveal");
      }, 4500);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  const fullForm = [
    {
      letter: "N",
      word: "NIELIT",
    },
    {
      letter: "E",
      word: "Entrepreneurs",
    },
    {
      letter: "X",
      word: "eXploring",
    },
    {
      letter: "T",
      word: "Tomorrow",
    },
  ];

  return (
    <section className="hero" id="home">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="hero-grid" />

      <motion.div
        className="hero-orbit hero-orbit-one"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
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
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="hero-dot"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

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


          {/* =========================
              MAIN TITLE
          ========================= */}

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
              className="hero-outline hero-next"
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
              N.E.X.T.
            </motion.h1>

          </div>


          {/* =========================
              DESCRIPTION
          ========================= */}

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


          {/* =========================
              ACTIONS
          ========================= */}

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


        {/* ==================================================
            RIGHT BRAND ANIMATION
        ================================================== */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* =========================
              SOFT BACKGROUND CIRCLES
          ========================= */}

          <div className="brand-ring brand-ring-one" />
          <div className="brand-ring brand-ring-two" />

          <div className="brand-crosshair horizontal" />
          <div className="brand-crosshair vertical" />


          {/* =========================
              FULL FORM
          ========================= */}

          <div className="next-meaning">

            <AnimatePresence mode="wait">

              {phase === "reveal" || phase === "hold" ? (

                <motion.div
                  key="meaning"
                  className="meaning-container"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >

                  {fullForm.map((item, index) => (

                    <motion.div
                      className="meaning-row"
                      key={item.letter}
                      initial={{
                        opacity: 0,
                        x: 35,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 1.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >

                      <span className="meaning-letter">
                        {item.letter}
                      </span>

                      <span className="meaning-word">
                        {item.word}
                      </span>

                    </motion.div>

                  ))}

                  <motion.div
                    className="meaning-caption"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 4.1,
                      duration: 0.7,
                    }}
                  >
                    NIELIT Entrepreneurs eXploring Tomorrow
                  </motion.div>

                </motion.div>

              ) : null}


              {/* =========================
                  TRANSFORMATION
              ========================= */}

              {phase === "transform" ? (

                <motion.div
                  key="transform"
                  className="transform-container"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >

                  {fullForm.map((item, index) => (

                    <motion.span
                      key={item.letter}
                      className="transform-letter"
                      initial={{
                        opacity: 0,
                        scale: 0.3,
                        y: 35,
                        rotate: -20,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        rotate: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.18,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {item.letter}
                    </motion.span>

                  ))}

                </motion.div>

              ) : null}


              {/* =========================
                  N.E.X.T.
              ========================= */}

              {phase === "next" ? (

                <motion.div
                  key="next"
                  className="next-final"
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    letterSpacing: "28px",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    letterSpacing: "10px",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.15,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <span>N</span>
                  <span>.</span>
                  <span>E</span>
                  <span>.</span>
                  <span>X</span>
                  <span>.</span>
                  <span>T</span>
                  <span>.</span>

                </motion.div>

              ) : null}

            </AnimatePresence>

          </div>


          {/* =========================
              BRAND LINE
          ========================= */}

          <motion.div
            className="brand-line"
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 1,
            }}
          />


          {/* =========================
              INSTITUTION
          ========================= */}

          <motion.div
            className="institution-info"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
          >

            <div className="institution-title">
              NDU Ropar
            </div>

            <div className="institution-code">
              CIED
            </div>

            <div className="institution-subtitle">
              <span>Centre for Innovation </span>
              <span>&amp;</span>
              <span>Entrepreneurship Development</span>
            </div>


          </motion.div>


          {/* =========================
              FLOATING DOTS
          ========================= */}

          <motion.span
            className="brand-floating-dot dot-one"
            animate={{
              y: [0, -12, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            className="brand-floating-dot dot-two"
            animate={{
              y: [0, 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>

      </div>


      {/* =========================
          SCROLL
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