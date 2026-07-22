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

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#fff" }}>

        {/* Top dark band */}
        <div className="absolute top-0 left-0 right-0 h-[52%] pointer-events-none" style={{ backgroundColor: C.bg }} />

        <div className="max-w-[1100px] mx-auto px-5 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* ── Top text block (dark bg) ── */}
            <div className="pt-16 pb-0 text-center">
              <motion.div variants={fadeInUp} className="flex justify-center mb-5">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontFamily: "var(--font-space-grotesk)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.primary }} />
                  Frontend Web Developer
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp}
                className="text-[42px] md:text-[64px] font-black leading-[1.06] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "#fff" }}
              >
                Halo, saya{" "}
                <span style={{ color: C.primary }}>Fadli</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-sm md:text-base max-w-md mx-auto"
                style={{ color: "rgba(255,255,255,0.55)" }}>
                Mahasiswa Ilmu Komputer, fokus membangun antarmuka web yang cepat,
                responsif, dan ramah pengguna.
              </motion.p>
            </div>

            {/* ── Centered Photo ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
              className="flex justify-center mt-10"
            >
              <div className="relative">
                {/* Abstract offset background shapes */}
                <div className="absolute rounded-2xl pointer-events-none"
                  style={{
                    width: "100%", height: "100%",
                    top: "14px", left: "14px",
                    background: C.primary,
                    opacity: 0.9,
                  }} />
                <div className="absolute rounded-2xl pointer-events-none"
                  style={{
                    width: "60%", height: "40%",
                    bottom: "-12px", right: "-16px",
                    background: "#fff",
                    border: `3px solid ${C.primaryBorder}`,
                  }} />

                {/* Photo */}
                <div
                  className="relative w-[220px] h-[270px] md:w-[270px] md:h-[330px] rounded-2xl overflow-hidden"
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
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute -top-5 -left-8 px-3 py-1.5 rounded-full text-[10px] font-black"
                  style={{ background: "#fff", color: C.primary, border: `2px solid ${C.glassBorder}`, boxShadow: "4px 4px 0px " + C.primary }}>
                  FRONTEND DEV
                </motion.div>
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.7 }}
                  className="absolute -bottom-5 -right-8 px-3 py-1.5 rounded-full text-[10px] font-black"
                  style={{ background: C.accentBlue, color: "#fff", boxShadow: "4px 4px 0px rgba(37,99,235,0.3)" }}>
                  CREATIVE
                </motion.div>
              </div>
            </motion.div>

            {/* ── Bottom white section ── */}
            <motion.div variants={stagger} className="pt-16 pb-16 space-y-8">

              {/* Info cards — white */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: "school", label: "Pendidikan", value: "Ilmu Komputer" },
                  { icon: "location_on", label: "Lokasi", value: "Medan, Indonesia" },
                  { icon: "work", label: "Posisi", value: "Frontend Dev" },
                  { icon: "language", label: "Bahasa", value: "ID & EN" },
                ].map((item) => (
                  <div key={item.label}
                    className="flex items-center gap-3 p-3.5 rounded-xl"
                    style={{ background: "#fff", border: "1px solid #e5e7eb", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: C.primaryBg }}>
                      <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: "17px" }}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: "#9ca3af" }}>{item.label}</div>
                      <div className="text-xs font-bold" style={{ color: "#111" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Stats + CTA row */}
              <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Stats */}
                <div className="flex gap-10">
                  {[
                    { value: "5+", label: "Proyek" },
                    { value: "1+", label: "Tahun Belajar" },
                    { value: "6+", label: "Teknologi" },
                  ].map((s) => (
                    <div key={s.label} className="text-center md:text-left">
                      <div className="text-3xl font-black" style={{ color: C.primary, fontFamily: "var(--font-space-grotesk)" }}>
                        {s.value}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link href="/proyek"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all duration-200"
                    style={{ background: C.primary, color: "#fff", boxShadow: "4px 4px 0px " + C.primaryDark }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = C.primaryDark; e.currentTarget.style.transform = "translate(-1px,-1px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = C.primary; e.currentTarget.style.transform = "none"; }}>
                    Lihat Proyek
                    <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>arrow_forward</span>
                  </Link>
                  <Link href="/kontak"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all duration-200"
                    style={{ background: "#fff", border: `1.5px solid ${C.primary}`, color: C.primary, boxShadow: "4px 4px 0px " + C.glassBorder }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = C.primaryBg; e.currentTarget.style.transform = "translate(-1px,-1px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "none"; }}>
                    Hubungi Saya
                  </Link>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
