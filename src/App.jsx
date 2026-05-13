import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative min-h-screen font-sans selection:bg-dark-accent/30 selection:text-dark-text light:selection:bg-light-accent/30 light:selection:text-light-text overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

  <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="absolute bottom-[-20%] left-[25%] w-[550px] h-[550px] bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>

</div>
      
      <main className="relative z-10 bg-transparent">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
