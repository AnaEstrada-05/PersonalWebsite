import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './hero.css'

const Hero = () =>{
    return(
        <div className="hero_content">
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-full mb-6"
          >
            <span className="text-emerald-400 tracking-wider">Available for new opportunities</span>
          </motion.div>
            <h1>Ana Estrada</h1>
            <h2>Front End Developer</h2>
            <p className="description">
            Front End Developer apasionada por crear interfaces atractivas, accesibles y centradas en el usuario. 
            Disfruto transformar ideas en experiencias digitales funcionales y visualmente cuidadas, 
            combinando diseño y tecnología.
            </p>
            <div className="solcialMedia">
                <a
              href="https://github.com/AnaEstrada-05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 hover:border-emerald-400 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ana-estrada-84085a29b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-br from-blue-500/10 to-teal-500/10 border border-blue-500/30 hover:border-blue-400 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:anaestrgz@gmail.com"
              className="p-3 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 hover:border-teal-400 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30"
            >
              <Mail size={24} />
            </a>
            </div>
            <button className="contactButton">View My Work</button>
        </div>
    )
}

export default Hero