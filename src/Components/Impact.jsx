import { motion } from "framer-motion";
import "../Styles/Impact.css";

const impactData = [
  {
    number: "01",
    value: "100+",
    label: "Students Engaged",
  },
  {
    number: "02",
    value: "20+",
    label: "Events & Activities",
  },
  {
    number: "03",
    value: "10+",
    label: "Industry Interactions",
  },
  {
    number: "04",
    value: "∞",
    label: "Ideas & Possibilities",
  },
];

export default function Impact() {
  return (
    <section className="impact-section" id="impact">

      <div className="container">

        {/* Section heading */}

        <motion.div
          className="impact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="section-label">
            <span>04</span>
            <span>OUR IMPACT</span>
          </div>

          <h2>
            Ideas create
            <span>momentum.</span>
          </h2>

        </motion.div>


        {/* Impact statistics */}

        <div className="impact-list">

          {impactData.map((item, index) => (

            <motion.div
              className="impact-item"
              key={item.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="impact-number">
                {item.number}
              </span>

              <div className="impact-value">
                {item.value}
              </div>

              <div className="impact-label">
                {item.label}
              </div>

            </motion.div>

          ))}

        </div>


        {/* Bottom statement */}

        <motion.div
          className="impact-statement"
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
            delay: 0.2,
          }}
        >
        </motion.div>

      </div>

    </section>
  );
}