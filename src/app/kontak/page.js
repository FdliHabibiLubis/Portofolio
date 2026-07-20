"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../lib/data";

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.text }} className="font-inter min-h-screen">
      <motion.section
        id="kontak"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: C.bg }}
      >
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,217,166,0.055) 0%, transparent 70%)" }}
        />

        <div className="max-w-[1200px] mx-auto px-5 md:px-6 relative z-10">
          <motion.div variants={fadeInUp} className="mb-16">
            <div
              className="flex items-center gap-3 font-bold text-[11px] uppercase tracking-[0.2em] mb-3"
              style={{ color: C.primary }}
            >
              <span className="w-10 h-px" style={{ background: C.primary }} />
              04 / HUBUNGI SAYA
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>Mari Berkolaborasi</h1>
            <p className="max-w-md text-base mt-2" style={{ color: C.muted }}>
              Hubungi saya untuk mendiskusikan peluang kerja, proyek, atau sekadar bertanya kabar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact info */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6">
              <p className="text-base leading-relaxed" style={{ color: "rgba(242,251,247,0.62)" }}>
                Terbuka untuk proyek freelance, kolaborasi, dan peluang magang.
                Kirimkan pesan kepada saya dan saya akan segera merespons dengan senang hati.
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: "mail",
                    label: "Email Saya",
                    value: "habibifadli682@gmail.com",
                    href: "mailto:habibifadli682@gmail.com",
                  },
                  {
                    icon: "location_on",
                    label: "Lokasi Saat Ini",
                    value: "Medan, Indonesia",
                    href: null,
                  },
                  {
                    icon: "code",
                    label: "GitHub",
                    value: "FdliHabibiLubis",
                    href: "https://github.com/FdliHabibiLubis",
                  },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href || "#"}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-250"
                    style={{ background: C.glass, border: `1px solid ${C.glassBorder}`, textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = C.primaryBg;
                      e.currentTarget.style.borderColor = C.primaryBorder;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = C.glass;
                      e.currentTarget.style.borderColor = C.glassBorder;
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(16,217,166,0.12)" }}
                    >
                      <span className="material-symbols-outlined" style={{ color: C.primary }}>
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <div
                        className="text-[9px] font-black uppercase tracking-[0.18em] mb-0.5"
                        style={{ color: C.primary }}
                      >
                        {item.label}
                      </div>
                      <div className="font-semibold text-sm text-white">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(51,204,15,0.09)",
                  border: "1px solid rgba(51,204,15,0.22)",
                  color: "#33CC0F",
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#33CC0F" }} />
                Tersedia untuk proyek baru
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <div
                className="p-7 md:p-9 rounded-2xl backdrop-blur-sm"
                style={{ background: "rgba(16,217,166,0.03)", border: `1px solid ${C.glassBorder}` }}
              >
                <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-5">
                  {/* Name + Email */}
                  {[
                    { id: "input-name", label: "NAMA LENGKAP", placeholder: "Nama lengkap Anda", type: "text" },
                    { id: "input-email", label: "ALAMAT EMAIL", placeholder: "email@anda.com", type: "email" },
                  ].map((f) => (
                    <div key={f.id} className="space-y-2">
                      <label
                        htmlFor={f.id}
                        className="block font-black text-[10px] uppercase tracking-[0.18em]"
                        style={{ color: "rgba(242,251,247,0.42)" }}
                      >
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(16,217,166,0.04)",
                          border: `1px solid ${C.glassBorder}`,
                          color: C.text,
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "rgba(16,217,166,0.55)";
                          e.currentTarget.style.background = "rgba(16,217,166,0.08)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(16,217,166,0.1)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = C.glassBorder;
                          e.currentTarget.style.background = "rgba(16,217,166,0.04)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="input-message"
                      className="block font-black text-[10px] uppercase tracking-[0.18em]"
                      style={{ color: "rgba(242,251,247,0.42)" }}
                    >
                      PESAN ANDA
                    </label>
                    <textarea
                      id="input-message"
                      placeholder="Tuliskan pesan atau detail proyek Anda..."
                      rows={4}
                      required
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(16,217,166,0.04)",
                        border: `1px solid ${C.glassBorder}`,
                        color: C.text,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "rgba(16,217,166,0.55)";
                        e.currentTarget.style.background = "rgba(16,217,166,0.08)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(16,217,166,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = C.glassBorder;
                        e.currentTarget.style.background = "rgba(16,217,166,0.04)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Success message */}
                  <AnimatePresence>
                    {formStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl text-sm font-bold"
                        style={{
                          background: "rgba(51,204,15,0.1)",
                          border: "1px solid rgba(51,204,15,0.22)",
                          color: "#33CC0F",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>check_circle</span>
                        Pesan berhasil terkirim! Terima kasih telah menghubungi saya.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <motion.button
                    id="submit-form"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 36px rgba(16,217,166,0.45)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-black text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #10D9A6, #0B8A6C)", color: "#0F1712", boxShadow: "0 0 20px rgba(16,217,166,0.3)" }}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <span
                          className="w-4 h-4 border-2 rounded-full animate-spin"
                          style={{ borderColor: "rgba(15,23,18,0.3)", borderTopColor: "#0F1712" }}
                        />
                        Mengirim...
                      </span>
                    ) : (
                      "Kirim Pesan Sekarang"
                    )}
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
