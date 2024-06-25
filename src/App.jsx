import React from 'react';
import Navbar from './components/Navbar';
import Headers from './components/Headers';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Headers />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
