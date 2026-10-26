import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { value: "15+", label: "Projects Shipped" },
  { value: "2", label: "Internships" },
  { value: "B.Sc. CS", label: "Final Year (Hons)" },
  { value: "2026", label: "Available From" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-50 px-6 py-28 text-neutral-950 sm:px-10"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-black/[0.03] blur-3xl" />

      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-neutral-700">
            About me
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight text-neutral-950">
            Full Stack Developer &amp; AI Engineer
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
          {/* Left — quick facts */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-light rounded-xl border border-black/8 p-5"
                >
                  <p className="font-display text-3xl font-semibold text-neutral-950">{s.value}</p>
                  <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-widest text-neutral-600">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Key info */}
            <div className="space-y-3 rounded-xl border border-black/8 bg-white/60 p-6 font-sans text-sm font-medium text-neutral-800 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="text-neutral-500">🎓</span>
                <span><strong>B.Sc. (Hons) Computer Science</strong> — Kakatiya Government College</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-500">📍</span>
                <span>Telangana, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-500">📧</span>
                <a href="mailto:gajavellisaiteja123@gmail.com" className="text-neutral-950 underline underline-offset-2 hover:text-neutral-600 transition-colors">
                  gajavellisaiteja123@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neutral-500">💼</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-emerald-700 font-semibold text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Work — Full-time / Internship
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="glass-light glass-light-hover rounded-2xl border-black/10 p-8 sm:p-10"
          >
            <div className="space-y-5 font-sans text-lg font-medium leading-[1.85] text-neutral-800 md:text-xl">
              <p>
                I'm a{" "}
                <span className="font-semibold text-neutral-950">
                  Final-year B.Sc. (Hons) Computer Science
                </span>{" "}
                student specialising in <strong>Full Stack Development</strong> and{" "}
                <strong>Artificial Intelligence</strong>. I build production-quality web apps and AI systems end-to-end — from database design to deployment.
              </p>
              <p>
                I've shipped <strong>15+ real projects</strong> including AI analytics platforms, deep learning models, multi-agent systems, and SaaS tools — all publicly deployed and open-sourced.
              </p>
              <p>
                With <strong>2 internships</strong> (UptoSkills &amp; IBM SkillsBuild × AICTE), hands-on experience with production stacks (React, Node, Python, FastAPI, MongoDB), and a track record of delivering under deadlines, I'm ready to contribute from day one.
              </p>
            </div>
            <div className="mt-10 grid gap-6 border-t border-black/10 pt-10 sm:grid-cols-2">
              <div>
                <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-neutral-600">
                  Core Stack
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-neutral-950">
                  React · Node.js · Python · AI/ML
                </p>
              </div>
              <div>
                <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-neutral-600">
                  Goal
                </p>
                <p className="mt-2 font-display text-xl font-medium text-neutral-900">
                  Build things that matter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
