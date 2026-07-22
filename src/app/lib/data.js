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
    mockup: "/assets/images/projek/saku.png",
    gitUrl: "https://github.com/FdliHabibiLubis/Saku-flutter",
    linkText: "saku.app",
    gradient: "from-[#071a0f] via-[#0d3b1f] to-[#0b2a15]",
    radialGlow: "rgba(52,211,153,0.14)",
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
    mockup: "/assets/images/projek/ciakad.png",
    gitUrl: "https://github.com/FdliHabibiLubis/siakad-flutter",
    linkText: "ciakad.app",
    gradient: "from-[#050c1e] via-[#0c1a38] to-[#0a1630]",
    radialGlow: "rgba(96,165,250,0.12)",
    tagColor: "text-blue-300",
    pillBg: "bg-blue-400",
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
    mockup: "/assets/images/projek/1.png",
    gitUrl: "https://github.com/FdliHabibiLubis/Buku-kita-nextjs",
    linkText: "bukukita.app",
    gradient: "from-[#081208] via-[#0e2810] to-[#122e14]",
    radialGlow: "rgba(163,230,53,0.10)",
    tagColor: "text-lime-300",
    pillBg: "bg-lime-400",
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
    mockup: "/assets/images/projek/2.png",
    gitUrl: "https://github.com/FdliHabibiLubis/PasswordGenerator",
    linkText: "password-generator.app",
    gradient: "from-[#08051e] via-[#120930] to-[#1a0d42]",
    radialGlow: "rgba(168,85,247,0.14)",
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
    mockup: "/assets/images/projek/3.png",
    gitUrl: "https://github.com/FdliHabibiLubis/TodoList",
    linkText: "taskflow.app",
    gradient: "from-[#04090e] via-[#081828] to-[#0a1f38]",
    radialGlow: "rgba(56,189,248,0.10)",
    tagColor: "text-sky-300",
    pillBg: "bg-sky-400",
  },
];

export const skills = [
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Flutter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    src: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
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
