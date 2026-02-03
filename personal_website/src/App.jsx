import { motion } from "framer-motion";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/skills";
import "./App.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <Skills />
    </motion.div>
  );
}

export default App;
