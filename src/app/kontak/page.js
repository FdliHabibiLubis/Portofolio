"use client";

import { motion } from "framer-motion";
import { C } from "../lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function KontakPage() {
  return (
    <div style={{ backgroundColor: "#fff", color: "#111" }}>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 md:py-24"
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-6">

          {/* Standardized Header */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: C.primary }}>
              <span className="w-8 h-px" style={{ background: C.primary }} />
              Hubungi Saya
            </div>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#111", fontFamily: "var(--font-space-grotesk)" }}>
              Mari Berkolaborasi<span style={{ color: C.primary }}>.</span>
            </h1>
            <p className="max-w-md text-sm mt-2" style={{ color: "#6b7280" }}>
              Punya ide menarik, butuh pengembang web/mobile, atau mau sekadar diskusi santai? Pilih kanal di bawah ini.
            </p>
          </motion.div>

          {/* Responsive Bento Grid (2 Columns on Mobile & Desktop) */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3.5 sm:gap-4 max-w-[800px]">

          {/* Card 1: Email (Featured Hero Card - Spans 2 cols) */}
          <a
            id="card-email"
            href="mailto:habibifadli682@gmail.com"
            className="col-span-2 group relative p-5 sm:p-6 rounded-2xl border-2 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden"
            style={{
              background: "#fff",
              borderColor: "#e5e7eb",
              boxShadow: "3.5px 3.5px 0px #e5e7eb",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.primary;
              e.currentTarget.style.boxShadow = `4.5px 4.5px 0px ${C.primary}`;
              e.currentTarget.style.transform = "translate(-1.5px, -1.5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "3.5px 3.5px 0px #e5e7eb";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center border-2 flex-shrink-0"
                style={{ background: C.primaryBg, borderColor: C.primaryBorder }}
              >
                <span className="material-symbols-outlined text-2xl" style={{ color: C.primary }}>
                  mail
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    EMAIL UTAMA
                  </span>
                  <span
                    className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border"
                    style={{ background: C.primaryBg, borderColor: C.primaryBorder, color: C.primary }}
                  >
                    FAST RESPONSE
                  </span>
                </div>
                <div className="font-bold text-sm sm:text-base text-gray-900 group-hover:underline break-all">
                  habibifadli682@gmail.com
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-xl border-2 transition-colors"
              style={{ background: C.primary, borderColor: C.primaryDark, color: "#fff", boxShadow: `2.5px 2.5px 0px ${C.primaryDark}` }}>
              <span>Kirim Mail</span>
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </div>
          </a>

          {/* Card 2: Instagram */}
          <a
            id="card-instagram"
            href="https://www.instagram.com/fdlilbs.23?igsh=MWtyOGRnamo2czQ1OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 group p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between min-h-[120px] sm:min-h-[135px]"
            style={{
              background: "#fff",
              borderColor: "#e5e7eb",
              boxShadow: "3.5px 3.5px 0px #e5e7eb",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#E1306C";
              e.currentTarget.style.boxShadow = "4.5px 4.5px 0px #E1306C";
              e.currentTarget.style.transform = "translate(-1.5px, -1.5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.boxShadow = "3.5px 3.5px 0px #e5e7eb";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border-2"
                style={{ background: "rgba(225,48,108,0.08)", borderColor: "rgba(225,48,108,0.3)" }}
              >
                <svg className="w-5 h-5" style={{ fill: "#E1306C" }} viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border text-pink-600 border-pink-200 bg-pink-50">
                SOCIAL
              </span>
            </div>

            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-0.5">
                INSTAGRAM
              </div>
              <div className="font-bold text-xs sm:text-sm text-gray-900 group-hover:underline truncate">
                @fdlilbs.23
              </div>
            </div>
          </a>

          {/* Card 3: GitHub (Distinct Dark Tech Card) */}
          <a
            id="card-github"
            href="https://github.com/FdliHabibiLubis"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 group p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between min-h-[120px] sm:min-h-[135px]"
            style={{
              background: "#0F172A",
              borderColor: "#1E293B",
              boxShadow: "3.5px 3.5px 0px #e5e7eb",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.primary;
              e.currentTarget.style.boxShadow = `4.5px 4.5px 0px ${C.primary}`;
              e.currentTarget.style.transform = "translate(-1.5px, -1.5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1E293B";
              e.currentTarget.style.boxShadow = "3.5px 3.5px 0px #e5e7eb";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border-2"
                style={{ background: "rgba(13,148,136,0.2)", borderColor: "rgba(13,148,136,0.4)" }}
              >
                <span className="material-symbols-outlined text-xl text-teal-400">
                  code
                </span>
              </div>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border text-teal-300 border-teal-800 bg-teal-950/60">
                REPO & REPO
              </span>
            </div>

            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-teal-400/70 mb-0.5">
                GITHUB
              </div>
              <div className="font-bold text-xs sm:text-sm text-white group-hover:underline truncate">
                FdliHabibiLubis
              </div>
            </div>
          </a>

          {/* Card 4: Lokasi */}
          <div
            id="card-location"
            className="col-span-2 group p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-4"
            style={{
              background: "#fff",
              borderColor: "#e5e7eb",
              boxShadow: "3.5px 3.5px 0px #e5e7eb",
            }}
          >
            <div className="flex items-center gap-3.5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border-2 flex-shrink-0"
                style={{ background: "rgba(22,163,74,0.08)", borderColor: "rgba(22,163,74,0.3)" }}
              >
                <span className="material-symbols-outlined text-xl" style={{ color: C.accentLime }}>
                  location_on
                </span>
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-0.5">
                  LOKASI UTAMA
                </div>
                <div className="font-bold text-xs sm:text-sm text-gray-900">
                  Medan, Indonesia
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1.5"
              style={{ background: "#F8FAFC", borderColor: "#e5e7eb", color: C.accentLime }}>
              <span className="w-2 h-2 rounded-full" style={{ background: C.accentLime }} />
              WIB (UTC+7)
            </div>
          </div>

        </motion.div>

        </div>
      </motion.section>
    </div>
  );
}





