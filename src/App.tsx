import './App.css'
import About from './components/About'
import { Navbar } from './components/Navbar'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className='App px-70 py-5'>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      {/* <Projects/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default App
