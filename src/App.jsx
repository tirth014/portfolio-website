import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="#home"
          className="go-up-btn"
          variants={staggerContainer}
        >
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </motion.a>
        <motion.div className="social-links" variants={staggerContainer}>
          <motion.a
            href="https://github.com/tirth014"
            target="_blank"
            aria-label="Visit my GitHub"
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/014tirth/"
            target="_blank"
            aria-label="Visit my LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a
            href="mailto:014tirth@gmail.com"
            aria-label="Send an email to Tirth"
          >
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </motion.a>
        </motion.div>
        <p>&copy; 2025 Tirth Vora. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
