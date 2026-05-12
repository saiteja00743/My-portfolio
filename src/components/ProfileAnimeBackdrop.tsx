import { motion } from "framer-motion";

/** Soft luminous drift behind the portrait */
export function ProfileAnimeGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      aria-hidden
    >
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[45%] w-[55%] rounded-full bg-white/[0.07] blur-[48px]"
        animate={{
          x: [0, 24, -12, 0],
          y: [0, 18, 8, 0],
          opacity: [0.35, 0.55, 0.4, 0.35],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] bottom-[5%] h-[40%] w-[50%] rounded-full bg-white/[0.06] blur-[56px]"
        animate={{
          x: [0, -20, 14, 0],
          y: [0, -14, 6, 0],
          opacity: [0.22, 0.42, 0.28, 0.22],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute left-[25%] top-[40%] h-[25%] w-[35%] rounded-full bg-white/[0.04] blur-[40px]"
        animate={{
          scale: [1, 1.08, 0.96, 1],
          opacity: [0.2, 0.35, 0.25, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/** Falling petals & rising sparks — use inside a blend overlay above the photo */
export function ProfileAnimeFloaters() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
      aria-hidden
    >
      {PETALS.map((p) => (
        <motion.div
          key={`petal-${p.i}`}
          className="absolute rounded-[60%_40%_60%_40%] bg-white/[0.28] shadow-[0_0_14px_rgba(255,255,255,0.1)]"
          style={{
            width: p.w,
            height: p.h,
            left: `${p.left}%`,
            top: "-12%",
          }}
          animate={{
            y: ["0%", "118%"],
            x: [0, p.drift, -p.drift * 0.6, p.drift * 0.4],
            rotate: [p.rot0, p.rot0 + 260],
            opacity: [0, 0.9, 0.7, 0.28, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
      {SPARKS.map((s) => (
        <motion.div
          key={`spark-${s.i}`}
          className="absolute rounded-full bg-white/[0.45] blur-[0.5px]"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            bottom: "-4%",
          }}
          animate={{
            y: [0, -340],
            x: [0, s.wave, -s.wave * 0.5],
            opacity: [0, 1, 0.85, 0.45, 0],
            scale: [0.55, 1, 1, 0.75],
          }}
          transition={{
            duration: s.dur,
            repeat: Infinity,
            ease: "easeOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

const PETALS = [
  { i: 0, w: 10, h: 14, left: 8, drift: 28, dur: 14, delay: 0, rot0: 12 },
  { i: 1, w: 8, h: 11, left: 22, drift: -22, dur: 17, delay: 2.2, rot0: -8 },
  { i: 2, w: 12, h: 16, left: 38, drift: 34, dur: 15, delay: 1.1, rot0: 40 },
  { i: 3, w: 9, h: 13, left: 52, drift: -18, dur: 16, delay: 3.5, rot0: -20 },
  { i: 4, w: 11, h: 15, left: 68, drift: 24, dur: 18, delay: 0.6, rot0: 55 },
  { i: 5, w: 7, h: 10, left: 82, drift: -30, dur: 13, delay: 4.2, rot0: 5 },
  { i: 6, w: 9, h: 12, left: 15, drift: 20, dur: 19, delay: 5, rot0: -35 },
  { i: 7, w: 10, h: 14, left: 45, drift: -26, dur: 14.5, delay: 6.8, rot0: 22 },
];

const SPARKS = [
  { i: 0, size: 3, left: 12, dur: 9, delay: 0, wave: 14 },
  { i: 1, size: 2, left: 28, dur: 11, delay: 1.5, wave: -10 },
  { i: 2, size: 4, left: 44, dur: 8.5, delay: 0.8, wave: 18 },
  { i: 3, size: 2, left: 58, dur: 10, delay: 3.2, wave: -12 },
  { i: 4, size: 3, left: 72, dur: 9.5, delay: 2.1, wave: 16 },
  { i: 5, size: 2, left: 88, dur: 12, delay: 4.5, wave: -8 },
  { i: 6, size: 3, left: 35, dur: 10.5, delay: 5.5, wave: 11 },
  { i: 7, size: 2, left: 63, dur: 11.5, delay: 6.2, wave: -14 },
];
