import { C } from "../lib/data";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none gpu-layer">
      
      {/* ── 1. Ultra-Subtle Ambient Teal Glows ── */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, ${C.primary} 0%, transparent 70%)`,
        }}
      />

      <div
        className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full opacity-5"
        style={{
          background: `radial-gradient(circle, #2DD4BF 0%, transparent 70%)`,
        }}
      />

      {/* ── 2. Subtle Dot Grid Pattern (Static, zero GPU repaint cost) ── */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, ${C.primary} 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── 3. Minimal Accent Outline Shapes ── */}
      <div
        className="absolute top-32 left-[6%] w-14 h-14 rounded-2xl border border-teal-500/15 hidden lg:block -rotate-6"
      />

      <div
        className="absolute top-48 right-[8%] w-16 h-16 rounded-2xl border border-teal-500/15 hidden md:block rotate-45"
      />

    </div>
  );
}

