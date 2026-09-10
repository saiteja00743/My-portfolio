import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { projects, Project } from "../data/projects";

const CATEGORIES = [
  "All",
  "AI & ML",
  "Full Stack",
  "Agency & Client",
  "Data & FinTech",
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category filter logic
      let matchesCategory = true;
      if (selectedCategory !== "All") {
        const text = (
          p.title +
          " " +
          p.description +
          " " +
          p.stack +
          " " +
          (p.tags?.join(" ") || "")
        ).toLowerCase();

        if (selectedCategory === "AI & ML") {
          matchesCategory =
            text.includes("ai") ||
            text.includes("ml") ||
            text.includes("deep learning") ||
            text.includes("voice") ||
            text.includes("vision") ||
            text.includes("model") ||
            text.includes("cnn");
        } else if (selectedCategory === "Full Stack") {
          matchesCategory =
            text.includes("full stack") ||
            text.includes("react") ||
            text.includes("next.js") ||
            text.includes("fastapi") ||
            text.includes("mern") ||
            text.includes("dashboard");
        } else if (selectedCategory === "Agency & Client") {
          matchesCategory =
            text.includes("agency") ||
            text.includes("startup") ||
            text.includes("client") ||
            text.includes("saas");
        } else if (selectedCategory === "Data & FinTech") {
          matchesCategory =
            text.includes("bitcoin") ||
            text.includes("fintech") ||
            text.includes("data") ||
            text.includes("analytics") ||
            text.includes("forecasting") ||
            text.includes("xgboost");
        }
      }

      // Search query filter logic
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const searchables = (
          p.title +
          " " +
          p.description +
          " " +
          p.stack +
          " " +
          (p.tags?.join(" ") || "")
        ).toLowerCase();
        matchesSearch = searchables.includes(q);
      }

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      className="relative bg-neutral-50 px-6 py-28 text-neutral-950 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
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

        {/* Filter Controls Bar */}
        <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-b border-neutral-200 pb-8">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative rounded-full px-4 py-1.5 font-sans text-xs font-semibold tracking-wider transition-all duration-300 ${
                    active
                      ? "bg-neutral-950 text-white shadow-md"
                      : "border border-neutral-300 bg-white/60 text-neutral-700 hover:border-neutral-950 hover:text-neutral-950"
                  }`}
                >
                  {cat}
                  {active && (
                    <motion.div
                      layoutId="activeFilterDot"
                      className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-neutral-950"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full sm:w-72">
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              aria-label="Search projects or technology stack"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or stack..."
              className="w-full rounded-full border border-neutral-300 bg-white/80 py-2 pl-10 pr-9 text-xs font-sans font-medium text-neutral-900 placeholder-neutral-400 backdrop-blur-sm transition-all focus:border-neutral-950 focus:outline-none focus:ring-1 focus:ring-neutral-950"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-950"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Project List */}
        <motion.div layout className="flex flex-col gap-14 lg:gap-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((p, index) => (
                <ProjectRow key={p.title} project={p} index={index} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200 text-neutral-500 font-display text-2xl font-bold">
                  ?
                </div>
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  No projects match your filter
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Try adjusting your search query or switching categories.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-6 rounded-full bg-neutral-950 px-6 py-2 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-neutral-800"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [imgOk, setImgOk] = useState(true);
  const reverse = index % 2 === 1;
  const hasTags = project.tags && project.tags.length > 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={`${reverse ? "lg:[direction:ltr]" : ""}`}>
        <div className="glass-light glass-light-hover group overflow-hidden rounded-2xl border-black/[0.09]">
          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
            {imgOk ? (
              <img
                src={project.image}
                loading="lazy"
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

        {hasTags && (
          <div className="flex flex-wrap gap-2">
            {project.tags!.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-neutral-950/10 bg-neutral-950/[0.05] px-3 py-0.5 font-sans text-[0.625rem] font-semibold uppercase tracking-widest text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

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
