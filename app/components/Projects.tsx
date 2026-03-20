"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "The Lok Mangal News",
    desc: "A modern news aggregator blending local stories with live weather data and breaking headlines in one clean dashboard.",
    image: "/images/projects/lokmangal.png",
    link: "https://www.thelokmangal.com/",
    tag: "Web App",
  },
  {
    id: 2,
    title: "Daksh Foundation",
    desc: "Passion meets design — an audio-visual generative art tool that transforms sound frequencies into stunning waveform graphics.",
    image: "/images/projects/daksh.png",
    link: "https://www.dakshfoundation.org/",
    tag: "Creative",
  },
  {
    id: 3,
    title: "HCET - Hitkarini College of Engineering and Technology",
    desc: "A 3D object design playground built for rapid prototyping with soft-body physics and real-time rendering.",
    image: "/images/projects/hcet.png",
    link: "http://www.hcet.hitkarini.com/",
    tag: "3D / UI",
  },
  {
    id: 4,
    title: "Remi Creative",
    desc: "A curated component library that hides complexity behind clean APIs, keeping the design process fluid and intuitive.",
    image: "/images/projects/lokmangal.png",
    link: "https://remicreative.ca/",
    tag: "Design System",
  },
  {
    id: 5,
    title: "Serendipity Cafe",
    desc: "Real-time collaborative whiteboard with infinite canvas, sticky notes, and live cursor presence for distributed teams.",
    image: "/images/projects/lokmangal.png",
    link: "https://serendipitycafe.in/",
    tag: "SaaS",
  },
  {
    id: 6,
    title: "Anami Decors",
    desc: "A headless CMS with a visual editor, dynamic routing, and instant previews — built for developers who love simplicity.",
    image: "/images/projects/lokmangal.png",
    link: "https://www.anamidecors.com/",
    tag: "Full Stack",
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

  useEffect(() => {
    // Only run on mobile
    if (window.innerWidth > 768) return;

    let ctx: any;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

        cards.forEach((card, i) => {
          // Each card sticks at a top offset so cards stack visually
          const topOffset = 72 + i * 14; // 72px navbar + 14px per card offset

          ScrollTrigger.create({
            trigger: card,
            start: `top ${topOffset}px`,
            endTrigger: sectionRef.current!,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
          });

          // Slight scale-down for cards underneath to give depth
          if (i < cards.length - 1) {
            gsap.to(card, {
              scale: 1 - (cards.length - 1 - i) * 0.02,
              ease: "none",
              scrollTrigger: {
                trigger: cards[i + 1],
                start: `top ${topOffset + 14}px`,
                end: `top ${topOffset}px`,
                scrub: true,
              },
            });
          }
        });
      }, sectionRef);
    };

    initGSAP();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Bebas+Neue&display=swap');

        .projects-section {
          font-family: 'Manrope', sans-serif;
          background: #fafafa;
          padding: 96px 64px 96px;
          scroll-margin-top: 72px;
          border-top: 1.5px solid #f0f0f0;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .projects-eyebrow {
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #f45d22; margin-bottom: 10px;
        }
        .projects-header h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 7vw, 80px);
          letter-spacing: 0.02em; color: #0d0d0d;
          line-height: 1; margin: 0 0 12px;
        }
        .projects-header p {
          font-size: 14px; color: #aaa; font-weight: 400;
          max-width: 380px; margin: 0 auto; line-height: 1.7;
        }

        /* ── Desktop grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px 40px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          background: #fafafa; /* needed so cards cover each other cleanly */
          border-radius: 16px;
        }

        .project-thumb {
          position: relative;
          width: 100%; aspect-ratio: 16/10;
          border-radius: 14px; overflow: hidden;
          background: #f0f0f0;
        }
        .project-thumb-placeholder {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
        }
        .project-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; transition: transform 0.5s ease;
        }
        .project-card:hover .project-thumb img { transform: scale(1.04); }

        .project-tag {
          position: absolute; top: 12px; left: 12px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.07em; color: #0d0d0d;
          padding: 4px 10px; border-radius: 100px;
          text-transform: uppercase;
        }

        .project-meta {
          display: flex; align-items: flex-start;
          justify-content: space-between;
          gap: 16px; margin-top: 16px;
        }
        .project-info { flex: 1; min-width: 0; }
        .project-title {
          font-size: 17px; font-weight: 800;
          color: #0d0d0d; margin: 0 0 6px;
          letter-spacing: -0.02em;
        }
        .project-desc {
          font-size: 13px; color: #999;
          line-height: 1.65; margin: 0;
        }

        .view-btn {
          display: inline-flex; align-items: center; gap: 5px;
          flex-shrink: 0; margin-top: 2px;
          padding: 9px 16px; border-radius: 100px;
          border: 1.5px solid #e0e0e0; background: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 12px; font-weight: 700;
          color: #0d0d0d; letter-spacing: 0.02em;
          text-decoration: none; cursor: pointer; white-space: nowrap;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.18s;
        }
        .view-btn:hover {
          background: #0d0d0d; border-color: #0d0d0d;
          color: #fff; transform: translateY(-1px);
        }
        .view-btn svg {
          width: 12px; height: 12px;
          stroke: currentColor; fill: none;
          stroke-width: 2.2;
          stroke-linecap: round; stroke-linejoin: round;
          transition: transform 0.2s;
        }
        .view-btn:hover svg { transform: translate(2px,-2px); }

        /* ── Responsive: desktop → tablet ── */
        @media (max-width: 1100px) {
          .projects-section { padding: 80px 48px 80px; }
        }
        @media (max-width: 900px) {
          .projects-section { padding: 72px 36px 72px; }
          .projects-grid { gap: 36px 24px; }
        }

        /* ── Mobile: single column + stacking prep ── */
        @media (max-width: 768px) {
          .projects-section { padding: 48px 16px 56px; }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 0;                     /* GSAP handles spacing via pinning */
          }

          .project-card {
            background: #fff;
            border-radius: 16px;
            padding: 16px 16px 20px;
            margin-bottom: 20px;        /* breathing room between stacked cards */
            box-shadow: 0 2px 16px rgba(0,0,0,0.06);
            /* transform-origin for scale effect */
            transform-origin: top center;
            will-change: transform;
          }

          /* Remove gap between thumb and meta on mobile */
          .project-meta { margin-top: 14px; }

          .project-title { font-size: 15px; }
          .project-desc  { font-size: 12.5px; }

          .view-btn { padding: 7px 13px; font-size: 11px; }
        }

        @media (max-width: 400px) {
          .projects-section { padding: 40px 12px 48px; }
          .project-card { padding: 14px 12px 16px; }
        }
      `}</style>

      <section id="projects" className="projects-section" ref={sectionRef}>
        <div className="projects-header">
          <p className="projects-eyebrow">My Work</p>
          <h2>Featured Projects</h2>
          <p>A selection of work I'm proud of — from concept to deployment.</p>
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
                Swap with real Image when ready:
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className="project-tag">{project.tag}</span>
              </div>

              <div className="project-meta">
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                </div>
                <a href={project.link} className="view-btn">
                  View Project
                  <svg viewBox="0 0 24 24">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
