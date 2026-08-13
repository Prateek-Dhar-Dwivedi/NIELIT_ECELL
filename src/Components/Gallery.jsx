import { motion } from "framer-motion";

import "../Styles/Gallery.css";

import gallery1 from "../Assets/Images/1.jpeg";
import gallery2 from "../Assets/Images/2.jpeg";
import gallery3 from "../Assets/Images/4.jpeg";
import gallery4 from "../Assets/Images/3.jpeg";

const galleryItems = [
  {
    image: gallery1,
    title: "Building Ideas",
    category: "EVENTS",
    size: "large",
  },
  {
    image: gallery2,
    title: "Learning Together",
    category: "WORKSHOPS",
    size: "small",
  },
  {
    image: gallery3,
    title: "Ideas in Action",
    category: "ACTIVITIES",
    size: "small",
  },
  {
    image: gallery4,
    title: "Connecting Minds",
    category: "NETWORKING",
    size: "large",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <div className="container">

        {/* Heading */}

        <motion.div
          className="gallery-heading"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="section-label">
            <span>07</span>
            <span>GALLERY</span>
          </div>

          <div className="gallery-title-row">

            <h2>
              Moments
              <span>that matter.</span>
            </h2>

            <p>
              A glimpse into the experiences, people and
              moments that make our E-Cell community what
              it is.
            </p>

          </div>

        </motion.div>


        {/* Gallery */}

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <motion.div
              className={`gallery-item gallery-${item.size}`}
              key={item.image}
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
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <div>

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}