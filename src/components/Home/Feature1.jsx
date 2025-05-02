import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

function Feature1(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Enhanced animation configuration
  const mobileTweenValues = {
    y: '+=20',
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
    duration: 450,
  };

  const desktopTweenValues = {
    x: '-=30',
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
    duration: 600,
  };

  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: prefersReducedMotion ? null : (isMobile ? mobileTweenValues : desktopTweenValues),
  };

  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack} component={Row}>
        <TweenOne
          key="img"
          animation={animType.one}
          resetStyle
          {...dataSource.imgWrapper}
          component={Col}
          componentProps={{
            xs: 24,
            sm: 24,
            md: 10,
            lg: 10,
            xl: 10,
            xxl: 8,
          }}
        >
          <span {...dataSource.img}>
            <img src={dataSource.img.children} width="100%" alt="img" />
          </span>
        </TweenOne>
        <QueueAnim
          key="text"
          type={animType.queue}
          leaveReverse
          ease={['easeOutQuad', 'easeInQuad']}
          {...dataSource.textWrapper}
          component={Col}
          componentProps={{
            xs: 24,
            sm: 24,
            md: 14,
            lg: 14,
            xl: 14,
            xxl: 16,
          }}
        >
          <h2 key="h1" {...dataSource.title}>
            {dataSource.title.children}
          </h2>
          <div key="p" {...dataSource.content}>
            {dataSource.content.children}
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
}

export default Feature1;