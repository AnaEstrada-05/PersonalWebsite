import { motion } from "framer-motion";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import LangToggle from "./components/langToggle/langToggle";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <LangToggle />
      </motion.div>
    </LanguageProvider>
  );
}

export default App;