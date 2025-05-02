import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Home from './Home';
import Nav0 from './Home/Nav0';
import Footer2 from './Home/Footer2';
import Contact from './pages/Contact';  // We'll create these separately
import FAQ from './pages/FAQ';  // We'll create these separately

import {
  Nav00DataSource,
  Footer21DataSource,
} from './Home/data.source.js';

import './Home/less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  
  componentDidMount() {
    // Support for mobile resolutions
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  
  render() {
    return (
      <Router>
        <div className="templates-wrapper">
          <Nav0 
            id="Nav0_0"
            key="Nav0_0" 
            dataSource={Nav00DataSource} 
            isMobile={this.state.isMobile} 
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer2 
            id="Footer2_1"
            key="Footer2_1" 
            dataSource={Footer21DataSource} 
            isMobile={this.state.isMobile} 
          />
        </div>
      </Router>
    );
  }
}

export default App;