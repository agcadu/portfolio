import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-GCSJTBWKF7');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;


