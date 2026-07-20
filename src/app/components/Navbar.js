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

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        backgroundColor: scrolled ? "rgba(15,23,18,0.96)" : "rgba(15,23,18,0.7)",
        borderBottom: `1px solid ${scrolled ? C.glassBorder : "transparent"}`,
      }}
    >
      {/* Scroll progress bar — solid color */}
      <div
        className="absolute top-0 left-0 h-[2px] z-20 transition-all duration-150 pointer-events-none"
        style={{ width: `${scrollProgress}%`, background: C.primary }}
      />

      <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-5 md:px-6 h-[64px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 select-none group" style={{ textDecoration: "none" }}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105"
            style={{ background: C.primary }}
          >
            <span className="font-black text-white" style={{ fontSize: "15px", fontFamily: "var(--font-space-grotesk)" }}>F</span>
          </div>
          <span className="font-black tracking-tight text-[1.15rem]" style={{ color: C.text, fontFamily: "var(--font-space-grotesk)" }}>
            FADLI<span style={{ color: C.primary }}>.DEV</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
                style={{ color: active ? C.primary : C.muted }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = C.text; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = C.muted; }}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{ background: C.primaryBg, border: `1px solid ${C.primaryBorder}` }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          id="navbar-hire-me"
          href="mailto:habibifadli682@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black transition-all duration-200"
          style={{ background: C.primary, color: "#fff" }}
          onMouseEnter={(e) => e.currentTarget.style.background = C.primaryDark}
          onMouseLeave={(e) => e.currentTarget.style.background = C.primary}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
          style={{
            background: mobileMenuOpen ? C.primaryBg : "transparent",
            border: `1px solid ${mobileMenuOpen ? C.primaryBorder : C.glassBorder}`,
            color: mobileMenuOpen ? C.primary : C.muted,
          }}
          aria-label="Buka menu navigasi"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden"
            style={{ background: "rgba(15,23,18,0.98)", borderBottom: `1px solid ${C.glassBorder}`, backdropFilter: "blur(16px)" }}
          >
            <div className="flex flex-col p-4 gap-1.5">
              {navItems.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.div key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                  >
                    <Link href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150"
                      style={{
                        color: active ? C.primary : C.muted,
                        background: active ? C.primaryBg : "transparent",
                        border: `1px solid ${active ? C.primaryBorder : "transparent"}`,
                      }}
                    >
                      {active && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: C.primary }} />}
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a href="mailto:habibifadli682@gmail.com"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.04 + 0.05 }}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-black"
                style={{ background: C.primary, color: "#fff" }}
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
