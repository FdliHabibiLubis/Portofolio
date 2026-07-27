"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, C } from "../lib/data";

export default function ProyekPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const minSwipeDistance = 40;

  const handlePrevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((p) => (p === 0 ? projects.length - 1 : p - 1));
  };

  const handleNextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((p) => (p === projects.length - 1 ? 0 : p + 1));
  };

  const onTouchStart = (e) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextSlide();
    } else if (isRightSwipe) {
      handlePrevSlide();
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <div style={{ backgroundColor: "#fff", color: "#111" }}>
      <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="py-16 md:py-24">
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

          {/* Slideshow Main Outer Box */}
          <div
            className="relative w-full overflow-hidden rounded-3xl touch-pan-y select-none transition-all duration-300"
            style={{ border: "3px solid #0F1712", boxShadow: "10px 10px 0px #cbd5e1" }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Sliding Track (600% width, translateX) */}
            <div
              className="flex transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
              style={{
                width: `${projects.length * 100}%`,
                transform: `translateX(-${(currentSlide * 100) / projects.length}%)`,
              }}
            >
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className={`flex-shrink-0 relative overflow-hidden bg-gradient-to-br ${proj.gradient}`}
                  style={{ width: `${100 / projects.length}%`, minHeight: "380px" }}
                >

                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 w-full h-full p-6 pb-16 sm:p-8 md:p-10 items-center">
                    
                    {/* Left info */}
                    <div className="flex flex-col gap-4.5 md:w-[40%] text-white w-full">
                      <div className="space-y-2.5">
                        <div className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest ${proj.tagColor}`}>
                          <span className={`w-8 h-[2.5px] rounded-full ${proj.pillBg}`} />
                          {proj.category}
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black leading-none tracking-tight"
                          style={{ fontFamily: "var(--font-space-grotesk)", color: "#fff" }}>
                          {proj.title}
                        </h2>
                        <p className="text-white/75 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none" style={{ fontFamily: "var(--font-inter)" }}>
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {proj.tags.map((t, i) => (
                            <span key={i} className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide transition-transform hover:scale-105"
                              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", backdropFilter: "blur(4px)" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hidden md:flex flex-col gap-2.5 mt-auto pt-2">
                        {proj.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/15"
                            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(6px)" }}>
                            <span className="material-symbols-outlined text-white/90" style={{ fontSize: "16px" }}>{feat.icon}</span>
                            <span className="text-white/90 text-[11px] font-semibold" style={{ fontFamily: "var(--font-inter)" }}>{feat.label}</span>
                          </div>
                        ))}
                        <a href={proj.gitUrl} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-1 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-md"
                          style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.24)", backdropFilter: "blur(6px)" }}>
                          <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>code</span>
                          Lihat di GitHub
                        </a>
                      </div>
                    </div>

                    {/* Right mockup photo */}
                    <div className="flex-grow flex flex-col items-center justify-center md:w-[60%] w-full gap-3">
                      <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                        style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
                        
                        {/* Browser Header Bar */}
                        <div className="flex items-center gap-2 px-4 py-3"
                          style={{ background: "rgba(0,0,0,0.4)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          <div className="flex-1 mx-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-wide text-white/50 text-center"
                            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            {proj.linkText}
                          </div>
                        </div>

                        {/* Image Container */}
                        <div className="p-3 sm:p-4 flex justify-center items-center bg-black/20">
                          <Image
                            src={proj.mockup}
                            alt={proj.title}
                            width={640}
                            height={380}
                            priority
                            className="w-full h-auto rounded-xl object-contain max-h-56 md:max-h-[300px] shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                          />
                        </div>
                      </div>

                      {/* Tombol Lihat di GitHub - Tampil khusus di bawah gambar untuk tampilan HP */}
                      <a href={proj.gitUrl} target="_blank" rel="noopener noreferrer"
                        className="md:hidden inline-flex items-center justify-center gap-2 w-full mt-1 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 active:scale-95 shadow-md relative z-20"
                        style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.24)", backdropFilter: "blur(6px)" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>code</span>
                        Lihat di GitHub
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next Buttons (Desktop) */}
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Proyek sebelumnya"
              className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl items-center justify-center z-30 transition-all duration-200 cursor-pointer"
              style={{ background: "#fff", border: "2.5px solid #0F1712", color: "#0F1712", boxShadow: "4px 4px 0px #0F1712" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.primaryBg;
                e.currentTarget.style.color = C.primary;
                e.currentTarget.style.borderColor = C.primary;
                e.currentTarget.style.boxShadow = "4px 4px 0px " + C.primary;
                e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#0F1712";
                e.currentTarget.style.borderColor = "#0F1712";
                e.currentTarget.style.boxShadow = "4px 4px 0px #0F1712";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <span className="material-symbols-outlined font-black">chevron_left</span>
            </button>

            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Proyek selanjutnya"
              className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl items-center justify-center z-30 transition-all duration-200 cursor-pointer"
              style={{ background: "#fff", border: "2.5px solid #0F1712", color: "#0F1712", boxShadow: "4px 4px 0px #0F1712" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = C.primaryBg;
                e.currentTarget.style.color = C.primary;
                e.currentTarget.style.borderColor = C.primary;
                e.currentTarget.style.boxShadow = "4px 4px 0px " + C.primary;
                e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#0F1712";
                e.currentTarget.style.borderColor = "#0F1712";
                e.currentTarget.style.boxShadow = "4px 4px 0px #0F1712";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <span className="material-symbols-outlined font-black">chevron_right</span>
            </button>



            {/* Dots Indicator Container */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full z-30 backdrop-blur-md"
              style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {projects.map((proj, i) => {
                const isActive = i === currentSlide;
                const activeColorMap = {
                  saku: "#34d399",
                  ciakad: "#60a5fa",
                  bukukita: "#f59e0b",
                  password: "#f97316",
                  anikaze: "#c084fc",
                  taskflow: "#38bdf8",
                };
                const activeColor = activeColorMap[projects[currentSlide].id] || "#ffffff";
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                    className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: isActive ? "28px" : "8px",
                      background: isActive ? activeColor : "rgba(255,255,255,0.35)",
                      boxShadow: "none",
                    }}
                    aria-label={`Slide ${proj.title}`}
                  />
                );
              })}
            </div>

            {/* Slide Counter Badge */}
            <div
              className="absolute top-4 right-4 md:right-16 z-30 px-3.5 py-1 rounded-full text-xs font-bold select-none backdrop-blur-md shadow-md"
              style={{ background: "rgba(0,0,0,0.55)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              {currentSlide + 1} / {projects.length}
            </div>

          </div>

        </div>
      </motion.section>
    </div>
  );
}
