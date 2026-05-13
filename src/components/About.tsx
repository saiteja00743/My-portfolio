import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-50 px-6 py-28 text-neutral-950 sm:px-10"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-black/[0.03] blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-end">
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
            Full stack, AI, and problem solving.
          </h2>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-light glass-light-hover rounded-2xl border-black/10 p-8 sm:p-10"
        >
          <div className="space-y-5 font-sans text-lg font-medium leading-[1.85] text-neutral-800 md:text-xl">
            <p>
              Final-year{" "}
              <span className="font-semibold text-neutral-950">
                B.Sc. (Hons) Computer Science
              </span>{" "}
              student at Kakatiya Government College—focused on full stack
              engineering and artificial intelligence.
            </p>
            <p>
              I build with restraint, clarity, and intention—treating every
              project as a product, where performance, design, and user
              experience matter equally.
            </p>
            <p>
              Crafting systems that are minimal in appearance, powerful in
              function, and precise in execution.
            </p>
          </div>
          <div className="mt-10 grid gap-6 border-t border-black/10 pt-10 sm:grid-cols-2">
            <div>
              <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-neutral-600">
                Focus
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-neutral-950">
                Full stack · AI · Problem solving
              </p>
            </div>
            <div>
              <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-neutral-600">
                Philosophy
              </p>
              <p className="mt-2 font-display text-2xl font-medium italic text-neutral-900">
                Nothing comes so easy…
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
