import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCompass,
  FiUsers,
  FiZap,
  FiTarget,
  FiLayers,
  FiMic
} from "react-icons/fi";

import "../Styles/WhatWeDo.css";

const activities = [
  {
    number: "01",
    title: "Entrepreneurship",
    description:
      "Creating opportunities for students to explore entrepreneurial thinking and understand how ideas can evolve into ventures.",
    icon: FiCompass
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "Encouraging students to think differently, experiment with ideas and develop creative approaches to real-world problems.",
    icon: FiZap
  },
  {
    number: "03",
    title: "Workshops",
    description:
      "Interactive sessions designed to help students learn practical concepts from entrepreneurship, business and innovation.",
    icon: FiLayers
  },
  {
    number: "04",
    title: "Networking",
    description:
      "Building connections between students, entrepreneurs, mentors, professionals and the wider innovation ecosystem.",
    icon: FiUsers
  },
  {
    number: "05",
    title: "Competitions",
    description:
      "Creating platforms where students can challenge themselves, present ideas and experience the process of turning concepts into solutions.",
    icon: FiTarget
  },
  {
    number: "06",
    title: "Talks & Events",
    description:
      "Bringing perspectives, experiences and conversations that expose students to entrepreneurship and emerging opportunities.",
    icon: FiMic
  }
];

export default function WhatWeDo() {
  return (
    <section className="what-section" id="what-we-do">

      <div className="container">

        {/* Heading */}

        <motion.div
          className="what-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >

          <div className="section-label what-label">
            <span>03</span>
            <span>WHAT WE DO</span>
          </div>

          <div className="what-heading-row">

            <h2>
              Turning curiosity
              <span>into action.</span>
            </h2>

            <p>
              We create experiences that help students
              discover, explore and engage with the world
              of entrepreneurship and innovation.
            </p>

          </div>

        </motion.div>


        {/* Interactive list */}

        <div className="what-list">

          {activities.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                className="what-item"
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.15
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08
                }}
              >

                <div className="what-number">
                  {item.number}
                </div>


                <div className="what-icon">
                  <Icon />
                </div>


                <div className="what-main">

                  <h3>
                    {item.title}
                  </h3>

                  <div className="what-description">
                    <p>
                      {item.description}
                    </p>
                  </div>

                </div>


                <motion.div
                  className="what-arrow"
                  whileHover={{
                    rotate: 45
                  }}
                >
                  <FiArrowUpRight />
                </motion.div>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}