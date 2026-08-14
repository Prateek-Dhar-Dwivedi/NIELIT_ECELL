import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import "../Styles/Activities.css";

const activities = [
  {
    number: "01",
    category: "EVENT",
    title: "Eureka! Pitching Competition",
    date: "21/08/26",
    description:
      "A platform for students to present ideas, receive feedback and experience the fundamentals of pitching.",
    href: "https://forms.gle/9BLp5Nm5St7hoqhp8",
    external: true,
  },
  {
    number: "02",
    category: "WORKSHOP",
    title: "Startup & Innovation Workshop",
    date: "COMING SOON",
    description:
      "An interactive learning experience focused on developing entrepreneurial and innovative thinking.",
    href: "/",
    external: false,
  },
  {
    number: "03",
    category: "COMPETITION",
    title: "Entrepreneurship Summit",
    date: "COMING SOON",
    description:
      "A platform for students to explore entrepreneurship, ideas, innovation and opportunities.",
    href: "/",
    external: false,
  },
];

export default function Activities() {
  return (
    <section className="activities-section" id="activities">

      <div className="container">

        {/* Heading */}

        <motion.div
          className="activities-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="section-label">
            <span>05</span>
            <span>ACTIVITIES & EVENTS</span>
          </div>

          <div className="activities-title-row">

            <h2>
              Experiences
              <span>that move ideas.</span>
            </h2>

            <p>
              From workshops and competitions to
              conversations and networking, our activities
              are designed to turn learning into experience.
            </p>

          </div>

        </motion.div>


        {/* Events */}

        <div className="activities-list">

          {activities.map((activity, index) => (

            <motion.a
              className="activity-card"
              key={activity.number}
              href={activity.href}
              target={activity.external ? "_blank" : undefined}
              rel={activity.external ? "noopener noreferrer" : undefined}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="activity-top">

                <span className="activity-number">
                  {activity.number}
                </span>

                <span className="activity-category">
                  {activity.category}
                </span>

                <span className="activity-date">
                  {activity.date}
                </span>

              </div>


              <div className="activity-main">

                <div>

                  <h3>
                    {activity.title}
                  </h3>

                  <p>
                    {activity.description}
                  </p>

                </div>


                <div className="activity-arrow">
                  <FiArrowUpRight />
                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}