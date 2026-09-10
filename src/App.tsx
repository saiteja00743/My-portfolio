import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceCertificates } from "./components/ExperienceCertificates";
import { CertificationsBadges } from "./components/CertificationsBadges";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ResumeSection } from "./components/ResumeSection";
import { Contact } from "./components/Contact";
import { SocialFooter } from "./components/SocialFooter";
import { CreativeUniverse, JourneyClock, ProjectTheater } from "./components/CinematicScenes";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="cinema">
        <a className="skip-link" href="#about">Skip introduction</a>
        <Navbar />
        <main>
          <Hero />
          <CreativeUniverse />
          <About />
          <JourneyClock />
          <ExperienceCertificates />
          <CertificationsBadges />
          <Skills />
          <ProjectTheater />
          <Projects />
          <ResumeSection />
          <Contact />
        </main>
        <SocialFooter />
      </div>
    </MotionConfig>
  );
}
