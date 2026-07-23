"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { C } from "./lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff", color: "#111" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white">

        {/* ── Top Dark Block with Dot-Grid Background ── */}
        <div style={{ backgroundColor: C.bg }} className="relative pt-16 pb-[160px] md:pb-[200px] overflow-hidden">

          {/* Abstract background dot pattern (Disukai pengguna) */}
          <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, ${C.primary} 1.5px, transparent 1.5px)`,
              backgroundSize: "28px 28px",
            }} />

          {/* Abstract floating background geometric accents */}
          <div className="absolute top-12 left-10 w-12 h-12 rounded-xl border-2 border-white/10 rotate-12 pointer-events-none hidden md:block" />
          <div className="absolute bottom-16 right-16 w-20 h-20 rounded-full border border-teal-500/20 pointer-events-none hidden md:block" />

          <div className="max-w-[1100px] mx-auto px-5 md:px-6 relative z-10">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Header Text Block (Centered) */}
              <div className="text-center max-w-2xl mx-auto">
                
                {/* Badge */}
                <motion.div variants={fadeInUp} className="flex justify-center mb-4">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontFamily: "var(--font-space-grotesk)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.primary }} />
                    Frontend Web Developer
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1 variants={fadeInUp}
                  className="text-[42px] sm:text-[54px] md:text-[64px] font-black leading-[1.06] tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "#fff" }}
                >
                  Halo, saya{" "}
                  <span style={{ color: C.primary }}>Fadli</span>
                </motion.h1>

                {/* Subtitle / Bio */}
                <motion.p variants={fadeInUp} className="text-sm md:text-base leading-relaxed max-w-lg mx-auto"
                  style={{ color: "rgba(255,255,255,0.65)" }}>
                  Mahasiswa Ilmu Komputer, fokus membangun antarmuka web yang cepat, responsif, dan ramah pengguna.
                </motion.p>

              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Photo & Lower Content Container (Foto Mengambang di Antara Hitam & Putih) ── */}
        <div className="max-w-[1000px] mx-auto px-5 md:px-6 relative z-10 -mt-[125px] md:-mt-[160px]">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* ── Centered Photo dengan Animasi Neo-Brutalist Shadow Snap ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center mb-10"
            >
              <div className="relative group cursor-pointer select-none">
                
                {/* Abstract offset background shape 1 (Primary Teal Solid Frame with Snap Shift) */}
                <div className="absolute rounded-2xl pointer-events-none transition-all duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]"
                  style={{
                    width: "100%", height: "100%",
                    top: "14px", left: "14px",
                    background: C.primary,
                    opacity: 0.95,
                  }} />

                {/* Abstract offset background shape 2 (White Border Card with Snap Shift) */}
                <div className="absolute rounded-2xl pointer-events-none transition-all duration-200 ease-out group-hover:-translate-x-[3px] group-hover:-translate-y-[3px]"
                  style={{
                    width: "60%", height: "40%",
                    bottom: "-12px", right: "-16px",
                    background: "#fff",
                    border: `3px solid ${C.primaryBorder}`,
                  }} />

                {/* Main Profile Photo Container (Presses down on hover with smooth spring snap) */}
                <div
                  className="relative z-10 w-[230px] h-[280px] md:w-[280px] md:h-[340px] rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:translate-x-[4px] group-hover:translate-y-[4px]"
                  style={{
                    boxShadow: "12px 12px 0px 0px " + C.primaryDark + ", 24px 24px 0px 0px rgba(13,148,136,0.2)",
                    border: "3px solid #fff",
                  }}
                >
                  <Image
                    src="/assets/images/me.jpeg"
                    alt="Fadli Habibi Lubis"
                    width={400} height={480}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                </div>

                {/* Floating Badge (Top Left) dengan animasi terangkat */}
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -top-4 -left-6 px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase select-none z-20 pointer-events-none transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-105"
                  style={{ background: "#fff", color: C.primary, border: `2px solid ${C.glassBorder}`, boxShadow: "4px 4px 0px " + C.primary }}>
                  FRONTEND DEV
                </motion.div>

              </div>
            </motion.div>

            {/* ── Refined Action Buttons & Stats Section ── */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-8 mb-12">
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                <Link href="/proyek"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm transition-all duration-200"
                  style={{ background: C.primary, color: "#fff", boxShadow: "4px 4px 0px " + C.primaryDark }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.primaryDark; e.currentTarget.style.transform = "translate(-1px,-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = C.primary; e.currentTarget.style.transform = "none"; }}>
                  Lihat Proyek
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                </Link>
                <Link href="/kontak"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm transition-all duration-200"
                  style={{ background: "#fff", border: `2px solid ${C.primary}`, color: C.primary, boxShadow: "4px 4px 0px " + C.glassBorder }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.primaryBg; e.currentTarget.style.transform = "translate(-1px,-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "none"; }}>
                  Hubungi Saya
                </Link>
              </div>

              {/* Stats Counters */}
              <div className="flex items-center justify-center gap-8 md:gap-14 pt-4 border-t border-gray-100 w-full max-w-lg">
                {[
                  { value: "5+", label: "Proyek Selesai" },
                  { value: "1+", label: "Tahun Belajar" },
                  { value: "6+", label: "Teknologi" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-black" style={{ color: C.primary, fontFamily: "var(--font-space-grotesk)" }}>
                      {s.value}
                    </div>
                    <div className="text-xs font-semibold mt-0.5" style={{ color: "#6b7280" }}>{s.label}</div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* ── Refined 4 Info Cards Grid ── */}
            <motion.div variants={fadeInUp} className="pb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: "school", label: "Pendidikan", value: "Ilmu Komputer" },
                  { icon: "location_on", label: "Lokasi", value: "Medan, Indonesia" },
                  { icon: "work", label: "Posisi", value: "Frontend Dev" },
                  { icon: "language", label: "Bahasa", value: "ID & EN" },
                ].map((item) => (
                  <div key={item.label}
                    className="flex items-center gap-3.5 p-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
                    style={{ background: "#fff", border: "1px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: C.primaryBg }}>
                      <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: "20px" }}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider mb-0.5" style={{ color: "#9ca3af" }}>{item.label}</div>
                      <div className="text-xs md:text-sm font-bold" style={{ color: "#111" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
