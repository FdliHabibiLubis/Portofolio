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

        {/* ── Top Dark Header Section (Tema Keahlian - C.bg) ── */}
        <div style={{ backgroundColor: C.bg }} className="relative py-16 md:py-24 overflow-hidden border-b-4 border-black">

          {/* Abstract background dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, ${C.primary} 1.5px, transparent 1.5px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Abstract floating background geometric accents */}
          <div className="absolute top-12 left-10 w-12 h-12 rounded-xl border-2 border-white/10 rotate-12 pointer-events-none hidden md:block" />
          <div className="absolute bottom-16 right-16 w-20 h-20 rounded-full border-2 border-white/10 pointer-events-none hidden md:block" />

          <div className="max-w-[1100px] mx-auto px-5 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col gap-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                
                {/* Left Column: Hero Text Header & Stats */}
                <div className="md:col-span-7 text-center md:text-left">
                  
                  {/* Header Tag / Badge matching Keahlian page */}
                  <motion.div variants={fadeInUp} className="flex items-center justify-center md:justify-start gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: C.primary }}>
                    <span className="w-8 h-px" style={{ background: C.primary }} />
                    Frontend Web Developer
                  </motion.div>

                  {/* Heading */}
                  <motion.h1
                    variants={fadeInUp}
                    className="text-[40px] sm:text-[52px] lg:text-[62px] font-black leading-[1.06] tracking-tight mb-4"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "#F1F5F9" }}
                  >
                    Halo, saya{" "}
                    <span style={{ color: C.primary }}>Fadli</span>
                  </motion.h1>

                  {/* Subtitle / Bio */}
                  <motion.p
                    variants={fadeInUp}
                    className="text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0 mb-6"
                    style={{ color: C.muted, fontFamily: "var(--font-inter)" }}
                  >
                    Mahasiswa Rekayasa Perangkat Lunak, fokus membangun antarmuka web yang cepat, responsif, dan ramah pengguna.
                  </motion.p>

                  {/* Stats Counters Grid for DESKTOP (Di Bawah Teks Bio Mahasiswa) */}
                  <motion.div
                    variants={fadeInUp}
                    className="hidden md:grid grid-cols-3 gap-2.5 sm:gap-4 pt-4 border-t border-white/10 w-full max-w-md mx-auto md:mx-0"
                  >
                    {[
                      { value: "6+", label: "Proyek Selesai" },
                      { value: "1+", label: "Tahun Belajar" },
                      { value: "6+", label: "Teknologi" },
                    ].map((s, idx) => (
                      <motion.div
                        key={idx}
                        className="p-2.5 sm:p-3.5 rounded-xl text-center transition-all duration-200 cursor-default"
                        style={{
                          background: C.bgRaised,
                          border: "2px solid #24352C",
                          boxShadow: "3px 3px 0px #24352C",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = C.primary;
                          e.currentTarget.style.boxShadow = "3px 3px 0px " + C.primary;
                          e.currentTarget.style.transform = "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#24352C";
                          e.currentTarget.style.boxShadow = "3px 3px 0px #24352C";
                          e.currentTarget.style.transform = "none";
                        }}
                      >
                        <div
                          className="text-xl sm:text-2xl md:text-3xl font-black leading-none mb-1"
                          style={{ color: C.primary, fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-[10px] md:text-[11px] font-semibold"
                          style={{ color: "#F1F5F9", fontFamily: "var(--font-inter)" }}
                        >
                          {s.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                </div>

                {/* Right Column: Profile Photo on Desktop */}
                <div className="md:col-span-5 flex flex-col items-center md:items-end gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
                    className="relative group cursor-pointer select-none"
                  >
                    {/* Offset Backdrop Card */}
                    <div
                      className="absolute rounded-2xl pointer-events-none transition-all duration-200 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                      style={{
                        width: "100%",
                        height: "100%",
                        top: "14px",
                        left: "14px",
                        background: C.primary,
                      }}
                    />

                    {/* Offset Accent Shape */}
                    <div
                      className="absolute rounded-2xl pointer-events-none transition-all duration-200 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1"
                      style={{
                        width: "60%",
                        height: "40%",
                        bottom: "-12px",
                        right: "-16px",
                        background: C.bgRaised,
                        border: "2px solid #24352C",
                      }}
                    />

                    {/* Main Profile Photo Container */}
                    <div
                      className="relative z-10 w-[240px] h-[290px] sm:w-[270px] sm:h-[330px] lg:w-[300px] lg:h-[360px] rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:translate-y-1"
                      style={{
                        border: "3px solid #24352C",
                        boxShadow: "8px 8px 0px #24352C",
                      }}
                    >
                      <Image
                        src="/assets/images/me.jpeg"
                        alt="Fadli Habibi Lubis"
                        width={400}
                        height={480}
                        priority
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                      className="absolute -top-4 -left-6 px-3.5 py-1.5 rounded-xl text-[10px] font-black tracking-wider uppercase select-none z-20 transition-all duration-200 group-hover:scale-105"
                      style={{
                        background: C.bgRaised,
                        color: C.primary,
                        border: "2px solid #24352C",
                        boxShadow: "4px 4px 0px #24352C",
                        fontFamily: "var(--font-space-grotesk)",
                      }}
                    >
                      FRONTEND DEV
                    </motion.div>

                  </motion.div>

                  {/* Stats Counters Grid for MOBILE (Di Bawah Foto pada Tampilan HP) */}
                  <motion.div
                    variants={fadeInUp}
                    className="grid md:hidden grid-cols-3 gap-2.5 pt-4 border-t border-white/10 w-full"
                  >
                    {[
                      { value: "6+", label: "Proyek Selesai" },
                      { value: "1+", label: "Tahun Belajar" },
                      { value: "6+", label: "Teknologi" },
                    ].map((s, idx) => (
                      <motion.div
                        key={idx}
                        className="p-2.5 rounded-xl text-center cursor-default"
                        style={{
                          background: C.bgRaised,
                          border: "2px solid #24352C",
                          boxShadow: "3px 3px 0px #24352C",
                        }}
                      >
                        <div
                          className="text-xl font-black leading-none mb-1"
                          style={{ color: C.primary, fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-[10px] font-semibold"
                          style={{ color: "#F1F5F9", fontFamily: "var(--font-inter)" }}
                        >
                          {s.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

              </div>

            </motion.div>
          </div>
        </div>

        {/* ── Lower Section (Background Putih Bersih) ── */}
        <div className="bg-white max-w-[1100px] mx-auto px-5 md:px-6 relative z-10 py-16 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-12">

            {/* 4 Info Cards Grid (Sleek Horizontal Cards) */}
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
                {[
                  { icon: "school", label: "Pendidikan", value: "Rekayasa Perangkat Lunak", badgeBg: "bg-teal-50 text-teal-700 border-teal-200" },
                  { icon: "location_on", label: "Lokasi", value: "Medan, Indonesia", badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                  { icon: "work", label: "Posisi", value: "Frontend Dev", badgeBg: "bg-blue-50 text-blue-700 border-blue-200" },
                  { icon: "language", label: "Bahasa", value: "ID & EN", badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl transition-all duration-200 bg-white"
                    style={{
                      border: "2px solid #e2e8f0",
                      boxShadow: "3px 3px 0px #cbd5e1",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = C.primary;
                      e.currentTarget.style.boxShadow = "3px 3px 0px " + C.primary;
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.boxShadow = "3px 3px 0px #cbd5e1";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${item.badgeBg}`}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                        {item.icon}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-[10px] uppercase font-black tracking-wider text-gray-400 leading-none mb-1"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-xs sm:text-xs font-black text-slate-800 leading-snug"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Action Buttons Section (Ukuran Simetris Sama Besar) ── */}
            <motion.div variants={fadeInUp} className="pt-4 border-t border-gray-100 text-center">
              <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
                <Link
                  href="/proyek"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm transition-all duration-200"
                  style={{
                    background: "#0F1712",
                    color: C.primary,
                    border: "2px solid #24352C",
                    boxShadow: "3px 3px 0px #cbd5e1",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#141F19";
                    e.currentTarget.style.borderColor = C.primary;
                    e.currentTarget.style.boxShadow = "3px 3px 0px " + C.primary;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#0F1712";
                    e.currentTarget.style.borderColor = "#24352C";
                    e.currentTarget.style.boxShadow = "3px 3px 0px #cbd5e1";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  Lihat Proyek
                  <span className="material-symbols-outlined" style={{ fontSize: "18px", color: C.primary }}>arrow_forward</span>
                </Link>

                <Link
                  href="/kontak"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm text-slate-800 bg-white transition-all duration-200"
                  style={{
                    border: "2px solid #e2e8f0",
                    boxShadow: "3px 3px 0px #cbd5e1",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = C.primaryBg;
                    e.currentTarget.style.borderColor = C.primary;
                    e.currentTarget.style.color = C.primary;
                    e.currentTarget.style.boxShadow = "3px 3px 0px " + C.primary;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.color = "#1e293b";
                    e.currentTarget.style.boxShadow = "3px 3px 0px #cbd5e1";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  Hubungi Saya
                </Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}


