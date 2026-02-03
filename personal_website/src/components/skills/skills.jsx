import { useState } from "react";
import { motion } from "framer-motion";
import "./skills.css";
import {fadeUp,containerStagger} from "../../animations/animations";

import {
  Code, Database, Terminal, GitBranch, Figma,
  FileSpreadsheet, MessageCircle, Zap, Users, Globe
} from "lucide-react";


const cardData = [
  {
    id: "programmingLanguages",
    title: "Programming Languages",
    color: "#60a5fa",
    skills: [
      { name: "JavaScript", color: "#facc15", icon: Code },
      { name: "TypeScript", color: "#3b82f6", icon: Code },
      { name: "Python", color: "#22c55e", icon: Terminal },
      { name: "C++", color: "#a855f7", icon: Terminal },
      { name: "SQL", color: "#f97316", icon: Database }
    ]
  },
  {
    id: "devTools",
    title: "Development Tools & Technologies",
    color: "#f472b6",
    skills: [
      { name: "React", color: "#61dafb", icon: Code },
      { name: "Node.js", color: "#22c55e", icon: Terminal },
      { name: "Git", color: "#ef4444", icon: GitBranch },
      { name: "MySQL", color: "#3b82f6", icon: Database },
      { name: "Figma", color: "#a855f7", icon: Figma },
      { name: "Excel", color: "#16a34a", icon: FileSpreadsheet }
    ]
  },
  {
    id: "softSkills",
    title: "Soft Skills",
    color: "#fb923c",
    skills: [
      { name: "Communication", color: "#6366f1", icon: MessageCircle },
      { name: "Problem Solving", color: "#f97316", icon: Zap },
      { name: "Teamwork", color: "#ef4444", icon: Users }
    ]
  },
  {
    id: "languages",
    title: "Languages",
    color: "#4ade80",
    skills: [
      { name: "Spanish", level: "Native", color: "#ef4444", icon: Globe },
      { name: "English", level: "Fluent", color: "#3b82f6", icon: Globe }
    ]
  }
];

const Skills = () => {

  const [selectedCard, setSelectedCard] = useState(cardData[0]);

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
      <h1 id="t1">SKILLS &</h1>
      <h1 id="t2">EXPERTISE</h1>
    </motion.div>

    <div className="skillsSection">

      <motion.div className="buttonsContainer" variants={fadeUp}>
        {cardData.map((card) => (
          <button
            key={card.id}
            className={`skillsButton ${selectedCard.id === card.id ? "active" : ""}`}
            onClick={() => setSelectedCard(card)}
            style={{
              borderColor: card.color,
              backgroundColor: selectedCard.id === card.id ? card.color : "transparent",
              color: selectedCard.id === card.id ? "white" : card.color
            }}
          >
            {card.title}
          </button>
        ))}
      </motion.div>

      <motion.ul className="skillsContent" variants={containerStagger} initial="hidden" animate="visible" key={selectedCard.id}>

        {selectedCard.skills.map((skill, index) => {

          const Icon = skill.icon;

          return (
            <motion.li
              className="skillsCard"
              key={index}
              variants={fadeUp}
            >
              <div
                className="skillIcon"
                style={{ backgroundColor: skill.color }}
              >
                <Icon size={20} />
              </div>

              <div>
                <p>{skill.name}</p>
                {skill.level && (
                  <p id="skillLevel">{skill.level}</p>
                )}
              </div>
            </motion.li>
          );
        })}
      </motion.ul>

    </div>
  </motion.section>
  );
};

export default Skills;
