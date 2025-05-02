import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Item, SubMenu } = Menu;

const Nav0 = (props) => {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const location = useLocation();

  const phoneClick = () => {
    setPhoneOpen(!phoneOpen);
  };

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
  
  return (
    <TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...dataSource.wrapper}
      {...otherProps}
    >
      <div
        {...dataSource.page}
        className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
      >
        <TweenOne
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          {...dataSource.logo}
        >
          <Link to="/">
            <img width="100%" src={dataSource.logo.children} alt="img" />
          </Link>
        </TweenOne>
        
        {isMobile && (
          <div
            {...dataSource.mobileMenu}
            onClick={() => {
              phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
        )}
        
        <TweenOne
          {...dataSource.Menu}
          animation={
            isMobile
              ? {
                  opacity: phoneOpen ? 1 : 0,
                  height: phoneOpen ? 'auto' : 0,
                  duration: 300,
                  onComplete: (e) => {
                    if (phoneOpen) {
                      e.target.style.height = 'auto';
                    }
                  },
                  ease: 'easeInOutQuad',
                }
              : null
          }
        >
          <Menu
            mode={isMobile ? 'inline' : 'horizontal'}
            defaultSelectedKeys={getSelectedKeys()}
            selectedKeys={getSelectedKeys()}
            theme="dark"
          >
            {navChildren}
          </Menu>
        </TweenOne>
      </div>
    </TweenOne>
  );
};

export default Nav0;