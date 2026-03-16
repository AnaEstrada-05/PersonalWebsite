import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code, Database, Terminal, GitBranch, Figma,
  FileSpreadsheet, MessageCircle, Zap, Users, Globe, Star
} from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../i18n/translations";
import "./skills.css";
import { fadeUp, containerStagger } from "../../animations/animations";

// Map skill names to icons (works across both languages)
const iconMap = {
  JavaScript: Code,
  TypeScript: Code,
  Python: Terminal,
  "C++": Terminal,
  SQL: Database,
  "React.js": Code,
  "Node.js": Terminal,
  Svelte: Code,
  Tailwind: Code,
  Git: GitBranch,
  MySQL: Database,
  Figma: Figma,
  Communication: MessageCircle,
  Comunicación: MessageCircle,
  "Problem Solving": Zap,
  "Resolución de problemas": Zap,
  Teamwork: Users,
  "Trabajo en equipo": Users,
  Leadership: Star,
  Liderazgo: Star,
  Spanish: Globe,
  Español: Globe,
  English: Globe,
  Inglés: Globe,
  Excel: FileSpreadsheet,
};

const getIcon = (name) => iconMap[name] || Code;

const Skills = () => {
  const { lang } = useLang();
  const tr = t[lang].skills;
  const categories = tr.categories;

  const [selectedId, setSelectedId] = useState(categories[0].id);
  
  // Keep selection in sync when language switches
  useEffect(() => {
    // selectedId stays valid since IDs don't change between languages
  }, [lang]);

  const selectedCard = categories.find((c) => c.id === selectedId) || categories[0];

  return (
    <motion.section
      className="skillsContainer"
      id="skills"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="title" variants={fadeUp}>
        <h1 id="t1">{tr.heading1}</h1>
        <h1 id="t2">{tr.heading2}</h1>
      </motion.div>

      <div className="skillsSection">
        {/* Category buttons */}
        <motion.div className="buttonsContainer" variants={fadeUp}>
          {categories.map((card) => (
            <button
              key={card.id}
              className={`skillsButton ${selectedId === card.id ? "active" : ""}`}
              onClick={() => setSelectedId(card.id)}
              style={{
                borderColor: card.color,
                backgroundColor: selectedId === card.id ? card.color : "transparent",
                color: selectedId === card.id ? "white" : card.color,
              }}
            >
              {card.title}
            </button>
          ))}
        </motion.div>

        {/* Skills cards */}
        <AnimatePresence mode="wait">
          <motion.ul
            className="skillsContent"
            key={`${selectedId}-${lang}`}
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.15 } }}
          >
            {selectedCard.skills.map((skill, index) => {
              const Icon = getIcon(skill.name);
              return (
                <motion.li className="skillsCard" key={index} variants={fadeUp}>
                  <div className="skillIcon" style={{ backgroundColor: skill.color }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p>{skill.name}</p>
                    {skill.level && <p id="skillLevel">{skill.level}</p>}
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Skills;