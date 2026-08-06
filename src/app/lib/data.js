// ── Verdant Circuit — Shared Data ─────────────────────────────────────────

export const projects = [
  {
    id: "saku",
    title: "SAKU",
    category: "FEATURED MOBILE APP",
    description:
      "Sistem Aplikasi Keuangan Usaha — solusi cerdas untuk mengelola keuangan bisnis secara efisien, transparan, dan real-time.",
    tags: ["Fintech", "Mobile App", "SaaS"],
    features: [
      { icon: "account_balance_wallet", label: "Manajemen Keuangan" },
      { icon: "bar_chart", label: "Analitik Real-time" },
    ],
    mockup: "/assets/images/projek/saku.avif",
    gitUrl: "https://github.com/FdliHabibiLubis/Saku-flutter",
    linkText: "saku.app",
    gradient: "from-[#04160c] via-[#092b17] to-[#061e10]",
    radialGlow: "rgba(52,211,153,0.16)",
    tagColor: "text-emerald-300",
    pillBg: "bg-emerald-400",
  },
  {
    id: "ciakad",
    title: "CIAKAD",
    category: "FEATURED CASE STUDY",
    description:
      "Platform terintegrasi untuk mengelola ekosistem akademik dengan efisiensi tinggi dan antarmuka administrator yang intuitif.",
    tags: ["Academic Mgmt", "Web Admin", "Cloud DB"],
    features: [
      { icon: "school", label: "Manajemen Akademik" },
      { icon: "dashboard", label: "Dashboard Admin" },
    ],
    mockup: "/assets/images/projek/ciakad.avif",
    gitUrl: "https://github.com/FdliHabibiLubis/siakad-flutter",
    linkText: "ciakad.app",
    gradient: "from-[#091129] via-[#112152] to-[#0c183d]",
    radialGlow: "rgba(96,165,250,0.18)",
    tagColor: "text-blue-300",
    pillBg: "bg-blue-400",
  },
  {
    id: "senandika",
    title: "Senandika",
    category: "FEATURED WEB APP",
    description:
      "Platform web pengubah lirik lagu menjadi poster estetik secara instan dengan kustomisasi tata letak dan gaya visual yang unik.",
    tags: ["Next.js", "JavaScript", "Lyric Poster"],
    features: [
      { icon: "music_note", label: "Lirik ke Poster" },
      { icon: "palette", label: "Kustomisasi Desain" },
    ],
    mockup: "/assets/images/projek/senandika.avif",
    gitUrl: "https://github.com/FdliHabibiLubis/senandika",
    linkText: "senandika.app",
    gradient: "from-[#200914] via-[#3b1225] to-[#260b18]",
    radialGlow: "rgba(244,63,94,0.2)",
    tagColor: "text-rose-300",
    pillBg: "bg-rose-500",
  },
  {
    id: "bukukita",
    title: "Buku Kita",
    category: "WEB APP",
    description:
      "Platform toko buku online berbasis web dengan panel admin, fitur pencarian cerdas, dan integrasi Google Books API.",
    tags: ["E-Commerce", "Google Books"],
    features: [
      { icon: "storefront", label: "Online Bookstore" },
      { icon: "search", label: "Pencarian Cerdas" },
    ],
    mockup: "/assets/images/projek/1.avif",
    gitUrl: "https://github.com/FdliHabibiLubis/Buku-kita-nextjs",
    linkText: "bukukita.app",
    gradient: "from-[#0c1324] via-[#1a233d] to-[#12192e]",
    radialGlow: "rgba(245,158,11,0.18)",
    tagColor: "text-amber-300",
    pillBg: "bg-amber-400",
  },
  {
    id: "password",
    title: "Password Generator",
    category: "FRONTEND TOOL",
    description:
      "Generator password interaktif yang membuat kata sandi acak kuat dan aman dengan konfigurasi karakter fleksibel.",
    tags: ["Security Tool", "Vanilla JS"],
    features: [
      { icon: "lock", label: "Password Kuat" },
      { icon: "tune", label: "Konfigurasi Fleksibel" },
    ],
    mockup: "/assets/images/projek/2.avif",
    gitUrl: "https://github.com/FdliHabibiLubis/PasswordGenerator",
    linkText: "password-generator.app",
    gradient: "from-[#170c14] via-[#2c131a] to-[#200e16]",
    radialGlow: "rgba(249,115,22,0.22)",
    tagColor: "text-orange-300",
    pillBg: "bg-orange-500",
  },
  {
    id: "anikaze",
    title: "AniKaze",
    category: "FEATURED WEB APP",
    description:
      "Platform manajemen koleksi anime pribadi (Archive Collections) untuk melacak status tontonan, rating, dan mengorganisir daftar anime favorit.",
    tags: ["Anime Tracker", "Web App", "JavaScript"],
    features: [
      { icon: "movie", label: "Pelacak Anime" },
      { icon: "star", label: "Rating & Koleksi" },
    ],
    mockup: "/assets/images/projek/anikaze.avif",
    gitUrl: "https://github.com/FdliHabibiLubis/rating-anime",
    linkText: "anikaze.app",
    gradient: "from-[#16062b] via-[#2d0a4c] to-[#1e0738]",
    radialGlow: "rgba(192,132,252,0.2)",
    tagColor: "text-purple-300",
    pillBg: "bg-purple-400",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    category: "WEB APP",
    description:
      "Aplikasi To-Do List modern bergaya Glassmorphism untuk produktivitas maksimal dengan antarmuka yang bersih dan intuitif.",
    tags: ["Productivity", "Glassmorphism"],
    features: [{ icon: "check_circle", label: "Task Management" }],
    mockup: "/assets/images/projek/3.avif",
    gitUrl: "https://github.com/FdliHabibiLubis/TodoList",
    linkText: "taskflow.app",
    gradient: "from-[#040e1a] via-[#091e38] to-[#061528]",
    radialGlow: "rgba(56,189,248,0.2)",
    tagColor: "text-sky-300",
    pillBg: "bg-sky-400",
  },
];

export const skills = [
  {
    name: "JavaScript",
    category: "frontend",
    level: "Lanjutan",
    description: "ES6+, Async/Await, Web APIs & DOM",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    glowColor: "rgba(247, 223, 30, 0.3)",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: "Menengah",
    description: "App Router, SSR/SSG, React & API Routes",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    glowColor: "rgba(255, 255, 255, 0.3)",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    level: "Menengah",
    description: "Relational DB, SQL Queries & Schema",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    glowColor: "rgba(51, 103, 145, 0.3)",
  },
  {
    name: "Flutter",
    category: "mobile",
    level: "Menengah",
    description: "Cross-platform Mobile & State Mgmt",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    glowColor: "rgba(2, 86, 155, 0.3)",
  },
  {
    name: "Dart",
    category: "mobile",
    level: "Menengah",
    description: "OOP, Async Programming & App Logic",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    glowColor: "rgba(1, 87, 155, 0.3)",
  },
  {
    name: "Figma",
    category: "design",
    level: "Menengah",
    description: "UI/UX Prototyping & Wireframing",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    glowColor: "rgba(242, 78, 30, 0.3)",
  },
  {
    name: "Canva",
    category: "design",
    level: "Lanjutan",
    description: "Graphic Assets & Branding Visuals",
    src: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    glowColor: "rgba(0, 196, 204, 0.3)",
  },
];

// ── Shared Verdant Circuit Color Constants ─────────────────────────────────
export const C = {
  bg: "#0F1712",
  bgRaised: "#141F19",
  surface: "#1A2820",
  primary: "#0D9488",        // Teal 600 — solid
  primaryDark: "#0F766E",    // Teal 700
  accentLime: "#16A34A",     // Green 600 — solid
  accentBlue: "#2563EB",     // Blue 600 — solid
  accentForest: "#15803D",   // Green 700
  text: "#F1F5F9",
  muted: "rgba(241,245,249,0.55)",
  glass: "rgba(13,148,136,0.05)",
  glassBorder: "rgba(13,148,136,0.13)",
  primaryBg: "rgba(13,148,136,0.08)",
  primaryBorder: "rgba(13,148,136,0.2)",
};
