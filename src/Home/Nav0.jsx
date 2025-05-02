import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { getChildrenToRender } from './utils';

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  getSelectedKeys = () => {
    // Get current path
    const pathname = window.location.pathname;
    
    if (pathname === '/') return ['home'];
    if (pathname === '/contact') return ['contact'];
    if (pathname === '/faq') return ['faq'];
    
    return ['home'];
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = [
      {
        name: 'home',
        className: 'header0-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                <span>
                  <p>Home</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'contact',
        className: 'header0-item',
        children: {
          href: '/contact',
          children: [
            {
              children: (
                <span>
                  <p>Contact Us</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'faq',
        className: 'header0-item',
        children: {
          href: '/faq',
          children: [
            {
              children: (
                <span>
                  <p>FAQ</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      }
    ];
    
    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header0-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header0-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <Link to={childItem.href} {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </Link>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <Link to={a.href} {...a} className={`header0-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </Link>
        </Item>
      );
    });
    
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
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
                this.phoneClick();
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
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={this.getSelectedKeys()}
              theme="dark"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;