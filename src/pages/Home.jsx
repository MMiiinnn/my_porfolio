import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="bg-bg-main">
      <Hero />

      <div className="max-w-7xl mx-auto space-y-32 pb-32">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
