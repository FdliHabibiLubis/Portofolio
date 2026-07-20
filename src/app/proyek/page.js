"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects, C } from "../lib/data";

export default function ProyekPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () =>
    setCurrentSlide((p) => (p === 0 ? projects.length - 1 : p - 1));
  const handleNextSlide = () =>
    setCurrentSlide((p) => (p === projects.length - 1 ? 0 : p + 1));

  const fadeInUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.text }} className="font-inter min-h-screen">
      <motion.section
        id="proyek"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-24 md:py-32"
        style={{ backgroundColor: C.bg }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <motion.div variants={fadeInUp} className="mb-16">
            <div
              className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3"
              style={{ color: C.primary }}
            >
              <span className="w-10 h-px" style={{ background: C.primary }} />
              02 / HASIL KARYA
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>Proyek Pilihan</h1>
            <p className="max-w-md text-base mt-2" style={{ color: C.muted }}>
              Kumpulan proyek yang telah saya selesaikan menggunakan teknologi web dan mobile terkini.
            </p>
          </motion.div>

          {/* Slideshow */}
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
            style={{ border: `1px solid ${C.glassBorder}` }}
          >
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${projects.length * 100}%`,
                transform: `translateX(-${(currentSlide * 100) / projects.length}%)`,
              }}
            >
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className={`flex-shrink-0 relative overflow-hidden bg-gradient-to-br ${proj.gradient}`}
                  style={{
                    width: `${100 / projects.length}%`,
                    minHeight: "340px",
                  }}
                >
                  {/* Glow overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 70% 20%, ${proj.radialGlow}, transparent 65%)` }}
                  />
                  {/* Subtle inner border */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ border: "1px solid rgba(255,255,255,0.04)", inset: "1px" }}
                  />

                  <div className="relative z-10 flex flex-col md:flex-row gap-5 md:gap-8 w-full h-full p-5 md:p-8">
                    {/* Left: info */}
                    <div className="flex flex-col gap-3 md:gap-5 md:w-[38%] text-white">
                      <div className="space-y-2">
                        <div className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest ${proj.tagColor}`}>
                          <span className={`w-8 h-[2px] ${proj.pillBg}`} />
                          {proj.category}
                        </div>
                        <h2 className="text-3xl md:text-[40px] font-black leading-none tracking-tight text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                          {proj.title}
                        </h2>
                        <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.85)" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features + GitHub btn */}
                      <div className="hidden md:flex flex-col gap-2 mt-auto">
                        {proj.features.map((feat, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl"
                            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
                          >
                            <span className="material-symbols-outlined text-white/80" style={{ fontSize: "15px" }}>
                              {feat.icon}
                            </span>
                            <span className="text-white/80 text-[11px] font-semibold">{feat.label}</span>
                          </div>
                        ))}
                        <a
                          href={proj.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200"
                          style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.14)" }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>code</span>
                          Lihat di GitHub
                        </a>
                      </div>
                    </div>

                    {/* Right: mockup browser */}
                    <div className="flex-grow flex items-center justify-center md:w-[62%]">
                      <div
                        className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.11)" }}
                      >
                        {/* Browser chrome */}
                        <div
                          className="flex items-center gap-2 px-4 py-2.5"
                          style={{ background: "rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                        >
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                          <div
                            className="flex-1 mx-2 px-3 py-0.5 rounded-full text-[9px]"
                            style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}
                          >
                            {proj.linkText}
                          </div>
                        </div>
                        <div className="p-3 md:p-4">
                          <a
                            href={proj.gitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                          >
                            <Image
                              src={proj.mockup}
                              alt={proj.title}
                              width={640}
                              height={380}
                              className="w-full h-auto rounded-lg object-contain max-h-52 md:max-h-[290px]"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next */}
            <button
              id="slide-prev"
              onClick={handlePrevSlide}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 active:scale-90 z-20"
              style={{ background: "rgba(15,23,18,0.85)", border: `1px solid ${C.glassBorder}`, color: C.primary }}
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <button
              id="slide-next"
              onClick={handleNextSlide}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 active:scale-90 z-20"
              style={{ background: "rgba(15,23,18,0.85)", border: `1px solid ${C.glassBorder}`, color: C.primary }}
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === currentSlide ? "28px" : "7px",
                    background: i === currentSlide ? "#fff" : "rgba(255,255,255,0.28)",
                  }}
                  aria-label={`Slide ${projects[i].title}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div
              className="absolute top-4 right-16 z-20 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.55)" }}
            >
              {currentSlide + 1} / {projects.length}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
