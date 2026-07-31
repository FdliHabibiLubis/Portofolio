"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills, C } from "../lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

export default function KeahlianPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text, minHeight: "100vh" }}>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-[1100px] mx-auto px-5 md:px-6">
        <motion.div initial="hidden" animate="visible" variants={stagger}>

          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: C.primary }}>
              <span className="w-8 h-px" style={{ background: C.primary }} />
              Ekosistem & Toolsets
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight" style={{ color: "#F1F5F9", fontFamily: "var(--font-space-grotesk)" }}>
              Keahlian <span style={{ color: C.primary }}>Saya</span>
            </h1>
            <p className="max-w-md text-sm mt-2 leading-relaxed" style={{ color: C.muted }}>
              Daftar teknologi, framework, dan alat bantu yang saya kuasai dalam membangun aplikasi modern.
            </p>
          </motion.div>

          {/* Skill Logo Cards Grid */}
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="group relative p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-200 cursor-default hover:-translate-y-1 hover:border-teal-600 hover:shadow-[4px_4px_0px_#0D9488]"
                style={{
                  background: C.bgRaised,
                  border: "2px solid #24352C",
                  boxShadow: "4px 4px 0px #24352C",
                }}
              >
                {/* Skill Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center p-2 mb-3 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={52}
                    height={52}
                    className="w-full h-full object-contain"
                    unoptimized={skill.src.startsWith("http")}
                  />
                </div>

                {/* Skill Name */}
                <h3
                  className="text-xs md:text-sm font-black transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "#F1F5F9" }}
                >
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}

