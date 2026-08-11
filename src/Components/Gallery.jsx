import { motion } from "framer-motion";
import "../Styles/Gallery.css";

const galleryItems = [
  {
    image: "/gallery-1.jpg",
    title: "Building Ideas",
    category: "EVENTS",
    size: "large",
  },
  {
    image: "/gallery-2.jpg",
    title: "Learning Together",
    category: "WORKSHOPS",
    size: "small",
  },
  {
    image: "/gallery-3.jpg",
    title: "Ideas in Action",
    category: "ACTIVITIES",
    size: "small",
  },
  {
    image: "/gallery-4.jpg",
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