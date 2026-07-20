"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Active section tracking
      const sections = ["beranda", "tentang", "proyek", "keahlian", "kontak"];
      let current = "beranda";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) current = section;
        }
      }
      setActiveSection(current);

      // Scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      // Scrolled state for navbar appearance
      setScrolled(scrollTop > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Projects Data ──────────────────────────────────────────────────────────
  const projects = [
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

  // ── Skills Data ────────────────────────────────────────────────────────────
  const skills = [
    { name: "HTML5", src: "/assets/images/html.png" },
    { name: "CSS3", src: "/assets/images/css.png" },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "PHP",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Canva",
      src: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
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
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  const handlePrevSlide = () =>
    setCurrentSlide((p) => (p === 0 ? projects.length - 1 : p - 1));
  const handleNextSlide = () =>
    setCurrentSlide((p) => (p === projects.length - 1 ? 0 : p + 1));

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      e.target.reset();
      setIsSubmitting(false);
      setFormStatus(true);
      setTimeout(() => setFormStatus(false), 5000);
    }, 1200);
  };

  // ── Animation Variants ─────────────────────────────────────────────────────
  const fadeInUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const navItems = ["beranda", "tentang", "proyek", "keahlian", "kontak"];

  // ── Shared inline style helpers ────────────────────────────────────────────
  const C = {
    bg: "#0A0A0F",
    bgRaised: "#0D0D14",
    surface: "#12121A",
    primary: "#7C6BFF",
    primaryDark: "#5A4AE3",
    accent: "#C471ED",
    cyan: "#12C2E9",
    text: "#F0F0FF",
    muted: "rgba(240,240,255,0.5)",
    glass: "rgba(255,255,255,0.03)",
    glassBorder: "rgba(255,255,255,0.07)",
    primaryBg: "rgba(124,107,255,0.08)",
    primaryBorder: "rgba(124,107,255,0.2)",
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.text }} className="font-inter min-h-screen">

      {/* ────────────────────────── NAVBAR ───────────────────────────────── */}
      <header
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: scrolled ? "rgba(10,10,15,0.95)" : "rgba(10,10,15,0.6)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {/* ── Scroll progress bar ── */}
        <div
          className="absolute top-0 left-0 h-[2px] z-20 transition-all duration-150 pointer-events-none"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #7C6BFF, #C471ED, #12C2E9)",
            boxShadow: "0 0 10px rgba(124,107,255,0.7), 0 0 4px rgba(196,113,237,0.5)",
          }}
        />

        <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-5 md:px-6 h-[68px]">

          {/* ── Logo ── */}
          <a
            href="#beranda"
            className="flex items-center gap-3 select-none group"
            style={{ textDecoration: "none" }}
          >
            {/* Gradient orb icon */}
            <div
              className="relative w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #7C6BFF, #C471ED)",
                boxShadow: "0 0 18px rgba(124,107,255,0.55)",
              }}
            >
              {/* Inner glow pulse */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.2), transparent)" }}
              />
              <span
                className="relative z-10 font-black text-white"
                style={{ fontSize: "15px", fontFamily: "var(--font-outfit)", letterSpacing: "-0.5px" }}
              >
                F
              </span>
            </div>
            {/* Wordmark */}
            <span className="font-black tracking-tight text-[1.2rem] text-white transition-all duration-200">
              FADLI
              <span
                style={{
                  background: "linear-gradient(135deg, #7C6BFF, #C471ED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                .DEV
              </span>
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((sect) => {
              const isActive = activeSection === sect;
              return (
                <a
                  key={sect}
                  href={`#${sect}`}
                  className="relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
                  style={{
                    color: isActive ? "#fff" : "rgba(255,255,255,0.42)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                  }}
                >
                  {sect.charAt(0).toUpperCase() + sect.slice(1)}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBg"
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{
                        background: "linear-gradient(135deg, rgba(124,107,255,0.18), rgba(196,113,237,0.1))",
                        border: "1px solid rgba(124,107,255,0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {/* Active dot indicator */}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: C.primary, boxShadow: `0 0 6px ${C.primary}` }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── Desktop CTA: Hire Me (gradient) ── */}
          <a
            id="navbar-hire-me"
            href="mailto:habibifadli682@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black text-white relative overflow-hidden group transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #7C6BFF 0%, #C471ED 100%)",
              boxShadow: "0 0 22px rgba(124,107,255,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(124,107,255,0.7)";
              e.currentTarget.style.transform = "translateY(-1px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 22px rgba(124,107,255,0.4)";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            {/* Shimmer sweep on hover */}
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
              }}
            />
            <span className="material-symbols-outlined relative z-10" style={{ fontSize: "16px" }}>mail</span>
            <span className="relative z-10">Hire Me</span>
          </a>

          {/* ── Mobile Hamburger ── */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
            style={{
              background: mobileMenuOpen ? C.primaryBg : "rgba(255,255,255,0.05)",
              border: mobileMenuOpen ? `1px solid ${C.primaryBorder}` : "1px solid rgba(255,255,255,0.08)",
              color: mobileMenuOpen ? C.primary : "rgba(255,255,255,0.65)",
            }}
            aria-label="Buka menu navigasi"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>

        {/* ── Mobile Drawer ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden"
              style={{
                background: "rgba(10,10,15,0.98)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px)",
              }}
            >
              <div className="flex flex-col p-4 gap-1.5">
                {navItems.map((sect, i) => (
                  <motion.a
                    key={sect}
                    href={`#${sect}`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150"
                    style={{
                      color: activeSection === sect ? C.primary : "rgba(255,255,255,0.6)",
                      background: activeSection === sect
                        ? "linear-gradient(135deg, rgba(124,107,255,0.12), rgba(196,113,237,0.07))"
                        : "transparent",
                      border: activeSection === sect
                        ? "1px solid rgba(124,107,255,0.2)"
                        : "1px solid transparent",
                    }}
                  >
                    {activeSection === sect && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: C.primary, boxShadow: `0 0 6px ${C.primary}` }}
                      />
                    )}
                    {sect.charAt(0).toUpperCase() + sect.slice(1)}
                  </motion.a>
                ))}
                {/* Mobile CTA */}
                <motion.a
                  href="mailto:habibifadli682@gmail.com"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.04 + 0.05 }}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-black text-white"
                  style={{ background: "linear-gradient(135deg, #7C6BFF, #C471ED)", boxShadow: "0 0 20px rgba(124,107,255,0.4)" }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>
                  Kirim Email
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ─────────────────────────── HERO ────────────────────────────────── */}
        <section
          id="beranda"
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{ backgroundColor: C.bg }}
        >
          {/* Ambient orbs */}
          <div
            className="absolute -top-20 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(124,107,255,0.18) 0%, transparent 70%)", filter: "blur(50px)" }}
          />
          <div
            className="absolute bottom-0 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(196,113,237,0.12) 0%, transparent 70%)", filter: "blur(70px)" }}
          />
          <div
            className="absolute top-2/3 left-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(18,194,233,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
          />

          {/* Dot-grid texture */}
          <div
            className="absolute inset-0 pointer-events-none dot-grid"
            style={{ opacity: 0.018 }}
          />

          <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-24 md:py-0 relative z-10 w-full">
            <div className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-16">

              {/* ── Left: Text ── */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex-1 space-y-7"
              >
                {/* Badge */}
                <motion.div variants={fadeInUp}>
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase"
                    style={{ background: C.primaryBg, border: `1px solid ${C.primaryBorder}`, color: C.primary }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.primary }} />
                    Frontend Web Developer
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-[40px] md:text-[62px] font-black leading-[1.07] tracking-tight"
                >
                  <span className="text-white">Membangun </span>
                  <span
                    style={{
                      background: "linear-gradient(135deg, #7C6BFF 0%, #C471ED 50%, #12C2E9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Website &amp; Aplikasi
                  </span>
                  <span className="text-white"> Web yang Fungsional</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p variants={fadeInUp} className="text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
                  Mahasiswa Ilmu Komputer yang berfokus pada pengembangan frontend web
                  yang cepat, responsif, aksesibel, dan dirancang dengan presisi.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <motion.a
                    id="hero-cta-projects"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(124,107,255,0.55)" }}
                    whileTap={{ scale: 0.97 }}
                    href="#proyek"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-300"
                    style={{ background: C.primary, boxShadow: "0 0 24px rgba(124,107,255,0.4)" }}
                  >
                    Lihat Proyek Saya
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                  </motion.a>
                  <motion.a
                    id="hero-cta-contact"
                    whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.08)" }}
                    whileTap={{ scale: 0.97 }}
                    href="#kontak"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm text-white transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    Hubungi Saya
                  </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div variants={fadeInUp} className="flex gap-10 pt-2">
                  {[
                    { value: "5+", label: "Proyek Selesai" },
                    { value: "2+", label: "Tahun Belajar" },
                    { value: "10+", label: "Teknologi" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        className="text-3xl font-black"
                        style={{
                          background: "linear-gradient(135deg, #7C6BFF, #C471ED)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* ── Right: Profile Photo ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="flex-shrink-0 flex justify-center"
              >
                <div className="relative">
                  {/* Glow halo */}
                  <div
                    className="absolute rounded-[32px] animate-pulse-glow pointer-events-none"
                    style={{
                      inset: "-14px",
                      background: "linear-gradient(135deg, #7C6BFF, #C471ED, #12C2E9)",
                      filter: "blur(22px)",
                      opacity: 0.45,
                    }}
                  />
                  {/* Photo frame */}
                  <div
                    className="relative w-[256px] h-[306px] md:w-[300px] md:h-[360px] rounded-3xl overflow-hidden"
                    style={{ border: "1px solid rgba(255,255,255,0.1)", background: C.surface }}
                  >
                    <Image
                      src="/assets/images/me.jpeg"
                      alt="Foto profil Fadli Habibi Lubis, Frontend Developer"
                      width={400}
                      height={480}
                      priority
                      className="w-full h-full object-cover"
                    />
                    {/* Bottom fade */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(10,10,15,0.65), transparent)" }}
                    />
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                    className="absolute -top-4 -left-7 px-3 py-1.5 rounded-full text-[10px] font-black text-white"
                    style={{ background: C.primary, boxShadow: "0 6px 24px rgba(124,107,255,0.55)" }}
                  >
                    FRONTEND DEV
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.8 }}
                    className="absolute -bottom-4 -right-7 px-3 py-1.5 rounded-full text-[10px] font-black"
                    style={{
                      background: C.cyan,
                      color: C.bg,
                      boxShadow: "0 6px 24px rgba(18,194,233,0.5)",
                    }}
                  >
                    CREATIVE
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none pointer-events-none"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-px h-10"
              style={{ background: "linear-gradient(to bottom, rgba(124,107,255,0.7), transparent)" }}
            />
          </motion.div>
        </section>

        {/* ──────────────────────── ABOUT ──────────────────────────────────── */}
        <motion.section
          id="tentang"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          className="py-24 md:py-32"
          style={{ backgroundColor: C.bgRaised }}
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-6">
            {/* Section header */}
            <motion.div variants={fadeInUp} className="mb-16">
              <div
                className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ color: C.primary }}
              >
                <span className="w-10 h-px" style={{ background: C.primary }} />
                01 / SIAPA SAYA
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white">Tentang Saya</h2>
              <p className="max-w-md text-base mt-2" style={{ color: C.muted }}>
                Latar belakang, minat teknologi, dan keahlian yang saya miliki.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              {/* Left column */}
              <motion.div variants={fadeInUp} className="md:col-span-5 space-y-5">
                {/* Quote card */}
                <div
                  className="relative p-7 rounded-2xl overflow-hidden"
                  style={{ background: "rgba(124,107,255,0.05)", border: `1px solid rgba(124,107,255,0.15)` }}
                >
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full rounded-full"
                    style={{ background: "linear-gradient(to bottom, #7C6BFF, #C471ED)" }}
                  />
                  <span
                    className="block text-7xl font-black leading-none ml-3 opacity-20"
                    style={{ color: C.primary }}
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className="text-lg font-medium leading-relaxed mt-1 ml-3"
                    style={{ color: "rgba(240,240,255,0.78)" }}
                  >
                    Mendedikasikan setiap baris kode untuk menciptakan antarmuka web
                    yang cepat, responsif, fungsional, dan menyenangkan bagi pengguna.
                  </blockquote>
                </div>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "school", label: "Pendidikan", value: "Ilmu Komputer" },
                    { icon: "location_on", label: "Lokasi", value: "Medan, Indonesia" },
                    { icon: "work", label: "Posisi", value: "Frontend Dev" },
                    { icon: "language", label: "Bahasa", value: "ID & EN" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ background: C.glass, border: `1px solid ${C.glassBorder}` }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(124,107,255,0.15)" }}
                      >
                        <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: "17px" }}>
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                          {item.label}
                        </div>
                        <div className="text-xs font-bold text-white">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right column */}
              <motion.div variants={fadeInUp} className="md:col-span-7 space-y-6">
                <p className="text-base leading-relaxed" style={{ color: "rgba(240,240,255,0.62)" }}>
                  Saya adalah mahasiswa Ilmu Komputer yang berfokus sebagai Frontend Web Developer. Saya senang
                  membangun antarmuka website dan aplikasi web yang cepat, responsif, berkinerja tinggi,
                  serta memiliki desain yang ramah bagi pengguna.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(240,240,255,0.62)" }}>
                  Pengalaman saya meliputi pengembangan aplikasi web modern menggunakan Next.js dan React, 
                  serta aplikasi mobile menggunakan Flutter. Saya juga aktif belajar tentang UI/UX design 
                  untuk menciptakan pengalaman pengguna yang optimal di setiap platform.
                </p>

                {/* Skill chips */}
                <div className="space-y-3">
                  <span
                    className="block font-bold text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: C.primary }}
                  >
                    Keahlian Utama
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML5","CSS3","JavaScript","React","Next.js",
                      "Tailwind CSS","Flutter","Dart","Figma","Git",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-default transition-all duration-200"
                        style={{ background: C.glass, border: `1px solid ${C.glassBorder}`, color: "rgba(240,240,255,0.7)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(124,107,255,0.12)";
                          e.currentTarget.style.borderColor = "rgba(124,107,255,0.35)";
                          e.currentTarget.style.color = C.primary;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = C.glass;
                          e.currentTarget.style.borderColor = C.glassBorder;
                          e.currentTarget.style.color = "rgba(240,240,255,0.7)";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  id="about-contact-link"
                  href="#kontak"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200"
                  style={{ background: C.primaryBg, border: `1px solid ${C.primaryBorder}`, color: C.primary }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>send</span>
                  Hubungi Saya
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ─────────────────────── PROJECTS ────────────────────────────────── */}
        <motion.section
          id="proyek"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={fadeInUp}
          className="py-24 md:py-32"
          style={{ backgroundColor: C.bg }}
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-6">
            <motion.div variants={fadeInUp} className="mb-16">
              <div
                className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ color: C.primary }}
              >
                <span className="w-10 h-px" style={{ background: C.primary }} />
                02 / HASIL KARYA
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white">Proyek Pilihan</h2>
              <p className="max-w-md text-base mt-2" style={{ color: C.muted }}>
                Kumpulan proyek yang telah saya selesaikan menggunakan teknologi web dan mobile terkini.
              </p>
            </motion.div>

            {/* Slideshow */}
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
              style={{ border: `1px solid ${C.glassBorder}` }}
            >
              {/* Track */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${projects.length * 100}%`,
                  transform: `translateX(-${(currentSlide * 100) / projects.length}%)`,
                }}
              >
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className={`flex-shrink-0 relative overflow-hidden bg-gradient-to-br ${proj.gradient}`}
                    style={{
                      width: `${100 / projects.length}%`,
                      minHeight: "340px",
                    }}
                  >
                    {/* Glow overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 70% 20%, ${proj.radialGlow}, transparent 65%)` }}
                    />
                    {/* Subtle inner border */}
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ border: "1px solid rgba(255,255,255,0.04)", inset: "1px" }}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row gap-5 md:gap-8 w-full h-full p-5 md:p-8">
                      {/* Left: info */}
                      <div className="flex flex-col gap-3 md:gap-5 md:w-[38%] text-white">
                        <div className="space-y-2">
                          <div className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest ${proj.tagColor}`}>
                            <span className={`w-8 h-[2px] ${proj.pillBg}`} />
                            {proj.category}
                          </div>
                          <h3 className="text-3xl md:text-[40px] font-black leading-none tracking-tight text-white">
                            {proj.title}
                          </h3>
                          <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {proj.tags.map((t, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.85)" }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features + GitHub btn */}
                        <div className="hidden md:flex flex-col gap-2 mt-auto">
                          {proj.features.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 px-3 py-2 rounded-xl"
                              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
                            >
                              <span className="material-symbols-outlined text-white/80" style={{ fontSize: "15px" }}>
                                {feat.icon}
                              </span>
                              <span className="text-white/80 text-[11px] font-semibold">{feat.label}</span>
                            </div>
                          ))}
                          <a
                            href={proj.gitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200"
                            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.14)" }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>code</span>
                            Lihat di GitHub
                          </a>
                        </div>
                      </div>

                      {/* Right: mockup browser */}
                      <div className="flex-grow flex items-center justify-center md:w-[62%]">
                        <div
                          className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.11)" }}
                        >
                          {/* Browser chrome */}
                          <div
                            className="flex items-center gap-2 px-4 py-2.5"
                            style={{ background: "rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                          >
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                            <div
                              className="flex-1 mx-2 px-3 py-0.5 rounded-full text-[9px]"
                              style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}
                            >
                              {proj.linkText}
                            </div>
                          </div>
                          <div className="p-3 md:p-4">
                            <a
                              href={proj.gitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                            >
                              <Image
                                src={proj.mockup}
                                alt={proj.title}
                                width={640}
                                height={380}
                                className="w-full h-auto rounded-lg object-contain max-h-52 md:max-h-[290px]"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              <button
                id="slide-prev"
                onClick={handlePrevSlide}
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 active:scale-90 z-20"
                style={{ background: "rgba(10,10,15,0.75)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button
                id="slide-next"
                onClick={handleNextSlide}
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 active:scale-90 z-20"
                style={{ background: "rgba(10,10,15,0.75)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === currentSlide ? "28px" : "7px",
                      background: i === currentSlide ? "#fff" : "rgba(255,255,255,0.28)",
                    }}
                    aria-label={`Slide ${projects[i].title}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div
                className="absolute top-4 right-16 z-20 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.55)" }}
              >
                {currentSlide + 1} / {projects.length}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ──────────────────────── SKILLS ─────────────────────────────────── */}
        <motion.section
          id="keahlian"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          className="py-24 md:py-32"
          style={{ backgroundColor: C.bgRaised }}
        >
          <div className="max-w-[1200px] mx-auto px-5 md:px-6">
            <motion.div variants={fadeInUp} className="mb-16">
              <div
                className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ color: C.primary }}
              >
                <span className="w-10 h-px" style={{ background: C.primary }} />
                03 / PENGUASAAN TEKNOLOGI
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white">Keahlian Saya</h2>
              <p className="max-w-md text-base mt-2" style={{ color: C.muted }}>
                Teknologi dan alat bantu yang saya kuasai dalam pengembangan.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 max-w-4xl mx-auto"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.04 }}
                  className="flex flex-col items-center justify-center text-center group cursor-default p-5 rounded-2xl transition-all duration-300"
                  style={{ background: C.glass, border: `1px solid ${C.glassBorder}` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(124,107,255,0.09)";
                    e.currentTarget.style.borderColor = "rgba(124,107,255,0.3)";
                    e.currentTarget.style.boxShadow = "0 0 32px rgba(124,107,255,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.glass;
                    e.currentTarget.style.borderColor = C.glassBorder;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                      unoptimized={skill.src.startsWith("http")}
                    />
                  </div>
                  <h4
                    className="text-xs font-bold mt-3 transition-colors duration-300 group-hover:text-[#7C6BFF]"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ─────────────────────── CONTACT ─────────────────────────────────── */}
        <motion.section
          id="kontak"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ backgroundColor: C.bg }}
        >
          {/* Background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(124,107,255,0.055) 0%, transparent 70%)" }}
          />

          <div className="max-w-[1200px] mx-auto px-5 md:px-6 relative z-10">
            <motion.div variants={fadeInUp} className="mb-16">
              <div
                className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ color: C.primary }}
              >
                <span className="w-10 h-px" style={{ background: C.primary }} />
                04 / HUBUNGI SAYA
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white">Mari Berkolaborasi</h2>
              <p className="max-w-md text-base mt-2" style={{ color: C.muted }}>
                Hubungi saya untuk mendiskusikan peluang kerja, proyek, atau sekadar bertanya kabar.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: Contact info */}
              <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6">
                <p className="text-base leading-relaxed" style={{ color: "rgba(240,240,255,0.58)" }}>
                  Terbuka untuk proyek freelance, kolaborasi, dan peluang magang.
                  Kirimkan pesan kepada saya dan saya akan segera merespons dengan senang hati.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      icon: "mail",
                      label: "Email Saya",
                      value: "habibifadli682@gmail.com",
                      href: "mailto:habibifadli682@gmail.com",
                    },
                    {
                      icon: "location_on",
                      label: "Lokasi Saat Ini",
                      value: "Medan, Indonesia",
                      href: null,
                    },
                    {
                      icon: "code",
                      label: "GitHub",
                      value: "FdliHabibiLubis",
                      href: "https://github.com/FdliHabibiLubis",
                    },
                  ].map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href || "#"}
                      target={item.href?.startsWith("http") ? "_blank" : undefined}
                      rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -4 }}
                      className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-250"
                      style={{ background: C.glass, border: `1px solid ${C.glassBorder}`, textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = C.primaryBg;
                        e.currentTarget.style.borderColor = C.primaryBorder;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = C.glass;
                        e.currentTarget.style.borderColor = C.glassBorder;
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(124,107,255,0.15)" }}
                      >
                        <span className="material-symbols-outlined" style={{ color: C.primary }}>
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <div
                          className="text-[9px] font-black uppercase tracking-[0.18em] mb-0.5"
                          style={{ color: C.primary }}
                        >
                          {item.label}
                        </div>
                        <div className="font-semibold text-sm text-white">{item.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Availability */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                  style={{
                    background: "rgba(34,197,94,0.09)",
                    border: "1px solid rgba(34,197,94,0.22)",
                    color: "#22C55E",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Tersedia untuk proyek baru
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div variants={fadeInUp} className="lg:col-span-7">
                <div
                  className="p-7 md:p-9 rounded-2xl backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.022)", border: `1px solid ${C.glassBorder}` }}
                >
                  <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-5">
                    {/* Name + Email */}
                    {[
                      { id: "input-name", label: "NAMA LENGKAP", placeholder: "Nama lengkap Anda", type: "text" },
                      { id: "input-email", label: "ALAMAT EMAIL", placeholder: "email@anda.com", type: "email" },
                    ].map((f) => (
                      <div key={f.id} className="space-y-2">
                        <label
                          htmlFor={f.id}
                          className="block font-black text-[10px] uppercase tracking-[0.18em]"
                          style={{ color: "rgba(255,255,255,0.42)" }}
                        >
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.09)",
                            color: C.text,
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "rgba(124,107,255,0.55)";
                            e.currentTarget.style.background = "rgba(124,107,255,0.07)";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,107,255,0.1)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    ))}

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="input-message"
                        className="block font-black text-[10px] uppercase tracking-[0.18em]"
                        style={{ color: "rgba(255,255,255,0.42)" }}
                      >
                        PESAN ANDA
                      </label>
                      <textarea
                        id="input-message"
                        placeholder="Tuliskan pesan atau detail proyek Anda..."
                        rows={4}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.09)",
                          color: C.text,
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(124,107,255,0.55)";
                          e.currentTarget.style.background = "rgba(124,107,255,0.07)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,107,255,0.1)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                          e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Success message */}
                    <AnimatePresence>
                      {formStatus && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3 p-4 rounded-xl text-sm font-bold"
                          style={{
                            background: "rgba(34,197,94,0.1)",
                            border: "1px solid rgba(34,197,94,0.22)",
                            color: "#22C55E",
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>check_circle</span>
                          Pesan berhasil terkirim! Terima kasih telah menghubungi saya.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.button
                      id="submit-form"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 36px rgba(124,107,255,0.45)" }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-black text-sm text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: C.primary, boxShadow: "0 0 20px rgba(124,107,255,0.3)" }}
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center justify-center gap-2">
                          <span
                            className="w-4 h-4 border-2 rounded-full animate-spin"
                            style={{ borderColor: "rgba(255,255,255,0.3)", borderTopColor: "#fff" }}
                          />
                          Mengirim...
                        </span>
                      ) : (
                        "Kirim Pesan Sekarang"
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* ─────────────────────────── FOOTER ──────────────────────────────── */}
      <footer
        className="py-10"
        style={{ backgroundColor: "#07070D", borderTop: `1px solid ${C.glassBorder}` }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            {/* Logo */}
            <div className="font-black tracking-tighter text-xl text-white">
              FADLI<span style={{ color: C.primary }}>.DEV</span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.28)" }}>
              © 2024 Fadli Habibi Lubis &mdash; Dibuat dengan presisi &amp; dedikasi.
            </p>

            {/* Links */}
            <div className="flex items-center gap-5">
              {[
                { label: "GitHub", href: "https://github.com/FdliHabibiLubis" },
                { label: "Email", href: "mailto:habibifadli682@gmail.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-xs font-bold transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
