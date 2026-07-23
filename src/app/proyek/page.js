"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, C } from "../lib/data";

export default function ProyekPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => setCurrentSlide((p) => (p === 0 ? projects.length - 1 : p - 1));
  const handleNextSlide = () => setCurrentSlide((p) => (p === projects.length - 1 ? 0 : p + 1));

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <div style={{ backgroundColor: "#fff", color: "#111" }}>
      <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-5 md:px-6">

          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: C.primary, fontFamily: "var(--font-space-grotesk)" }}>
              <span className="w-8 h-px" style={{ background: C.primary }} />
              Hasil Karya
            </div>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#111", fontFamily: "var(--font-space-grotesk)" }}>
              Proyek Pilihan
            </h1>
            <p className="max-w-md text-sm mt-2" style={{ color: "#6b7280", fontFamily: "var(--font-inter)" }}>
              Kumpulan proyek yang telah saya selesaikan.
            </p>
          </motion.div>

          {/* Slideshow */}
          <div className="relative w-full overflow-hidden rounded-2xl"
            style={{ border: "2px solid #e5e7eb", boxShadow: "8px 8px 0px #e5e7eb" }}>

            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${projects.length * 100}%`, transform: `translateX(-${(currentSlide * 100) / projects.length}%)` }}>
              {projects.map((proj) => (
                <div key={proj.id}
                  className={`flex-shrink-0 relative overflow-hidden bg-gradient-to-br ${proj.gradient}`}
                  style={{ width: `${100 / projects.length}%`, minHeight: "340px" }}>

                  <div className="relative z-10 flex flex-col md:flex-row gap-5 md:gap-8 w-full h-full p-5 md:p-8">
                    {/* Left info */}
                    <div className="flex flex-col gap-3 md:gap-4 md:w-[38%] text-white">
                      <div className="space-y-2">
                        <div className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest ${proj.tagColor}`}>
                          <span className={`w-8 h-[2px] ${proj.pillBg}`} />
                          {proj.category}
                        </div>
                        <h2 className="text-3xl md:text-[38px] font-black leading-none tracking-tight"
                          style={{ fontFamily: "var(--font-space-grotesk)", color: "#fff" }}>
                          {proj.title}
                        </h2>
                        <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none" style={{ fontFamily: "var(--font-inter)" }}>
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tags.map((t, i) => (
                            <span key={i} className="px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.9)" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="hidden md:flex flex-col gap-2 mt-auto">
                        {proj.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl"
                            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <span className="material-symbols-outlined text-white/80" style={{ fontSize: "15px" }}>{feat.icon}</span>
                            <span className="text-white/80 text-[11px] font-semibold" style={{ fontFamily: "var(--font-inter)" }}>{feat.label}</span>
                          </div>
                        ))}
                        <a href={proj.gitUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200"
                          style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>code</span>
                          Lihat di GitHub
                        </a>
                      </div>
                    </div>

                    {/* Right mockup */}
                    <div className="flex-grow flex items-center justify-center md:w-[62%]">
                      <div className="w-full max-w-2xl rounded-2xl overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <div className="flex items-center gap-2 px-4 py-2.5"
                          style={{ background: "rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                          <div className="flex-1 mx-2 px-3 py-0.5 rounded-full text-[9px]"
                            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}>
                            {proj.linkText}
                          </div>
                        </div>
                        <div className="p-3 md:p-4">
                          <a href={proj.gitUrl} target="_blank" rel="noopener noreferrer" className="block">
                            <Image src={proj.mockup} alt={proj.title} width={640} height={380}
                              className="w-full h-auto rounded-lg object-contain max-h-52 md:max-h-[280px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next */}
            <button id="slide-prev" onClick={handlePrevSlide}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center z-20 transition-all duration-150"
              style={{ background: "#fff", border: "2px solid #e5e7eb", color: "#111", boxShadow: "3px 3px 0px #d1d5db" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.primaryBg; e.currentTarget.style.color = C.primary; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#111"; }}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button id="slide-next" onClick={handleNextSlide}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center z-20 transition-all duration-150"
              style={{ background: "#fff", border: "2px solid #e5e7eb", color: "#111", boxShadow: "3px 3px 0px #d1d5db" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.primaryBg; e.currentTarget.style.color = C.primary; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#111"; }}>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === currentSlide ? "28px" : "7px", background: i === currentSlide ? "#fff" : "rgba(255,255,255,0.35)" }}
                  aria-label={`Slide ${projects[i].title}`} />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-16 z-20 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.6)" }}>
              {currentSlide + 1} / {projects.length}
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  );
}
