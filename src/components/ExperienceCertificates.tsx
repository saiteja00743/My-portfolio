import { motion } from "framer-motion";

/* ── UptoSkills internship ─────────────────────────────────────────────── */
const experience = {
  role: "Android Development Intern — Captain of Domain",
  org: "UptoSkills",
  period: "January 2026 – April 2026",
  duration: "3 months",
  highlights: [
    "Led Android development delivery and owned the domain end-to-end",
    "Accountable for team outcomes, code quality, and on-time delivery",
    "Mentored peers and collaborated in a structured product environment",
  ],
};

/** Files live in `public/` (spaces in filenames are encoded in URLs). */
const documentActions = [
  {
    id: "experience-letter",
    downloadLabel: "Download experience letter",
    previewLabel: "Preview experience letter",
    href: "/android dev2.jpg",
    downloadName:
      "UptoSkills_Android_Internship_Experience_Letter_Sai_Teja_Gajavelli.jpg",
  },
  {
    id: "certificate",
    downloadLabel: "Download certificate of completion",
    previewLabel: "Preview certificate",
    href: "/android dev1.jpg",
    downloadName:
      "UptoSkills_Android_Internship_Certificate_Sai_Teja_Gajavelli.jpg",
  },
] as const;

/* ── Zidio Development internship ─────────────────────────────────────── */
const zidioExperience = {
  role: "Web Development Intern",
  org: "Zidio Development",
  period: "2026",
  duration: "2 months",
  highlights: [
    "Built and deployed responsive web applications using modern front-end technologies",
    "Collaborated with cross-functional teams on real-world client projects",
    "Delivered production-ready features under industry-standard timelines",
  ],
};

const zidioDocuments = [
  {
    id: "zidio-certificate",
    downloadLabel: "Download completion certificate",
    previewLabel: "Preview completion certificate",
    href: "/zidio-completion-certificate.png",
    downloadName: "Zidio_Development_Web_Internship_Completion_Certificate_Sai_Teja_Gajavelli.png",
  },
  {
    id: "zidio-experience",
    downloadLabel: "Download experience letter",
    previewLabel: "Preview experience letter",
    href: "/zidio-experience-letter.png",
    downloadName: "Zidio_Development_Web_Internship_Experience_Letter_Sai_Teja_Gajavelli.png",
  },
] as const;

/* ── IBM SkillsBuild × Edunet × AICTE internship ──────────────────────── */
const ibmExperience = {
  role: "AI & Full Stack Development Intern",
  org: "IBM SkillsBuild × Edunet Foundation × AICTE",
  period: "June 2026 – Present",
  status: "Ongoing",
  highlights: [
    "AI & Machine Learning — model building and evaluation",
    "Full Stack Development — React, Node.js, FastAPI",
    "Python Programming — scripts, APIs, data processing",
    "Industry Project Experience — real-world deliverables",
    "Cloud & DevOps — Git, GitHub, deployment workflows",
  ],
  description:
    "AICTE University Engagement Internship Program through IBM SkillsBuild and Edunet Foundation — working on production-oriented AI and full stack projects with industry guidance.",
};

/* ── Shared button classes ─────────────────────────────────────────────── */
const btnClass =
  "inline-flex flex-1 items-center justify-center border border-white/25 bg-white/5 px-5 py-3.5 font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-white transition-colors hover:border-white/35 hover:bg-white/10 sm:min-w-[14rem] sm:flex-none";

const previewBtnClass =
  "inline-flex flex-1 items-center justify-center border border-white/15 bg-transparent px-5 py-3.5 font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-white/90 transition-colors hover:border-white/28 hover:bg-white/[0.07] sm:min-w-[12rem] sm:flex-none";

const disabledBtnClass =
  "inline-flex flex-1 cursor-not-allowed items-center justify-center border border-white/10 bg-white/[0.03] px-5 py-3.5 font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-white/35 sm:min-w-[14rem] sm:flex-none";

export function ExperienceCertificates() {
  return (
    <section
      id="experience"
      className="relative bg-black px-6 py-28 text-white sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 grain opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-white/75">
            Work experience
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-display-contrast">
            3 Internships · Verified credentials
          </h2>
          <p className="mt-4 font-sans font-medium text-white/85">
            Formal roles with issued documents — download certificates directly for your records or applications.
          </p>
        </motion.div>

        {/* Cards wrapper — vertical stack */}
        <div className="flex flex-col gap-8">

          {/* ── Card 1 · UptoSkills ──────────────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="glass-dark glass-dark-hover mx-auto max-w-3xl rounded-2xl border-white/15 p-8 sm:p-10"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  {experience.role}
                </h3>
                <p className="mt-2 font-sans text-sm font-medium text-white/80">
                  {experience.org} · {experience.period} · {experience.duration}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-white/70">
                Completed
              </span>
            </div>

            <ul className="space-y-2.5 border-t border-white/10 pt-6 font-sans text-sm leading-relaxed text-white/75">
              {experience.highlights.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6">
              {documentActions.map((item) => {
                const fileUrl = encodeURI(item.href);
                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 sm:flex-row sm:flex-wrap"
                  >
                    <a
                      href={fileUrl}
                      download={item.downloadName}
                      className={btnClass}
                    >
                      {item.downloadLabel}
                    </a>
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={previewBtnClass}
                    >
                      {item.previewLabel}
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.article>

          {/* ── Card 2 · Zidio Development ──────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="glass-dark glass-dark-hover mx-auto max-w-3xl rounded-2xl border-white/15 p-8 sm:p-10"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  {zidioExperience.role}
                </h3>
                <p className="mt-2 font-sans text-sm font-medium text-white/80">
                  {zidioExperience.org} · {zidioExperience.period} · {zidioExperience.duration}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-white/70">
                Completed
              </span>
            </div>

            <ul className="space-y-2.5 border-t border-white/10 pt-6 font-sans text-sm leading-relaxed text-white/75">
              {zidioExperience.highlights.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6">
              {zidioDocuments.map((item) => {
                const fileUrl = encodeURI(item.href);
                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 sm:flex-row sm:flex-wrap"
                  >
                    <a
                      href={fileUrl}
                      download={item.downloadName}
                      className={btnClass}
                    >
                      {item.downloadLabel}
                    </a>
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={previewBtnClass}
                    >
                      {item.previewLabel}
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.article>

          {/* ── Card 3 · IBM SkillsBuild × Edunet × AICTE ────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="glass-dark glass-dark-hover mx-auto max-w-3xl rounded-2xl border-white/15 p-8 sm:p-10"
          >
            {/* Status badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)] animate-pulse" />
              <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-widest text-emerald-400">
                {ibmExperience.status}
              </span>
            </div>

            {/* Header */}
            <h3 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
              {ibmExperience.role}
            </h3>
            <p className="mt-2 font-sans text-sm font-medium text-white/80">
              {ibmExperience.org} · {ibmExperience.period}
            </p>

            <p className="mt-5 font-sans text-sm leading-relaxed text-white/70">
              {ibmExperience.description}
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 font-sans text-sm leading-relaxed text-white/75">
              {ibmExperience.highlights.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
              {/* View Completion Certificate */}
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <a
                  href="/ibm-completion-certificate.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className={btnClass}
                >
                  View Completion Certificate
                </a>
                <a
                  href="/ibm-completion-certificate.jpg"
                  download="IBM_SkillsBuild_Edunet_AICTE_Completion_Certificate_Sai_Teja_Gajavelli.jpg"
                  className={previewBtnClass}
                >
                  Download Certificate
                </a>
              </div>

              {/* View Internship Details */}
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <a
                  href="https://skillsbuild.org"
                  target="_blank"
                  rel="noreferrer"
                  className={previewBtnClass}
                >
                  View IBM SkillsBuild Program ↗
                </a>
              </div>

              {/* Experience Letter — disabled until completion */}
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <span className={disabledBtnClass}>
                  Experience Letter — Available After Completion
                </span>
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
