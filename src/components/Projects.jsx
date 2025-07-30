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
          onClick={() =>
            window.open("https://time-ninja.vercel.app/", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/time-ninja.png")' }}
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
          onClick={() =>
            window.open("https://tic-tac-toe-ashen-zeta.vercel.app/", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/tictactoe.png")' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <h3>TicTacToe</h3>
          <p>
            A simple and fun browser-based Tic Tac Toe game where two players
            take turns trying to win on a 3x3 grid.{" "}
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
          onClick={() =>
            window.open("https://github.com/Capstone-2024-5/TechTinker/", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/tech-tinker.png")' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <h3>Tech Tinker</h3>
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
