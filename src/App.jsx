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
      <section id="home" className="screen-max-width">
        <Headers />
      </section>
      <section id="about" className="screen-max-width">
        <About />
      </section>
      <section id="skills" className="screen-max-width">
        <Skills />
      </section>
      <section id="projects" className="screen-max-width">
        <Projects />
      </section>
      <section id="resume" className="screen-max-width">
        <Resume />
      </section>
      <section id="contact" className="screen-max-width">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
