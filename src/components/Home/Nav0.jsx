import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Item } = Menu;

const Nav0 = (props) => {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const location = useLocation();

  const getSelectedKeys = () => {
    // Get current path
    const pathname = location.pathname;
    
    if (pathname === '/') return ['home'];
    if (pathname === '/contact') return ['contact'];
    if (pathname === '/faq') return ['faq'];
    
    return ['home'];
  };

  const { dataSource, isMobile, ...otherProps } = props;
  const navData = dataSource.Menu.children;

  // Simpler approach to render menu items
  const navChildren = navData.map((item) => {
    const { children: a, subItem, ...itemProps } = item;
    
    return (
      <Item key={item.name} {...itemProps}>
        <Link to={a.href} className={`header0-item-block ${a.className || ''}`.trim()}>
          {item.name === 'home' ? 'Home' : 
           item.name === 'contact' ? 'Contact Us' : 
           item.name === 'faq' ? 'FAQ' : item.name}
        </Link>
      </Item>
    );
  });
  
  // Custom styles for the menu to ensure it's always visible
  const menuStyle = {
    listStyle: 'none'
  };
  
  // Responsive menu container style
  const menuContainerStyle = {
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'flex-end',
    width: '100%',
    marginLeft: isMobile ? 0 : 'auto'
  };
  
  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...dataSource.wrapper}
      {...otherProps}
    >
      <div
        {...dataSource.page}
        className={`${dataSource.page.className}`}
      >
        <TweenOne
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          {...dataSource.logo}
        >
          <Link to="/">
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </Link>
        </TweenOne>
        
        {/* Always show the menu, just adapt its style */}
        <div style={menuContainerStyle}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={getSelectedKeys()}
            selectedKeys={getSelectedKeys()}
            theme="dark"
            style={menuStyle}
          >
            {navChildren}
          </Menu>
        </div>
      </div>
    </TweenOne>
  );
};

export default Nav0;