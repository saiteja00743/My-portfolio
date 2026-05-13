import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  ProfileAnimeFloaters,
  ProfileAnimeGlow,
} from "./ProfileAnimeBackdrop";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-24 md:px-6 md:pb-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 grain" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.03),transparent_45%)] animate-shimmer" />

      <motion.div
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center text-center"
      >
        <div className="relative mb-8 md:mb-12">
          <div
            className="absolute -inset-4 rounded-[2rem] bg-white/[0.03] blur-xl md:-inset-6 md:blur-2xl"
            aria-hidden
          />
          <div className="glass-dark relative overflow-hidden rounded-[1.5rem] border-white/15 p-0.5 shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:rounded-[1.75rem] md:p-1">
            <div className="relative aspect-square w-[min(52vw,200px)] overflow-hidden rounded-[1.15rem] bg-neutral-950 sm:w-[240px] md:w-[320px] md:rounded-[1.35rem]">
              {!reduceMotion && <ProfileAnimeGlow />}
              {imgOk ? (
                <img
                  src="/profile.png"
                  alt="Gajavelli Sai Teja"
                  className="relative z-[1] h-full w-full object-cover grayscale contrast-[1.12] brightness-[1.02]"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="relative z-[1] flex h-full w-full items-center justify-center bg-neutral-900 font-display text-5xl font-semibold tracking-widest text-white/85">
                  GST
                </div>
              )}
              {!reduceMotion && (
                <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden rounded-[inherit] mix-blend-soft-light opacity-[0.78]">
                  <ProfileAnimeFloaters />
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>

        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(1.6rem,4.2vw,2.35rem)] font-semibold leading-[1.06] tracking-[0.02em] text-white text-balance text-display-contrast md:text-[clamp(2.25rem,6vw,4.25rem)] md:leading-[1.05]"
        >
          Gajavelli Sai Teja
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-xl font-sans text-[0.625rem] font-semibold uppercase tracking-editorial text-white/85 md:mt-6 md:text-[0.75rem]"
        >
          Full Stack Developer · AI Explorer
        </motion.p>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-[min(100%,18rem)] font-display text-sm font-medium italic leading-relaxed text-white/95 text-display-contrast md:mt-8 md:max-w-md md:text-2xl"
        >
          “Nothing comes so easy…”
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap items-center justify-center gap-3 md:mt-14 md:gap-4"
        >
          <a
            href="#projects"
            className="glass-dark glass-dark-hover inline-flex min-w-[9.5rem] items-center justify-center border-white/25 px-5 py-2.5 font-sans text-[0.625rem] font-semibold uppercase tracking-editorial text-white md:min-w-[11rem] md:px-8 md:py-3.5 md:text-[0.6875rem]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex min-w-[9.5rem] items-center justify-center border border-white bg-white px-5 py-2.5 font-sans text-[0.625rem] font-semibold uppercase tracking-editorial text-black transition-all duration-500 ease-luxury hover:bg-transparent hover:text-white md:min-w-[11rem] md:px-8 md:py-3.5 md:text-[0.6875rem]"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 md:bottom-10 md:gap-2"
        aria-hidden
      >
        <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-white/60">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-white/65 to-transparent" />
      </motion.div>
    </section>
  );
}
