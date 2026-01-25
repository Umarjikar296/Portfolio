import Navbar from './components/Navbar'
import Home from './section/Home'
import About from './section/About'
import Skills from './section/Skills'
// import Projects from './section/Projects'
import Experience from './section/Experience'
// import Testimonials from './section/Testimonials'
import Contact from './section/Contact'
import Footer from './section/Footer'
// import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'
import { useState } from 'react'
import IntroAnimation from './components/IntroAnimation'

export default function App() {

  const [introDone, setIntroDone] = useState(false);

  return (

    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className='relative, gradient text-white'>
          <CustomCursor />
          {/* <ParticlesBackground /> */}
          <Navbar />
          <Home />
          <About />
          <Skills />
          {/* <Projects /> */}
          <Experience />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

