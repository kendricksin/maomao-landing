import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Link } from 'react-router-dom';
import { isImg } from './utils';

const Footer2 = (props) => {
  const { dataSource, ...otherProps } = props;
  delete otherProps.isMobile;
  
  return (
    <div {...otherProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack}>
        <TweenOne {...dataSource.links}>
          {dataSource.links.children.map((item, i) => {
            return (
              <a key={i.toString()} {...item} target="_blank" rel="noopener noreferrer">
                <img src={item.children} height="100%" alt="social-icon" />
              </a>
            );
          })}
        </TweenOne>
        <TweenOne
          animation={{ x: '+=30', opacity: 0, type: 'from' }}
          key="copyright"
          {...dataSource.copyright}
        >
          {dataSource.copyright.children.map((item, i) => {
            return item.name === 'group' ? (
              <span key={i.toString()} {...item}>
                <Link to="/faq">Terms & Conditions</Link>
              </span>
            ) : (
              React.createElement(
                item.name.indexOf('title') === 0 ? 'h1' : 'div',
                { key: i.toString(), ...item },
                typeof item.children === 'string' && item.children.match(isImg)
                  ? React.createElement('img', {
                      src: item.children,
                      alt: 'img',
                    })
                  : item.children
              )
            );
          })}
        </TweenOne>
      </OverPack>
    </div>
  );
};

export default Footer2;