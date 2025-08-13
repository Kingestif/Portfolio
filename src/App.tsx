import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import About from './components/About'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      
      <Parallax pages={3} style={{top:'0', left: '0'}} className="animation">
        
        <ParallaxLayer offset={0} speed={0.1}>
          <div className='animation_layer' id='background'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.15}>
          <div className='animation_layer' id='mountains'></div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={0} speed={-0.5}>
          <div className='animation_layer' id='logoland'></div>
        </ParallaxLayer> */}
        
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

        <ParallaxLayer offset={2} speed={0}>
          <Projects/>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
