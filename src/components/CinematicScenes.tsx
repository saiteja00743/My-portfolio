import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { projects, type Project } from "../data/projects";

const technologies = ["React.js", "Next.js", "Python", "Node.js", "MongoDB", "Java", "Express.js", "AI / ML", "JavaScript", "DSA"];
export function CreativeUniverse() {
  const reduced = useReducedMotion();
  const pointer = useMotionValue(0);
  const rotation = useSpring(pointer, { stiffness: 70, damping: 24 });
  return (
    <section id="universe" className="universe-scene" onPointerMove={e => {
      if (reduced || e.pointerType !== "mouse") return;
      const box = e.currentTarget.getBoundingClientRect();
      pointer.set((e.clientX - box.left - box.width / 2) / box.width * 9);
    }} onPointerLeave={() => pointer.set(0)}>
      <div className="scene-heading"><p>SCENE 02 / THE CREATIVE UNIVERSE</p><h2>IDEAS INTO<br /><em>REALITY.</em></h2></div>
      <div className="universe-orbit" aria-hidden="true" />
      <motion.div className="technology-world" style={{ rotateY: rotation }}>
        {technologies.map((name, index) => <a href="#skills" className={"technology-node node-" + index} key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><small>EXPLORE SKILLS ↗</small></a>)}
      </motion.div>
      <div className="universe-core"><span>&lt;/&gt;</span><p>CODE. LEARN. BUILD. REPEAT.</p></div>
      <p className="scene-corner">TOOLS<br />IDEAS<br />PEOPLE<br />IMPACT</p>
      <p className="universe-description">Full stack engineering. Artificial intelligence.<br />One endlessly curious mind.</p>
    </section>
  );
}

const chapters = [
  { label: "FOUNDATION", title: "Computer science", date: "B.Sc. (Hons)", detail: "Final-year Computer Science student at Kakatiya Government College, focused on full stack engineering and artificial intelligence.", href: "#about" },
  { label: "JAN — APR 2026", title: "Android development", date: "UptoSkills", detail: "Captain of Domain — Android Development. Delivery, domain ownership, and collaboration in a product setting.", href: "#experience" },
  { label: "JUN 2026 — PRESENT", title: "AI & full stack", date: "IBM · Edunet · AICTE", detail: "AICTE University Engagement Internship Program, working with AI, Python, React, Node.js, APIs, and industry projects.", href: "#experience" },
  { label: "WHAT COMES NEXT", title: "Keep building", date: "The next chapter", detail: "Exploring AI, developing useful products, and turning ideas into real software. Nothing comes so easy…", href: "#projects" },
];
export function JourneyClock() {
  const [active, setActive] = useState(2);
  return (
    <section className="journey-scene" aria-labelledby="journey-heading">
      <div className="journey-title"><p>SCENE 03</p><h2 id="journey-heading">A JOURNEY<br />THROUGH<br /><em>TIME.</em></h2><span>IDEAS · EXPERIENCES · PROJECTS</span></div>
      <div className="journey-clock" aria-hidden="true"><div className="clock-ticks" /><div className="clock-hand" style={{ transform: `rotate(${-65 + active * 43}deg)` }} /><i /></div>
      <div className="journey-chapters" role="tablist" aria-label="Journey chapters" onKeyDown={event => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === "Home" ? 0 : event.key === "End" ? chapters.length - 1 : (active + (event.key === "ArrowRight" ? 1 : -1) + chapters.length) % chapters.length;
        setActive(next);
        document.getElementById("chapter-" + next)?.focus();
      }}>
        {chapters.map((chapter, index) => <button key={chapter.label} role="tab" id={"chapter-" + index} aria-selected={active === index} aria-controls="chapter-detail" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} className={active === index ? "active" : ""}><i /><span>{chapter.label}</span><strong>{chapter.title}</strong><small>{chapter.date}</small></button>)}
      </div>
      <div role="tabpanel" id="chapter-detail" aria-labelledby={"chapter-" + active} className="chapter-detail"><p>{chapters[active].detail}</p><a href={chapters[active].href}>EXPLORE THIS CHAPTER ↗</a></div>
    </section>
  );
}

export function ProjectTheater() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const featured = projects.slice(0, 8);
  useEffect(() => {
    if (!selected) return;
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; element?.close(); returnFocus.current?.focus(); };
  }, [selected]);
  return (
    <section className="project-theater" aria-labelledby="theater-title">
      <div className="theater-top"><div><p>SCENE 04 / SELECTED WORK</p><h2 id="theater-title">REAL PROJECTS.<br /><em>REAL STORIES.</em></h2></div><a href="#projects">VIEW ALL {projects.length} PROJECTS ↗</a></div>
      <div className="theater-ceiling" aria-hidden="true" />
      <div className="theater-deck">
        {[-2, -1, 0, 1, 2].map(offset => {
          const index = (active + offset + featured.length) % featured.length;
          const project = featured[index];
          return <button key={project.title} className={"theater-screen " + (offset === 0 ? "is-front" : "")} style={{ "--slot": offset } as CSSProperties} onClick={event => {
            if (offset) { setActive(index); return; }
            returnFocus.current = event.currentTarget; setSelected(project);
          }} aria-label={offset === 0 ? "Open project details: " + project.title : "Feature " + project.title}>
            <span className="screen-bar"><i /> {String(index + 1).padStart(2, "0")} / PROJECT FILE <b>↗</b></span>
            <img src={project.image} alt={project.imageAlt} loading="lazy" />
            <strong>{project.title}</strong><span className="screen-stack">{project.stack}</span>
          </button>;
        })}
      </div>
      <div className="theater-floor" aria-hidden="true" />
      <div className="theater-controls"><button onClick={() => setActive((active - 1 + featured.length) % featured.length)} aria-label="Previous featured project">←</button><p aria-live="polite">{String(active + 1).padStart(2, "0")} <span>/ {String(featured.length).padStart(2, "0")}</span></p><button onClick={() => setActive((active + 1) % featured.length)} aria-label="Next featured project">→</button></div>
      <p className="theater-hint">SELECT A SCREEN TO EXPLORE THE PROJECT</p>
      {selected && <dialog ref={dialog} className="project-dossier" aria-labelledby="dossier-title" onCancel={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}>
        <div className="dossier-body"><button className="dossier-close" onClick={() => setSelected(null)} autoFocus aria-label="Close project details">CLOSE ×</button>
          <p>PROJECT DOSSIER / SAI TEJA</p><h2 id="dossier-title">{selected.title}</h2><img src={selected.image} alt={selected.imageAlt} /><p>{selected.description}</p><h3>TECHNOLOGY STACK</h3><p>{selected.stack}</p>
          <div className="dossier-links"><a href={selected.liveUrl} target="_blank" rel="noreferrer">OPEN PROJECT ↗</a><a href={selected.githubUrl} target="_blank" rel="noreferrer">PROJECT SOURCE ↗</a></div>
        </div>
      </dialog>}
    </section>
  );
}
