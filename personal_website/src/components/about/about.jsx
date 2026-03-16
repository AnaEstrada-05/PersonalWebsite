import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";
import anaPhoto from "../../assets/ana-photo.JPG";
import "./about.css";

const About = () => {
  const { lang } = useLang();
  const tr = t[lang].about;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <section className="aboutSection" id="about" ref={ref}>
      <div className="aboutHeader">
        <motion.div
          className="aboutTitle"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="aH1 aH1--outline">{tr.heading1}</h1>
          <h1 className="aH1 aH1--filled">{tr.heading2}</h1>
        </motion.div>
        <motion.div
          className="aboutLine"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>

      <div className="aboutCard">
        <motion.div className="aboutVisual" {...fade(0.2)}>
          <div className="aboutRotatedLabel">{tr.rotatedLabel}</div>
          <div className="aboutPhotoWrap">
            <img src={anaPhoto} alt="Ana Paola Estrada" className="aboutPhoto" />
          </div>
          <motion.ul className="aboutMiniList" {...fade(0.5)}>
            {tr.miniList.map((item, i) => (
              <li key={i} className="aboutMiniItem">
                <span className="aboutMiniNum">0{i + 1}</span>
                <span className="aboutMiniText">{item}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="aboutContent">
          <motion.div className="aboutMeta" {...fade(0.25)}>
            <span className="aboutSubtitle">{tr.eyebrow}</span>
            <div className="aboutAccentLine" />
          </motion.div>

          {tr.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className={`aboutPara ${i === 0 ? "aboutPara--lead" : ""}`}
              {...fade(0.3 + i * 0.1)}
            >
              {p}
            </motion.p>
          ))}

          <motion.ul className="aboutTagList" {...fade(0.55)}>
            {tr.tags.map((tag) => (
              <li key={tag} className="aboutTag">{tag}</li>
            ))}
          </motion.ul>

          <motion.div className="aboutCurrently" {...fade(0.65)}>
            <span className="aboutCurrentlyLabel">{tr.currentlyLabel}</span>
            <span className="aboutCurrentlyText">{tr.currently}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;