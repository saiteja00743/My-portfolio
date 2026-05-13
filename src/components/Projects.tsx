import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative bg-neutral-50 px-6 py-28 text-neutral-950 sm:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-neutral-700">
              My projects
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight text-neutral-950 text-balance">
              My projects and professional self work
            </h2>
          </div>
          <p className="max-w-md font-sans font-medium text-neutral-800 lg:text-right">
            Course work, personal builds, and practice I treat like real
            products—shipped, documented, and always learning.
          </p>
        </motion.div>

        <div className="flex flex-col gap-14 lg:gap-20">
          {projects.map((p, index) => (
            <ProjectRow key={p.title} project={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [imgOk, setImgOk] = useState(true);
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <div className={`${reverse ? "lg:[direction:ltr]" : ""}`}>
        <div className="glass-light glass-light-hover group overflow-hidden rounded-2xl border-black/[0.09]">
          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
            {imgOk ? (
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-luxury group-hover:scale-[1.03] group-hover:grayscale-0"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-neutral-200 font-display text-3xl font-semibold tracking-[0.2em] text-neutral-600">
                Preview
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.06] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </div>

      <div className={`space-y-6 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-neutral-600">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-display text-3xl font-semibold md:text-4xl text-neutral-950">
          {project.title}
        </h3>
        <p className="max-w-lg font-sans font-medium leading-relaxed text-neutral-800">
          {project.description}
        </p>
        <p className="font-sans text-sm font-semibold tracking-wide text-neutral-700">
          {project.stack}
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-light glass-light-hover inline-flex items-center justify-center px-8 py-3 font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-neutral-950"
          >
            Live Preview
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-neutral-950 px-8 py-3 font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-neutral-950 transition-all duration-500 ease-luxury hover:bg-neutral-950 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
