"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function KontakPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      e.target.reset();
      setIsSubmitting(false);
      setFormStatus(true);
      setTimeout(() => setFormStatus(false), 5000);
    }, 1200);
  };

  const inputBase = { background: "#fff", border: "2px solid #e5e7eb", color: "#111", outline: "none" };
  const inputFocus = { borderColor: C.primary, background: C.primaryBg };

  return (
    <div style={{ backgroundColor: "#fff", color: "#111" }}>
      <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-5 md:px-6">

          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: C.primary }}>
              <span className="w-8 h-px" style={{ background: C.primary }} />
              Hubungi Saya
            </div>
            <h1 className="text-3xl md:text-4xl font-black" style={{ color: "#111", fontFamily: "var(--font-space-grotesk)" }}>
              Mari Berkolaborasi
            </h1>
            <p className="max-w-md text-sm mt-2" style={{ color: "#6b7280" }}>
              Hubungi saya untuk proyek, kolaborasi, atau diskusi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: info cards */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                Terbuka untuk proyek freelance, kolaborasi, dan peluang magang.
                Kirimkan pesan dan saya akan segera merespons.
              </p>

              <div className="space-y-3">
                {[
                  { icon: "mail", label: "Email", value: "habibifadli682@gmail.com", href: "mailto:habibifadli682@gmail.com" },
                  { icon: "location_on", label: "Lokasi", value: "Medan, Indonesia", href: null },
                  { icon: "code", label: "GitHub", value: "FdliHabibiLubis", href: "https://github.com/FdliHabibiLubis" },
                ].map((item) => (
                  <a key={item.label}
                    href={item.href || undefined}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-150"
                    style={{ background: "#fff", border: "2px solid #e5e7eb", textDecoration: "none", boxShadow: "4px 4px 0px #e5e7eb" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.boxShadow = `4px 4px 0px ${C.primary}`; e.currentTarget.style.transform = "translate(-1px,-1px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.boxShadow = "4px 4px 0px #e5e7eb"; e.currentTarget.style.transform = "none"; }}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: C.primaryBg, border: `1px solid ${C.primaryBorder}` }}>
                      <span className="material-symbols-outlined" style={{ color: C.primary }}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.18em] mb-0.5" style={{ color: C.primary }}>{item.label}</div>
                      <div className="font-semibold text-sm" style={{ color: "#111" }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{ background: "#fff", border: `2px solid ${C.accentLime}`, color: C.accentLime, boxShadow: `3px 3px 0px ${C.accentLime}` }}>
                <span className="w-2 h-2 rounded-full" style={{ background: C.accentLime }} />
                Tersedia untuk proyek baru
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <div className="p-6 md:p-8 rounded-2xl"
                style={{ background: "#fff", border: "2px solid #e5e7eb", boxShadow: "8px 8px 0px #e5e7eb" }}>
                <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-5">

                  {[
                    { id: "input-name", label: "Nama Lengkap", placeholder: "Nama lengkap Anda", type: "text" },
                    { id: "input-email", label: "Email", placeholder: "email@anda.com", type: "email" },
                  ].map((f) => (
                    <div key={f.id} className="space-y-1.5">
                      <label htmlFor={f.id} className="block font-bold text-[11px] uppercase tracking-wider"
                        style={{ color: "#6b7280" }}>{f.label}</label>
                      <input id={f.id} type={f.type} placeholder={f.placeholder} required
                        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-150"
                        style={inputBase}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputBase)} />
                    </div>
                  ))}

                  <div className="space-y-1.5">
                    <label htmlFor="input-message" className="block font-bold text-[11px] uppercase tracking-wider"
                      style={{ color: "#6b7280" }}>Pesan</label>
                    <textarea id="input-message" placeholder="Tuliskan pesan atau detail proyek Anda..." rows={4} required
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-150 resize-none"
                      style={inputBase}
                      onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                      onBlur={(e) => Object.assign(e.currentTarget.style, inputBase)} />
                  </div>

                  <AnimatePresence>
                    {formStatus && (
                      <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl text-sm font-bold"
                        style={{ background: C.primaryBg, border: `2px solid ${C.primaryBorder}`, color: C.primary }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>check_circle</span>
                        Pesan berhasil terkirim! Terima kasih.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button id="submit-form" whileTap={{ scale: 0.98 }}
                    type="submit" disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl font-black text-sm transition-all duration-150 disabled:opacity-60"
                    style={{ background: C.primary, color: "#fff", boxShadow: `4px 4px 0px ${C.primaryDark}` }}
                    onMouseEnter={(e) => { if (!isSubmitting) { e.currentTarget.style.background = C.primaryDark; e.currentTarget.style.transform = "translate(-1px,-1px)"; e.currentTarget.style.boxShadow = `4px 4px 0px ${C.primaryDark}`; } }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = C.primary; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `4px 4px 0px ${C.primaryDark}`; }}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 rounded-full animate-spin"
                          style={{ borderColor: "rgba(255,255,255,0.3)", borderTopColor: "#fff" }} />
                        Mengirim...
                      </span>
                    ) : "Kirim Pesan"}
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </div>
  );
}
