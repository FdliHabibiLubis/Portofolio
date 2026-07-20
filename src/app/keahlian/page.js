"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills, C } from "../lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

export default function KeahlianPage() {
  return (
    <div style={{ backgroundColor: C.bgRaised, color: C.text }}>
      <motion.section initial="hidden" animate="visible" variants={fadeInUp}
        className="py-20 md:py-28" style={{ backgroundColor: C.bgRaised }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">

          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3"
              style={{ color: C.primary }}>
              <span className="w-8 h-px" style={{ background: C.primary }} />
              Teknologi
            </div>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: C.text, fontFamily: "var(--font-space-grotesk)" }}>
              Keahlian Saya
            </h1>
            <p className="max-w-md text-sm mt-2" style={{ color: C.muted }}>
              Teknologi dan alat bantu yang saya kuasai.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -6 }}
                className="flex flex-col items-center justify-center text-center group cursor-default p-5 rounded-2xl transition-all duration-200"
                style={{ background: C.glass, border: `1px solid ${C.glassBorder}` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.primaryBg;
                  e.currentTarget.style.borderColor = C.primaryBorder;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.glass;
                  e.currentTarget.style.borderColor = C.glassBorder;
                }}>
                <Image src={skill.src} alt={skill.name} width={48} height={48}
                  className="w-12 h-12 object-contain transition-transform duration-200 group-hover:scale-110"
                  unoptimized={skill.src.startsWith("http")} />
                <h3 className="text-xs font-bold mt-3 transition-colors duration-200"
                  style={{ color: C.muted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}>
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
}
