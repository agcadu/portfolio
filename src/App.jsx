// App.jsx
import React from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;

