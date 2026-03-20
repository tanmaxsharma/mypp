"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        .navbar {
          font-family: 'Manrope', sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding: 0 64px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo-badge {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: #0d0d0d;
          color: #fff;
          font-size: 12px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          letter-spacing: 0.04em; flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .nav-logo:hover .nav-logo-badge { transform: rotate(-8deg) scale(1.08); }
        .nav-logo-name {
          font-size: 15px; font-weight: 700;
          color: #0d0d0d; letter-spacing: -0.01em;
        }

        /* ── Desktop CV button ── */
        .cv-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #0d0d0d;
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.03em;
          padding: 10px 20px 10px 10px;
          border-radius: 100px;
          border: none; cursor: pointer;
          text-decoration: none;
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
          box-shadow: 0 4px 16px rgba(13,13,13,0.15);
          white-space: nowrap;
        }
        .cv-btn:hover {
          background: #f45d22;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(244,93,34,0.35);
        }
        .cv-btn-icon {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cv-btn-icon svg {
          width: 13px; height: 13px;
          stroke: #fff; fill: none;
          stroke-width: 2.2;
          stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── Mobile CV button (icon + "CV" text) ── */
        .cv-btn-mobile {
          display: none;
          align-items: center;
          gap: 6px;
          background: #0d0d0d;
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 12px; font-weight: 800;
          letter-spacing: 0.06em;
          text-decoration: none;
          padding: 8px 14px 8px 8px;
          border-radius: 100px;
          border: none; cursor: pointer;
          transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
          box-shadow: 0 4px 14px rgba(13,13,13,0.18);
          flex-shrink: 0;
        }
        .cv-btn-mobile:hover {
          background: #f45d22;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(244,93,34,0.38);
        }
        .cv-btn-mobile-icon {
          width: 26px; height: 26px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cv-btn-mobile-icon svg {
          width: 13px; height: 13px;
          stroke: #fff; fill: none;
          stroke-width: 2.2;
          stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .navbar { padding: 0 36px; }
        }
        @media (max-width: 768px) {
          .navbar { padding: 0 24px; }
          .nav-logo-name { display: none; }
          .cv-btn        { display: none; }
          .cv-btn-mobile { display: flex; }
        }
        @media (max-width: 480px) {
          .navbar { padding: 0 16px; }
        }
      `}</style>

      <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <nav className="navbar">

          {/* Logo */}
          <Link href="/" className="nav-logo">
            <div className="nav-logo-badge">TS</div>
            <span className="nav-logo-name">Tanmay Sharma</span>
          </Link>

          {/* Desktop — full pill button */}
          <a href="/Tanmay_Sharma_CV_2026.pdf" download className="cv-btn">
            <span className="cv-btn-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 5v10M7 15l5 5 5-5"/>
                <path d="M5 20h14"/>
              </svg>
            </span>
            Download CV
          </a>

          {/* Mobile — icon + "CV" label */}
          <a href="/Tanmay_Sharma_CV_2026.pdf" download className="cv-btn-mobile" title="Download CV">
            <span className="cv-btn-mobile-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 5v10M7 15l5 5 5-5"/>
                <path d="M5 20h14"/>
              </svg>
            </span>
            CV
          </a>

        </nav>
      </header>
    </>
  );
}