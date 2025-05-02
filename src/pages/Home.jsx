import React, { useState, useEffect } from 'react';
import { enquireScreen } from 'enquire-js';

// Components
import Content11 from '../components/Home/Content11';
import Content1 from '../components/Home/Content1';
import Feature2 from '../components/Home/Feature2';
import Feature1 from '../components/Home/Feature1';
import Feature0 from '../components/Home/Feature0';
import Pricing0 from '../components/Home/Pricing0';

// Data Source
import {
  Content110DataSource,
  Content10DataSource,
  Feature20DataSource,
  Feature10DataSource,
  Feature00DataSource,
  Pricing00DataSource,
} from '../components/Home/data.source';

const Home = ({ isMobile: propIsMobile }) => {
  const [isMobile, setIsMobile] = useState(propIsMobile);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setIsMobile(propIsMobile);
  }, [propIsMobile]);

  useEffect(() => {
    // Handle mobile screen adaptation
    enquireScreen((b) => {
      setIsMobile(!!b);
    });
    
    // Simulate style loading if needed
    if (window.location.port) {
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  }, []);

  const children = [
    <Content11
      id="Content11_0"
      key="Content11_0"
      dataSource={Content110DataSource}
      isMobile={isMobile}
    />,
    <Content1
      id="Content1_0"
      key="Content1_0"
      dataSource={Content10DataSource}
      isMobile={isMobile}
    />,
    <Feature2
      id="Feature2_0"
      key="Feature2_0"
      dataSource={Feature20DataSource}
      isMobile={isMobile}
    />,
    <Feature1
      id="Feature1_0"
      key="Feature1_0"
      dataSource={Feature10DataSource}
      isMobile={isMobile}
    />,
    <Feature0
      id="Feature0_0"
      key="Feature0_0"
      dataSource={Feature00DataSource}
      isMobile={isMobile}
    />,
    <Pricing0
      id="Pricing0_0"
      key="Pricing0_0"
      dataSource={Pricing00DataSource}
      isMobile={isMobile}
    />,
  ];

  return (
    <div className="templates-wrapper">
      {show && children}
    </div>
  );
};

export default Home;