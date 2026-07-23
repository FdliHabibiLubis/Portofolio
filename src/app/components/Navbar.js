"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../lib/data";

const navItems = [
  { label: "Tentang Saya", href: "/" },
  { label: "Proyek", href: "/proyek" },
  { label: "Keahlian", href: "/keahlian" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div className="sticky top-0 z-50 px-3 sm:px-4 pt-3 pb-2 transition-all duration-300">
      
      {/* ── Background Overlay for Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* ── Floating Header Shell dengan Shadow Keras (Double Card Stack Effect) ── */}
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative max-w-[1100px] mx-auto rounded-2xl z-50 bg-white transition-all duration-200"
        style={{
          border: "2px solid #111",
          boxShadow: scrolled ? `5px 5px 0px ${C.primary}` : "5px 5px 0px #111",
        }}
      >
        {/* Scroll Progress Bar (Hard Solid Line) */}
        <div
          className="absolute top-0 left-0 h-[3px] z-30 transition-all duration-150 pointer-events-none rounded-t-2xl"
          style={{
            width: `${scrollProgress}%`,
            background: C.primary,
          }}
        />

        <nav className="flex items-center justify-between h-[58px] px-3 sm:px-4">
          
          {/* ── Logo Section ── */}
          <Link
            href="/"
            className="flex items-center gap-3 py-1 rounded-xl select-none group relative transition-all duration-200"
            style={{ textDecoration: "none" }}
          >
            {/* Logo Badge 'F' dengan shadow keras */}
            <div className="relative flex items-center justify-center">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-150 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]"
                style={{
                  background: C.primary,
                  border: "2px solid #111",
                  boxShadow: "2px 2px 0px #111",
                }}
              >
                <span
                  className="font-black text-white"
                  style={{ fontSize: "16px", fontFamily: "var(--font-space-grotesk)" }}
                >
                  F
                </span>
              </div>
            </div>

            {/* Brand Text (Tanpa Ikon) */}
            <div className="flex flex-col">
              <span
                className="font-black tracking-tight text-[1.15rem] leading-none"
                style={{ color: "#111", fontFamily: "var(--font-space-grotesk)" }}
              >
                FADLI<span style={{ color: C.primary }}>.</span>
              </span>
              <span
                className="text-[9.5px] font-bold tracking-wider text-emerald-700 uppercase mt-0.5"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation Links (Tanpa Ikon, Teks Bersih) ── */}
          <div className="hidden md:flex items-center gap-1.5 p-1 rounded-xl">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-xs font-black rounded-xl transition-all duration-150 group select-none"
                  style={{
                    color: active ? "#ffffff" : "#374151",
                  }}
                >
                  {/* Active Card Pill dengan Hard Shadow */}
                  {active && (
                    <motion.span
                      layoutId="activeHardPill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: C.primary,
                        border: "2px solid #111",
                        boxShadow: "2.5px 2.5px 0px #111",
                      }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}

                  {/* Label Teks Saja */}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* ── Desktop Action Buttons (Hard Card Shadow, Tanpa Ikon) ── */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* GitHub Link */}
            <a
              href="https://github.com/FdliHabibiLubis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl text-xs font-black text-gray-900 bg-white border-2 border-black transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{ boxShadow: "2.5px 2.5px 0px #111" }}
              title="GitHub Profile"
            >
              GitHub
            </a>

            {/* Hire Me CTA Button */}
            <a
              id="navbar-hire-me"
              href="mailto:habibifadli682@gmail.com"
              className="px-4 py-2 rounded-xl text-xs font-black transition-all duration-150 cursor-pointer select-none"
              style={{
                background: C.primary,
                color: "#ffffff",
                border: "2px solid #111",
                boxShadow: "3px 3px 0px #111",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.primaryDark;
                e.currentTarget.style.transform = "translate(-1px,-1px)";
                e.currentTarget.style.boxShadow = "4px 4px 0px #111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = C.primary;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "3px 3px 0px #111";
              }}
            >
              Hire Me
            </a>
          </div>

          {/* ── Mobile Hamburger Button ── */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-2 rounded-xl text-xs font-black transition-all duration-150 cursor-pointer bg-white text-black border-2 border-black"
              style={{ boxShadow: "2.5px 2.5px 0px #111" }}
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? "TUTUP" : "MENU"}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Drawer (Double Card Shadow, Tanpa Ikon) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="max-w-[1100px] mx-auto mt-2 rounded-2xl overflow-hidden relative z-50 bg-white"
            style={{
              border: "2px solid #111",
              boxShadow: "5px 5px 0px #111",
            }}
          >
            <div className="flex flex-col p-4 gap-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-gray-500 px-2 pt-1 pb-1">
                Navigasi Utama
              </div>

              {navItems.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-black transition-all duration-150"
                      style={{
                        color: active ? "#ffffff" : "#111827",
                        background: active ? C.primary : "#f9fafb",
                        border: "2px solid #111",
                        boxShadow: active ? "3px 3px 0px #111" : "2px 2px 0px #111",
                      }}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="w-2 h-2 rounded-sm rotate-45 bg-white" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="my-1 border-t-2 border-black" />

              {/* Mobile Actions (Tanpa Ikon) */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.04 + 0.04 }}
                className="flex items-center gap-2 pt-1"
              >
                <a
                  href="mailto:habibifadli682@gmail.com"
                  className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl text-sm font-black text-white"
                  style={{
                    background: C.primary,
                    border: "2px solid #111",
                    boxShadow: "3px 3px 0px #111",
                  }}
                >
                  Hubungi Saya
                </a>

                <a
                  href="https://github.com/FdliHabibiLubis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl text-sm font-black text-black bg-white border-2 border-black"
                  style={{ boxShadow: "3px 3px 0px #111" }}
                >
                  GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



