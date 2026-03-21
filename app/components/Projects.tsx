"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// ✅ UPDATED: Real projects with accurate descriptions from CV
const projects = [
  {
    id: 1,
    title: "The Lok Mangal News",
    desc: "A modern news portal delivering local stories and breaking headlines. Built with a clean, responsive layout focused on readability and fast content delivery.",
    image: "/images/projects/lokmangal.png",
    link: "https://www.thelokmangal.com/",
    tag: "Web App",
  },
  {
    id: 2,
    title: "Daksh Foundation",
    desc: "A professional NGO website built to showcase foundation initiatives, events, and impact stories designed for trust, clarity, and easy content management.",
    image: "/images/projects/daksh.png",
    link: "https://www.dakshfoundation.org/",
    tag: "Website",
  },
  {
    id: 3,
    title: "HCET — Hitkarini College",
    desc: "A full-featured institutional website for Hitkarini College of Engineering, covering admissions, departments, faculty, and announcements in one unified platform.",
    image: "/images/projects/hcet.png",
    link: "http://www.hcet.hitkarini.com/",
    tag: "Website",
  },
  {
    id: 4,
    title: "Remi Creative",
    desc: "A polished WordPress website for a Canadian creative agency custom theme, fast load times, and a content structure built for conversion and brand storytelling.",
    image: "/images/projects/remi.png",
    link: "https://remicreative.ca/",
    tag: "WordPress",
  },
  {
    id: 5,
    title: "Serendipity Cafe",
    desc: "A warm, inviting café website with an online menu, reservation flow, and brand-consistent UI built on WordPress for easy staff management and updates.",
    image: "/images/projects/serendipity.png",
    link: "https://serendipitycafe.in/",
    tag: "WordPress",
  },
  {
    id: 6,
    title: "Utube Transcript",
    desc: "A SaaS tool that fetches and formats YouTube video transcripts instantly built with a clean UI for researchers, content creators, and students to save hours of manual work.",
    image: "/images/projects/utube.png",
    link: "https://utubescript.vercel.app/",
    tag: "SaaS",
  },
];

const gradients = [
  "linear-gradient(135deg,#f0f4ff 0%,#c8d8ff 100%)",
  "linear-gradient(135deg,#d4f5e9 0%,#a8e6c8 50%,#f4a86b 100%)",
  "linear-gradient(135deg,#fde8f0 0%,#f8c8e0 50%,#c8e8f8 100%)",
  "linear-gradient(135deg,#ede8ff 0%,#d0c4f8 50%,#f8d4f0 100%)",
  "linear-gradient(135deg,#fff8e0 0%,#fce4a0 50%,#f8c870 100%)",
  "linear-gradient(135deg,#e0f8ff 0%,#a8e4f4 50%,#80cce8 100%)",
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const gsapCtxRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth <= 768;

    const initAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!isMobile) return;

      gsapCtxRef.current = gsap.context(() => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        const NAVBAR = 72;
        const STACK_OFFSET = 12;

        cards.forEach((card, i) => {
          const topOffset = NAVBAR + i * STACK_OFFSET;

          gsap.fromTo(
            card,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                once: true,
              },
            }
          );

          ScrollTrigger.create({
            trigger: card,
            start: `top ${topOffset}px`,
            endTrigger: sectionRef.current!,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
          });

          if (i < cards.length - 1) {
            gsap.to(card, {
              scale: 0.96,
              borderRadius: "20px",
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: cards[i + 1],
                start: `top ${NAVBAR + (i + 1) * STACK_OFFSET}px`,
                end: `top ${NAVBAR + i * STACK_OFFSET}px`,
                scrub: 0.6,
              },
            });
          }
        });
      }, sectionRef);
    };

    initAnimations();

    return () => {
      gsapCtxRef.current?.revert();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Bebas+Neue&display=swap');

        .projects-section {
          font-family: 'Manrope', sans-serif;
          background: #fafafa;
          padding: 100px 64px 112px;
          scroll-margin-top: 72px;
          border-top: 1.5px solid #ebebeb;
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .projects-inner { position: relative; z-index: 1; }

        .projects-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .projects-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #f45d22;
          margin-bottom: 14px;
        }
        .projects-eyebrow::before,
        .projects-eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1.5px;
          background: #f45d22;
          opacity: 0.6;
        }
        .projects-header h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7.5vw, 88px);
          letter-spacing: 0.025em;
          color: #0d0d0d;
          line-height: 0.95;
          margin: 0 0 16px;
        }
        .projects-header p {
          font-size: 14px;
          color: #b0b0b0;
          font-weight: 400;
          max-width: 360px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 52px 44px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          background: transparent;
          border-radius: 16px;
          cursor: default;
        }

        .project-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: 14px;
          overflow: hidden;
          background: #f0f0f0;
        }

        .project-thumb::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(13,13,13,0) 40%,
            rgba(13,13,13,0.22) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        .project-card:hover .project-thumb::after { opacity: 1; }

        .project-thumb-placeholder {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .project-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .project-card:hover .project-thumb img { transform: scale(1.05); }

        .project-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #0d0d0d;
          padding: 5px 11px;
          border-radius: 100px;
          text-transform: uppercase;
          border: 1px solid rgba(0,0,0,0.06);
        }

        .project-num {
          position: absolute;
          bottom: 14px;
          right: 14px;
          z-index: 2;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          line-height: 1;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
          transition: color 0.3s ease, transform 0.3s ease;
          text-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .project-card:hover .project-num {
          color: rgba(255,255,255,0.9);
          transform: translateY(-2px);
        }

        .project-meta {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-top: 18px;
        }
        .project-info { flex: 1; min-width: 0; }
        .project-title {
          font-size: 16.5px;
          font-weight: 800;
          color: #0d0d0d;
          margin: 0 0 6px;
          letter-spacing: -0.025em;
          line-height: 1.3;
        }
        .project-desc {
          font-size: 13px;
          color: #aaa;
          line-height: 1.7;
          margin: 0;
        }

        .view-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          margin-top: 2px;
          padding: 9px 17px;
          border-radius: 100px;
          border: 1.5px solid #e0e0e0;
          background: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          color: #0d0d0d;
          letter-spacing: 0.025em;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          transition:
            background 0.22s ease,
            border-color 0.22s ease,
            color 0.22s ease,
            transform 0.2s ease,
            box-shadow 0.22s ease;
        }
        .view-btn:hover {
          background: #0d0d0d;
          border-color: #0d0d0d;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(13,13,13,0.15);
        }
        .view-btn:active { transform: translateY(0); }
        .view-btn svg {
          width: 11px;
          height: 11px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2.4;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform 0.2s ease;
        }
        .view-btn:hover svg { transform: translate(2px, -2px); }

        @media (max-width: 1100px) {
          .projects-section { padding: 80px 48px 96px; }
        }
        @media (max-width: 900px) {
          .projects-section { padding: 72px 36px 84px; }
          .projects-grid { gap: 40px 24px; }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 52px 0 80px;
            overflow: visible;
          }

          .projects-header {
            padding: 0 20px;
            margin-bottom: 40px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 0 16px;
          }

          .project-card {
            background: #fff;
            border-radius: 18px;
            padding: 14px 14px 18px;
            margin-bottom: 18px;
            box-shadow:
              0 1px 3px rgba(0,0,0,0.05),
              0 4px 16px rgba(0,0,0,0.07),
              0 12px 40px rgba(0,0,0,0.06);
            transform-origin: top center;
            will-change: transform, border-radius;
          }

          .project-thumb { border-radius: 11px; }
          .project-tag { top: 10px; left: 10px; }
          .project-num { font-size: 26px; bottom: 10px; right: 10px; }

          .project-meta { margin-top: 14px; gap: 12px; }
          .project-title { font-size: 14.5px; }
          .project-desc {
            font-size: 12.5px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .view-btn { padding: 7px 13px; font-size: 11px; }

          .view-btn:active {
            background: #0d0d0d;
            color: #fff;
            border-color: #0d0d0d;
            transform: scale(0.97);
          }
        }

        @media (max-width: 400px) {
          .projects-grid { padding: 0 12px; }
          .project-card { padding: 12px 12px 16px; }
          .project-title { font-size: 13.5px; }
        }
      `}</style>

      <section id="projects" className="projects-section" ref={sectionRef}>
        <div className="projects-inner">
          <div className="projects-header">
            <p className="projects-eyebrow">My Work</p>
            <h2>Featured Projects</h2>
            {/* ✅ UPDATED: subtitle */}
            <p>A selection of client work and personal projects — from concept to deployment.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="project-card"
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
              >
                <div className="project-thumb">
                  <div
                    className="project-thumb-placeholder"
                    style={{ background: gradients[i] }}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <span className="project-tag">{project.tag}</span>
                  <span className="project-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-meta">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    View
                    <svg viewBox="0 0 24 24">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}