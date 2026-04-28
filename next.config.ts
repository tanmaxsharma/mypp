import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false, // ✅ "X-Powered-By: Next.js" header hide karo

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // ✅ Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Clickjacking se bachao
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // MIME type sniffing se bachao
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // XSS Protection
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Referrer info control
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // HTTPS enforce karo (1 saal)
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Camera / mic / location block karo
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // ✅ CSP for Tawk.to and other assets
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://embed.tawk.to https://cdn.tawk.to; frame-src https://embed.tawk.to https://cdn.tawk.to; connect-src 'self' https://embed.tawk.to https://cdn.tawk.to wss://stream.tawk.to; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.tawk.to; font-src 'self' https://fonts.gstatic.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
