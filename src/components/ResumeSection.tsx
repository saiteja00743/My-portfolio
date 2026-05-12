import { motion } from "framer-motion";

const downloads = [
  {
    label: "Résumé (PDF)",
    sub: "2026 · One-page profile",
    href: "/Sai Teja Gajavelli 2026.pdf",
    filename: "Sai_Teja_Gajavelli_Resume_2026.pdf",
  },
  {
    label: "Curriculum vitae (PDF)",
    sub: "2026 · Extended detail",
    href: "/CV 2026.pdf",
    filename: "Sai_Teja_Gajavelli_CV_2026.pdf",
  },
  {
    label: "Résumé (Word)",
    sub: "DOCX · Editable source",
    href: "/Sai Teja Gajavelli resume creating.docx",
    filename: "Sai_Teja_Gajavelli_Resume.docx",
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="relative bg-black px-6 py-28 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-editorial text-white/75">
            Professional documents
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-white text-display-contrast">
            Résumé & curriculum vitae
          </h2>
          <p className="mt-4 font-sans font-medium text-white/85">
            Concise profiles of my experience in full stack development, AI, and
            structured problem solving—offered in PDF and Word so recruiters,
            mentors, and collaborators can review my background in the format
            they prefer.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {downloads.map((d, i) => (
            <motion.a
              key={d.href}
              href={encodeURI(d.href)}
              download={d.filename}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="glass-dark glass-dark-hover group flex flex-col rounded-2xl p-8"
            >
              <span className="font-display text-2xl font-semibold text-white">{d.label}</span>
              <span className="mt-3 font-sans text-sm font-medium text-white/80">{d.sub}</span>
              <span className="mt-10 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-editorial text-white/90 transition-colors group-hover:text-white">
                Download
                <svg
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  aria-hidden
                >
                  <path d="M12 4v12m0 0l4-4m-4 4l-4-4M5 19h14" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
