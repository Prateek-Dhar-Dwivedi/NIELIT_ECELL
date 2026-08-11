import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import "../Styles/VisionMission.css";

export default function VisionMission() {
  return (
    <section className="vision-section" id="vision">

      <div className="container vision-container">

        {/* Section heading */}

        <motion.div
          className="vision-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span>02</span>
            <span>OUR DIRECTION</span>
          </div>

          <h2>
            Ideas are the
            <span>beginning.</span>
          </h2>
        </motion.div>


        {/* Vision */}

        <motion.div
          className="vision-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
          }}
        >

          <div className="vision-number">
            01
          </div>

          <div className="vision-content">

            <p className="vision-small-title">
              VISION
            </p>

            <h3>
              Creating a culture where
              <span>ideas can become impact.</span>
            </h3>

            <p className="vision-description">
              Our vision is to encourage students to think
              differently, explore possibilities and develop
              the confidence to transform ideas into meaningful
              outcomes.
            </p>

          </div>

          <div className="vision-icon">
            <FiArrowDown />
          </div>

        </motion.div>


        {/* Mission */}

        <motion.div
          className="vision-block mission-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1]
          }}
        >

          <div className="vision-number">
            02
          </div>

          <div className="vision-content">

            <p className="vision-small-title">
              MISSION
            </p>

            <h3>
              Learn. Connect.
              <span>Create.</span>
            </h3>

            <p className="vision-description">
              We aim to provide students with opportunities
              to learn about entrepreneurship, connect with
              people and ideas, collaborate with peers and
              take part in experiences that encourage innovation.
            </p>

          </div>

          <div className="vision-icon">
            <FiArrowDown />
          </div>

        </motion.div>

      </div>

    </section>
  );
}