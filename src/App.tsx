import { Navbar } from './components/Navbar'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='App px-70 py-5 scroll-smooth | max-sm:px-10'>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default App
