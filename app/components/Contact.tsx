"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700;800&display=swap');

        .contact-section {
          font-family: 'Manrope', sans-serif;
          background: #fff;
          padding: 96px 64px 96px;
          border-top: 1.5px solid #f0f0f0;
          position: relative;
          overflow: hidden;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          top: -60px; left: 40%;
          width: 500px; height: 350px;
          background: radial-gradient(ellipse, rgba(244,93,34,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: start;
        }

        /* Left */
        .contact-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #f45d22;
          margin-bottom: 12px;
        }
        .contact-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 84px);
          color: #0d0d0d;
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin: 0 0 24px;
        }
        .contact-title span { color: #f45d22; }
        .contact-tagline {
          font-size: 14px;
          color: #888;
          line-height: 1.75;
          max-width: 340px;
          margin-bottom: 40px;
        }

        .contact-info { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
        .contact-info-item {
          display: flex; align-items: center;
          gap: 14px; text-decoration: none;
        }
        .contact-info-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: #f7f7f7;
          border: 1.5px solid #ebebeb;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }
        .contact-info-item:hover .contact-info-icon {
          background: rgba(244,93,34,0.08);
          border-color: rgba(244,93,34,0.25);
        }
        .contact-info-icon svg {
          width: 17px; height: 17px;
          stroke: #f45d22; fill: none;
          stroke-width: 1.8;
          stroke-linecap: round; stroke-linejoin: round;
        }
        .contact-info-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #bbb; display: block; margin-bottom: 2px;
        }
        .contact-info-value {
          font-size: 13.5px; font-weight: 600; color: #333;
          transition: color 0.2s;
        }
        .contact-info-item:hover .contact-info-value { color: #f45d22; }

        .contact-socials { display: flex; gap: 8px; }
        .social-btn {
          width: 40px; height: 40px;
          border-radius: 10px;
          border: 1.5px solid #ebebeb;
          background: #f7f7f7;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .social-btn:hover {
          background: rgba(244,93,34,0.08);
          border-color: rgba(244,93,34,0.3);
          transform: translateY(-3px);
        }
        .social-btn svg {
          width: 16px; height: 16px;
          stroke: #aaa; fill: none;
          stroke-width: 1.8;
          stroke-linecap: round; stroke-linejoin: round;
          transition: stroke 0.2s;
        }
        .social-btn:hover svg { stroke: #f45d22; }

        /* Right: form */
        .contact-form-wrap {
          background: #f9f9f9;
          border: 1.5px solid #ebebeb;
          border-radius: 20px;
          padding: 36px 32px;
        }
        .contact-form-title { font-size: 17px; font-weight: 800; color: #0d0d0d; margin: 0 0 5px; letter-spacing: -0.02em; }
        .contact-form-sub   { font-size: 13px; color: #aaa; margin: 0 0 24px; }
        .contact-form       { display: flex; flex-direction: column; gap: 14px; }
        .form-row           { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-group         { display: flex; flex-direction: column; gap: 6px; }
        .form-label         { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #aaa; }

        .form-input, .form-textarea {
          background: #fff;
          border: 1.5px solid #e8e8e8;
          border-radius: 10px;
          padding: 12px 14px;
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          color: #0d0d0d;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%; box-sizing: border-box;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: #ccc; }
        .form-input:focus, .form-textarea:focus {
          border-color: #f45d22;
          box-shadow: 0 0 0 3px rgba(244,93,34,0.08);
        }
        .form-textarea { resize: none; height: 110px; }

        .form-chips { display: flex; flex-wrap: wrap; gap: 7px; }
        .form-chip {
          font-family: 'Manrope', sans-serif;
          font-size: 12px; font-weight: 600;
          padding: 5px 13px;
          border-radius: 100px;
          border: 1.5px solid #e8e8e8;
          background: #fff; color: #999;
          cursor: pointer;
          transition: all 0.18s ease;
        }
        .form-chip:hover, .form-chip.active {
          background: rgba(244,93,34,0.08);
          border-color: rgba(244,93,34,0.35);
          color: #f45d22;
        }

        .submit-btn {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          background: #f45d22; color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 13px; font-weight: 800;
          letter-spacing: 0.06em; text-transform: uppercase;
          border: none; border-radius: 12px;
          padding: 15px 24px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 24px rgba(244,93,34,0.25);
          margin-top: 2px;
        }
        .submit-btn:hover { background: #e04d15; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(244,93,34,0.35); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
        .submit-btn svg { width: 17px; height: 17px; stroke: #fff; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }

        .success-msg { text-align: center; padding: 40px 20px; }
        .success-icon {
          width: 60px; height: 60px; border-radius: 50%;
          background: rgba(46,158,91,0.1); border: 1.5px solid rgba(46,158,91,0.25);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px;
        }
        .success-icon svg { width: 26px; height: 26px; stroke: #2e9e5b; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
        .success-msg h3 { font-size: 18px; font-weight: 800; color: #0d0d0d; margin: 0 0 8px; }
        .success-msg p  { font-size: 13px; color: #aaa; }

        @media (max-width: 1100px) {
          .contact-section { padding: 80px 48px 80px; }
          .contact-inner { gap: 56px; }
        }
        @media (max-width: 960px) {
          .contact-section { padding: 72px 36px 72px; }
          .contact-inner { grid-template-columns: 1fr; gap: 48px; }
          .contact-tagline { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .contact-section { padding: 56px 20px 56px; }
          .contact-form-wrap { padding: 24px 18px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-left">
            <p className="contact-eyebrow">Let's Connect</p>
            <h2 className="contact-title">Get In<br />Touch<span>.</span></h2>
            <p className="contact-tagline">Got a project in mind, a job opportunity, or just want to say hi? My inbox is always open — I'll get back within 24 hours.</p>

            <div className="contact-info">
              <a href="mailto:hi@tanmaysharma.in" className="contact-info-item">
                <div className="contact-info-icon"><svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg></div>
                <div><span className="contact-info-label">Email</span><span className="contact-info-value">hi@tanmaysharma.in</span></div>
              </a>
              <a href="tel:+910000000000" className="contact-info-item">
                <div className="contact-info-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.9a16 16 0 006.41 6.41l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                <div><span className="contact-info-label">Phone</span><span className="contact-info-value">+91-00000-00000</span></div>
              </a>
              <div className="contact-info-item">
                <div className="contact-info-icon"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></div>
                <div><span className="contact-info-label">Location</span><span className="contact-info-value">Jabalpur, MP — India</span></div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com"    target="_blank" rel="noreferrer" className="social-btn"><svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg></a>
              <a href="https://linkedin.com"  target="_blank" rel="noreferrer" className="social-btn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="https://twitter.com"   target="_blank" rel="noreferrer" className="social-btn"><svg viewBox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4"/></svg></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#aaa"/></svg></a>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-msg">
                <div className="success-icon"><svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg></div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Send a Message</h3>
                <p className="contact-form-sub">Fill out the form and I'll respond ASAP.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input className="form-input" placeholder="Tanmay Sharma" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-input" placeholder="hi@you.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">I'm interested in…</label>
                    <SubjectChips />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" placeholder="Tell me about your project or idea..." required />
                  </div>
                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? "Sending..." : (<>Send Message <svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg></>)}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function SubjectChips() {
  const [active, setActive] = useState("Web Dev");
  const chips = ["Web Dev", "UI/UX Design", "Freelance", "Full-Time", "Just saying hi"];
  return (
    <div className="form-chips">
      {chips.map(c => (
        <button key={c} type="button" className={`form-chip ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>{c}</button>
      ))}
    </div>
  );
}