import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { enquireScreen } from 'enquire-js';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// Components
import Nav0 from './components/Home/Nav0';
import Footer2 from './components/Home/Footer2';
import DevTools from './components/DevTools';

// Data Source
import { Nav00DataSource, Footer21DataSource } from './components/Home/data.source';

// Import styles
import './styles/index.less';
import './App.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Support for mobile resolutions with more granular breakpoints
    const mobileQuery = 'only screen and (max-width: 767px)';
    const tabletQuery = 'only screen and (min-width: 768px) and (max-width: 991px)';
    
    enquireScreen((mobile) => {
      setIsMobile(!!mobile);
    }, mobileQuery);
    
    // Optional: Additional handling for tablet
    enquireScreen((tablet) => {
      // You can add specific tablet behavior here if needed
      console.log('Tablet detected:', tablet);
    }, tabletQuery);
  }, []);
  
  return (
    <Router>
      <div className="templates-wrapper">
        <Nav0 
          id="Nav0_0"
          key="Nav0_0" 
          dataSource={Nav00DataSource} 
          isMobile={isMobile} 
        />
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/contact" element={<Contact isMobile={isMobile} />} />
          <Route path="/faq" element={<FAQ isMobile={isMobile} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer2 
          id="Footer2_1"
          key="Footer2_1" 
          dataSource={Footer21DataSource} 
          isMobile={isMobile} 
        />
        <DevTools />
      </div>
    </Router>
  );
};

export default App;