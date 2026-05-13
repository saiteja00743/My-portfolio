import { motion } from "framer-motion";

const social = [
  {
    label: "GitHub",
    href: "https://github.com/saiteja00743",
    icon: IconGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gajavelli-sai-teja-509266246",
    icon: IconLinkedIn,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sai_teja_gajavelli_007/",
    icon: IconInstagram,
  },
  {
    label: "Email",
    href: "mailto:gajavellisaiteja123@gmail.com",
    icon: IconMail,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Sai_Teja_gajavelli__/",
    icon: IconLeetCode,
  },
];

export function SocialFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black px-6 py-16 sm:px-10">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="font-display text-2xl font-semibold tracking-[0.14em] text-white text-display-contrast"
        >
          GAJAVELLI SAI TEJA
        </motion.div>

        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {social.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                s.href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              aria-label={s.label}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="glass-dark glass-dark-hover flex h-14 w-14 items-center justify-center rounded-full border-white/20 text-white transition-colors hover:text-white"
            >
              <s.icon />
            </motion.a>
          ))}
        </nav>

        <p className="font-sans text-[0.6875rem] font-medium uppercase tracking-editorial text-white/65">
          © {new Date().getFullYear()} · Aspiring Student License — Learning, Building & Growing
        </p>
      </div>
    </footer>
  );
}

function IconGithub() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.1c.5-1 1.8-2.4 3.8-2.4 4.1 0 4.8 2.7 4.8 6.2V23h-4v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4v8h-4V8z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
    >
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function IconLeetCode() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.102 17.93l8.614-16.038h-4.46l-6.77 12.628-2.134-4.11L14.46 2.5H9.998L6.87 11.71l2.134 4.11-4.77 7.918H.075l8.644-16.038 2.134 4.11 5.249 10.837z" />
    </svg>
  );
}
