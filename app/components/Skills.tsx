export default function Skills() {
  const skills = [
    {
      title: "Front-End Development",
      desc: "Building fast, responsive, and visually polished UIs using React, Next.js, Tailwind CSS, and modern web standards. Every pixel crafted for performance and accessibility.",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        </svg>
      ),
    },
    {
      title: "Back-End Development",
      desc: "Designing robust server-side systems with Node.js, Express, and REST APIs. From database architecture with MongoDB to authentication and deployment.",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0018 0V5"/><path d="M3 12a9 3 0 0018 0"/>
        </svg>
      ),
    },
    {
      title: "WordPress Development",
      desc: "Creating custom WordPress themes and plugins tailored to client needs. From simple blogs to complex business sites — clean code, fast load times, easy CMS.",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
        </svg>
      ),
    },
    {
      title: "Shopify Development",
      desc: "Building high-converting Shopify storefronts with custom Liquid themes, app integrations, and optimised checkout flows for seamless shopping experiences.",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700;800&display=swap');

        .skills-section {
          font-family: 'Manrope', sans-serif;
          background: #fff;
          padding: 96px 64px 96px;
          border-top: 1.5px solid #f0f0f0;
        }

        .skills-inner {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 64px;
          align-items: start;
        }

        .skills-left { position: sticky; top: 92px; }

        .skills-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #f45d22;
          margin-bottom: 10px;
        }
        .skills-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 6vw, 76px);
          color: #0d0d0d;
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin: 0 0 20px;
        }
        .skills-desc {
          font-size: 13.5px;
          color: #aaa;
          line-height: 1.75;
          font-weight: 400;
          max-width: 220px;
        }

        /* 2×2 grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border: 1.5px solid #ebebeb;
          border-radius: 18px;
          overflow: hidden;
        }

        .skill-card {
          padding: 36px 32px;
          border-right: 1.5px solid #ebebeb;
          border-bottom: 1.5px solid #ebebeb;
          transition: background 0.2s ease;
          cursor: default;
        }
        .skill-card:nth-child(2n)        { border-right: none; }
        .skill-card:nth-last-child(-n+2) { border-bottom: none; }
        .skill-card:hover { background: #fafafa; }

        .skill-icon {
          color: #0d0d0d;
          margin-bottom: 18px;
          display: block;
          transition: color 0.2s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .skill-card:hover .skill-icon { color: #f45d22; transform: translateY(-4px); }

        .skill-title {
          font-size: 16px;
          font-weight: 800;
          color: #0d0d0d;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
        }
        .skill-desc {
          font-size: 13px;
          color: #999;
          line-height: 1.75;
          font-weight: 400;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .skills-section { padding: 80px 48px 80px; }
        }
        @media (max-width: 960px) {
          .skills-section { padding: 72px 36px 72px; }
          .skills-inner { grid-template-columns: 1fr; gap: 40px; }
          .skills-left { position: static; }
          .skills-desc { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .skills-section { padding: 56px 20px 56px; }
          .skills-grid { grid-template-columns: 1fr; }
          .skill-card { border-right: none; border-bottom: 1.5px solid #ebebeb; padding: 28px 24px; }
          .skill-card:last-child { border-bottom: none; }
        }
      `}</style>

      <section className="skills-section">
        <div className="skills-inner">
          <div className="skills-left">
            <p className="skills-eyebrow">What I do</p>
            <h2 className="skills-title">Skills</h2>
            <p className="skills-desc">
              My expertise across design and development — from pixel-perfect interfaces to scalable server-side systems.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.title} className="skill-card">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}