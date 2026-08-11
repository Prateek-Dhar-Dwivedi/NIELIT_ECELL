import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiInstagram,
  FiArrowUpRight
} from "react-icons/fi";

import "../Styles/Team.css";

const team = [
  {
    name: "Member Name",
    role: "President",
    image: "/team-placeholder.jpg",
  },
  {
    name: "Member Name",
    role: "Vice President",
    image: "/team-placeholder.jpg",
  },
  {
    name: "Member Name",
    role: "General Secretary",
    image: "/team-placeholder.jpg",
  },
  {
    name: "Member Name",
    role: "Core Team",
    image: "/team-placeholder.jpg",
  },
];

export default function Team() {
  return (
    <section className="team-section" id="team">

      <div className="container">

        {/* Heading */}

        <motion.div
          className="team-heading"
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
            <span>06</span>
            <span>THE TEAM</span>
          </div>

          <div className="team-title-row">

            <h2>
              The people
              <span>behind the ideas.</span>
            </h2>

            <p>
              A collective of students working together
              to create experiences, opportunities and
              meaningful impact.
            </p>

          </div>

        </motion.div>


        {/* Team */}

        <div className="team-grid">

          {team.map((member, index) => (

            <motion.article
              className="team-member"
              key={`${member.name}-${index}`}
              initial={{
                opacity: 0,
                y: 50
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
                duration: 0.7,
                delay: index * 0.1
              }}
            >

              {/* Image */}

              <div className="team-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

                <div className="team-overlay">

                  <div className="team-socials">

                    <a
                      href="#linkedin"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FiLinkedin />
                    </a>

                    <a
                      href="#instagram"
                      aria-label={`${member.name} Instagram`}
                    >
                      <FiInstagram />
                    </a>

                  </div>

                  <div className="team-profile-arrow">
                    <FiArrowUpRight />
                  </div>

                </div>

              </div>


              {/* Information */}

              <div className="team-info">

                <div>

                  <h3>
                    {member.name}
                  </h3>

                  <p>
                    {member.role}
                  </p>

                </div>

                <span>
                  0{index + 1}
                </span>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}