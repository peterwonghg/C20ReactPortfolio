import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';

// import './App.css';

export default function App(){
  return (   
    <>

      <Router basename="/c20reactportfolio">        
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />                    
          </Routes>
                       
      </Router> 
    </>
  );
}
