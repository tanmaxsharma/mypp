import Image from "next/image";

// ✅ UPDATED: Added n8n, PostgreSQL, MySQL — all from CV. Kept 12 items for clean 4-col grid.
const techs = [
  { name: "HTML",       src: "/images/tech/html-5.png"     },
  { name: "CSS",        src: "/images/tech/css-3.png"      },
  { name: "JavaScript", src: "/images/tech/js.png"         },
  { name: "React.js",   src: "/images/tech/react.png"      },
  { name: "Next.js",    src: "/images/tech/Next.png"       },
  { name: "Node.js",    src: "/images/tech/nodejs.png"     },
  { name: "Python",     src: "/images/tech/python.png"     },
  { name: "MongoDB",    src: "/images/tech/mongo.png"      },
  { name: "WordPress",  src: "/images/tech/wordpress.png"  },
  { name: "Shopify",    src: "/images/tech/shopify.png"    },
  { name: "GitHub",     src: "/images/tech/github.png"     },
  { name: "AWS", src: "/images/tech/aws.png" },
];

export default function TechStack() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700;800&display=swap');

        .tech-section {
          font-family: 'Manrope', sans-serif;
          background: #fafafa;
          padding: 96px 64px 96px;
          border-top: 1.5px solid #f0f0f0;
        }

        .tech-inner {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 64px;
          align-items: start;
        }

        .tech-left { position: sticky; top: 92px; }

        .tech-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #f45d22;
          margin-bottom: 10px;
        }
        .tech-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 72px);
          color: #0d0d0d;
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin: 0 0 20px;
        }
        .tech-desc {
          font-size: 13.5px;
          color: #aaa;
          line-height: 1.7;
          font-weight: 400;
          max-width: 220px;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: #e8e8e8;
          border: 5px solid #e8e8e8;
          border-radius: 18px;
          overflow: hidden;
        }

        .tech-card {
          position: relative;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1;
          overflow: visible;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .tech-card:nth-child(1)  { border-radius: 16px 0 0 0; }
        .tech-card:nth-child(4)  { border-radius: 0 16px 0 0; }
        .tech-card:nth-child(9)  { border-radius: 0 0 0 16px; }
        .tech-card:nth-child(12) { border-radius: 0 0 16px 0; }
        .tech-card:hover { background: #f9f9f9; }

        .tech-card-img {
          width: 42%;
          height: 42%;
          object-fit: contain;
          transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
          display: block;
        }
        .tech-card:hover .tech-card-img { transform: scale(1.14); }

        .tech-tooltip {
          position: absolute;
          top: -32px;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: #0d0d0d;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          white-space: nowrap;
          padding: 4px 9px;
          border-radius: 6px;
          pointer-events: none;
          opacity: 0;
          z-index: 20;
          transition: opacity 0.16s ease, transform 0.16s ease;
        }
        .tech-tooltip::after {
          content: '';
          position: absolute;
          top: 100%; left: 50%;
          transform: translateX(-50%);
          border: 4px solid transparent;
          border-top-color: #0d0d0d;
        }
        .tech-card:hover .tech-tooltip { opacity: 1; transform: translateX(-50%) translateY(0); }

        @media (max-width: 1100px) {
          .tech-section { padding: 80px 48px 80px; }
        }
        @media (max-width: 960px) {
          .tech-section { padding: 72px 36px 72px; }
          .tech-inner { grid-template-columns: 1fr; gap: 40px; }
          .tech-left { position: static; }
          .tech-desc { max-width: 100%; }
          .tech-grid { grid-template-columns: repeat(6, 1fr); }
        }
        @media (max-width: 640px) {
          .tech-section { padding: 56px 20px 56px; }
          .tech-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 380px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <section className="tech-section">
        <div className="tech-inner">
          <div className="tech-left">
            <p className="tech-eyebrow">What I work with</p>
            <h2 className="tech-title">Tech<br />Stacks</h2>
            {/* ✅ UPDATED: desc is more specific */}
            <p className="tech-desc">
              Languages, frameworks, and platforms I use daily to build scalable, production-ready web products.
            </p>
          </div>

          <div className="tech-grid">
            {techs.map(tech => (
              <div key={tech.name} className="tech-card">
                <Image src={tech.src} alt={tech.name} width={80} height={80} className="tech-card-img" />
                <span className="tech-tooltip">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}