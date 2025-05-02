import React, { useState, useEffect } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Item } = Menu;

const Nav0 = (props) => {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(['home']);

  // Update selected keys when location changes
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/') setSelectedKeys(['home']);
    else if (pathname === '/contact') setSelectedKeys(['contact']);
    else if (pathname === '/faq') setSelectedKeys(['faq']);
    else setSelectedKeys(['home']);
  }, [location]);

  const phoneClick = () => {
    setPhoneOpen(!phoneOpen);
  };
  
  const { dataSource, isMobile, ...otherProps } = props;

  return (
    <header className="header0 home-page-wrapper" {...otherProps}>
      <div className={`home-page${phoneOpen ? ' open' : ''}`}>
        {/* Logo */}
        <div className="header0-logo">
          <Link to="/">
            <img width="100%" src={dataSource.logo.children} alt="logo" />
          </Link>
        </div>
        
        {/* Mobile menu hamburger icon */}
        {isMobile && (
          <div
            className="header0-mobile-menu"
            onClick={phoneClick}
          >
            <em />
            <em />
            <em />
          </div>
        )}
        
        {/* Desktop Navigation Items */}
        {!isMobile && (
          <div className="header0-menu">
            <Menu
              mode="horizontal"
              selectedKeys={selectedKeys}
              theme="dark"
            >
              <Item key="home">
                <Link to="/">Home</Link>
              </Item>
              <Item key="contact">
                <Link to="/contact">Contact Us</Link>
              </Item>
              <Item key="faq">
                <Link to="/faq">FAQ</Link>
              </Item>
            </Menu>
          </div>
        )}
        
        {/* Mobile Navigation Items */}
        {isMobile && (
          <div className={`header0-menu${phoneOpen ? ' open' : ''}`}>
            <Menu
              mode="inline"
              selectedKeys={selectedKeys}
              theme="dark"
            >
              <Item key="home">
                <Link to="/">Home</Link>
              </Item>
              <Item key="contact">
                <Link to="/contact">Contact Us</Link>
              </Item>
              <Item key="faq">
                <Link to="/faq">FAQ</Link>
              </Item>
            </Menu>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav0;