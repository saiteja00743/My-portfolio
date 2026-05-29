import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "ai-cloud" | "dev-systems" | "academic";
  image: string;
  description: string;
  icon: "brain" | "cloud" | "terminal" | "robot" | "prompt" | "android" | "graduate" | "award";
}

const certificatesData: Certificate[] = [
  {
    id: "anthropic-agent-skills",
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "2026",
    category: "ai-cloud",
    image: "/certificates/Screenshot_2026-05-28-19-20-06-57_254de13a4bc8758c9908fff1f73e3725.jpg",
    description: "Completed the training on Anthropic's Agentic workflows, prompt chaining, tool use, and advanced agent skills.",
    icon: "brain",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "April 04, 2026",
    category: "ai-cloud",
    image: "/certificates/Screenshot_2026-05-28-19-20-19-14_254de13a4bc8758c9908fff1f73e3725.jpg",
    description: "Foundational understanding of AWS cloud services, architecture, security, compliance, and billing models.",
    icon: "cloud",
  },
  {
    id: "sap-ai-fundamentals",
    title: "Introducing AI Fundamentals",
    issuer: "SAP Learning",
    date: "May 11, 2026",
    category: "ai-cloud",
    image: "/certificates/Screenshot_2026-05-28-19-21-35-66_254de13a4bc8758c9908fff1f73e3725.jpg",
    description: "Verified badge for machine learning, deep learning, generative AI, and responsible AI implementation in business ecosystems.",
    icon: "award",
  },
  {
    id: "google-prompt-pro",
    title: "Start Writing Prompts like a Pro",
    issuer: "Google (via Coursera)",
    date: "May 28, 2026",
    category: "ai-cloud",
    image: "/certificates/Screenshot_2026-05-28-19-22-40-91_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg",
    description: "Learned advanced prompt engineering methodologies, structured inputs, and LLM text generation optimizations authorized by Google.",
    icon: "prompt",
  },
  {
    id: "google-intro-ai",
    title: "Introduction to AI",
    issuer: "Google (via Coursera)",
    date: "May 28, 2026",
    category: "ai-cloud",
    image: "/certificates/Screenshot_2026-05-28-19-29-40-66_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg",
    description: "Foundational course certificate exploring key artificial intelligence concepts, neural networks, and applications.",
    icon: "robot",
  },
  {
    id: "ai-for-techies",
    title: "10X Techies Workshop",
    issuer: "AI for Techies",
    date: "April 26, 2026",
    category: "ai-cloud",
    image: "/certificates/Screenshot_2026-05-28-19-20-47-74_254de13a4bc8758c9908fff1f73e3725.jpg",
    description: "Rapidly shipping applications, automating testing, and running data analysis in minutes using modern AI developer assistants.",
    icon: "terminal",
  },
  {
    id: "iitb-linux-training",
    title: "Linux Training & Utilities",
    issuer: "EduPyramids & SINE, IIT Bombay",
    date: "April 15, 2026",
    category: "dev-systems",
    image: "/certificates/Screenshot_2026-05-28-19-20-34-31_254de13a4bc8758c9908fff1f73e3725.jpg",
    description: "Successfully passed the Linux New test under SWAYAM Plus, covering Linux command-line, file permissions, and administration.",
    icon: "terminal",
  },
  {
    id: "uptoskills-android-cert",
    title: "Android Development Internship",
    issuer: "UptoSkills",
    date: "May 01, 2026",
    category: "dev-systems",
    image: "/certificates/Screenshot_2026-05-28-19-21-00-63_254de13a4bc8758c9908fff1f73e3725.jpg",
    description: "Certificate of Internship Completion as Captain of Domain, leading Android build delivery and application lifecycle tasks.",
    icon: "android",
  },
  {
    id: "uptoskills-android-letter",
    title: "Android Dev Experience Letter",
    issuer: "UptoSkills",
    date: "May 01, 2026",
    category: "dev-systems",
    image: "/certificates/Screenshot_2026-05-28-19-21-18-30_254de13a4bc8758c9908fff1f73e3725.jpg",
    description: "Domain leadership and accountability letter for internship as Captain of Domain - Android Development.",
    icon: "award",
  },
  {
    id: "bsc-degree",
    title: "B.Sc. (Hons) Computer Science",
    issuer: "Kakatiya University",
    date: "December 2024",
    category: "academic",
    image: "/certificates/bsc.png",
    description: "Undergraduate (CBCS) Semester results confirming strong grades (including Statistical Methods and Statistical Methods Lab).",
    icon: "graduate",
  },
  {
    id: "inter-memorandum",
    title: "Intermediate Pass Memorandum",
    issuer: "Telangana State Board of Intermediate Education",
    date: "May 2023",
    category: "academic",
    image: "/certificates/inter.jpg",
    description: "Passed with Grade A (893 marks/1000) with key subjects in Mathematics, Physics, Chemistry.",
    icon: "graduate",
  },
  {
    id: "ssc-certificate",
    title: "Secondary School Certificate",
    issuer: "Board of Secondary Education, Telangana State",
    date: "May 2021",
    category: "academic",
    image: "/certificates/ssctej.jpg",
    description: "Secondary School Certificate passed with a perfect 10.0 Cumulative Grade Point Average (CGPA) with Grade A1 in all subjects.",
    icon: "graduate",
  },
];

const categories = [
  { id: "all", label: "All Credentials" },
  { id: "ai-cloud", label: "AI & Cloud" },
  { id: "dev-systems", label: "Dev & Systems" },
  { id: "academic", label: "Academic" },
] as const;

function CertificateIcon({ type }: { type: Certificate["icon"] }) {
  switch (type) {
    case "brain":
      return (
        <svg className="h-7 w-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 7.5a2.5 2.5 0 114 0m-4 0A5 5 0 004 12v1a5 5 0 005 5h1a5 5 0 005-5v-1a5 5 0 00-5.5-4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5v3M14 13.5H10" />
          <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
        </svg>
      );
    case "cloud":
      return (
        <svg className="h-7 w-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    case "terminal":
      return (
        <svg className="h-7 w-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "robot":
      return (
        <svg className="h-7 w-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 3H8L5 6v12h14V6l-3-3z" />
          <circle cx="9" cy="11" r="1" />
          <circle cx="15" cy="11" r="1" />
          <path strokeLinecap="round" d="M9 15h6M12 3v3M12 18v2M8 20h8" />
        </svg>
      );
    case "prompt":
      return (
        <svg className="h-7 w-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case "android":
      return (
        <svg className="h-7 w-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 18a4 4 0 01-8 0v-4h8v4zM5 8v4M19 8v4M7 6l-1-2M17 6l1-2M6 8h12a2 2 0 012 2v2H4v-2a2 2 0 012-2z" />
        </svg>
      );
    case "graduate":
      return (
        <svg className="h-7 w-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6M3.75 11v6.5M20.25 11v6.5" />
        </svg>
      );
    case "award":
    default:
      return (
        <svg className="h-7 w-7 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.071 4.929a10 10 0 00-14.142 0M12 2v2M12 20v2M4.929 19.071l1.414-1.414M17.657 6.343l1.414-1.414M2 12h2M20 12h2M6.343 17.657l-1.414 1.414M19.071 19.071l-1.414-1.414" />
        </svg>
      );
  }
}

export function CertificationsBadges() {
  const [activeTab, setActiveTab] = useState<"all" | "ai-cloud" | "dev-systems" | "academic">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredData = certificatesData.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  const selectedCertIndex = certificatesData.findIndex((c) => c.id === selectedId);
  const selectedCert = selectedCertIndex !== -1 ? certificatesData[selectedCertIndex] : null;

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    if (selectedId) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  const handleNext = () => {
    if (selectedCertIndex === -1) return;
    const nextIndex = (selectedCertIndex + 1) % certificatesData.length;
    setSelectedId(certificatesData[nextIndex].id);
  };

  const handlePrev = () => {
    if (selectedCertIndex === -1) return;
    const prevIndex = (selectedCertIndex - 1 + certificatesData.length) % certificatesData.length;
    setSelectedId(certificatesData[prevIndex].id);
  };

  return (
    <section id="certificates" className="relative bg-white px-6 py-28 text-black sm:px-10 overflow-hidden">
      {/* Background aesthetics matching the site design system */}
      <div className="pointer-events-none absolute inset-0 grain opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.02),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-editorial text-black/60">
            Verified Credentials
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,3.5rem)] font-semibold text-black">
            Certifications & Badges
          </h2>
          <p className="mt-4 font-sans font-medium text-black/70 leading-relaxed">
            Professional certifications, training badges, and academic achievements representing specialized knowledge in cloud architecture, machine learning, and core systems.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="mb-12 flex flex-wrap gap-2.5 border-b border-black/10 pb-6">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-white" : "text-black/60 hover:text-black"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCertTab"
                    className="absolute inset-0 rounded-full bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((cert) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                key={cert.id}
                onClick={() => setSelectedId(cert.id)}
                whileHover={{ y: -6 }}
                className="bg-white border border-black/10 shadow-sm hover:shadow-md flex flex-col justify-between rounded-2xl p-8 cursor-pointer select-none relative overflow-hidden group transition-shadow duration-300"
              >
                {/* Subtle internal hover glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition-transform duration-500 group-hover:scale-110">
                    <CertificateIcon type={cert.icon} />
                  </div>
                  
                  <span className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.25em] text-black/50">
                    {cert.issuer}
                  </span>
                  
                  <h3 className="mt-2.5 font-display text-xl font-semibold leading-snug text-black group-hover:text-black/80">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-black/8 pt-4">
                  <span className="font-sans text-xs text-black/40">{cert.date}</span>
                  <span className="inline-flex items-center gap-1.5 font-sans text-[0.625rem] font-semibold uppercase tracking-wider text-black/60 transition-colors group-hover:text-black">
                    View
                    <svg
                      className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setSelectedId(null)}
          >
            {/* Modal Navigation & Controls (Stop Propagation to prevent modal close) */}
            <div
              className="relative flex w-full max-w-5xl flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar / Metadata */}
              <div className="flex w-full items-center justify-between border-b border-white/10 pb-4 text-white">
                <div>
                  <span className="font-sans text-[0.6875rem] font-semibold uppercase tracking-wider text-white/60">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close modal"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Main Preview Frame */}
              <div className="relative flex w-full items-center justify-center">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-0 z-10 rounded-full border border-white/10 bg-black/60 p-4 text-white/70 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white md:-left-8"
                  aria-label="Previous certificate"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Image Container with smooth scaling */}
                <motion.div
                  key={selectedCert.id}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-auto max-h-[60vh] overflow-hidden rounded-xl border border-white/15 bg-neutral-900 shadow-2xl md:max-h-[65vh]"
                >
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[60vh] w-auto object-contain md:max-h-[65vh]"
                  />
                </motion.div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-0 z-10 rounded-full border border-white/10 bg-black/60 p-4 text-white/70 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white md:-right-8"
                  aria-label="Next certificate"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Bottom Caption & Download Link */}
              <div className="flex w-full flex-col gap-4 border-t border-white/10 pt-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
                <p className="max-w-2xl font-sans text-sm font-medium text-white/80 leading-relaxed">
                  {selectedCert.description}
                </p>
                <a
                  href={selectedCert.image}
                  download={selectedCert.title.replace(/\s+/g, "_") + "_Certificate"}
                  className="inline-flex items-center justify-center gap-2 border border-white bg-white px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-transparent hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Image
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
