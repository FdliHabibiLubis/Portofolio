"use client";

import { C } from "../lib/data";

export default function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "#0A1410", borderTop: `1px solid ${C.glassBorder}` }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="font-black tracking-tighter text-xl" style={{ color: C.text, fontFamily: "var(--font-space-grotesk)" }}>
            FADLI<span style={{ color: C.primary }}>.DEV</span>
          </div>
          <p className="text-xs text-center" style={{ color: C.muted }}>
            © 2024 Fadli Habibi Lubis &mdash; Dibuat dengan hati.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "GitHub", href: "https://github.com/FdliHabibiLubis" },
              { label: "Email", href: "mailto:habibifadli682@gmail.com" },
            ].map((link) => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs font-bold transition-colors duration-200"
                style={{ color: C.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
