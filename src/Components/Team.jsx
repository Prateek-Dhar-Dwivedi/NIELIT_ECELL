import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiInstagram,
  FiArrowUpRight
} from "react-icons/fi";

import "../Styles/Team.css";

import presidentImage from "../Assets/Images/Rudransh_Garg_President.jpeg";
import vicePresidentImage from "../Assets/Images/Disha_Saini_Vice President.jpeg";
import coreTeamImage from "../Assets/Images/IMG_9416.JPG.jpeg";

const team = [
  {
    name: "Rudransh Garg",
    role: "President",
    image: presidentImage,
    linkedin: "https://www.linkedin.com/in/rudranshgarg2105/",
    instagram: "https://www.instagram.com/rudranshgarg_21/",
    isCoreTeam: false,
  },
  {
    name: "Disha Saini",
    role: "Vice President",
    image: vicePresidentImage,
    linkedin: "https://www.linkedin.com/in/disha-saini-973183343/",
    instagram: "https://www.instagram.com/rudranshgarg_21/",
    isCoreTeam: false,
  },
  {
    name: "Core Team",
    role: "The people who turn ideas into action.",
    image: coreTeamImage,
    isCoreTeam: true,
  },
];

export default function Team() {
  return (
    <section className="team-section" id="team">

      <div className="container">

        {/* =========================
            HEADING
        ========================= */}

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


        {/* =========================
            TEAM
        ========================= */}

        <div className="team-grid">

          {team.map((member, index) => (

            <motion.article
              className={`team-member ${
                member.isCoreTeam ? "core-team-member" : ""
              }`}
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

              {/* =========================
                  IMAGE
              ========================= */}

              <div className="team-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

                {/* Social icons only for individual members */}

                {!member.isCoreTeam && (
                  <div className="team-overlay">

                    <div className="team-socials">

                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FiLinkedin />
                      </a>

                      {member.instagram !== "YOUR_INSTAGRAM" && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Instagram`}
                        >
                          <FiInstagram />
                        </a>
                      )}

                    </div>

                    <div className="team-profile-arrow">
                      <FiArrowUpRight />
                    </div>

                  </div>
                )}

              </div>


              {/* =========================
                  INFORMATION
              ========================= */}

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