import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";
import "./projects.css";

// ── Importa tus imágenes aquí ──────────────────────────────
// Descomenta cada línea cuando tengas el screenshot listo en src/assets/
import imgRetiro from "../../assets/PaginaPlanRetiro.png";
import imgAutozone   from "../../assets/Autozone.png";
import imgHobi       from "../../assets/Hobi.png";
import imgBookIt     from "../../assets/PaginaBookIt.png";
import imgMujeres    from "../../assets/PaginaMujeres.png";
import imgEmprendemos from "../../assets/PaginaEmprendemos.png";

const projectImages = {
  "01": imgRetiro,
  "02": imgAutozone,
  "03": imgHobi,
  "04": imgBookIt,
  "05": imgMujeres,
  "06": imgEmprendemos,
};

// ── Placeholder shapes per project index ──────────────────
const PlaceholderShapes = ({ index, accentColor }) => (
  <div className="projectShapes">
    {["01", "03"].includes(index) && (
      <>
        <div className="shape shape-circle" style={{ borderColor: accentColor }} />
        <div className="shape shape-ring"   style={{ borderColor: accentColor }} />
        <div className="shape shape-dot"    style={{ background:   accentColor }} />
      </>
    )}
    {["02", "04"].includes(index) && (
      <>
        <div className="shape shape-square" style={{ borderColor: accentColor }} />
        <div className="shape shape-line"   style={{ background:   accentColor }} />
        <div className="shape shape-cross"  style={{ color:        accentColor }} />
      </>
    )}
    {["05", "06"].includes(index) && (
      <>
        <div className="shape shape-triangle" style={{ borderBottomColor: accentColor }} />
        <div className="shape shape-ring"     style={{ borderColor: accentColor }} />
        <div className="shape shape-dot"      style={{ background:  accentColor }} />
      </>
    )}
  </div>
);

// ── Big featured card (dev projects) ──────────────────────
const FeaturedCard = ({ project, cta_github, cta_figma, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const image = projectImages[project.index];

  return (
    <motion.article
      ref={ref}
      className="projectCard"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      <div
        className="projectVisual"
        style={{ background: image ? "#000" : project.gradient }}
      >
        {image ? (
          <img src={image} alt={project.title} className="projectScreenshot" />
        ) : (
          <>
            <div className="projectNoise" />
            <span className="projectIndex" style={{ color: project.accentColor }}>
              {project.index}
            </span>
            <PlaceholderShapes index={project.index} accentColor={project.accentColor} />
          </>
        )}
        <div className="projectOverlay">
          <div className="projectLinks">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="projectLink" style={{ "--accent": project.accentColor }}>
                <FaGithub size={18} /><span>{cta_github}</span>
              </a>
            )}
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noopener noreferrer"
                className="projectLink" style={{ "--accent": project.accentColor }}>
                <FaFigma size={18} /><span>{cta_figma}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="projectContent">
        <div className="projectMeta">
          <span className="projectSubtitle">{project.subtitle}</span>
          <div className="projectAccentLine" style={{ background: project.accentColor }} />
        </div>
        <h2 className="projectTitle">{project.title}</h2>
        <p className="projectDescription">{project.description}</p>
        <ul className="projectTags">
          {project.tags.map((tag) => (
            <li key={tag} className="projectTag">{tag}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

// ── Small design card (UX/UI projects grid) ───────────────
const DesignCard = ({ project, cta_figma, cardIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const image = projectImages[project.index];

  return (
    <motion.article
      ref={ref}
      className="designCard"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: cardIndex * 0.1 }}
    >
      <div
        className="designVisual"
        style={{ background: image ? "#000" : project.gradient }}
      >
        {image ? (
          <img src={image} alt={project.title} className="projectScreenshot" />
        ) : (
          <>
            <div className="projectNoise" />
            <span className="designIndex" style={{ color: project.accentColor }}>
              {project.index}
            </span>
            <PlaceholderShapes index={project.index} accentColor={project.accentColor} />
          </>
        )}
        <div className="projectOverlay">
          <div className="projectLinks">
            {project.figma && (
              <a href={project.figma} target="_blank" rel="noopener noreferrer"
                className="projectLink" style={{ "--accent": project.accentColor }}>
                <FaFigma size={18} /><span>{cta_figma}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="designContent">
        <div className="projectMeta">
          <span className="projectSubtitle">{project.subtitle}</span>
          <div className="projectAccentLine" style={{ background: project.accentColor }} />
        </div>
        <h3 className="designTitle">{project.title}</h3>
        <p className="designDescription">{project.description}</p>
        <ul className="projectTags">
          {project.tags.map((tag) => (
            <li key={tag} className="projectTag">{tag}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

// ── Main section ──────────────────────────────────────────
const Projects = () => {
  const { lang } = useLang();
  const tr = t[lang].projects;

  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all",    label: lang === "en" ? "All"        : "Todos" },
    { id: "dev",    label: lang === "en" ? "Development": "Desarrollo" },
    { id: "design", label: lang === "en" ? "UX/UI"      : "UX/UI" },
  ];

  const devProjects    = tr.items.filter((p) => p.type === "dev");
  const designProjects = tr.items.filter((p) => p.type === "design");

  const showDev    = activeFilter === "all" || activeFilter === "dev";
  const showDesign = activeFilter === "all" || activeFilter === "design";

  return (
    <section className="projectsSection" id="projects">

      {/* Header */}
      <div className="projectsHeader">
        <motion.div
          className="projectsTitle"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h1 className="projH1 projH1--outline">{tr.heading1}</h1>
          <h1 className="projH1 projH1--filled">{tr.heading2}</h1>
        </motion.div>
        <motion.div
          className="projectsLine"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Filter tabs */}
      <motion.div
        className="projectFilters"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filterBtn ${activeFilter === f.id ? "filterBtn--active" : ""}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      {/* Dev projects — big alternating layout */}
      <AnimatePresence>
        {showDev && (
          <motion.div
            className="projectsList"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {devProjects.map((project, i) => (
              <FeaturedCard
                key={project.index}
                project={project}
                cta_github={tr.cta_github}
                cta_figma={tr.cta_figma}
                index={i}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Design projects — 3-col grid */}
      <AnimatePresence>
        {showDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {showDev && (
              <div className="designSectionLabel">
                <span>{lang === "en" ? "UX/UI Designs" : "Diseños UX/UI"}</span>
                <div className="designSectionLine" />
              </div>
            )}
            <div className="designGrid">
              {designProjects.map((project, i) => (
                <DesignCard
                  key={project.index}
                  project={project}
                  cta_figma={tr.cta_figma}
                  cardIndex={i}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;