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
            window.open("https://movie-app-6zdt.onrender.com/", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/CineScope.png")' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <h3>CineScope</h3>
          <p>
            A full-stack movie discovery app built with React, Node/Express, and
            MongoDB that integrates TMDB for search and details. One-click
            favourites, and a 5-tier “Trash → Gem” community rating bar with
            mobile-first UI.
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>Tailwind</span>
            <span>Zustand</span>
            <span>MongoDB</span>
            <span>Node</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://oblivo.onrender.com/", "_blank")}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/oblivio.png")' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <h3>Oblivo</h3>
          <p>
            A responsive note-taking web app built with the MERN stack. Features
            include creating, updating, and deleting notes. Implements a fully
            functional REST API with rate limiting via Upstash Redis for
            scalability.
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>DaisyUI (Tailwind)</span>
            <span>MongoDB</span>
            <span>Node</span>
          </div>
        </motion.div>

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
            window.open("https://tascape-ykqy.vercel.app/", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url("/projects/tascape.png")' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          />
          <h3>Tascape</h3>
          <p>
            Developed a Trello-like Kanban board application with drag-and-drop
            functionality using React to manage tasks across custom boards.
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>Tailwind</span>
            <span>HTML5</span>
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
      </motion.div>
    </motion.section>
  );
}
