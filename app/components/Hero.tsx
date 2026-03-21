"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 100;
    if (dist < maxDist) {
      const force = (maxDist - dist) / maxDist;
      const tx = -(dx / dist) * force * 24;
      const ty = -(dy / dist) * force * 24;
      btn.style.transform = `translate(${tx}px,${ty}px) scale(1.06)`;
    } else {
      btn.style.transform = "translate(0,0) scale(1)";
    }
  };

  const handleMouseLeave = () => {
    if (btnRef.current)
      btnRef.current.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@300;400;500;600;700;800&display=swap');

        :root {
          --orange: #f45d22;
          --black:  #0d0d0d;
          --light:  #f7f7f7;
        }

        .hero {
          font-family: 'Manrope', sans-serif;
          background: #fff;
          min-height: calc(100vh - 72px);
          padding: 44px 64px 60px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #ddd 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.22;
          pointer-events: none;
          z-index: 0;
        }
        .hero > * { position: relative; z-index: 1; }

        .hero-topbar {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #666;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-bottom: 36px;
          opacity: 0;
          animation: fadeUp 0.5s 0.05s ease forwards;
        }
        .hero-topbar .tl { width: 36px; height: 1px; background: #ccc; flex-shrink: 0; }
        .hero-avail {
          margin-left: auto;
          display: flex; align-items: center; gap: 6px;
          font-size: 11px; font-weight: 700;
          color: #2a9e5a; background: #edfaf3;
          padding: 4px 12px; border-radius: 100px;
          white-space: nowrap; letter-spacing: 0.04em;
        }
        .hero-avail .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #2a9e5a; flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 140px 340px;
          gap: 0 28px;
          align-items: center;
          flex: 1;
        }

        .hero-left { display: flex; flex-direction: column; }

        .hero-role {
          font-size: 20px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--orange); margin-bottom: 12px; margin-left: 2px;
          opacity: 0; animation: fadeUp 0.5s 0.15s ease forwards;
        }
        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(66px, 8.5vw, 108px);
          line-height: 0.88; letter-spacing: 0.01em;
          color: var(--black); margin: 0 0 18px;
          opacity: 0; animation: fadeUp 0.6s 0.22s ease forwards;
        }
        .hero-title span { color: var(--orange); }

        .hero-location {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 13.5px; font-weight: 700; color: #444;
          margin-bottom: 14px;
          opacity: 0; animation: fadeUp 0.5s 0.3s ease forwards;
        }
        .hero-location svg {
          width: 13px; height: 13px;
          stroke: var(--orange); fill: none; stroke-width: 2; flex-shrink: 0;
        }

        .hero-desc {
          font-size: 13.5px; color: #888; line-height: 1.8;
          max-width: 400px; font-weight: 400; margin-bottom: 26px;
          opacity: 0; animation: fadeUp 0.5s 0.36s ease forwards;
        }

        .hero-stats {
          display: flex; align-items: center; gap: 22px; margin-bottom: 32px;
          opacity: 0; animation: fadeUp 0.5s 0.42s ease forwards;
        }
        .hero-stat { display: flex; flex-direction: column; gap: 2px; }
        .hero-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px; color: var(--black); line-height: 1;
        }
        .hero-stat-num span { color: var(--orange); }
        .hero-stat-label {
          font-size: 9px; color: #bbb; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
        .hero-sdivider { width: 1px; height: 32px; background: #e8e8e8; flex-shrink: 0; }

        .hero-contact {
          display: flex; flex-wrap: wrap; gap: 10px 20px;
          opacity: 0; animation: fadeUp 0.5s 0.58s ease forwards;
        }
        .hero-ci {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: #777; font-weight: 500;
          text-decoration: none; transition: color 0.18s;
        }
        .hero-ci:hover { color: var(--orange); }
        .hero-ci svg {
          width: 13px; height: 13px;
          stroke: var(--orange); fill: none; stroke-width: 2; flex-shrink: 0;
        }

        .hero-btns {
          display: flex; flex-direction: column;
          align-items: center; gap: 20px;
          opacity: 0; animation: fadeUp 0.6s 0.45s ease forwards;
        }

        .hire-zone {
          position: relative;
          width: 110px; height: 110px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .hire-btn {
          width: 88px; height: 88px;
          border-radius: 50%;
          background: var(--orange);
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 11.5px; font-weight: 800;
          letter-spacing: 0.05em; text-transform: uppercase;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(244,93,34,0.36);
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
          position: relative; z-index: 2;
          animation: floatBtn 3.5s ease-in-out infinite;
          text-decoration: none;
        }
        .hire-btn:hover {
          box-shadow: 0 12px 32px rgba(244,93,34,0.48);
        }
        .hire-ring1 {
          position: absolute; inset: -9px; border-radius: 50%;
          border: 1.5px dashed rgba(244,93,34,0.3);
          animation: spin 10s linear infinite; pointer-events: none;
        }
        .hire-ring2 {
          position: absolute; inset: -18px; border-radius: 50%;
          border: 1px dashed rgba(244,93,34,0.12);
          animation: spin 18s linear infinite reverse; pointer-events: none;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes floatBtn {
          0%,100% { margin-top: 0; }
          50%      { margin-top: -6px; }
        }

        .view-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Manrope', sans-serif;
          font-size: 11.5px; font-weight: 700;
          color: var(--black); text-decoration: none;
          letter-spacing: 0.02em;
          border-bottom: 1.5px solid var(--black);
          padding-bottom: 2px; white-space: nowrap;
          transition: color 0.18s, border-color 0.18s;
        }
        .view-btn:hover { color: var(--orange); border-color: var(--orange); }
        .view-btn svg {
          width: 13px; height: 13px;
          stroke: currentColor; fill: none; stroke-width: 2.2;
          transition: transform 0.18s;
        }
        .view-btn:hover svg { transform: translate(2px,-2px); }

        .hero-right {
          display: flex; flex-direction: column; gap: 12px;
          opacity: 0; animation: fadeScale 0.8s 0.3s ease forwards;
        }
        @keyframes fadeScale {
          from { opacity:0; transform: scale(0.96) translateY(10px); }
          to   { opacity:1; transform: scale(1) translateY(0); }
        }

        .hero-img-frame { position: relative; width: 100%; }
        .hero-img-wrap {
          position: relative; width: 100%;
          aspect-ratio: 3/4; border-radius: 10px;
          overflow: hidden; background: #eaecf0;
        }
        .hero-img-wrap img {
          width: 100% !important; height: 100% !important;
          object-fit: cover; object-position: top center;
          display: block; transition: transform 0.7s ease;
        }
        .hero-img-wrap:hover img { transform: scale(1.03); }

        .pencil-border {
          position: absolute; inset: -5px;
          width: calc(100% + 10px); height: calc(100% + 10px);
          pointer-events: none; z-index: 4; overflow: visible;
        }
        .pencil-rect {
          fill: none; stroke: #aaa; stroke-width: 1;
          stroke-dasharray: 5 5; stroke-linecap: round; opacity: 0.55;
        }

        .hero-skills { display: flex; flex-wrap: wrap; gap: 6px; }
        .s-chip {
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--black); background: var(--light);
          border: 1.5px solid #e8e8e8;
          padding: 4px 10px; border-radius: 100px; cursor: default;
          transition: background 0.18s, border-color 0.18s, color 0.18s;
        }
        .s-chip:hover { background: var(--orange); border-color: var(--orange); color: #fff; }

        .hero-tagline {
          grid-column: 1 / -1;
          padding-top: 28px; border-top: 1px solid #f0f0f0;
          font-size: 11px; color: #ccc;
          letter-spacing: 0.05em; font-weight: 500;
          opacity: 0; animation: fadeUp 0.5s 0.65s ease forwards;
        }

        @keyframes fadeUp {
          from { opacity:0; transform: translateY(12px); }
          to   { opacity:1; transform: translateY(0); }
        }

        @media (max-width: 1280px) {
          .hero { padding: 40px 52px 56px; }
          .hero-grid { grid-template-columns: 1fr 130px 310px; gap: 0 22px; }
        }
        @media (max-width: 1060px) {
          .hero { padding: 36px 40px 52px; }
          .hero-grid { grid-template-columns: 1fr 120px 280px; gap: 0 18px; }
          .hero-title { font-size: clamp(58px, 8vw, 90px); }
        }

        @media (max-width: 860px) {
          .hero { padding: 32px 32px 48px; }
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 28px 24px; align-items: start;
          }
          .hero-left  { grid-column: 1; grid-row: 1; }
          .hero-right { grid-column: 2; grid-row: 1 / 3; }
          .hero-btns  {
            grid-column: 1; grid-row: 2;
            flex-direction: row; align-items: center;
            justify-content: flex-start; gap: 24px;
          }
          .hero-tagline { grid-column: 1 / -1; }
          .hero-avail { display: none; }
          .hero-desc  { max-width: 100%; }
        }

        @media (max-width: 600px) {
          .hero { padding: 20px 20px 44px; }
          .hero-topbar { display: none; }
          .hero-grid { grid-template-columns: 1fr; gap: 0; display: flex; flex-direction: column; }
          .hero-right { order: -1; align-items: center; margin-bottom: 28px; }
          .hero-img-wrap { max-width: 240px; margin: 0 auto; aspect-ratio: 3/3.5; }
          .hero-skills  { justify-content: center; }
          .hero-left    { order: 0; margin-bottom: 20px; }
          .hero-title   { font-size: clamp(58px, 16vw, 78px); }
          .hero-desc    { max-width: 100%; font-size: 13px; }
          .hero-stats   { gap: 16px; }
          .hero-stat-num{ font-size: 24px; }
          .hero-btns    {
            order: 1; flex-direction: row; align-items: center;
            justify-content: flex-start; gap: 20px; margin-bottom: 28px;
          }
          .hero-tagline { order: 2; }

          .mobile-topbar {
            display: flex !important;
            align-items: center; justify-content: center;
            gap: 8px; font-size: 13px; color: #666;
            font-weight: 500; letter-spacing: 0.02em;
            margin-bottom: 14px;
            opacity: 0; animation: fadeUp 0.5s 0.05s ease forwards;
          }
          .mobile-topbar .tl { width: 28px; height: 1px; background: #ccc; flex-shrink: 0; }
          .mobile-topbar .hero-avail { margin-left: 0; font-size: 10.5px; display: flex !important; }
        }

        @media (max-width: 400px) {
          .hero-title { font-size: 52px; }
          .hero-stats { flex-wrap: wrap; gap: 12px; }
          .hero-sdivider { display: none; }
          .hero-btns { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <section className="hero">

        {/* Desktop topbar */}
        <div className="hero-topbar">
          <span>Hey 👋</span>
          <span className="tl" />
          <span>I'm Tanmay Sharma</span>
          <span className="hero-avail">
            <span className="dot" />
            Available for work
          </span>
        </div>

        <div className="hero-grid">

          {/* ── COL 1: Content ── */}
          <div className="hero-left">
            <p className="hero-role">Full-Stack</p>
            <h1 className="hero-title">WEB DEVEL<span>O</span>PER</h1>

            <span className="hero-location">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              MP, Jabalpur — India
            </span>

            {/* ✅ UPDATED: CV-accurate description */}
            <p className="hero-desc">
              Full Stack Developer with 3+ years of experience building production-grade web apps
              using React, Next.js &amp; Node.js. I specialise in scalable APIs, AI-integrated tools,
              and end-to-end automation workflows delivering fast, polished products on time.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">3<span>+</span></span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-sdivider" />
              <div className="hero-stat">
                <span className="hero-stat-num">25<span>+</span></span>
                <span className="hero-stat-label">Projects Delivered</span>
              </div>
              <div className="hero-sdivider" />
              <div className="hero-stat">
                <span className="hero-stat-num">10<span>+</span></span>
                <span className="hero-stat-label">Products Live</span>
              </div>
            </div>

            <div className="hero-contact">
              <a href="mailto:tanmaysharma.eng05@gmail.com" className="hero-ci">
                <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
                tanmaysharma.eng05@gmail.com
              </a>
              <a href="tel:+919406525259" className="hero-ci">
                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72 12.07 12.07 0 00.57 2.57 2 2 0 01-.45 2.11L9.09 10.5a16 16 0 006.41 6.41l1.1-1.1a2 2 0 012.11-.45 12.07 12.07 0 002.57.57A2 2 0 0122 16.92z"/></svg>
                +91-9406525259
              </a>
              <a href="https://www.linkedin.com/in/tanmaxsharma/" target="_blank" rel="noreferrer" className="hero-ci">
                <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/tanmaxsharma" target="_blank" rel="noreferrer" className="hero-ci">
                <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                GitHub
              </a>
            </div>
          </div>

          {/* ── COL 2: Buttons ── */}
          <div className="hero-btns" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="hire-zone">
              <div className="hire-ring2" />
              <div className="hire-ring1" />
              <a href="#contact" ref={btnRef} className="hire-btn">
                Hire Me
              </a>
            </div>

            <a href="#projects" className="view-btn">
              View My Work
              <svg viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
          </div>

          {/* ── COL 3: Image ── */}
          <div className="hero-right">

            <div className="mobile-topbar" style={{ display: "none" }}>
              <span>Hey 👋</span>
              <span className="tl" />
              <span>I'm Tanmay Sharma</span>
              <span className="hero-avail">
                <span className="dot" />
                Available for work
              </span>
            </div>

            <div className="hero-img-frame">
              <div className="hero-img-wrap">
                <Image
                  src="/images/hero.png"
                  alt="Tanmay Sharma — Full Stack Developer"
                  width={340}
                  height={453}
                  priority
                />
              </div>
            </div>

            {/* ✅ UPDATED: chips from CV tech skills */}
            <div className="hero-skills">
              {["Javascript","React", "Next.js", "Node.js","Tailwind", "MongoDB", "AWS", "AI Enthusiast"].map(s => (
                <span key={s} className="s-chip">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}