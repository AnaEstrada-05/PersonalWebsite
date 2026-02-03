import React from "react";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./hero.css";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  containerStagger
} from "../../animations/animations";

const Hero = () => {
  return (
    <div className="hero">
      <motion.section
        className="hero_content"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        <motion.div
          className="availabilityBadge"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
        >
          <span className="dot" />
          Available for new opportunities
        </motion.div>

        <motion.h3 className="intro" variants={fadeLeft}>
          Hello! My name is Ana and I'm a
        </motion.h3>

        <div className="heroTitle">
          <motion.h1 id="frontend" variants={fadeUp}>
            Front End
          </motion.h1>

          <motion.h1 id="developer" variants={fadeUp}>
            Developer
          </motion.h1>
        </div>

        <motion.h3 className="description" variants={fadeRight}>
          Based in Chihuahua, Mexico
        </motion.h3>

        <motion.div className="socialMedia" variants={fadeUp}>
          {[FaGithub, FaLinkedin, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              href={
                index === 0
                  ? "https://github.com/AnaEstrada-05"
                  : index === 1
                  ? "https://www.linkedin.com/in/ana-estrada-84085a29b/"
                  : "mailto:anaestrgz@gmail.com"
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={26} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="heroButtons" variants={fadeUp}>
          <motion.button
            className="contactButton"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work →
          </motion.button>

          <motion.a
            href="/Resume_AnaEstrada.pdf"
            download="Ana_Estrada_CV.pdf"
            className="resumeButton"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Resume
          </motion.a>
        </motion.div>

      </motion.section>
    </div>
  );
};

export default Hero;
