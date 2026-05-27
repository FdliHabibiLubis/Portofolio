/* ════════════════════════════════════════════════════
   FADLI.PORTFOLIO — script.js
   Pure Vanilla JavaScript
   ════════════════════════════════════════════════════ */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initNavScroll();
  initMobileMenu();
  initSmoothScroll();
  initActiveLinks();
  initContactForm();
});

/* ── 1. Scroll Reveal ────────────────────────────────
   Observes .reveal elements and adds .visible when
   they enter the viewport.                            */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  els.forEach((el) => io.observe(el));
}

/* ── 2. Navbar on scroll ─────────────────────────────
   Adds .scrolled to <header> after 50px scroll.       */
function initNavScroll() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  let tick = false;
  const update = () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
    tick = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!tick) {
        requestAnimationFrame(update);
        tick = true;
      }
    },
    { passive: true },
  );
  update();
}

/* ── 3. Mobile menu ──────────────────────────────────
   Toggles .open on #nav-links via hamburger button.   */
function initMobileMenu() {
  const btn = document.getElementById("hamburger");
  const links = document.getElementById("nav-links");
  if (!btn || !links) return;

  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
  };

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    links.classList.toggle("open", !isOpen);
  });

  // Close on link click
  links
    .querySelectorAll(".nav-link")
    .forEach((a) => a.addEventListener("click", close));

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav") && links.classList.contains("open")) close();
  });
}

/* ── 4. Smooth scroll ────────────────────────────────
   Intercepts #anchor clicks, offsets for fixed nav.   */
function initSmoothScroll() {
  const OFFSET = 70;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - OFFSET,
        behavior: "smooth",
      });
    });
  });
}

/* ── 5. Active nav links ─────────────────────────────
   Watches sections; highlights matching nav link.     */
function initActiveLinks() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link");
  if (!sections.length || !links.length) return;

  const map = {};
  links.forEach((l) => {
    const id = l.getAttribute("href")?.replace("#", "");
    if (id) map[id] = l;
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove("active"));
        const link = map[entry.target.id];
        if (link) link.classList.add("active");
      });
    },
    { threshold: 0.4, rootMargin: "-70px 0px -30% 0px" },
  );

  sections.forEach((s) => io.observe(s));
  if (map["home"]) map["home"].classList.add("active");
}

/* ── 6. Contact form ─────────────────────────────────
   Validates, shows success state, clears form.
   Replace the setTimeout with a real fetch() call.    */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const ok = document.getElementById("form-ok");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validate
    if (!name || !email || !message) {
      shake(form);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      shake(form);
      flash(form.email);
      return;
    }

    // Submit (simulated — replace with fetch)
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = "Sending…";
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.innerHTML = 'Send Message <span class="arrow">→</span>';
      btn.disabled = false;
      if (ok) {
        ok.classList.add("show");
        setTimeout(() => ok.classList.remove("show"), 5000);
      }
    }, 1000);
  });
}

/* Shake animation for invalid submit */
function shake(el) {
  const frames = [
    { transform: "translateX(-5px)" },
    { transform: "translateX(5px)" },
    { transform: "translateX(-3px)" },
    { transform: "translateX(0)" },
  ];
  if (el.animate) {
    el.animate(frames, { duration: 280, easing: "ease" });
  }
}

/* Briefly turn a field border red */
function flash(input) {
  input.style.borderBottomColor = "#ef4444";
  input.focus();
  setTimeout(() => {
    input.style.borderBottomColor = "";
  }, 2200);
}
