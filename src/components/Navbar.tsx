import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
  { href: "https://teja-agency-startup.vercel.app/", label: "Agency ↗", external: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[3.75rem] max-w-6xl items-center justify-between px-5 md:h-[4.25rem] sm:px-8">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-[0.22em] text-white sm:text-2xl text-display-contrast"
          onClick={() => setOpen(false)}
        >
          GST
        </a>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className={`font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial transition-all duration-300 ${
                  l.external
                    ? "rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-white hover:border-white hover:bg-white/20 shadow-sm"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-white transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-xl md:hidden"
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 pt-20">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: open ? 1 : 0,
                y: open ? 0 : 12,
              }}
              transition={{ delay: open ? 0.05 * i : 0, duration: 0.35 }}
              className={`font-display text-2xl font-semibold text-display-contrast ${
                l.external ? "text-amber-300 underline underline-offset-4" : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
