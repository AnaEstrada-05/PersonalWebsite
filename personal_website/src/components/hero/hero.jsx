import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./hero.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.section
        className="hero_content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="availabilityBadge"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
        >
          <span className="dot" />
          Available for new opportunities
        </motion.div>

        {/* Intro */}
        <motion.h3 className="intro" variants={fadeLeft}>
          Hello! My name is Ana and I'm a
        </motion.h3>

        {/* Title */}
        <div className="heroTitle">
          <motion.h1
            id="frontend"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Front End
          </motion.h1>

          <motion.h1
            id="developer"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            Developer
          </motion.h1>
        </div>

        {/* Description */}
        <motion.h3 className="description" variants={fadeRight}>
          Based in Chihuahua, Mexico
        </motion.h3>

        {/* Socials */}
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

        {/* Button */}
        <motion.button
          className="contactButton"
          variants={fadeUp}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Hero;
