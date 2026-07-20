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

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="sticky top-0 z-50 px-4 pt-3 pb-4" style={{ backgroundColor: "transparent" }}>

      {/* ── Floating Navbar Shell ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative max-w-[1100px] mx-auto rounded-2xl overflow-hidden"
        style={{
          background: "#fff",
          border: "2px solid #111",
          boxShadow: scrolled
            ? `5px 5px 0px ${C.primary}`
            : "5px 5px 0px #111",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Scroll progress bar — runs along top border */}
        <div className="absolute top-0 left-0 h-[3px] z-30 transition-all duration-150 pointer-events-none"
          style={{ width: `${scrollProgress}%`, background: C.primary }} />

        {/* Abstract corner decoration — top right */}
        <div className="absolute top-2.5 right-32 md:right-44 pointer-events-none hidden md:flex gap-1 items-center opacity-20">
          <span className="w-2 h-2 rounded-sm rotate-45" style={{ background: C.primary }} />
          <span className="w-1.5 h-1.5 rounded-sm rotate-45" style={{ background: "#111" }} />
          <span className="w-1 h-1 rounded-sm rotate-45" style={{ background: C.primary }} />
        </div>

        <nav className="flex items-center h-[58px]">

          {/* ── Logo section (colored left strip) ── */}
          <Link href="/" className="flex items-center gap-3 pl-4 pr-5 h-full select-none group flex-shrink-0"
            style={{
              textDecoration: "none",
              borderRight: "2px solid #111",
              background: C.primaryBg,
              position: "relative",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.primaryBg.replace("0.08", "0.14"))}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.primaryBg)}
          >
            {/* Abstract dot grid in logo bg */}
            <div className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle, ${C.primary} 1px, transparent 1px)`,
                backgroundSize: "10px 10px",
              }} />
            <div
              className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105"
              style={{ background: C.primary, border: `2px solid #111`, boxShadow: `2px 2px 0px #111` }}
            >
              <span className="font-black text-white" style={{ fontSize: "15px", fontFamily: "var(--font-space-grotesk)" }}>F</span>
            </div>
            <span className="relative z-10 font-black tracking-tight text-[1.1rem]" style={{ color: "#111", fontFamily: "var(--font-space-grotesk)" }}>
              FADLI<span style={{ color: C.primary }}>.DEV</span>
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden md:flex items-center flex-1 px-3 gap-0.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link key={item.href} href={item.href}
                  className="relative px-3.5 py-1.5 text-sm font-bold rounded-lg transition-all duration-150 group"
                  style={{ color: active ? C.primary : "#6b7280" }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "#111"; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "#6b7280"; }}
                >
                  {/* Highlighter underline for active */}
                  {active ? (
                    <>
                      <span className="relative z-10">{item.label}</span>
                      <motion.span layoutId="navUnderline"
                        className="absolute bottom-1 left-2 right-2 h-[3px] rounded-full"
                        style={{ background: C.primary }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                      <motion.span layoutId="navActiveBg"
                        className="absolute inset-0 rounded-lg -z-10"
                        style={{ background: C.primaryBg }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    </>
                  ) : (
                    <span className="relative z-10">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center pr-3 flex-shrink-0" style={{ borderLeft: "2px solid #e5e7eb", paddingLeft: "12px" }}>
            <a id="navbar-hire-me" href="mailto:habibifadli682@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black transition-all duration-150"
              style={{ background: C.primary, color: "#fff", border: "2px solid #111", boxShadow: "3px 3px 0px #111" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.primaryDark; e.currentTarget.style.transform = "translate(-1px,-1px)"; e.currentTarget.style.boxShadow = "3px 3px 0px #111"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = C.primary; e.currentTarget.style.transform = "none"; }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>mail</span>
              Hire Me
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <div className="md:hidden ml-auto pr-3">
            <button id="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-150"
              style={{
                background: mobileMenuOpen ? C.primaryBg : "#f9fafb",
                border: `2px solid ${mobileMenuOpen ? C.primary : "#e5e7eb"}`,
                color: mobileMenuOpen ? C.primary : "#6b7280",
                boxShadow: mobileMenuOpen ? `2px 2px 0px ${C.primary}` : "2px 2px 0px #e5e7eb",
              }}
              aria-label="Buka menu navigasi">
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>{mobileMenuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Drawer (below the floating bar) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="max-w-[1100px] mx-auto mt-2 rounded-2xl overflow-hidden"
            style={{ background: "#fff", border: "2px solid #111", boxShadow: "5px 5px 0px #111", transformOrigin: "top" }}
          >
            <div className="flex flex-col p-4 gap-1.5">
              {navItems.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.div key={item.href}
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}>
                    <Link href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-150"
                      style={{
                        color: active ? C.primary : "#6b7280",
                        background: active ? C.primaryBg : "transparent",
                        border: `2px solid ${active ? C.primaryBorder : "transparent"}`,
                      }}>
                      {active && <span className="w-1.5 h-1.5 rounded-sm rotate-45 flex-shrink-0" style={{ background: C.primary }} />}
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a href="mailto:habibifadli682@gmail.com"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.04 + 0.04 }}
                className="mt-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-black"
                style={{ background: C.primary, color: "#fff", border: "2px solid #111", boxShadow: "3px 3px 0px #111" }}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>
                Kirim Email
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
