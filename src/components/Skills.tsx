import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    icon: "🖥️",
    items: ["React.js", "Next.js", "HTML · CSS · JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "FastAPI (Python)", "REST APIs"],
  },
  {
    title: "AI / Machine Learning",
    icon: "🤖",
    items: ["Python · TensorFlow", "Scikit-learn · XGBoost", "LangGraph · LLM Agents", "OpenCV · Computer Vision"],
  },
  {
    title: "Database & Cloud",
    icon: "☁️",
    items: ["MongoDB", "PostgreSQL · SQLite", "AWS (Practitioner)", "IBM Cloud · Vercel"],
  },
  {
    title: "Languages",
    icon: "💻",
    items: ["Python", "JavaScript", "Java"],
  },
  {
    title: "Tools & Practices",
    icon: "🛠️",
    items: ["Git · GitHub", "Docker", "DSA & Problem Solving", "Agile / Product thinking"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-black px-6 py-28 sm:px-10">
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-white/75">
            Technical skills
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-white text-display-contrast">
            What I build with
          </h2>
          <p className="mt-4 font-sans font-medium text-white/85">
            Full stack · AI/ML · Cloud · Problem solving — applied across internships, hackathons, and 15+ shipped projects.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.article
              key={g.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="glass-dark glass-dark-hover flex flex-col rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden="true">{g.icon}</span>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  {g.title}
                </h3>
              </div>
              <ul className="space-y-2.5 font-sans text-base font-medium text-white/90">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 leading-snug">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
