"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../lib/data";

const navItems = [
  { label: "Tentang", href: "/", icon: "person" },
  { label: "Proyek", href: "/proyek", icon: "code" },
  { label: "Keahlian", href: "/keahlian", icon: "star" },
  { label: "Kontak", href: "/kontak", icon: "mail" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic Theme Detection: Dark pages (Tentang/Home & Keahlian) vs Light pages (Proyek & Kontak)
  const isDarkPage = pathname === "/" || pathname === "/keahlian";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Harmonized Soft Color Palette for both Dark and Light backgrounds
  const theme = {
    cardBg: isDarkPage ? "#102A22" : "#FFFFFF", // Rich Dark Emerald Green (#102A22) vs Soft Pure White (#FFFFFF)
    cardBorder: isDarkPage ? "#1F483B" : "#CBD5E1", // Soft Slate border (#CBD5E1) instead of harsh black
    navInnerBg: isDarkPage ? "#081814" : "#F1F5F9",
    navInnerBorder: isDarkPage ? "#193C31" : "#E2E8F0",
    textPrimary: isDarkPage ? "#FFFFFF" : "#0F172A",
    textInactive: isDarkPage ? "#A7F3D0" : "#64748B",
    activePillBg: C.primary, // #0D9488 Vibrant Teal
    activePillText: "#FFFFFF",
    shadow: isDarkPage
      ? (scrolled ? `4px 4px 0px ${C.primary}` : "4px 4px 0px #111111")
      : (scrolled ? `4px 4px 0px ${C.primary}` : "3.5px 3.5px 0px #CBD5E1"),
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 w-full select-none pointer-events-none">
      
      {/* Outer 3-Block Container */}
      <div className="w-full max-w-[1000px] flex items-center justify-between gap-3 pointer-events-auto">
        
        {/* ── Block 1 (Left): Animated Floating Brand Card ── */}
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="flex-shrink-0"
        >
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl transition-all duration-300 group shadow-xl border-2"
            style={{
              background: theme.cardBg,
              borderColor: theme.cardBorder,
              boxShadow: theme.shadow,
              transform: "rotate(-3deg)",
              textDecoration: "none",
            }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-12"
              style={{
                background: C.primary,
                border: isDarkPage ? "2px solid #111" : "2px solid #0D9488",
                boxShadow: isDarkPage ? "1.5px 1.5px 0px #111" : "1.5px 1.5px 0px #0D9488",
              }}
            >
              <span
                className="font-black text-white text-xs"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                F
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className="font-black tracking-tight text-sm leading-none transition-colors"
                style={{ color: theme.textPrimary, fontFamily: "var(--font-space-grotesk)" }}
              >
                FADLI<span style={{ color: C.primary }}>.</span>
              </span>
              <span
                className="text-[9px] font-bold tracking-wider uppercase mt-0.5"
                style={{ color: isDarkPage ? "#34D399" : C.primary }}
              >
                DEV
              </span>
            </div>
          </Link>
        </motion.div>

        {/* ── Block 2 (Center): Animated Floating Nav Pill Bar ── */}
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="hidden md:flex items-center p-1.5 rounded-full border-2 shadow-xl transition-colors"
          style={{
            background: theme.cardBg,
            borderColor: theme.cardBorder,
            boxShadow: theme.shadow,
          }}
        >
          <nav
            className="flex items-center gap-1 p-1 rounded-full border transition-colors"
            style={{
              background: theme.navInnerBg,
              borderColor: theme.navInnerBorder,
            }}
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-1.5 text-xs font-black rounded-full select-none flex items-center gap-1.5 transition-all duration-200 group"
                  style={{
                    color: active ? theme.activePillText : theme.textInactive,
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = isDarkPage ? "#6EE7B7" : C.primary;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = theme.textInactive;
                    }
                  }}
                >
                  {active && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        background: theme.activePillBg,
                        border: isDarkPage ? "2px solid #111" : "2px solid #0D9488",
                        boxShadow: isDarkPage ? "2px 2px 0px #111" : "2px 2px 0px #0D9488",
                      }}
                    />
                  )}
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="material-symbols-outlined text-sm relative z-10"
                    style={{ color: active ? "#fff" : (isDarkPage ? "#34D399" : C.primary) }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </motion.div>

        {/* ── Block 3 (Right): Animated Floating Action Badges ── */}
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 flex-shrink-0"
        >
          {/* GitHub Badge */}
          <motion.a
            whileHover={{ scale: 1.08, rotate: -4 }}
            whileTap={{ scale: 0.94 }}
            href="https://github.com/FdliHabibiLubis"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-2xl border-2 hover:border-teal-500 transition-all shadow-xl"
            style={{
              background: theme.cardBg,
              borderColor: theme.cardBorder,
              color: theme.textPrimary,
              boxShadow: theme.shadow,
            }}
            title="GitHub"
          >
            <span className="material-symbols-outlined text-base">code</span>
          </motion.a>

          {/* Hire Me CTA Card */}
          <motion.a
            id="navbar-hire-me"
            whileHover={{ scale: 1.06, rotate: 0 }}
            whileTap={{ scale: 0.94 }}
            href="mailto:habibifadli682@gmail.com"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-black text-white border-2 transition-all duration-200 group shadow-xl"
            style={{
              background: C.primary,
              borderColor: isDarkPage ? "#111" : "#0D9488",
              boxShadow: isDarkPage ? "3.5px 3.5px 0px #111" : "3.5px 3.5px 0px #0D9488",
              transform: "rotate(3deg)",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            <span>Hire Me</span>
            <span className="material-symbols-outlined text-xs transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              arrow_outward
            </span>
          </motion.a>

          {/* Mobile Hamburger Toggle Button */}
          <motion.button
            id="mobile-menu-toggle"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-2xl text-white border-2 cursor-pointer select-none shadow-xl"
            style={{
              background: C.primary,
              borderColor: isDarkPage ? "#111" : "#0D9488",
              boxShadow: isDarkPage ? "3px 3px 0px #111" : "3px 3px 0px #0D9488",
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-4 h-4 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-4 h-4 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </motion.button>
        </motion.div>

      </div>

      {/* ── Mobile Centered Floating Menu Modal ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden pointer-events-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-sm rounded-3xl p-6 z-10 shadow-2xl"
              style={{
                background: theme.cardBg,
                color: theme.textPrimary,
                border: `2px solid ${theme.cardBorder}`,
                boxShadow: theme.shadow,
              }}
            >
              <div
                className="flex items-center justify-between pb-4 border-b-2 mb-5"
                style={{ borderColor: isDarkPage ? "#193C31" : "#E2E8F0" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: C.primary,
                      border: "2px solid #111",
                      boxShadow: "2px 2px 0px #111",
                    }}
                  >
                    <span
                      className="font-black text-white text-xs"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      F
                    </span>
                  </div>
                  <span
                    className="font-black tracking-tight text-base"
                    style={{ color: theme.textPrimary, fontFamily: "var(--font-space-grotesk)" }}
                  >
                    NAVIGASI<span style={{ color: C.primary }}>.</span>
                  </span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full border-2 font-black transition-colors"
                  style={{
                    background: theme.navInnerBg,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                    boxShadow: "2px 2px 0px #111",
                  }}
                  aria-label="Tutup menu"
                >
                  <svg className="w-5 h-5 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-2.5 mb-6">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl font-black text-sm transition-all border-2"
                      style={{
                        color: active ? "#FFFFFF" : theme.textPrimary,
                        background: active ? C.primary : theme.navInnerBg,
                        borderColor: active ? (isDarkPage ? "#111" : "#0D9488") : theme.navInnerBorder,
                        boxShadow: active ? "3px 3px 0px #111" : "2px 2px 0px #CBD5E1",
                        fontFamily: "var(--font-space-grotesk)",
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base" style={{ color: active ? "#FFFFFF" : C.primary }}>{item.icon}</span>
                        {item.label}
                      </span>
                      <span className="text-xs opacity-75">{active ? "● Aktif" : "→"}</span>
                    </Link>
                  );
                })}
              </div>

              <div
                className="flex gap-2.5 pt-2 border-t-2"
                style={{ borderColor: isDarkPage ? "#193C31" : "#E2E8F0" }}
              >
                <a
                  href="mailto:habibifadli682@gmail.com"
                  className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-black text-white border-2 border-black transition-transform active:translate-y-0.5"
                  style={{
                    background: C.primary,
                    boxShadow: "3px 3px 0px #111",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  Hire Me ↗
                </a>
                <a
                  href="https://github.com/FdliHabibiLubis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-black border-2 transition-transform active:translate-y-0.5"
                  style={{
                    background: theme.navInnerBg,
                    borderColor: theme.cardBorder,
                    color: theme.textPrimary,
                    boxShadow: "3px 3px 0px #111",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
