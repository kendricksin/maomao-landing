import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { enquireScreen } from 'enquire-js';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// Import these components once you've migrated them
import Nav0 from './components/Home/Nav0';
import Footer2 from './components/Home/Footer2';

// Import data source once created
import { Nav00DataSource, Footer21DataSource } from './components/Home/data.source';

// Import styles once created
import './styles/index.less';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Support for mobile resolutions
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
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
      </div>
    </Router>
  );
};

export default App;