"use client";

import { motion } from "framer-motion";
import { C } from "../lib/data";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      
      {/* ── 1. Ultra-Subtle Ambient Teal Glow ── */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${C.primary} 0%, transparent 70%)`,
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.09, 0.04],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full"
        style={{
          background: `radial-gradient(circle, #2DD4BF 0%, transparent 70%)`,
        }}
      />

      {/* ── 2. Subtle Breathing Dot Grid Pattern ── */}
      <motion.div
        animate={{ opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${C.primary} 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── 3. Minimal Floating Outline Accents ── */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-6, -2, -6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[6%] w-14 h-14 rounded-2xl border border-teal-500/15 hidden lg:block"
      />

      <motion.div
        animate={{
          y: [0, 14, 0],
          rotate: [45, 52, 45],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-48 right-[8%] w-16 h-16 rounded-2xl border border-teal-500/15 hidden md:block"
      />

    </div>
  );
}
