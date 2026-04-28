import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TawkTo from "./components/TawkTo";
import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanmaxsharma.in"),
  title: {
    default: "Tanmay Sharma — Full Stack Web Developer in Jabalpur, India",
    template: "%s | Tanmay Sharma",
  },
  description:
    "Tanmay Sharma is a Full Stack Web Developer based in Jabalpur, Madhya Pradesh, India. Specialising in React, Next.js, Node.js, and AI automation. Available for freelance and full-time opportunities.",
  keywords: [
    "Tanmay Sharma",
    "Tanmay Sharma developer",
    "web developer in Jabalpur",
    "software developer in Jabalpur",
    "best software developer in Jabalpur",
    "AI Automation in Jabalpur",
    "AI Automation in MP",
    "best web developer in Jabalpur",
    "best wordpress developer in Jabalpur",
    "web developer in Madhya Pradesh",
    "best web developer in MP",
    "software developer in MP",
    "best wordpress developer in MP",
    "web developer in India",
    "Full Stack Developer Jabalpur",
    "React developer India",
    "Next.js developer India",
    "hire web developer Jabalpur",
    "freelance web developer India",
    "tanmaxsharma",
    "tanmaxsharma.in",
  ],
  authors: [{ name: "Tanmay Sharma", url: "https://tanmaxsharma.in" }],
  creator: "Tanmay Sharma",
  // ✅ FIXED: favicon correctly pointed to public/ts.png
  icons: {
    icon: "/ts.png",
    shortcut: "/ts.png",
    apple: "/ts.png",
  },
  openGraph: {
    type: "website",
    url: "https://tanmaxsharma.in",
    title: "Tanmay Sharma — Full Stack Web Developer in Jabalpur, India",
    description:
      "Full Stack Developer with 3+ years of experience in React, Next.js, Node.js & AI automation. Based in Jabalpur, MP. Available for hire.",
    siteName: "Tanmay Sharma",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tanmay Sharma — Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Sharma — Full Stack Web Developer in Jabalpur",
    description:
      "Full Stack Developer specialising in React, Next.js & AI automation. Based in Jabalpur, India.",
    creator: "@tanmaxsharma",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://tanmaxsharma.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ✅ FIXED: suppressHydrationWarning added — prevents hydration mismatch
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f5f5f5] text-black">
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <TawkTo />
      </body>
    </html>
  );
}
