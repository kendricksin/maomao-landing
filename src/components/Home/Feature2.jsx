import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

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
      <span {...dataSource.img}>
        <img src={dataSource.img.children} width="100%" alt="img" />
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