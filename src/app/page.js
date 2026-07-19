"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // Navigation active section scroll tracker
  const [activeSection, setActiveSection] = useState("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["beranda", "tentang", "proyek", "keahlian", "kontak"];
      let current = "beranda";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset for header height
          if (rect.top <= 140) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Project Slideshow Data
  const projects = [
    {
      id: "saku",
      title: "SAKU",
      category: "FEATURED MOBILE APP",
      description: "Sistem Aplikasi Keuangan Usaha — solusi cerdas untuk mengelola keuangan bisnis secara efisien, transparan, dan real-time.",
      tags: ["Fintech", "Mobile App", "SaaS"],
      features: [
        { icon: "account_balance_wallet", label: "Manajemen Keuangan" },
        { icon: "bar_chart", label: "Analitik Real-time" }
      ],
      mockup: "/assets/images/projek/saku.png",
      gitUrl: "https://github.com/FdliHabibiLubis/Saku-flutter",
      linkText: "saku.app",
      gradient: "from-[#14532d] via-[#0d3b1f] to-[#0b2f18]",
      radialGlow: "rgba(52,211,153,0.12)",
      glowClass: "bg-emerald-400/10",
      tagColor: "text-emerald-300",
      pillBg: "bg-emerald-400"
    },
    {
      id: "ciakad",
      title: "CIAKAD",
      category: "FEATURED CASE STUDY",
      description: "Platform terintegrasi untuk mengelola ekosistem akademik dengan efisiensi tinggi dan antarmuka administrator yang intuitif.",
      tags: ["Academic Mgmt", "Web Admin", "Cloud DB"],
      features: [
        { icon: "school", label: "Manajemen Akademik" },
        { icon: "dashboard", label: "Dashboard Admin" }
      ],
      mockup: "/assets/images/projek/ciakad.png",
      gitUrl: "https://github.com/FdliHabibiLubis/siakad-flutter",
      linkText: "ciakad.app",
      gradient: "from-[#0c162f] via-[#101d3f] to-[#070d1e]",
      radialGlow: "rgba(96,165,250,0.10)",
      glowClass: "bg-blue-400/10",
      tagColor: "text-blue-300",
      pillBg: "bg-blue-400"
    },
    {
      id: "bukukita",
      title: "Buku Kita",
      category: "WEB APP",
      description: "Platform toko buku online berbasis web dengan panel admin, fitur pencarian cerdas, dan integrasi Google Books API.",
      tags: ["E-Commerce", "Google Books"],
      features: [
        { icon: "storefront", label: "Online Bookstore" },
        { icon: "search", label: "Pencarian Cerdas" }
      ],
      mockup: "/assets/images/projek/1.png",
      gitUrl: "https://github.com/FdliHabibiLubis/Buku-kita-nextjs",
      linkText: "bukukita.app",
      gradient: "from-[#1a3c1a] via-[#0f2b10] to-[#0a1a0b]",
      radialGlow: "rgba(163,230,53,0.10)",
      glowClass: "bg-lime-400/10",
      tagColor: "text-lime-300",
      pillBg: "bg-lime-400"
    },
    {
      id: "password",
      title: "Password Generator",
      category: "FRONTEND TOOL",
      description: "Generator password interaktif yang membuat kata sandi acak kuat dan aman dengan konfigurasi karakter fleksibel.",
      tags: ["Security Tool", "Vanilla JS"],
      features: [
        { icon: "lock", label: "Password Kuat" },
        { icon: "tune", label: "Konfigurasi Fleksibel" }
      ],
      mockup: "/assets/images/projek/2.png",
      gitUrl: "https://github.com/FdliHabibiLubis/PasswordGenerator",
      linkText: "password-generator.app",
      gradient: "from-[#1e1040] via-[#140b30] to-[#0a0520]",
      radialGlow: "rgba(168,85,247,0.12)",
      glowClass: "bg-purple-400/10",
      tagColor: "text-purple-300",
      pillBg: "bg-purple-400"
    },
    {
      id: "taskflow",
      title: "TaskFlow",
      category: "WEB APP",
      description: "Aplikasi To-Do List modern bergaya Glassmorphism untuk produktivitas maksimal dengan antarmuka yang bersih dan intuitif.",
      tags: ["Productivity", "Glassmorphism"],
      features: [
        { icon: "check_circle", label: "Task Management" }
      ],
      mockup: "/assets/images/projek/3.png",
      gitUrl: "https://github.com/FdliHabibiLubis/TodoList",
      linkText: "taskflow.app",
      gradient: "from-[#0a1628] via-[#0d1f3c] to-[#060e1a]",
      radialGlow: "rgba(56,189,248,0.10)",
      glowClass: "bg-sky-400/10",
      tagColor: "text-sky-300",
      pillBg: "bg-sky-400"
    }
  ];

  // Tech Skills Grid Data
  const skills = [
    { name: "HTML5", src: "/assets/images/html.png" },
    { name: "CSS3", src: "/assets/images/css.png" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", src: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
    { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-bg-base font-inter min-h-screen">
      {/* TopNavBar */}
      <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/50">
        <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter h-20">
          <div className="text-headline-md font-headline-lg font-black tracking-tighter text-text">
            FADLI<span className="text-primary">.PORTFOLIO</span>
          </div>
          <div className="hidden md:flex items-center gap-unit relative">
            {["beranda", "tentang", "proyek", "keahlian", "kontak"].map((sect) => {
              const isActive = activeSection === sect;
              return (
                <a
                  key={sect}
                  href={`#${sect}`}
                  className={`relative px-4 py-1.5 transition-all text-label-md font-label-md z-10 ${
                    isActive ? "text-primary font-bold" : "text-text/70 hover:text-primary"
                  }`}
                >
                  {sect.charAt(0).toUpperCase() + sect.slice(1)}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-secondary/15 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text"
            aria-label="Buka menu navigasi mobile"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>
        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant/50 flex flex-col p-4 gap-2 z-40"
            >
              {["beranda", "tentang", "proyek", "keahlian", "kontak"].map((sect) => (
                <a
                  key={sect}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 transition-colors text-label-md font-label-md rounded-lg hover:bg-secondary/10 ${
                    activeSection === sect ? "text-primary bg-secondary/5 font-semibold" : "text-text"
                  }`}
                  href={`#${sect}`}
                >
                  {sect.charAt(0).toUpperCase() + sect.slice(1)}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="py-stack-lg md:py-section-padding overflow-hidden relative bg-gradient-to-br from-primary to-accent text-white"
          id="beranda"
        >
          {/* Floating Abstract Background Shapes */}
          <div className="absolute top-1/4 left-8 w-8 h-8 text-white/10 pointer-events-none animate-spin-slow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="12 2 22 8.5 22 19.5 12 22 2 19.5 2 8.5" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-1/3 w-10 h-10 text-white/5 pointer-events-none animate-bounce-slow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-12 w-20 h-20 text-white/5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              {[...Array(5)].map((_, r) =>
                [...Array(5)].map((_, c) => (
                  <circle key={`${r}-${c}`} cx={10 + c * 20} cy={10 + r * 20} r="3" />
                ))
              )}
            </svg>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-stack-lg">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex-1 space-y-stack-md relative z-10"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-block bg-white/15 border border-white/25 px-4 py-1 rounded-full text-white font-semibold text-xs tracking-wider"
                >
                  FRONTEND WEB DEVELOPER
                </motion.div>
                <motion.h1
                  variants={fadeInUp}
                  className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight text-white"
                >
                  Membangun Website &amp; Aplikasi Web yang{" "}
                  <span className="hero-highlight">Fungsional</span>
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="font-body-lg text-body-lg text-white max-w-2xl"
                >
                  Mahasiswa Ilmu Komputer yang berfokus pada pengembangan frontend web yang cepat,
                  responsif, aksesibel, dan dirancang dengan presisi.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-stack-sm pt-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-accent text-white px-stack-md py-4 rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-primary-dark transition-colors duration-300"
                    href="#proyek"
                  >
                    Lihat Proyek Saya <span className="material-symbols-outlined">arrow_forward</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-white text-white px-stack-md py-4 rounded-xl font-label-md text-label-md transition-colors duration-300"
                    href="#kontak"
                  >
                    Hubungi Saya
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-shrink-0 w-full md:w-auto flex justify-center"
              >
                <div className="group relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
                  {/* Flat Image frame */}
                  <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-3xl overflow-hidden bg-surface border-4 border-white/20">
                    <Image
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105"
                      alt="Foto Fadli"
                      src="/assets/images/me.jpeg"
                      width={400}
                      height={400}
                      priority
                    />
                  </div>
                  {/* Small overlapping floating badges for abstract accent */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-4 -left-4 bg-accent text-white font-bold text-xs px-3 py-1 rounded-full transform -rotate-12 shadow-sm"
                  >
                    FRONTEND DEV
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-2 -right-4 bg-secondary-dark text-white font-bold text-xs px-3 py-1 rounded-full transform rotate-6 shadow-sm"
                  >
                    CREATIVE
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-section-padding bg-surface"
          id="tentang"
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="flex flex-col gap-stack-sm mb-stack-lg">
              <div className="flex items-center gap-4 text-primary font-label-md text-label-md">
                <span className="w-12 h-[2px] bg-primary" /> 01 / SIAPA SAYA
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text">
                Tentang Saya
              </h2>
              <p className="text-text max-w-xl font-body-md text-body-md">
                Informasi singkat mengenai latar belakang, minat teknologi, dan keahlian yang saya miliki.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-start">
              <div className="md:col-span-5 border-l-4 border-accent pl-stack-md">
                <blockquote className="font-headline-md text-headline-md italic leading-relaxed text-text">
                  &quot;Mendedikasikan setiap baris kode untuk menciptakan antarmuka web yang cepat, responsif, fungsional, dan menyenangkan bagi pengguna.&quot;
                </blockquote>
              </div>
              <div className="md:col-span-7 space-y-stack-sm text-text font-body-lg text-body-lg">
                <p>
                  Saya adalah mahasiswa Ilmu Komputer yang berfokus sebagai Frontend Web Developer. Saya senang
                  membangun antarmuka website dan aplikasi web yang cepat, responsif, berkinerja tinggi,
                  serta memiliki desain yang ramah bagi pengguna.
                </p>
                <div className="pt-4 space-y-3">
                  <span className="block text-primary font-label-md text-label-md">Keahlian Utama:</span>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="px-3 py-1 rounded border border-accent/20 text-body-md font-bold"
                      style={{ background: "rgba(124,88,183,0.12)", color: "#634690" }}
                    >
                      HTML5
                    </span>
                    <span
                      className="px-3 py-1 rounded border border-secondary/20 text-body-md font-bold"
                      style={{ background: "rgba(88,160,183,0.12)", color: "#3E7080" }}
                    >
                      CSS3
                    </span>
                    <span
                      className="px-3 py-1 rounded border border-primary/20 text-body-md font-bold"
                      style={{ background: "rgba(95,107,183,0.12)", color: "#424B80" }}
                    >
                      JavaScript
                    </span>
                    <span
                      className="px-3 py-1 rounded border border-accent/20 text-body-md font-bold"
                      style={{ background: "rgba(124,88,183,0.12)", color: "#634690" }}
                    >
                      Figma
                    </span>
                    <span
                      className="px-3 py-1 rounded border border-secondary/20 text-body-md font-bold"
                      style={{ background: "rgba(88,160,183,0.12)", color: "#3E7080" }}
                    >
                      Canva
                    </span>
                    <span
                      className="px-3 py-1 rounded border border-primary/20 text-body-md font-bold"
                      style={{ background: "rgba(95,107,183,0.12)", color: "#424B80" }}
                    >
                      Tailwind CSS
                    </span>
                    <span
                      className="px-3 py-1 rounded border border-accent/20 text-body-md font-bold"
                      style={{ background: "rgba(124,88,183,0.12)", color: "#634690" }}
                    >
                      Git
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="py-section-padding bg-bg-base"
          id="proyek"
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="flex flex-col gap-stack-sm mb-stack-lg">
              <div className="flex items-center gap-4 text-primary font-label-md text-label-md">
                <span className="w-12 h-[2px] bg-primary" /> 02 / HASIL KARYA
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text">
                Proyek Pilihan
              </h2>
              <p className="text-text-muted max-w-xl font-body-md text-body-md">
                Kumpulan proyek yang telah saya selesaikan menggunakan teknologi web dan mobile terkini.
              </p>
            </div>

            {/* Unified Project Slideshow Container */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-outline-variant/30 bg-slate-900 shadow-xl">
              {/* Slider Track Wrapper */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${projects.length * 100}%`,
                  transform: `translateX(-${(currentSlide * 100) / projects.length}%)`
                }}
              >
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className={`flex-shrink-0 relative overflow-hidden flex flex-col min-h-[300px] md:min-h-[400px] bg-gradient-to-br ${proj.gradient}`}
                    style={{ width: `${100 / projects.length}%` }}
                  >
                    {/* Glowing radial backdrop inside slides */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at top right, ${proj.radialGlow}, transparent 60%)`
                      }}
                    />
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30 bg-white" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6 w-full h-full p-4 md:p-6">
                      {/* Left: Info */}
                      <div className="flex flex-col gap-2 md:gap-4 md:w-2/5 text-white">
                        <div className="flex flex-col gap-1 md:gap-2">
                          <div className={`flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest ${proj.tagColor}`}>
                            <span className={`w-6 md:w-8 h-[2px] ${proj.pillBg}`} /> {proj.category}
                          </div>
                          <h3 className="font-display-lg text-2xl md:text-3xl font-extrabold leading-tight">
                            {proj.title}
                          </h3>
                          <p className="text-white/80 text-[11px] md:text-xs leading-relaxed line-clamp-3 md:line-clamp-none">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {proj.tags.map((t, idx) => (
                              <span
                                key={idx}
                                className="bg-white/10 text-white/90 border border-white/15 px-2 py-0.5 rounded-full text-[9px] font-semibold"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Feature indicators */}
                        <div className="hidden md:flex flex-col gap-1 mt-auto">
                          {proj.features.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 bg-white/10 rounded-lg px-2.5 py-1.5 border border-white/10"
                            >
                              <span className="material-symbols-outlined text-white/90 text-sm">
                                {feat.icon}
                              </span>
                              <span className="text-white/85 text-[11px] font-semibold">
                                {feat.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Mockup Image */}
                      <div className="flex-grow flex items-center justify-center md:w-3/5">
                        <div className="w-full max-w-xl bg-white/5 border border-white/20 rounded-2xl overflow-hidden shadow-md">
                          <div className="bg-white/10 px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            <div className="flex-1 mx-2 bg-white/10 rounded-full px-3 py-0.5 text-white/40 text-[9px]">
                              {proj.linkText}
                            </div>
                          </div>
                          <div className="p-3 md:p-4">
                            <a
                              href={proj.gitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                            >
                              <Image
                                className="w-full h-auto rounded-lg shadow-lg object-contain max-h-48 md:max-h-[260px]"
                                alt={proj.title}
                                src={proj.mockup}
                                width={600}
                                height={350}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-secondary text-text hover:text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 active:scale-95 z-20 shadow-sm"
              >
                <span className="material-symbols-outlined text-xl font-bold">chevron_left</span>
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-secondary text-text hover:text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 active:scale-95 z-20 shadow-sm"
              >
                <span className="material-symbols-outlined text-xl font-bold">chevron_right</span>
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === currentSlide ? "24px" : "8px",
                      backgroundColor: i === currentSlide ? "#ffffff" : "rgba(255,255,255,0.4)"
                    }}
                    aria-label={`Slide ${projects[i].title}`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="absolute top-4 right-16 z-20 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-white/70 text-xs font-semibold">
                {currentSlide + 1} / {projects.length}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-section-padding bg-surface"
          id="keahlian"
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="flex flex-col gap-stack-sm mb-stack-lg">
              <div className="flex items-center gap-4 text-primary font-label-md text-label-md">
                <span className="w-12 h-[2px] bg-primary" /> 03 / PENGUASAAN TEKNOLOGI
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text">
                Keahlian Saya
              </h2>
              <p className="text-text max-w-xl font-body-md text-body-md">
                Tingkat penguasaan saya dalam beberapa teknologi inti pemrograman dan alat bantu pengembangan.
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto py-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center group cursor-pointer bg-surface border border-outline-variant/30 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                      unoptimized={skill.src.startsWith("http")}
                    />
                  </div>
                  <h4 className="text-xs font-bold text-text mt-3 transition-colors duration-300 group-hover:text-primary">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="py-section-padding bg-bg-base"
          id="kontak"
        >
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
              {/* Left Info */}
              <div className="lg:col-span-5 space-y-stack-md">
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text">
                  Mari Berkolaborasi
                </h2>
                <p className="text-text font-body-lg text-body-lg">
                  Hubungi saya untuk mendiskusikan peluang kerja, proyek, atau sekadar bertanya kabar.
                </p>
                <p className="text-text/80 font-body-md text-body-md">
                  Terbuka untuk proyek freelance, kolaborasi, dan peluang magang. Kirimkan pesan kepada saya dan saya akan segera merespons dengan senang hati.
                </p>
                <div className="space-y-stack-sm pt-4">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-outline-variant/30 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-secondary/15 rounded-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-wider">EMAIL SAYA</div>
                      <div className="font-headline-md text-headline-sm text-text">habibifadli682@gmail.com</div>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-outline-variant/30 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-secondary/15 rounded-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-wider">LOKASI SAAT INI</div>
                      <div className="font-headline-md text-headline-sm text-text">Medan, Indonesia</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-7">
                <div className="bg-surface border border-outline-variant/30 p-stack-md md:p-stack-lg rounded-3xl shadow-xl">
                  <form onSubmit={handleContactSubmit} className="grid grid-cols-1 gap-stack-sm">
                    <div className="space-y-2">
                      <label className="font-bold text-text text-xs uppercase tracking-wider">NAMA LENGKAP</label>
                      <input
                        className="w-full bg-bg-base border border-outline-variant/50 rounded-lg p-4 focus:bg-surface focus:ring-2 focus:ring-accent transition-all duration-300 outline-none text-text font-body-md"
                        placeholder="Nama lengkap Anda"
                        type="text"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold text-text text-xs uppercase tracking-wider">ALAMAT EMAIL</label>
                      <input
                        className="w-full bg-bg-base border border-outline-variant/50 rounded-lg p-4 focus:bg-surface focus:ring-2 focus:ring-accent transition-all duration-300 outline-none text-text font-body-md"
                        placeholder="email@anda.com"
                        type="email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-bold text-text text-xs uppercase tracking-wider">PESAN ANDA</label>
                      <textarea
                        className="w-full bg-bg-base border border-outline-variant/50 rounded-lg p-4 focus:bg-surface focus:ring-2 focus:ring-accent transition-all duration-300 outline-none text-text font-body-md resize-none"
                        placeholder="Tuliskan pesan atau detail proyek Anda..."
                        rows="4"
                        required
                      />
                    </div>
                    {formStatus && (
                      <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center bg-secondary/15 border border-secondary/30 text-secondary-dark py-3 rounded-lg font-bold text-label-md"
                      >
                        Pesan berhasil terkirim! Terima kasih telah menghubungi saya.
                      </motion.p>
                    )}
                    <button
                      className="w-full bg-accent text-white py-4 rounded-xl font-bold text-label-md hover:bg-primary-dark transition-all duration-300 active:scale-95 mt-4 disabled:opacity-50"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan Sekarang"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-primary-dark to-secondary-dark text-white py-stack-lg border-t border-primary/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-sm">
          <div className="text-headline-md font-headline-md font-bold text-white">
            FADLI<span className="text-secondary">.PORTFOLIO</span>
          </div>
          <p className="font-body-md text-body-md text-white/70">
            © 2024 Fadli. Dibuat dengan presisi.
          </p>
          <div className="flex gap-stack-sm">
            <a
              className="text-white/70 hover:text-secondary hover:scale-110 transition-all font-label-md text-label-md"
              href="https://github.com/FdliHabibiLubis"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-white/70 hover:text-secondary hover:scale-110 transition-all font-label-md text-label-md"
              href="mailto:habibifadli682@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
