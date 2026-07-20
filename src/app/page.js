"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { C } from "./lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }}>

      <section className="relative overflow-hidden" style={{ backgroundColor: C.bg }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-20 md:py-28 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col-reverse md:flex-row gap-14 md:gap-16 items-start">

            {/* ── LEFT ── */}
            <div className="flex-1 space-y-8">

              {/* Badge */}
              <motion.div variants={fadeInUp}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase"
                  style={{
                    background: C.primaryBg,
                    border: `1px solid ${C.primaryBorder}`,
                    color: C.primary,
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.primary }} />
                  Frontend Web Developer
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={fadeInUp}>
                <h1 className="text-[38px] md:text-[56px] font-black leading-[1.08] tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: C.text }}>
                  Halo, saya{" "}
                  <span style={{ color: C.primary }}>Fadli</span>
                </h1>
                <p className="text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Mahasiswa Ilmu Komputer, fokus membangun antarmuka web yang cepat,
                  responsif, dan ramah pengguna dengan Next.js, React, dan Flutter.
                </p>
              </motion.div>

              {/* Info grid */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-2.5 max-w-sm">
                {[
                  { icon: "school", label: "Pendidikan", value: "Ilmu Komputer" },
                  { icon: "location_on", label: "Lokasi", value: "Medan, Indonesia" },
                  { icon: "work", label: "Posisi", value: "Frontend Dev" },
                  { icon: "language", label: "Bahasa", value: "ID & EN" },
                ].map((item) => (
                  <div key={item.label}
                    className="flex items-center gap-2.5 p-3 rounded-xl"
                    style={{ background: C.glass, border: `1px solid ${C.glassBorder}` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: C.primaryBg }}>
                      <span className="material-symbols-outlined" style={{ color: C.primary, fontSize: "16px" }}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-wider mb-0.5" style={{ color: C.muted }}>{item.label}</div>
                      <div className="text-xs font-bold" style={{ color: C.text }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="flex gap-8">
                {[
                  { value: "5+", label: "Proyek" },
                  { value: "2+", label: "Tahun Belajar" },
                  { value: "10+", label: "Teknologi" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black" style={{ color: C.primary, fontFamily: "var(--font-space-grotesk)" }}>
                      {s.value}
                    </div>
                    <div className="text-[11px] mt-0.5" style={{ color: C.muted }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <Link href="/proyek"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all duration-200"
                  style={{ background: C.primary, color: "#fff" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = C.primaryDark}
                  onMouseLeave={(e) => e.currentTarget.style.background = C.primary}
                >
                  Lihat Proyek
                  <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>arrow_forward</span>
                </Link>
                <Link href="/kontak"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all duration-200"
                  style={{ background: "transparent", border: `1.5px solid ${C.primaryBorder}`, color: C.text }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.primary;
                    e.currentTarget.style.color = C.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.primaryBorder;
                    e.currentTarget.style.color = C.text;
                  }}
                >
                  Hubungi Saya
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT: Photo ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex-shrink-0 flex justify-center md:sticky md:top-28"
            >
              <div className="relative">
                <div className="relative w-[240px] h-[290px] md:w-[280px] md:h-[336px] rounded-3xl overflow-hidden"
                  style={{ border: `1.5px solid ${C.glassBorder}`, background: C.surface }}>
                  <Image
                    src="/assets/images/me.jpeg"
                    alt="Fadli Habibi Lubis"
                    width={400}
                    height={480}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badges */}
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-4 -left-6 px-3 py-1.5 rounded-full text-[10px] font-black"
                  style={{ background: C.primary, color: "#fff" }}>
                  FRONTEND DEV
                </motion.div>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }}
                  className="absolute -bottom-4 -right-6 px-3 py-1.5 rounded-full text-[10px] font-black"
                  style={{ background: C.accentBlue, color: "#fff" }}>
                  CREATIVE
                </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
