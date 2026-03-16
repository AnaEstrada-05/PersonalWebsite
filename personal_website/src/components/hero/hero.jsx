import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";
import "./hero.css";
import { fadeUp, fadeLeft, fadeRight, containerStagger } from "../../animations/animations";

const Hero = () => {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <div className="hero" id="home">
      <motion.section
        className="hero_content"
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="availabilityBadge" variants={fadeUp} whileHover={{ scale: 1.05 }}>
          <span className="dot" />
          {tr.available}
        </motion.div>

        <motion.h3 className="intro" variants={fadeLeft}>
          {tr.greeting}
        </motion.h3>

        <div className="heroTitle">
          <motion.h1 id="frontend" variants={fadeUp}>{tr.title1}</motion.h1>
          <motion.h1 id="developer" variants={fadeUp}>{tr.title2}</motion.h1>
          <motion.div className="heroTitleDivider" variants={fadeUp}>
            <span className="dividerLine" />
            <span className="dividerAmp">&amp;</span>
            <span className="dividerLine" />
          </motion.div>
          <motion.h1 id="designer" variants={fadeUp}>{tr.title3}</motion.h1>
        </div>

        <motion.h3 className="description" variants={fadeRight}>
          {tr.location}
        </motion.h3>

        <motion.div className="socialMedia" variants={fadeUp}>
          {[
            { Icon: FaGithub,   href: "https://github.com/AnaEstrada-05" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/ana-estrada-84085a29b/" },
            { Icon: MdEmail,    href: "mailto:anaestrgz@gmail.com" },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
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
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            {tr.viewWork}
          </motion.button>

          <motion.a
            href={tr.resumeFile}
            download={tr.resumeFileName}
            className="resumeButton"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            {tr.resume}
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;