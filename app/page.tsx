import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechStack from "./components/Techstack";
import Contact from "./components/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanmay Sharma",
    url: "https://tanmaxsharma.in",
    image: "https://tanmaxsharma.in/images/tanmay.webp",
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer based in Jabalpur, Madhya Pradesh, India. Specialising in React, Next.js, Node.js, and AI automation workflows.",
    email: "tanmaysharma.eng05@gmail.com",
    telephone: "+91-9406525259",
    sameAs: [
      "https://www.linkedin.com/in/tanmaxsharma/",
      "https://github.com/tanmaxsharma",
      "https://x.com/tanmaxsharma",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jabalpur",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "AI Automation",
      "n8n",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}