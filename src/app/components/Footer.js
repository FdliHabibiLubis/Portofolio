"use client";

import { C } from "../lib/data";

export default function Footer() {
  const linkColor = "#374151";

  return (
    <footer className="py-10" style={{ backgroundColor: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
      <div className="max-w-[1100px] mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="font-black tracking-tighter text-xl" style={{ color: "#111", fontFamily: "var(--font-space-grotesk)" }}>
            FADLI<span style={{ color: C.primary }}>.</span>
          </div>
          <p className="text-xs sm:text-sm text-center font-medium" style={{ color: "#4b5563", fontFamily: "var(--font-inter)" }}>
            © 2026 Fadli Habibi Lubis &mdash; Dibuat dengan uang.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "GitHub", href: "https://github.com/FdliHabibiLubis" },
              { label: "Instagram", href: "https://www.instagram.com/fdlilbs.23?igsh=MWtyOGRnamo2czQ1OQ==" },
              { label: "Email", href: "mailto:habibifadli682@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs sm:text-sm font-bold transition-colors duration-200"
                style={{ color: linkColor, fontFamily: "var(--font-space-grotesk)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
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

