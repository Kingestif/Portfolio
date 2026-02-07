import { Navbar } from "./components/Navbar";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { RevealSection } from "./components/RevealSection";

function App() {
  return (
    <div className="App px-70 py-5 scroll-smooth | max-sm:px-10">
      <Navbar />

      <RevealSection id="hero">
        <Hero />
      </RevealSection>

      <RevealSection id="skills">
        <Skills />
      </RevealSection>

      <RevealSection id="experience">
        <Experience />
      </RevealSection>

      <section id="projects">
        <Projects />
      </section>

      <RevealSection id="contact">
        <Contact />
      </RevealSection>

      <Footer />
    </div>
  );
}

export default App;
