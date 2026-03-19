export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');

        .footer {
          font-family: 'Manrope', sans-serif;
          background: #fff;
          border-top: 1.5px solid #f0f0f0;
          padding: 22px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-size: 13px;
          color: #bbb;
          font-weight: 500;
        }
        .footer-copy span { color: #f45d22; font-weight: 700; }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-link {
          font-size: 13px;
          font-weight: 600;
          color: #bbb;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.18s ease;
        }
        .footer-link:hover { color: #f45d22; }

        @media (max-width: 900px) {
          .footer { padding: 20px 36px; }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 20px 20px;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
          }
          .footer-links {
            justify-content: center;
            gap: 18px;
          }
          .footer-copy { font-size: 12px; }
          .footer-link  { font-size: 12px; }
        }

        @media (max-width: 360px) {
          .footer-links { gap: 14px; }
        }
      `}</style>

      <footer className="footer">
        <p className="footer-copy">© {year} <span>Tanmay Sharma</span>. All rights reserved.</p>
      </footer>
    </>
  );
}