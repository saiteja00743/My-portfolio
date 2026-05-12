import { motion } from "framer-motion";

const groups = [
  { title: "Web fundamentals", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Frontend", items: ["React.js", "Next.js"] },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  { title: "Data & persistence", items: ["MongoDB", "DBMS"] },
  { title: "Languages", items: ["Java", "Python"] },
  { title: "Problem solving", items: ["DSA"] },
  { title: "AI / ML", items: ["AI & Machine Learning Basics"] },
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
          <p className="font-sans text-[11px] font-semibold uppercase tracking-editorial text-white/75">
            Technical profile
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-white text-display-contrast">
            Technical field skills
          </h2>
          <p className="mt-4 font-sans font-medium text-white/85">
            Full stack development, data and APIs, core programming languages,
            algorithms, and AI foundations—applied professionally across
            coursework, personal projects, and production-oriented builds.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">
                {g.title}
              </h3>
              <ul className="mt-6 space-y-3 font-display text-xl font-medium text-white">
                {g.items.map((item) => (
                  <li key={item} className="leading-snug">
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
