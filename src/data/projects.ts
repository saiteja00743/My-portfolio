export type Project = {
  title: string;
  description: string;
  stack: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "Aurora — Women's Safety Platform",
    description:
      "Final-year academic full-stack build: discreet legal guidance through an AI legal assistant, compassionate AI therapy chat with voice support, confidential complaint filing with authority notifications, and an admin dashboard—within a privacy-first interface.",
    stack:
      "React · Vite · Tailwind CSS · FastAPI · SQLite · OpenRouter API · Web3Forms",
    liveUrl: "https://aurora-women-saftey-xap1.vercel.app/",
    githubUrl: "https://github.com/saiteja00743/Aurora-women-Saftey",
    image: "/aurora-preview.png",
    imageAlt: "Aurora women safety platform illustration",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive, pixel-refined streaming landing experience built with disciplined layout and motion-ready structure.",
    stack: "HTML · Tailwind CSS · JavaScript",
    liveUrl: "https://saiteja00743.github.io/MyNetflix-clone/",
    githubUrl: "https://github.com/saiteja00743/MyNetflix-clone",
    image: "/Netflix_icon.svg",
    imageAlt: "Netflix Clone preview",
  },
  {
    title: "AI Image & Prompt Generator",
    description:
      "Editorial interface for generating imagery and prompts through curated AI integrations—clean inputs, elevated output.",
    stack: "Tailwind CSS · JavaScript · AI APIs",
    liveUrl: "https://saiteja00743.github.io/image-generator/",
    githubUrl: "https://github.com/saiteja00743/image-generator",
    image: "/imagegenrotor.png",
    imageAlt: "AI Image Generator preview",
  },
  {
    title: "Advanced To-Do List",
    description:
      "Task composition with persistence and quiet hierarchy—function disguised as calm product design.",
    stack: "HTML · CSS · JavaScript",
    liveUrl: "https://saiteja00743.github.io/My_To-Do/",
    githubUrl: "https://github.com/saiteja00743/My_To-Do",
    image: "/todo.jpg",
    imageAlt: "To-Do application preview",
  },
  {
    title: "AI Powered Smart Agriculture",
    description:
      "Forecast-forward tooling for growers—weather intelligence and crop guidance distilled into a composed dashboard.",
    stack: "Next.js · AI · Vercel",
    liveUrl: "https://a-smart-agriculture-an-ai-powered-s.vercel.app/",
    githubUrl:
      "https://github.com/saiteja00743/A-Smart-Agriculture-An-AI-Powered-System-",
    image: "/smartagri.png",
    imageAlt: "Smart agriculture preview",
  },
  {
    title: "AI Job Tracker & Smart Match",
    description:
      "Full-stack application routing for opportunities—with semantic resume pairing orchestrated through AI.",
    stack: "MERN · OpenAI · MongoDB · Railway",
    liveUrl: "https://aijobfinder-production-5af2.up.railway.app/",
    githubUrl: "https://github.com/saiteja00743/Ai_job_finder",
    image: "/Aijobs.png",
    imageAlt: "AI Job Tracker preview",
  },
];
