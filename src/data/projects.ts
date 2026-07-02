export type Project = {
  title: string;
  description: string;
  stack: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
  tags?: string[];
};

export const projects: Project[] = [
  // ── AI / ML Projects (featured first) ────────────────────────────────────
  {
    title: "Real-Time Emotion Detector",
    description:
      "CNN trained from scratch on the FER-2013 dataset (35,000 labelled facial images) that detects 7 emotions — Angry, Disgust, Fear, Happy, Neutral, Sad, and Surprise — live from a webcam feed with bounding boxes and per-emotion confidence bars rendered in real time. Pre-trained weights included so you can clone and run instantly.",
    stack: "Python · TensorFlow/Keras · OpenCV · NumPy · Haar Cascades",
    liveUrl: "https://github.com/saiteja00743/Face-Emotion-Detection",
    githubUrl: "https://github.com/saiteja00743/Face-Emotion-Detection",
    image: "/previews/emotion-detector.png",
    imageAlt: "Real-time emotion detector — CNN on FER-2013",
    tags: ["Deep Learning", "Computer Vision", "CNN", "OpenCV"],
  },
  {
    title: "BitSense AI — Bitcoin Analytics Platform",
    description:
      "AI-powered Bitcoin analytics platform combining real-time market data, machine learning forecasting, and a conversational AI assistant. Features a live market dashboard, price prediction engine, crypto news integration, and prediction history — making complex financial data easier to interpret without providing financial advice.",
    stack: "React · Vite · FastAPI · Python · IBM AutoAI · OpenAI · CoinGecko API",
    liveUrl: "https://github.com/saiteja00743/AI-Powered-Bitcoin-Price-Forecasting-Market-Intelligence",
    githubUrl: "https://github.com/saiteja00743/AI-Powered-Bitcoin-Price-Forecasting-Market-Intelligence",
    image: "/previews/bitsense-ai.png",
    imageAlt: "BitSense AI — Bitcoin analytics platform",
    tags: ["ML Forecasting", "FinTech", "FastAPI", "React"],
  },
  {
    title: "Intelligent Candidate Discovery Engine",
    description:
      "AI-driven recruitment platform that replaces simple keyword filtering with multi-signal candidate ranking. Analyses skills, career trajectory, and behavioural signals; detects keyword stuffing; auto-classifies candidates into S/A/B/C tiers; and exports results as CSV with AI-generated reasoning — making hiring more accurate and fair.",
    stack: "Python · Gradio · Docker · IBM Cloud Code Engine · AI Scoring Engine",
    liveUrl: "https://github.com/saiteja00743/AI-Powered-Talent-Intelligence",
    githubUrl: "https://github.com/saiteja00743/AI-Powered-Talent-Intelligence",
    image: "/previews/candidate-discovery.png",
    imageAlt: "Intelligent Candidate Discovery Engine",
    tags: ["AI Ranking", "Explainable AI", "IBM Cloud", "Docker"],
  },
  {
    title: "Offline AI Voice Cloning",
    description:
      "Desktop application that clones a person's voice from a short audio sample and generates natural-sounding speech entirely offline — no cloud services or paid APIs required. Supports multiple languages including English and Telugu, and features a polished GUI for saving and replaying generated audio.",
    stack: "Python · Coqui XTTS-v2 · PyTorch · PySide6 · Librosa · SoundDevice · NumPy",
    liveUrl: "https://github.com/saiteja00743/My-Voice-Agent-Local-",
    githubUrl: "https://github.com/saiteja00743/My-Voice-Agent-Local-",
    image: "/previews/voice-cloning.png",
    imageAlt: "Offline AI Voice Cloning desktop app",
    tags: ["Voice Cloning", "TTS", "Generative AI", "PyTorch"],
  },
  {
    title: "IR Image Colorization & Enhancement — ISRO BAH 2026",
    description:
      "Deep learning pipeline built for ISRO's Bhartiya Antriksh Hackathon 2026 that transforms raw Thermal Infrared (TIR) satellite imagery into high-resolution, colorized images. Enables Wildfire Monitoring, Urban Heat Island Analysis, Volcanic Activity Detection, and Ice & Glacier Monitoring through an end-to-end geospatial AI pipeline.",
    stack: "Python · PyTorch · GDAL · Rasterio · NumPy · Gradio · Landsat 9",
    liveUrl: "https://github.com/saiteja00743",
    githubUrl: "https://lnkd.in/g_WwwAvz",
    image: "/previews/ir-colorization.png",
    imageAlt: "IR Image Colorization for ISRO BAH 2026",
    tags: ["Satellite Imagery", "Remote Sensing", "Geospatial AI", "ISRO"],
  },
  {
    title: "AI Agents Capstone — Kaggle Challenge",
    description:
      "Capstone project for the Kaggle AI Agent Challenge featuring two production-inspired multi-agent systems: a Startup Validator Agent (market research, competitor analysis, risk assessment) and an enhanced Candidate Discovery Engine. Built with LangGraph orchestration, Groq LLaMA 3.3, Tavily web search, and real-time LLM decision-making.",
    stack: "Python · LangGraph · Groq (LLaMA 3.3) · Tavily · Gradio · Google Gemini · OpenAI",
    liveUrl: "https://github.com/saiteja00743/Kaggle-capstone-Project-Ai-Agnet-",
    githubUrl: "https://github.com/saiteja00743/Kaggle-capstone-Project-Ai-Agnet-",
    image: "/previews/ai-agents-capstone.png",
    imageAlt: "AI Agents Capstone — Kaggle Challenge",
    tags: ["AI Agents", "LangGraph", "LLM", "Multi-Agent"],
  },
  {
    title: "Crime Vision — AI Crime Analytics Platform",
    description:
      "AI-powered crime analytics and prediction platform built for the Zoho Datathon. Features an interactive analytics dashboard, crime hotspot visualisation, ML-based crime prediction, trend forecasting, and AI-powered reporting — transforming raw crime data into actionable, data-driven insights for smarter decision-making.",
    stack: "Python · FastAPI · React.js · Scikit-learn · XGBoost · PostgreSQL · Tailwind CSS",
    liveUrl: "https://github.com/saiteja00743/Zoho-Datathon-2026-Crime-VIsion-Hackathon-",
    githubUrl: "https://github.com/saiteja00743/Zoho-Datathon-2026-Crime-VIsion-Hackathon-",
    image: "/previews/crime-vision.png",
    imageAlt: "Crime Vision — AI crime analytics platform",
    tags: ["Predictive ML", "Data Analytics", "FastAPI", "XGBoost"],
  },

  // ── Previous Projects ─────────────────────────────────────────────────────
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
    title: "AI Cost Tracker",
    description:
      "A SaaS tool that detects overlapping AI subscriptions and shows teams where they're silently wasting money. Features a smart audit engine for plan optimization, Claude 3.5 Haiku-powered insights, Resend for automated reports, and 100% test coverage with Vitest.",
    stack: "Next.js · TypeScript · Claude 3.5 Haiku · Resend · Vitest · Vercel",
    liveUrl: "https://aicosttracker-nu.vercel.app/",
    githubUrl: "https://github.com/saiteja00743/AICostTracker",
    image: "/previews/ai-cost-tracker.png",
    imageAlt: "AI Cost Tracker — Stop Overpaying for AI Tools",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive, pixel-refined streaming landing experience built with disciplined layout and motion-ready structure.",
    stack: "HTML · Tailwind CSS · JavaScript",
    liveUrl: "https://saiteja00743.github.io/MyNetflix-clone/",
    githubUrl: "https://github.com/saiteja00743/MyNetflix-clone",
    image: "/previews/netflix-clone.png",
    imageAlt: "Netflix Clone preview",
  },
  {
    title: "AI Image & Prompt Generator",
    description:
      "Editorial interface for generating imagery and prompts through curated AI integrations—clean inputs, elevated output.",
    stack: "Tailwind CSS · JavaScript · AI APIs",
    liveUrl: "https://saiteja00743.github.io/image-generator/",
    githubUrl: "https://github.com/saiteja00743/image-generator",
    image: "/previews/ai-image-generator.png",
    imageAlt: "AI Image Generator preview",
  },
  {
    title: "Advanced To-Do List",
    description:
      "Task composition with persistence and quiet hierarchy—function disguised as calm product design.",
    stack: "HTML · CSS · JavaScript",
    liveUrl: "https://saiteja00743.github.io/My_To-Do/",
    githubUrl: "https://github.com/saiteja00743/My_To-Do",
    image: "/previews/todo-list.png",
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
    image: "/previews/smart-agriculture.png",
    imageAlt: "Smart agriculture preview",
  },
  {
    title: "AI Job Tracker & Smart Match",
    description:
      "Full-stack application routing for opportunities—with semantic resume pairing orchestrated through AI.",
    stack: "MERN · OpenAI · MongoDB · Railway",
    liveUrl: "https://aijobfinder-production-5af2.up.railway.app/",
    githubUrl: "https://github.com/saiteja00743/Ai_job_finder",
    image: "/previews/ai-job-tracker.png",
    imageAlt: "AI Job Tracker preview",
  },
  {
    title: "Sai — Student Learning Dashboard",
    description:
      "A premium, production-ready Student Learning Dashboard built with performance-first patterns. Features Server/Client Component Split for zero layout shift, GPU-accelerated animations, custom CLS-free loading skeletons, and a smart Supabase backend with graceful fallback for RLS policy restrictions.",
    stack:
      "Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion · Supabase · Lucide React",
    liveUrl: "https://next-gen-learning-dashboard-psi.vercel.app/dashboard",
    githubUrl: "https://github.com/saiteja00743/Next-Gen-Learning-Dashboard",
    image: "/previews/sai-dashboard.png",
    imageAlt: "Sai Student Learning Dashboard preview",
  },
];
