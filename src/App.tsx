import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <div className='App'>
      <Parallax pages={2} style={{top:'0', left: '0'}} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className='animation_layer' id='background'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3+0.1}>
          <div className='animation_layer' id='mountains'></div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={0.3+0.3}>
          <div className='animation_layer' id='jungle1'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.35+0.3}>
          <div className='animation_layer' id='jungle2'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5+0.3}>
          <div className='animation_layer' id='jungle3'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.45+0.7}>
          <div className='animation_layer' id='jungle4'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.40}>
          <div className='animation_layer' id='man_on_mountain'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.35+1.5}>
          <div className='animation_layer' id='jungle5'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} speed={0}>
          <div className='animation_layer' id='land_logo'></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div className='dark_page' id='dark'></div>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
