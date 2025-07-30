import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Tirth Vora
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Front-end Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I'm a dedicated front-end developer based in Kitchener, ON. Whether
            building sleek interfaces with React.js or optimizing user flows
            with responsive CSS, I'm all about delivering seamless solutions
            that resonate with users.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#projects"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/tirth014" target="_blank" aria-label="Visit my GitHub">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/014tirth/"
              target="_blank"
              aria-label="Visit my LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="javascript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >{`const aboutMe: DeveloperProfile = {
  codename: "Tirth Vora",
  origin: "Kitchener, ON",
  role: "Front-End Developer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL", "PHP"],
    frameworks: ["React.js", "Node.js", "Express", "MongoDB", "GraphQL"],
  },
  traits: [
    "pixel-perfectionist",
    "clean-code craftsman",
    "team-player"
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature.",
  availability: "Available for hire",
};`}</SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <a href="mailto:014tirth@gmail.com" aria-label="Send an email to Tirth">
                <span className="card-icon">📧</span>
                <span className="card-text">014tirth@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
