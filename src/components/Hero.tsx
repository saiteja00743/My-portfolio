import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 110]);
  return (
    <section ref={ref} id="home" className="film-hero">
      <div className="film-grain" aria-hidden="true" />
      <p className="film-welcome"><span>•••</span> WELCOME TO MY WORLD <span>•••</span></p>
      <motion.h1 initial={{ opacity: 0, scale: reduced ? 1 : .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="film-wordmark" aria-label="Gajavelli Sai Teja">SAI TEJA</motion.h1>
      <motion.div className="film-person" style={{ y: portraitY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <img src="/profile-hero.png" alt="Gajavelli Sai Teja" loading="eager" width={1197} height={1314} />
      </motion.div>
      <span className="film-chip chip-left">• DEVELOPER SAI TEJA •</span>
      <span className="film-chip chip-right">• ALWAYS BUILDING •</span>
      <div className="film-arrows left" aria-hidden="true">▸<br />▸<br />▸<br />▸<br />▸</div>
      <div className="film-arrows right" aria-hidden="true">◂<br />◂<br />◂<br />◂<br />◂</div>
      <div className="film-dots" aria-hidden="true">{Array.from({length: 16}, (_, i) => <i key={i} />)}</div>
      <div className="film-hero-bottom">
        <p>GAJAVELLI SAI TEJA<small>Full Stack Developer · AI Explorer</small></p>
        <a className="film-enter" href="#universe">EXPLORE MY WORLD <span>↓</span></a>
        <a href="https://teja-agency-startup.vercel.app/" target="_blank" rel="noreferrer">VISIT MY AGENCY ↗</a>
      </div>
    </section>
  );
}
