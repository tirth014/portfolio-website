import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/p1.jpg")' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <h3>Time Ninja</h3>
          <p>
            Timer-Based Challenge Game where players must stop a timer as close
            as possible to a predetermined time, achieving scores based on
            precision.
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/p1.jpg")' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <h3>Time Ninja</h3>
          <p>
            Timer-Based Challenge Game where players must stop a timer as close
            as possible to a predetermined time, achieving scores based on
            precision.
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/p1.jpg")' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <h3>Time Ninja</h3>
          <p>
            Timer-Based Challenge Game where players must stop a timer as close
            as possible to a predetermined time, achieving scores based on
            precision.
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
