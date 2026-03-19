import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechStack from "./components/Techstack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <TechStack />
      <Contact />
    </main>
  );
}