// ─── Portfolio Data Layer ────────────────────────────────────────────────────
// Single source of truth for all personal content.
// Update here and it propagates across the entire portfolio.

export const PERSONAL = {
  name: "Mukesh Pandi",
  alias: "Mukizz",
  tagline: "Full Stack · AI · Product Builder",
  roles: ["Full Stack Developer", "AI Product Builder", "Startup Founder"],
  bio: "Building ambitious products at the intersection of web and AI.",
  email: "mukeshpandi0701@gmail.com",
  phone: "+91 9042784340",
  location: "Coimbatore, Tamil Nadu",
  website: "invenzoai.in",
  
  // Hero composition elements
  currentFocus: {
    label: "Now Building",
    project: "Shipzilla AI",
    description: "Next-gen AI shipping optimization platform",
  },
  status: {
    state: "Building",
    available: true,
  },
  
  links: {
    github: "https://github.com/mukeshpandi0701-byte",
    linkedin: "https://linkedin.com/in/mukesh-pandi-a269bb396",
  },
} as const;

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering — Computer Science",
    institution: "Coimbatore Institute of Technology",
    period: "2024 – 2028",
    gpa: "8.59 / 10",
  },
] as const;

export const TECH_SKILLS = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  web: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  backend: ["Supabase", "Node.js"],
  tools: ["Git", "GitHub", "VS Code", "Lovable Cloud"],
  exploring: ["AI/LLM Integration", "Framer Motion", "shadcn/ui"],
} as const;

export const PROJECTS = [
  {
    id: "gradguard",
    title: "GradGuard",
    description:
      "A dedicated platform for uploading, calculating, and monitoring student academic performance in colleges. Features a clean workflow with responsive UI.",
    tags: ["React", "JavaScript", "CSS", "Lovable Cloud"],
    highlights: [
      "Built responsive UI for academic management",
      "Implemented performance calculation & monitoring",
      "Clean workflow with real-time updates",
    ],
    status: "Shipped",
    gradient: "from-cyan-500/20 to-gold-500/10",
  },
  {
    id: "classygenz",
    title: "ClassyGenz",
    description:
      "A smart classroom platform with all tools integrated inside — eliminating the need for external applications. Full classroom suite in one product.",
    tags: ["React", "Supabase"],
    highlights: [
      "Integrated backend services using Supabase",
      "Smart classroom toolset in one product",
      "Focused on accessibility and usability",
    ],
    status: "Shipped",
    gradient: "from-amber-500/20 to-cyan-500/10",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "Ideathon'25",
    description: "Presented idea LearnX at CIET, Coimbatore",
    icon: "🏆",
  },
  {
    title: "LLM Workshop",
    description: "Workshop on Large Language Models by Lyzr.ai at KPR Institutions",
    icon: "🤖",
  },
  {
    title: "Next Gen Buildathon",
    description: "Presented product at Next Gen Product Buildathon by IM Product Leader & AI Geeks",
    icon: "🚀",
  },
] as const;

export const CERTIFICATIONS = [
  { title: "Basics of Python", issuer: "Infosys Springboard" },
  { title: "Java (Basics)", issuer: "HackerRank" },
  { title: "Introduction to Artificial Intelligence", issuer: "Simplilearn" },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;
