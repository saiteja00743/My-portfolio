import { motion } from "framer-motion";
import type { FormEvent } from "react";

/** Matches prior portfolio WhatsApp deep link */
const WA_NUMBER = "8465996338";

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <section id="contact" className="relative bg-neutral-50 px-6 py-28 text-neutral-950 sm:px-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[380px] bg-[radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.04),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start"
        >
          <div>
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-neutral-700">
              Inquiry
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight text-neutral-950">
              Begin a conversation.
            </h2>
            <p className="mt-6 max-w-md font-sans font-medium leading-relaxed text-neutral-800">
              Share scope, timeline, or collaboration intent—responses route through a direct channel for clarity.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="glass-light glass-light-hover rounded-2xl border-black/[0.08] p-8 sm:p-10"
          >
            <label className="block">
              <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-neutral-700">
                Name
              </span>
              <input
                name="name"
                required
                autoComplete="name"
                className="mt-3 w-full border border-neutral-400/40 bg-white/90 px-4 py-3.5 font-sans font-medium text-neutral-950 placeholder:text-neutral-500 outline-none backdrop-blur-md transition-[border,background] duration-300 focus:border-neutral-600 focus:bg-white"
                placeholder="Your name"
              />
            </label>
            <label className="mt-8 block">
              <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-neutral-700">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-3 w-full border border-neutral-400/40 bg-white/90 px-4 py-3.5 font-sans font-medium text-neutral-950 placeholder:text-neutral-500 outline-none backdrop-blur-md transition-[border,background] duration-300 focus:border-neutral-600 focus:bg-white"
                placeholder="you@domain.com"
              />
            </label>
            <label className="mt-8 block">
              <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.35em] text-neutral-700">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-3 w-full resize-y border border-neutral-400/40 bg-white/90 px-4 py-3.5 font-sans font-medium text-neutral-950 placeholder:text-neutral-500 outline-none backdrop-blur-md transition-[border,background] duration-300 focus:border-neutral-600 focus:bg-white"
                placeholder="Tell me about your project…"
              />
            </label>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-10 w-full border border-neutral-950 bg-neutral-950 py-4 font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-white transition-colors duration-500 hover:bg-white hover:text-neutral-950"
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
