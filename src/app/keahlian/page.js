"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills, C } from "../lib/data";

export default function KeahlianPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div style={{ backgroundColor: C.bgRaised, color: C.text }} className="font-inter min-h-screen">
      <motion.section
        id="keahlian"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-24 md:py-32"
        style={{ backgroundColor: C.bgRaised }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <motion.div variants={fadeInUp} className="mb-16">
            <div
              className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3"
              style={{ color: C.primary }}
            >
              <span className="w-10 h-px" style={{ background: C.primary }} />
              03 / PENGUASAAN TEKNOLOGI
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>Keahlian Saya</h1>
            <p className="max-w-md text-base mt-2" style={{ color: C.muted }}>
              Teknologi dan alat bantu yang saya kuasai dalam pengembangan.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.04 }}
                className="flex flex-col items-center justify-center text-center group cursor-default p-5 rounded-2xl transition-all duration-300"
                style={{ background: C.glass, border: `1px solid ${C.glassBorder}` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(16,217,166,0.09)";
                  e.currentTarget.style.borderColor = "rgba(16,217,166,0.3)";
                  e.currentTarget.style.boxShadow = "0 0 32px rgba(16,217,166,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.glass;
                  e.currentTarget.style.borderColor = C.glassBorder;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                    unoptimized={skill.src.startsWith("http")}
                  />
                </div>
                <h3
                  className="text-xs font-bold mt-3 transition-colors duration-300 group-hover:text-[#10D9A6]"
                  style={{ color: "rgba(242,251,247,0.65)" }}
                >
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
