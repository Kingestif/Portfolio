import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from './components/About'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { useEffect, useRef, useState } from 'react'

function App() {
  //below snippet b/c my Project component excceded 1 page so we need its exact height
  const projectsRef = useRef<HTMLDivElement>(null)
  const [projectsFactor, setProjectsFactor] = useState<number | null>(null)

  useEffect(() => {
    if (projectsRef.current) {
      const height = projectsRef.current.getBoundingClientRect().height
      setProjectsFactor(height / window.innerHeight)
    }
  }, [])

  if (projectsFactor === null) {
    return (
      <div style={{ visibility: 'hidden', position: 'absolute' }}>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    )
  }

  return (
    <div className='App'>
      <Navbar/>
      
      <Parallax pages={3 + projectsFactor} style={{top:'0', left: '0'}} className="animation">

        <ParallaxLayer offset={0} speed={0.1}>
          <div className='animation_layer' id='background'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.15}>
          <div className='animation_layer' id='mountains'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2}>
          <div className='animation_layer' id='jungle1'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2}>
          <div className='animation_layer' id='jungle2'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className='animation_layer' id='jungle3'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div className='animation_layer' id='jungle4'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.15}>
          <div className='animation_layer parallax' id='man_on_mountain'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <div className='animation_layer' id='jungle5'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={0.85}>
          <div className='animation_layer' id='black'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <About/>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0} factor={projectsFactor}>
          <Projects/>
        </ParallaxLayer>

        <ParallaxLayer offset={2 + projectsFactor} speed={0}>
          <div className='h-screen bg-blue-500'>Hellow</div>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
