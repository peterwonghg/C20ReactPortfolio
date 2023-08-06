import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Resume from './pages/resume'
import HeroSection from './components/HeroSection';

// import './App.css';

export default function App(){
  return (   
    <>
      <Router>        
        <NavBar />
          <Routes>
            <Route path="/" element={<About />} />            
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />                    
          </Routes>
        <HeroSection />                           
      </Router> 
    </>
  );
}
