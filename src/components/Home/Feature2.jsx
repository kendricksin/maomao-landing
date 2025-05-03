import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

/**
 * Feature2 Component
 * 
 * Right image (or left on mobile), left text feature component
 * Enhanced to support custom Image components
 */
function Feature2(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;

  // Enhanced animation configuration for different screen sizes
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile animation values
  const mobileTweenValues = {
    y: '+=20', // Smaller values on mobile
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
    duration: 450, // Slightly faster on mobile
  };

  // Desktop animation values
  const desktopTweenValues = {
    x: '+=30',
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
    duration: 600,
  };

  const animType = {
    queue: isMobile ? 'bottom' : 'left',
    one: prefersReducedMotion ? null : (isMobile ? mobileTweenValues : desktopTweenValues),
  };

  // Enhanced image rendering that handles both string paths and React elements
  const renderImage = () => {
    const { img } = dataSource;
    
    // If img.children is a React element (our Image component), use it directly
    if (React.isValidElement(img.children)) {
      return img.children;
    }
    
    // If img.children is a string (legacy path format), render as a regular img tag
    if (typeof img.children === 'string') {
      return <img src={img.children} width="100%" alt="img" />;
    }
    
    // Fallback case - shouldn't happen if data source is properly configured
    console.warn('Unknown image format in Feature2');
    return null;
  };

  // Image column component - reused for both mobile and desktop
  const img = (
    <TweenOne
      key="img"
      animation={animType.one}
      resetStyle
      {...dataSource.imgWrapper}
      component={Col}
      componentProps={{
        xs: 24,
        sm: 24,
        md: 12,
        lg: 10,
        xl: 10,
        xxl: 10,
      }}
    >
      <span {...dataSource.img} className="feature2-image-container">
        {renderImage()}
      </span>
    </TweenOne>
  );

  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        {isMobile && img}
        <QueueAnim
          type={animType.queue}
          key="text"
          leaveReverse
          ease={['easeOutCubic', 'easeInCubic']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            xs: 24,
            sm: 24,
            md: 12,
            lg: 14,
            xl: 14,
            xxl: 14,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </QueueAnim>
        {!isMobile && img}
      </OverPack>
    </div>
  );
}

export default Feature2;