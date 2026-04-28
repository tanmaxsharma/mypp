"use client";

import Script from "next/script";

export default function TawkTo() {
  return (
    <>
      {/* Initialize Tawk variables before loading script */}
      <Script
        id="tawk-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          `,
        }}
      />

      {/* Load Tawk.to embed script */}
      <Script
        id="tawk-embed"
        src="https://embed.tawk.to/69de095b0031901c34734a05/1jm5l94pb"
        strategy="afterInteractive"
        async
      />
    </>
  );
}
