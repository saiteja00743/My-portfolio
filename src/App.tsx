import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceCertificates } from "./components/ExperienceCertificates";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ResumeSection } from "./components/ResumeSection";
import { Contact } from "./components/Contact";
import { SocialFooter } from "./components/SocialFooter";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-black"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceCertificates />
        <Skills />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>
      <SocialFooter />
    </motion.div>
  );
}
