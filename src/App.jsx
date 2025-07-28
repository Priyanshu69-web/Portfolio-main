import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Testimonial from './sections/Testimonial'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />


    </div>
  )
}

export default App
