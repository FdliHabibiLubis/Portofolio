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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: scrolled ? "rgba(15,23,18,0.97)" : "rgba(15,23,18,0.65)",
        borderBottom: scrolled
          ? "1px solid rgba(16,217,166,0.12)"
          : "1px solid rgba(16,217,166,0.06)",
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {/* ── Scroll progress bar ── */}
      <div
        className="absolute top-0 left-0 h-[2px] z-20 transition-all duration-150 pointer-events-none"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #10D9A6, #33CC0F, #1268D6)",
          boxShadow: "0 0 10px rgba(16,217,166,0.7), 0 0 4px rgba(51,204,15,0.5)",
        }}
      />

      <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-5 md:px-6 h-[68px]">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-3 select-none group"
          style={{ textDecoration: "none" }}
        >
          <div
            className="relative w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #10D9A6, #1268D6)",
              boxShadow: "0 0 18px rgba(16,217,166,0.55)",
            }}
          >
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.2), transparent)" }}
            />
            <span
              className="relative z-10 font-black text-white"
              style={{ fontSize: "15px", fontFamily: "var(--font-space-grotesk)", letterSpacing: "-0.5px" }}
            >
              F
            </span>
          </div>
          <span className="font-black tracking-tight text-[1.2rem] text-white transition-all duration-200">
            FADLI
            <span
              style={{
                background: "linear-gradient(135deg, #10D9A6, #1268D6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              .DEV
            </span>
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
                style={{ color: active ? "#fff" : "rgba(242,251,247,0.42)" }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = "rgba(242,251,247,0.85)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = "rgba(242,251,247,0.42)";
                }}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(16,217,166,0.14), rgba(18,104,214,0.08))",
                      border: "1px solid rgba(16,217,166,0.28)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {active && (
                  <span
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: C.primary, boxShadow: `0 0 6px ${C.primary}` }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── Desktop CTA ── */}
        <a
          id="navbar-hire-me"
          href="mailto:habibifadli682@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black relative overflow-hidden group transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #10D9A6 0%, #1268D6 100%)",
            color: "#0F1712",
            boxShadow: "0 0 22px rgba(16,217,166,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 40px rgba(16,217,166,0.7)";
            e.currentTarget.style.transform = "translateY(-1px) scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 22px rgba(16,217,166,0.4)";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
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
            background: mobileMenuOpen ? C.primaryBg : "rgba(16,217,166,0.04)",
            border: mobileMenuOpen ? `1px solid ${C.primaryBorder}` : "1px solid rgba(16,217,166,0.12)",
            color: mobileMenuOpen ? C.primary : "rgba(242,251,247,0.65)",
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
              background: "rgba(15,23,18,0.98)",
              borderBottom: "1px solid rgba(16,217,166,0.1)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex flex-col p-4 gap-1.5">
              {navItems.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.div key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150"
                      style={{
                        color: active ? C.primary : "rgba(242,251,247,0.6)",
                        background: active
                          ? "linear-gradient(135deg, rgba(16,217,166,0.12), rgba(18,104,214,0.06))"
                          : "transparent",
                        border: active
                          ? "1px solid rgba(16,217,166,0.22)"
                          : "1px solid transparent",
                      }}
                    >
                      {active && (
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: C.primary, boxShadow: `0 0 6px ${C.primary}` }}
                        />
                      )}
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              {/* Mobile CTA */}
              <motion.a
                href="mailto:habibifadli682@gmail.com"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.04 + 0.05 }}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-black"
                style={{ background: "linear-gradient(135deg, #10D9A6, #1268D6)", color: "#0F1712", boxShadow: "0 0 20px rgba(16,217,166,0.4)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>
                Kirim Email
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
