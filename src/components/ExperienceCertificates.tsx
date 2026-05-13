import { motion } from "framer-motion";

const experience = {
  role: "Captain of Domain — Android Development",
  org: "UptoSkills",
  period: "January 2026 – April 2026",
  duration: "3 months",
  highlights: [
    "Android development delivery and domain ownership",
    "Leadership, responsibility, and accountability for outcomes",
    "Collaboration with the team and professional growth in a product setting",
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

const btnClass =
  "inline-flex flex-1 items-center justify-center border border-white/25 bg-white/5 px-5 py-3.5 font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-white transition-colors hover:border-white/35 hover:bg-white/10 sm:min-w-[14rem] sm:flex-none";

const previewBtnClass =
  "inline-flex flex-1 items-center justify-center border border-white/15 bg-transparent px-5 py-3.5 font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-white/90 transition-colors hover:border-white/28 hover:bg-white/[0.07] sm:min-w-[12rem] sm:flex-none";

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
            Experience & certificates
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-display-contrast">
            Internships & verified credentials
          </h2>
          <p className="mt-4 font-sans font-medium text-white/85">
            Formal roles and issued documents you can download for
            applications, interviews, or your records.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="glass-dark glass-dark-hover mx-auto max-w-3xl rounded-2xl border-white/15 p-8 sm:p-10"
        >
          <h3 className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
            {experience.role}
          </h3>
          <p className="mt-3 font-sans text-sm font-medium text-white/80">
            {experience.org} · {experience.period} · {experience.duration}
          </p>
          <ul className="mt-8 space-y-2.5 border-t border-white/10 pt-8 font-sans text-sm leading-relaxed text-white/75">
            {experience.highlights.map((line) => (
              <li key={line} className="flex gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8">
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
      </div>
    </section>
  );
}
