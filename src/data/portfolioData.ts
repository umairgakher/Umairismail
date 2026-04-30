export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: "https://github.com/umairgakher", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/umair-ismail-gakher-5b412623b/", external: true },
];

export const stats = [
  { value: "3+", label: "Years XP" },
  { value: "15+", label: "Total Projects" },
  { value: "40%", label: "Perf. Boost" },
  { value: "AI", label: "AI Specialist" },
];

export const skills = [
  {
    category: "Web & Backend",
    items: ["JavaScript / TypeScript", "MERN Stack / Next.js", "Node.js / Express.js", "PostgreSQL / MongoDB"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    category: "Mobile & AI",
    items: ["React Native / Flutter", "Python / FastAPI", "OpenAI / AI Agents", "Firebase / Cloud"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    category: "Web3 & DevOps",
    items: ["Solidity / Web3.js", "Smart Contracts / EVM", "Rainbow Kit / Reown", "AWS / Docker / CI/CD"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    category: "Integrations & APIs",
    items: ["Stripe Payments", "QuickBooks API", "PayPal & Webhooks", "Auth0 / Firebase Auth"],
    gradient: "from-emerald-500 to-teal-600",
  },
];

export const experiences = [
  {
    role: "Full Stack Developer (MERN)",
    company: "Troon Technologies",
    location: "Islamabad",
    period: "Present",
    points: [
      "Improved DB performance by 40% using indexing, query optimization, and caching.",
      "Delivered 10+ production-grade MERN applications with 99.9% uptime.",
      "Integrated AI-augmented features using OpenAI for intelligent search and automation.",
      "Architected secure APIs with JWT, RBAC, and robust payment flows (Stripe/PayPal).",
      "Developed Web3 dApps integrating Solidity smart contracts with MERN projects.",
    ],
  },
  {
    role: "Mobile App Developer",
    company: "HB House",
    location: "Remote",
    period: "Apr '23 — Present",
    points: [
      "Delivered 5+ production mobile apps across iOS/Android (React Native, Flutter, Kotlin).",
      "Implemented real-time sync and push notifications using Firebase.",
      "Managed app publishing and store compliance for App Store and Google Play.",
      "Collaborated with UI/UX designers for pixel-perfect, responsive mobile interfaces.",
    ],
  },
  {
    role: "Web Developer",
    company: "Devspot",
    location: "Rawalpindi",
    period: "Internship",
    points: [
      "Built dynamic PHP and WordPress websites with custom modular themes.",
      "Converted complex PSD designs into responsive HTML/CSS templates.",
      "Contributed to React-based frontend components during internship.",
    ],
  },
];

export const projects = [
  {
    name: "Silsila",
    description: "Fintech project for distribution, invoice, purchase taxes, and stock management with an AI backend.",
    tags: ["React", "Python", "AI", "Fintech"],
    gradient: "from-cyan-900 to-cyan-500",
    link: "https://silsila-frontend.vercel.app/",
  },
  {
    name: "Random-Dex",
    description: "Decentralized exchange using MERN and Web3 with Rainbow Kit wallet integration.",
    tags: ["MERN", "Web3", "Rainbow Kit"],
    gradient: "from-blue-900 to-blue-500",
    link: "https://beta.random.trading/",
  },
  {
    name: "Crypto Policy",
    description: "Blockchain insurance platform built with MERN, Web3, and MetaMask integration.",
    tags: ["MERN", "Web3", "MetaMask"],
    gradient: "from-indigo-900 to-indigo-500",
    link: "https://cryptopolicyapp.vercel.app/signin",
  },
  {
    name: "Agent 3",
    description: "Real estate ecosystem: Web app (MERN + Next.js) and Mobile app (React Native).",
    tags: ["MERN", "Next.js", "React Native"],
    gradient: "from-green-900 to-lime-500",
    link: "https://agent3-gamma.vercel.app/",
  },
  {
    name: "Alvara Protocol",
    description: "MERN with Web3 wallet integration supporting Rainbow and Reown.",
    tags: ["MERN", "Web3", "Rainbow", "Reown"],
    gradient: "from-violet-900 to-violet-500",
    link: "https://bskt.alvara.xyz/",
  },
  {
    name: "Real-Estate",
    description: "Blockchain real estate platform developed with MERN and Web3 technologies.",
    tags: ["MERN", "Web3", "Solidity"],
    gradient: "from-blue-900 to-indigo-500",
    link: "https://real-estate-front-end-app.vercel.app/signin",
  },
  {
    name: "credentialEZ",
    description: "MERN + Next.js document system with Stripe integration and referral system.",
    tags: ["MERN", "Next.js", "Stripe"],
    gradient: "from-fuchsia-900 to-fuchsia-500",
    link: "https://app.credentialez.com/login",
  },
  {
    name: "Icon-Exchange",
    description: "Medical services portal for booking healthcare appointments, built using MERN.",
    tags: ["MERN", "Healthcare"],
    gradient: "from-emerald-900 to-emerald-500",
    link: "https://iconexchange.com/",
  },
  {
    name: "Hostel Hub",
    description: "Flutter app for student accommodations with full Map integration and real-time tracking.",
    tags: ["Flutter", "Google Maps", "Firebase"],
    gradient: "from-teal-900 to-teal-500",
  },
  {
    name: "Cable Connect / Fuel Mate",
    description: "High-performance logistics mobile applications developed using the Flutter framework.",
    tags: ["Flutter", "Logistics", "GPS"],
    gradient: "from-blue-800 to-sky-400",
  },
  {
    name: "Crypto Mining App",
    description: "Mining simulator with wallet support built using Flutter and Web3 Dart.",
    tags: ["Flutter", "Web3 Dart", "Blockchain"],
    gradient: "from-amber-900 to-amber-500",
  },
  {
    name: "Bit-Swap",
    description: "P2P token exchange platform developed using MERN and Web3 matching logic.",
    tags: ["MERN", "Web3", "Solidity"],
    gradient: "from-orange-900 to-orange-500",
  },
  {
    name: "GRT Health",
    description: "IoT health monitoring system built with Kotlin, .NET, and various IoT devices.",
    tags: ["Kotlin", ".NET", "IoT"],
    gradient: "from-rose-900 to-rose-400",
  },
  {
    name: "Skill Go Pro",
    description: "Learning app with gamification and resume-maker features using React Native.",
    tags: ["React Native", "Node.js", "Gamification"],
    gradient: "from-slate-800 to-slate-500",
  },
  {
    name: "AI-Powered Chatbots",
    description: "Intelligent agents using Python and OpenAI for automated content generation.",
    tags: ["Python", "OpenAI", "AI"],
    gradient: "from-slate-900 to-slate-600",
  },
];

export const contactInfo = {
  email: "umair.gakher4@gmail.com",
  phone: "+923479948300",
  location: "Islamabad, Pakistan",
};

