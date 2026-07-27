"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../lib/data";

const navItems = [
  { label: "Tentang", href: "/" },
  { label: "Proyek", href: "/proyek" },
  { label: "Keahlian", href: "/keahlian" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      {/* ── Spacer ── */}
      <div className="h-5" />

      {/* ── Pill Floating Navbar ── */}
      <div className="sticky top-4 z-50 flex justify-center px-4">

        {/* ── Pill Container ── */}
        <div
          className="relative flex items-center justify-between gap-2 bg-white rounded-full z-40 px-2 py-1.5"
          style={{
            border: "2px solid #111",
            boxShadow: scrolled
              ? `4px 4px 0px ${C.primary}`
              : "4px 4px 0px #111",
            minWidth: "min(680px, calc(100vw - 32px))",
            maxWidth: "720px",
            transition: "box-shadow 0.3s ease",
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2 px-1 select-none flex-shrink-0"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: C.primary,
                border: "2px solid #111",
                boxShadow: "1.5px 1.5px 0px #111",
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
              className="font-black tracking-tight text-sm"
              style={{ color: "#111", fontFamily: "var(--font-space-grotesk)" }}
            >
              FADLI<span style={{ color: C.primary }}>.</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3.5 py-1.5 text-xs font-black rounded-full select-none"
                  style={{
                    color: active ? "#fff" : "#374151",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  {active && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: C.primary,
                        border: "2px solid #111",
                        boxShadow: "2px 2px 0px #111",
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* GitHub — desktop only */}
            <a
              href="https://github.com/FdliHabibiLubis"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-3 py-1.5 rounded-full text-xs font-black text-gray-800 bg-white border-2 border-black"
              style={{
                boxShadow: "2px 2px 0px #111",
                fontFamily: "var(--font-space-grotesk)",
              }}
              title="GitHub"
            >
              GitHub
            </a>

            {/* Hire Me CTA */}
            <a
              id="navbar-hire-me"
              href="mailto:habibifadli682@gmail.com"
              className="hidden md:flex items-center px-3.5 py-1.5 rounded-full text-xs font-black text-white border-2 border-black"
              style={{
                background: C.primary,
                boxShadow: "2px 2px 0px #111",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              Hire Me ↗
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-white border-2 border-black cursor-pointer select-none"
              style={{
                background: C.primary,
                boxShadow: "2px 2px 0px #111",
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
            </button>
          </div>
        </div>

        {/* ── Mobile Centered Floating Menu Modal ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden">
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Floating Menu Card in Screen Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative w-full max-w-sm bg-white rounded-3xl p-6 z-10 shadow-2xl"
                style={{
                  border: "3px solid #111",
                  boxShadow: "8px 8px 0px #111",
                }}
              >
                {/* Header inside Modal */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-5">
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
                      style={{ color: "#111", fontFamily: "var(--font-space-grotesk)" }}
                    >
                      NAVIGASI<span style={{ color: C.primary }}>.</span>
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 border-2 border-black font-black text-black hover:bg-gray-200 transition-colors"
                    style={{ boxShadow: "2px 2px 0px #111" }}
                    aria-label="Tutup menu"
                  >
                    <svg className="w-5 h-5 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2.5 mb-6">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3 rounded-2xl font-black text-sm transition-all border-2 border-black"
                        style={{
                          color: active ? "#fff" : "#111",
                          background: active ? C.primary : "#f8fafc",
                          boxShadow: active ? "3px 3px 0px #111" : "2px 2px 0px #111",
                          fontFamily: "var(--font-space-grotesk)",
                        }}
                      >
                        <span className="flex items-center gap-2">
                          {active && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                          {item.label}
                        </span>
                        <span className="text-xs opacity-75">{active ? "● Aktif" : "→"}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2.5 pt-2 border-t-2 border-black">
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
                    className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-black text-black bg-white border-2 border-black transition-transform active:translate-y-0.5"
                    style={{
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
      </div>

      {/* ── Bottom spacer ── */}
      <div className="h-2" />
    </>
  );
}

