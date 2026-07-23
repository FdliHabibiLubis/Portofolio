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

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* ── Spacer ── */}
      <div className="h-5" />

      {/* ── Pill Floating Navbar ── */}
      <div className="sticky top-4 z-50 flex justify-center px-4">

        {/* ── Backdrop Overlay Mobile ── */}
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

        {/* ── Pill Container ── */}
        <div
          className="relative flex items-center justify-between gap-2 bg-white rounded-full z-50 px-2 py-1.5"
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

        {/* ── Mobile Dropdown ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute top-[calc(100%+8px)] left-4 right-4 bg-white rounded-2xl z-50"
              style={{
                border: "2px solid #111",
                boxShadow: "5px 5px 0px #111",
              }}
            >
              <div className="p-3 flex flex-col gap-2">

                {/* Nav links — 2 kolom grid pill */}
                <div className="grid grid-cols-2 gap-1.5">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-black border-2 border-black"
                        style={{
                          color: active ? "#fff" : "#111",
                          background: active ? C.primary : "#f4f4f5",
                          boxShadow: "2px 2px 0px #111",
                          fontFamily: "var(--font-space-grotesk)",
                        }}
                      >
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />}
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="border-t-2 border-black" />

                {/* Action buttons */}
                <div className="flex gap-1.5">
                  <a
                    href="mailto:habibifadli682@gmail.com"
                    className="flex-1 flex items-center justify-center py-2 rounded-full text-xs font-black text-white border-2 border-black"
                    style={{
                      background: C.primary,
                      boxShadow: "2px 2px 0px #111",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    Hire Me ↗
                  </a>
                  <a
                    href="https://github.com/FdliHabibiLubis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center py-2 rounded-full text-xs font-black text-black bg-white border-2 border-black"
                    style={{
                      boxShadow: "2px 2px 0px #111",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom spacer ── */}
      <div className="h-2" />
    </>
  );
}

