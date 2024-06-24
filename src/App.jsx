import React from 'react';
import Navbar from './components/Navbar';
import Headers from './components/Headers';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';


const App = () => {
  return (
    <div>
      <Navbar />
      <Headers />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
